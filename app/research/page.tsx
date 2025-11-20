import { Cpu, Waves, Box } from 'lucide-react';

export default function Research() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-8">Research Areas</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-16">
                    Our group investigates the fundamental properties of quantum matter and leverages them for quantum information processing.
                </p>

                <div className="space-y-20">
                    {/* Area 1 */}
                    <section id="superconducting-circuits" className="scroll-mt-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                                <Cpu className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Superconducting Circuits</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            <p className="mb-4">
                                Superconducting circuits are one of the leading platforms for quantum computing. We focus on the theoretical design and analysis of new qubit modalities that are protected against noise.
                            </p>
                            <p>
                                Our work involves simulating Hamiltonian dynamics of Josephson junction arrays, optimizing circuit parameters for high coherence, and developing control protocols for high-fidelity gates.
                            </p>
                        </div>
                    </section>

                    {/* Area 2 */}
                    <section id="non-equilibrium" className="scroll-mt-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                                <Waves className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Non-Equilibrium Quantum Systems</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            <p className="mb-4">
                                We explore exotic phenomena that emerge in quantum systems driven out of equilibrium. This includes the study of quantum many-body scars—states that violate the eigenstate thermalization hypothesis—and their potential for storing quantum information.
                            </p>
                            <p>
                                We are also interested in quantum batteries, investigating how many-body correlations can enhance energy charging and storage capabilities.
                            </p>
                        </div>
                    </section>

                    {/* Area 3 */}
                    <section id="topology" className="scroll-mt-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl">
                                <Box className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Topology and Disorder</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            <p className="mb-4">
                                Topological phases of matter offer robust properties that are immune to local perturbations. We study how these phases survive or change in the presence of disorder and interactions.
                            </p>
                            <p>
                                Our research utilizes numerical techniques to calculate topological invariants and simulate transport properties in disordered lattices.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
