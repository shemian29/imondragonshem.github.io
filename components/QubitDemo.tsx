'use client';

import { useState, useEffect, useRef } from 'react';

export default function QubitDemo() {
    const [theta, setTheta] = useState(0);
    const [phi, setPhi] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const radius = 100;

        // Draw Bloch Sphere circle
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#cbd5e1'; // slate-300
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw axes
        ctx.beginPath();
        ctx.moveTo(cx, cy - radius - 20);
        ctx.lineTo(cx, cy + radius + 20);
        ctx.moveTo(cx - radius - 20, cy);
        ctx.lineTo(cx + radius + 20, cy);
        ctx.strokeStyle = '#94a3b8'; // slate-400
        ctx.lineWidth = 1;
        ctx.stroke();

        // Calculate vector tip
        // Simple 2D projection: z is up (-y), x is right (+x)
        // We'll visualize the projection on the X-Z plane for simplicity in 2D, 
        // or pseudo-3D. Let's do a simple circle projection where theta moves from |0> (up) to |1> (down).
        // x = r * sin(theta) * cos(phi)
        // y = r * sin(theta) * sin(phi)
        // z = r * cos(theta)

        // Visual mapping:
        // Screen Y = -Z (since screen Y is down, Z is up)
        // Screen X = X (simplified)

        const tipX = cx + radius * Math.sin(theta) * Math.cos(phi);
        const tipY = cy - radius * Math.cos(theta); // Up is 0 theta

        // Draw Vector
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(tipX, tipY);
        ctx.strokeStyle = '#3b82f6'; // blue-500
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw Tip
        ctx.beginPath();
        ctx.arc(tipX, tipY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#3b82f6';
        ctx.fill();

        // Labels
        ctx.fillStyle = '#0f172a';
        ctx.font = '16px sans-serif';
        ctx.fillText('|0⟩', cx - 10, cy - radius - 30);
        ctx.fillText('|1⟩', cx - 10, cy + radius + 40);

    }, [theta, phi]);

    return (
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <canvas ref={canvasRef} width={300} height={300} />
            </div>

            <div className="space-y-8 w-full max-w-md">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Theta (θ): {(theta / Math.PI).toFixed(2)}π
                    </label>
                    <input
                        type="range"
                        min="0"
                        max={Math.PI}
                        step="0.01"
                        value={theta}
                        onChange={(e) => setTheta(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phi (φ): {(phi / Math.PI).toFixed(2)}π
                    </label>
                    <input
                        type="range"
                        min="0"
                        max={2 * Math.PI}
                        step="0.01"
                        value={phi}
                        onChange={(e) => setPhi(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <p>State |ψ⟩ = cos(θ/2)|0⟩ + e^iφ sin(θ/2)|1⟩</p>
                    <p className="mt-2 text-gray-500">
                        α = {Math.cos(theta / 2).toFixed(3)}
                    </p>
                    <p className="text-gray-500">
                        β = {Math.sin(theta / 2).toFixed(3)} (phase {phi.toFixed(2)})
                    </p>
                </div>
            </div>
        </div>
    );
}
