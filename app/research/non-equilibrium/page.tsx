import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const publications = [
    {
        title: "Quantized frequency-domain polarization of driven phases of matter",
        authors: "I. Mondragon-Shem, I. Martin, A. Alexandradinata, M. Cheng",
        journal: "arXiv:1811.10632",
        year: 2018,
        link: "https://arxiv.org/pdf/1811.10632"
    },
    {
        title: "Many-body mobility edge due to symmetry-constrained dynamics and strong interactions",
        authors: "I. Mondragon-Shem, A. Pal, C.R. Laumann, T.L. Hughes",
        journal: "Phys. Rev. B 92, 064203",
        year: 2015,
        link: "https://doi.org/10.1103/physrevb.92.064203"
    },
    {
        title: "Imaging and controlling vortex dynamics in mesoscopic superconductor-normal-metal-superconductor arrays",
        authors: "T.R. Naibert, H. Polshyn, M. Durkin, B. Wolin, R. Garrido-Menacho, V. Chua, I. Mondragon-Shem, T.L. Hughes, N. Mason, R. Budakian",
        journal: "Phys. Rev. B 103, 224526",
        year: 2021,
        link: "https://doi.org/10.1103/physrevb.103.224526"
    },
    {
        title: "History-dependent dissipative vortex dynamics in superconducting arrays",
        authors: "M. Durkin, I. Mondragon-Shem, S. Eley, T.L. Hughes, N. Mason",
        journal: "Phys. Rev. B 94, 024510",
        year: 2016,
        link: "https://doi.org/10.1103/physrevb.94.024510"
    },
];

export default function NonEquilibrium() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/research" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Non-Equilibrium Quantum Systems</h1>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src={`${basePath}/assets/nonequilibrium.png`}
                        alt="Non-Equilibrium Quantum Systems"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        We study non-equilibrium quantum phenomena arising from strong driving, strong interactions, and coupling to structured environments. Our focus is on theoretical tools that connect these effects, including phases with no static counterpart, to emerging quantum technologies.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quantum Batteries</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We study quantum batteries, meaning quantum systems designed for energy storage and controlled charging and discharging. We examine how coherence, entanglement, and many-body interactions affect key performance metrics such as charging power, scalability, and robustness.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Non-Ergodic Quantum Dynamics</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We study non-ergodic dynamics in isolated quantum systems, where thermalization can fail and memory of initial conditions can persist. We focus on mechanisms such as many-body localization (MBL) and constrained dynamics, where kinematic constraints and localization can lead to novel non-equilibrium behavior relevant to coherence stability and the foundations of quantum statistical mechanics.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Driven Floquet Systems</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We investigate periodically driven (Floquet) systems that realize phases with no equilibrium counterpart, including discrete time crystals and anomalous Floquet topological phases. Using the Floquet lattice viewpoint, along with frequency-domain polarization and non-adiabatic Berry phases, we study quantized invariants that distinguish driven phases from those continuously connected to static states.
                            </p>
                        </section>
                    </div>

                    {/* Selected Publications */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Selected Publications</h2>
                        <div className="space-y-4">
                            {publications.map((pub, i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <Link href={pub.link} target="_blank" className="group">
                                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors flex items-start gap-2">
                                            {pub.title}
                                            <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                    </Link>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pub.authors}</p>
                                    <p className="text-sm text-accent mt-1">{pub.journal} ({pub.year})</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
