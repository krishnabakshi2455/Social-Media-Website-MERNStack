import { useEffect } from "react";

const useCanvasCursor = () => {
    let ctx: (CanvasRenderingContext2D & { running?: boolean; frame?: number }) | null = null;
    let f: Oscillator | null = null;
    let e = 0;
    const pos = { x: 0, y: 0 };
    let lines: Line[] = [];
    const E = {
        debug: true,
        friction: 0.5,
        trails: 20,
        size: 50,
        dampening: 0.25,
        tension: 0.98,
    };

    class Node {
        x: number;
        y: number;
        vx: number;
        vy: number;

        constructor() {
            this.x = 0;
            this.y = 0;
            this.vx = 0;
            this.vy = 0;
        }
    }

    class Oscillator {
        phase: number;
        offset: number;
        frequency: number;
        amplitude: number;

        constructor(options: { phase?: number; offset?: number; frequency?: number; amplitude?: number }) {
            this.phase = options.phase || 0;
            this.offset = options.offset || 0;
            this.frequency = options.frequency || 0.001;
            this.amplitude = options.amplitude || 1;
        }

        update() {
            this.phase += this.frequency;
            e = this.offset + Math.sin(this.phase) * this.amplitude;
            return e;
        }

        value() {
            return e;
        }
    }

    class Line {
        spring: number;
        friction: number;
        nodes: Node[];

        constructor(options: { spring: number }) {
            this.spring = options.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            for (let i = 0; i < E.size; i++) {
                const node = new Node();
                node.x = pos.x;
                node.y = pos.y;
                this.nodes.push(node);
            }
        }

        update() {
            let e = this.spring;
            const firstNode = this.nodes[0];
            firstNode.vx += (pos.x - firstNode.x) * e;
            firstNode.vy += (pos.y - firstNode.y) * e;

            for (let i = 1; i < this.nodes.length; i++) {
                const prevNode = this.nodes[i - 1];
                const currentNode = this.nodes[i];
                currentNode.vx += (prevNode.x - currentNode.x) * e;
                currentNode.vy += (prevNode.y - currentNode.y) * e;
                currentNode.vx += prevNode.vx * E.dampening;
                currentNode.vy += prevNode.vy * E.dampening;
                currentNode.vx *= this.friction;
                currentNode.vy *= this.friction;
                currentNode.x += currentNode.vx;
                currentNode.y += currentNode.vy;
                e *= E.tension;
            }
        }

        draw() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

            for (let i = 1; i < this.nodes.length - 2; i++) {
                const current = this.nodes[i];
                const next = this.nodes[i + 1];
                const midX = 0.5 * (current.x + next.x);
                const midY = 0.5 * (current.y + next.y);
                ctx.quadraticCurveTo(current.x, current.y, midX, midY);
            }

            const secondLast = this.nodes[this.nodes.length - 2];
            const last = this.nodes[this.nodes.length - 1];
            ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
            ctx.stroke();
            ctx.closePath();
        }
    }

    const resizeCanvas = () => {
        if (!ctx) return;
        const canvas = ctx.canvas;
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight;
    };

    const render = () => {
        if (!ctx || !ctx.running) return;

        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = `hsla(${Math.round(f!.update())},50%,50%,0.2)`;
        ctx.lineWidth = 3;

        lines.forEach((line) => {
            line.update();
            line.draw();
        });

        ctx.frame!++;
        window.requestAnimationFrame(render);
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
        const isTouchEvent = (event: MouseEvent | TouchEvent): event is TouchEvent => "touches" in event;
        if (isTouchEvent(e)) {
            pos.x = e.touches[0].pageX;
            pos.y = e.touches[0].pageY;
        } else {
            pos.x = e.clientX;
            pos.y = e.clientY;
        }

        if (!lines.length) {
            for (let i = 0; i < E.trails; i++) {
                lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
            }
        }
    };

    const renderCanvas = () => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (!canvas) return;
        ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.running = true;
        ctx.frame = 1;

        f = new Oscillator({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 85,
            frequency: 0.0015,
            offset: 285,
        });

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchmove", onMouseMove);
        document.body.addEventListener("orientationchange", resizeCanvas);
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();
    };

    useEffect(() => {
        renderCanvas();

        return () => {
            if (ctx) ctx.running = false;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("touchmove", onMouseMove);
            document.body.removeEventListener("orientationchange", resizeCanvas);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);
};

export default useCanvasCursor;
