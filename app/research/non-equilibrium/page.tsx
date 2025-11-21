import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NonEquilibrium() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/research" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Non-Equilibrium & Ergodicity</h1>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src="/assets/nonequilibrium.png"
                        alt="Non-Equilibrium Physics"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        We explore the rich physics that emerges when quantum systems are driven out of equilibrium, challenging our understanding of thermodynamics and thermalization.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Ergodicity Breaking & Quantum Scars</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Standard quantum chaotic systems are expected to thermalize, erasing local information. We study mechanisms that violate this, such as Quantum Many-Body Scars—special eigenstates that remain non-thermal and can support long-lived coherent dynamics. These states offer a potential resource for robust quantum information storage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Quantum Batteries</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Quantum batteries are energy storage devices that exploit quantum effects like entanglement and coherence to achieve faster charging and higher energy density. We investigate how many-body interactions and collective effects in driven systems can be harnessed to optimize the performance of these quantum devices.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
