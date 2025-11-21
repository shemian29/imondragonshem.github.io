import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SuperconductingCircuits() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/research" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Superconducting Circuits</h1>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src="/assets/superconducting.png"
                        alt="Superconducting Circuits"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        Superconducting circuits are a leading platform for quantum information processing. Our group focuses on the theoretical design and analysis of novel circuit architectures and control protocols.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Floquet-Engineered Qubits</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We investigate how periodic driving (Floquet engineering) can be used to tailor the properties of superconducting qubits. By dynamically modulating circuit parameters, we can suppress noise, enhance coherence times, and create effective Hamiltonians with desirable properties that are not accessible in static systems.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Cross-Talk and Resonant Transitions</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                As quantum processors scale up, unwanted interactions (cross-talk) between qubits become a major source of error. We develop theoretical models to quantify and mitigate these effects, particularly focusing on resonant transitions and frequency crowding in multi-qubit chips.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Josephson Junction Arrays</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Arrays of Josephson junctions offer a rich playground for simulating many-body physics. We study the phase diagrams and dynamics of these arrays, exploring phenomena such as quantum phase transitions, localization, and the emergence of novel quantum states in high-impedance environments.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
