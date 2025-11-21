import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const researchAreas = [
    {
        id: 'superconducting-circuits',
        title: 'Superconducting Circuits',
        description: 'Theory and design of superconducting qubits, including Floquet-engineered qubits, cross-talk analysis, and Josephson junction arrays.',
        image: '/assets/superconducting.png',
        link: '/research/superconducting-circuits'
    },
    {
        id: 'non-equilibrium',
        title: 'Non-Equilibrium & Ergodicity',
        description: 'Investigating ergodicity breaking, quantum many-body scars, and quantum batteries in driven systems.',
        image: '/assets/nonequilibrium.png',
        link: '/research/non-equilibrium'
    },
    {
        id: 'topological-phases',
        title: 'Topological Phases',
        description: 'Studying topological markers, disorder in topological phases, and inhomogeneous topological systems.',
        image: '/assets/topology.png',
        link: '/research/topological-phases'
    }
];

export default function Research() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-8">Research Areas</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl">
                    Our group investigates the fundamental properties of quantum matter and leverages them for quantum information processing.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {researchAreas.map((area) => (
                        <Link key={area.id} href={area.link} className="group">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                                <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                                        {area.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {area.description}
                                    </p>
                                    <div className="flex items-center text-accent font-medium mt-auto">
                                        Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
