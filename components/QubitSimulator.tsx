'use client';

import { useState, useMemo } from 'react';
import { Sliders } from 'lucide-react';

type CircuitType = 'transmon' | 'fluxonium' | 'cos2phi';

interface QubitState {
  theta: number;
  phi: number;
}

export default function QubitSimulator() {
  const [circuitType, setCircuitType] = useState<CircuitType>('transmon');
  const [selectedState, setSelectedState] = useState(0);
  const [qubitState, setQubitState] = useState<QubitState>({ theta: Math.PI / 4, phi: 0 });
  
  const [transmonParams, setTransmonParams] = useState({ EJ: 20, EC: 0.3, ng: 0 });
  const [fluxoniumParams, setFluxoniumParams] = useState({ EJ: 8.9, EC: 2.5, EL: 0.5, flux: 0.5 });
  const [cos2phiParams, setCos2phiParams] = useState({ EJ1: 10, EJ2: 10, EC: 1, flux: 0.5 });

  // More accurate energy level calculations
  const energyLevels = useMemo(() => {
    const levels: number[] = [];
    
    if (circuitType === 'transmon') {
      const { EJ, EC } = transmonParams;
      const omega = Math.sqrt(8 * EJ * EC);
      const alpha = -EC; // anharmonicity
      for (let n = 0; n < 6; n++) {
        levels.push(omega * n + alpha * n * (n - 1) / 2);
      }
    } else if (circuitType === 'fluxonium') {
      const { EJ, EC, EL, flux } = fluxoniumParams;
      const EJ_eff = EJ * Math.abs(Math.cos(Math.PI * flux));
      // Fluxonium has different regime - more complex spectrum
      for (let n = 0; n < 6; n++) {
        const plasmon = Math.sqrt(8 * EJ_eff * EC) * (n + 0.5);
        const inductive = Math.sqrt(2 * EL * EC) * n;
        levels.push(plasmon + inductive * 0.3);
      }
    } else { // cos2phi
      const { EJ1, EJ2, EC, flux } = cos2phiParams;
      const EJ_sum = EJ1 + EJ2;
      const d = (EJ1 - EJ2) / (EJ1 + EJ2);
      const EJ_eff = EJ_sum * Math.sqrt(Math.cos(Math.PI * flux) ** 2 + d ** 2 * Math.sin(Math.PI * flux) ** 2);
      const omega = Math.sqrt(8 * EJ_eff * EC);
      const alpha = -EC;
      for (let n = 0; n < 6; n++) {
        levels.push(omega * n + alpha * n * (n - 1) / 2);
      }
    }
    
    return levels;
  }, [circuitType, transmonParams, fluxoniumParams, cos2phiParams]);

  const occupationProbs = useMemo(() => {
    const { theta } = qubitState;
    const prob0 = Math.cos(theta / 2) ** 2;
    const prob1 = Math.sin(theta / 2) ** 2;
    return { prob0, prob1 };
  }, [qubitState]);

  const currentParams = circuitType === 'transmon' ? transmonParams :
                       circuitType === 'fluxonium' ? fluxoniumParams : cos2phiParams;

  const updateParam = (key: string, value: number) => {
    if (circuitType === 'transmon') {
      setTransmonParams(prev => ({ ...prev, [key]: value }));
    } else if (circuitType === 'fluxonium') {
      setFluxoniumParams(prev => ({ ...prev, [key]: value }));
    } else {
      setCos2phiParams(prev => ({ ...prev, [key]: value }));
    }
  };

  const renderCircuitDiagram = () => {
    if (circuitType === 'transmon') {
      return (
        <svg viewBox="0 0 300 150" className="w-full h-full">
          <text x="150" y="20" fontSize="14" fill="currentColor" textAnchor="middle" fontWeight="bold">Transmon Circuit</text>
          {/* Ground lines */}
          <line x1="50" y1="120" x2="250" y2="120" stroke="currentColor" strokeWidth="2" />
          <line x1="40" y1="125" x2="260" y2="125" stroke="currentColor" strokeWidth="1" />
          
          {/* Capacitor (left) */}
          <line x1="80" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="90" y1="50" x2="90" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="85" y1="40" x2="85" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="85" y1="80" x2="85" y2="120" stroke="currentColor" strokeWidth="2" />
          <text x="85" y="100" fontSize="12" fill="currentColor" textAnchor="middle">C</text>
          
          {/* Josephson Junction (center) */}
          <line x1="150" y1="40" x2="150" y2="60" stroke="currentColor" strokeWidth="2" />
          <line x1="140" y1="65" x2="160" y2="75" stroke="currentColor" strokeWidth="3" />
          <line x1="140" y1="75" x2="160" y2="65" stroke="currentColor" strokeWidth="3" />
          <line x1="150" y1="80" x2="150" y2="120" stroke="currentColor" strokeWidth="2" />
          <text x="150" y="100" fontSize="12" fill="currentColor" textAnchor="middle">JJ</text>
          
          {/* Top connection */}
          <line x1="85" y1="40" x2="150" y2="40" stroke="currentColor" strokeWidth="2" />
          <circle cx="150" cy="40" r="3" fill="currentColor" />
        </svg>
      );
    } else if (circuitType === 'fluxonium') {
      return (
        <svg viewBox="0 0 300 150" className="w-full h-full">
          <text x="150" y="20" fontSize="14" fill="currentColor" textAnchor="middle" fontWeight="bold">Fluxonium Circuit</text>
          {/* Ground */}
          <line x1="50" y1="120" x2="250" y2="120" stroke="currentColor" strokeWidth="2" />
          
          {/* Capacitor */}
          <line x1="80" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="90" y1="50" x2="90" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="85" y1="40" x2="85" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="85" y1="80" x2="85" y2="120" stroke="currentColor" strokeWidth="2" />
          <text x="85" y="100" fontSize="10" fill="currentColor" textAnchor="middle">C</text>
          
          {/* Josephson Junction */}
          <line x1="150" y1="40" x2="150" y2="60" stroke="currentColor" strokeWidth="2" />
          <line x1="140" y1="65" x2="160" y2="75" stroke="currentColor" strokeWidth="3" />
          <line x1="140" y1="75" x2="160" y2="65" stroke="currentColor" strokeWidth="3" />
          <line x1="150" y1="80" x2="150" y2="120" stroke="currentColor" strokeWidth="2" />
          <text x="150" y="100" fontSize="10" fill="currentColor" textAnchor="middle">JJ</text>
          
          {/* Inductor (right) */}
          <path d="M 215 40 Q 215 50, 220 55 T 220 65 T 220 75 T 220 85" 
                stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="220" y1="40" x2="220" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="220" y1="85" x2="220" y2="120" stroke="currentColor" strokeWidth="2" />
          <text x="220" y="100" fontSize="10" fill="currentColor" textAnchor="middle">L</text>
          
          {/* Top connections */}
          <line x1="85" y1="40" x2="220" y2="40" stroke="currentColor" strokeWidth="2" />
          <circle cx="150" cy="40" r="3" fill="currentColor" />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 300 150" className="w-full h-full">
          <text x="150" y="20" fontSize="14" fill="currentColor" textAnchor="middle" fontWeight="bold">Cos(2φ) Circuit</text>
          {/* Ground */}
          <line x1="50" y1="120" x2="250" y2="120" stroke="currentColor" strokeWidth="2" />
          
          {/* Capacitor */}
          <line x1="80" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="90" y1="50" x2="90" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="85" y1="40" x2="85" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="85" y1="80" x2="85" y2="120" stroke="currentColor" strokeWidth="2" />
          <text x="85" y="100" fontSize="10" fill="currentColor" textAnchor="middle">C</text>
          
          {/* Two JJs in parallel */}
          {/* JJ1 (top branch) */}
          <line x1="150" y1="40" x2="150" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="140" y1="55" x2="160" y2="65" stroke="currentColor" strokeWidth="3" />
          <line x1="140" y1="65" x2="160" y2="55" stroke="currentColor" strokeWidth="3" />
          <line x1="150" y1="70" x2="150" y2="80" stroke="currentColor" strokeWidth="2" />
          <text x="130" y="60" fontSize="10" fill="currentColor">JJ1</text>
          
          {/* JJ2 (bottom branch) */}
          <line x1="190" y1="40" x2="190" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="180" y1="55" x2="200" y2="65" stroke="currentColor" strokeWidth="3" />
          <line x1="180" y1="65" x2="200" y2="55" stroke="currentColor" strokeWidth="3" />
          <line x1="190" y1="70" x2="190" y2="80" stroke="currentColor" strokeWidth="2" />
          <text x="200" y="60" fontSize="10" fill="currentColor">JJ2</text>
          
          {/* Connections */}
          <line x1="85" y1="40" x2="190" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="150" y1="80" x2="190" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="170" y1="80" x2="170" y2="120" stroke="currentColor" strokeWidth="2" />
          <circle cx="150" cy="40" r="3" fill="currentColor" />
          <circle cx="190" cy="40" r="3" fill="currentColor" />
          <circle cx="170" cy="80" r="3" fill="currentColor" />
        </svg>
      );
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sliders className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-primary dark:text-white">
              Interactive Quantum Circuit Simulator
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Explore superconducting qubits by adjusting circuit parameters in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Circuit Selection & Diagram */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-200">Select Circuit Type</h3>
              <div className="grid grid-cols-3 gap-2">
                {(['transmon', 'fluxonium', 'cos2phi'] as CircuitType[]).map(type => (
                  <button
                    key={type}
                    onClick={() => setCircuitType(type)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      circuitType === type
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type === 'cos2phi' ? 'Cos(2φ)' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-200">Circuit Diagram</h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center">
                {renderCircuitDiagram()}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-200">Circuit Parameters</h3>
              <div className="space-y-3">
                {Object.entries(currentParams).map(([key, value]) => (
                  <div key={key}>
                    <label className="text-xs text-gray-600 dark:text-gray-400 flex justify-between">
                      <span>{key}</span>
                      <span className="font-mono">{value.toFixed(2)}</span>
                    </label>
                    <input
                      type="range"
                      min={key === 'flux' || key === 'ng' ? 0 : 0.1}
                      max={key === 'flux' || key === 'ng' ? 1 : 30}
                      step={key === 'flux' || key === 'ng' ? 0.01 : 0.1}
                      value={value}
                      onChange={(e) => updateParam(key, parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Energy Spectrum */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
            <h3 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-200">Energy Spectrum</h3>
            <div className="relative h-[500px] bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <svg viewBox="0 0 300 400" className="w-full h-full">
                <line x1="30" y1="10" x2="30" y2="390" stroke="currentColor" strokeWidth="2" />
                <text x="15" y="15" fontSize="12" fill="currentColor">E</text>
                <text x="15" y="395" fontSize="10" fill="currentColor">0</text>
                
                {energyLevels.map((energy, i) => {
                  const y = 380 - (energy / Math.max(...energyLevels)) * 360;
                  const isSelected = i === selectedState;
                  return (
                    <g key={i} onClick={() => setSelectedState(i)} className="cursor-pointer">
                      <line 
                        x1="40" 
                        y1={y} 
                        x2="280" 
                        y2={y} 
                        stroke={isSelected ? "#3b82f6" : "currentColor"} 
                        strokeWidth={isSelected ? "3" : "2"}
                        strokeDasharray={isSelected ? "none" : "5,5"}
                      />
                      <text x="285" y={y + 4} fontSize="11" fill="currentColor">|{i}⟩</text>
                      
                      {i === 0 && (
                        <circle 
                          cx="60" 
                          cy={y} 
                          r={Math.sqrt(occupationProbs.prob0) * 15} 
                          fill="#10b981" 
                          opacity="0.7"
                        />
                      )}
                      {i === 1 && (
                        <circle 
                          cx="60" 
                          cy={y} 
                          r={Math.sqrt(occupationProbs.prob1) * 15} 
                          fill="#ef4444" 
                          opacity="0.7"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Click to select a level. Green/red dots show P(|0⟩) and P(|1⟩).
              </p>
            </div>
          </div>

          {/* Right: Bloch Sphere */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-200">Bloch Sphere</h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-80 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Sphere outline */}
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                  <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                  
                  {/* Axes */}
                  <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  <line x1="30" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  
                  {/* Labels */}
                  <text x="105" y="25" fontSize="14" fill="currentColor" fontWeight="bold">|0⟩</text>
                  <text x="105" y="180" fontSize="14" fill="currentColor" fontWeight="bold">|1⟩</text>
                  <text x="175" y="105" fontSize="12" fill="currentColor">|+⟩</text>
                  <text x="15" y="105" fontSize="12" fill="currentColor">|-⟩</text>
                  
                  {/* State vector */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                    </marker>
                  </defs>
                  
                  {/* Calculate 3D projection */}
                  {(() => {
                    const { theta, phi } = qubitState;
                    const x = 100 + 65 * Math.sin(theta) * Math.cos(phi);
                    const y = 100 - 65 * Math.cos(theta);
                    
                    return (
                      <>
                        <line 
                          x1="100" 
                          y1="100" 
                          x2={x} 
                          y2={y} 
                          stroke="#3b82f6" 
                          strokeWidth="3" 
                          markerEnd="url(#arrowhead)"
                        />
                        <circle cx={x} cy={y} r="4" fill="#3b82f6" />
                      </>
                    );
                  })()}
                  
                  {/* Probability display */}
                  <text x="10" y="190" fontSize="11" fill="#10b981" fontWeight="bold">
                    P(|0⟩) = {(occupationProbs.prob0 * 100).toFixed(1)}%
                  </text>
                  <text x="110" y="190" fontSize="11" fill="#ef4444" fontWeight="bold">
                    P(|1⟩) = {(occupationProbs.prob1 * 100).toFixed(1)}%
                  </text>
                </svg>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <h3 className="text-sm font-bold mb-3 text-gray-700 dark:text-gray-200">Quantum State Control</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600 dark:text-gray-400 flex justify-between">
                    <span>θ (polar angle)</span>
                    <span className="font-mono">{(qubitState.theta * 180 / Math.PI).toFixed(0)}°</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={Math.PI}
                    step={0.01}
                    value={qubitState.theta}
                    onChange={(e) => setQubitState(prev => ({ ...prev, theta: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 dark:text-gray-400 flex justify-between">
                    <span>φ (azimuthal angle)</span>
                    <span className="font-mono">{(qubitState.phi * 180 / Math.PI).toFixed(0)}°</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={2 * Math.PI}
                    step={0.01}
                    value={qubitState.phi}
                    onChange={(e) => setQubitState(prev => ({ ...prev, phi: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
