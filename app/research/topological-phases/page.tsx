import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TopologicalPhases() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/research" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Topological Phases</h1>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src="/assets/topology.png"
                        alt="Topological Phases"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        Topological phases of matter represent a new paradigm in condensed matter physics, characterized by global properties that are robust against local perturbations.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Topological Markers</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Defining topology in systems without translational invariance (e.g., amorphous or disordered systems) is challenging. We utilize topological markers—local space operators—to characterize the topological nature of these systems, allowing us to map out phase diagrams even in the absence of a clean band structure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Disorder in Topological Phases</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Real materials are never perfect. We study the interplay between topology and disorder, investigating how robust topological edge states are to impurities and at what point the topological protection breaks down (Anderson localization).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Inhomogeneous Topological Phases</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We explore systems where the topological order varies spatially. These inhomogeneous phases can host novel interface states and exhibit unique transport properties that are not found in uniform topological insulators.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
