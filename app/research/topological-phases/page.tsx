import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const publications = [
    {
        title: "Robust topological invariants of topological crystalline phases in the presence of impurities",
        authors: "I. Mondragon-Shem, T.L. Hughes",
        journal: "Phys. Rev. B 110, 035146",
        year: 2024,
        link: "https://doi.org/10.1103/physrevb.110.035146"
    },
    {
        title: "Topological Criticality in the Chiral-Symmetric AIII Class at Strong Disorder",
        authors: "I. Mondragon-Shem, J. Song, T.L. Hughes, E. Prodan",
        journal: "Phys. Rev. Lett. 113, 046802",
        year: 2014,
        link: "https://doi.org/10.1103/physrevlett.113.046802"
    },
    {
        title: "Signatures of metal-insulator and topological phase transitions in the entanglement of one-dimensional disordered fermions",
        authors: "I. Mondragon-Shem, J. Song, T.L. Hughes, E. Prodan",
        journal: "Phys. Rev. B 90, 104204",
        year: 2014,
        link: "https://doi.org/10.1103/physrevb.90.104204"
    },
    {
        title: "Characterizing Disordered Fermion Systems Using the Momentum-Space Entanglement Spectrum",
        authors: "I. Mondragon-Shem, M.N. Khan, T.L. Hughes",
        journal: "Phys. Rev. Lett. 110, 046806",
        year: 2013,
        link: "https://doi.org/10.1103/physrevlett.110.046806"
    },
    {
        title: "Unconventional Bose-Einstein Condensations from Spin-Orbit Coupling",
        authors: "C. Wu, I. Mondragon-Shem, X.-F. Zhou",
        journal: "Chinese Physics Letters 28, 097102",
        year: 2011,
        link: "https://doi.org/10.1088/0256-307x/28/9/097102"
    },
];

export default function TopologicalPhases() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/research" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Novel Quantum Matter</h1>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src={`${basePath}/assets/topology.png`}
                        alt="Novel Quantum Matter"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        We develop theoretical tools for characterizing and engineering quantum matter, including phases defined by topology and symmetry protection. Our emphasis is on identifying structures that remain robust in realistic settings and support future quantum functionality.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Entanglement of Quantum Matter</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We use entanglement to characterize many-body quantum matter. Entanglement spectra and entropies can diagnose hidden order, identify topological phases, and detect phase transitions. We develop entanglement-based tools for analyzing correlations, with particular emphasis on connections to quantum sensing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topological Insulators &amp; Superconductors</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We study topological phases in quantum many-body systems, with a focus on inhomogeneous topological phases. Our work uses topological invariants, Berry phases, and entanglement-based diagnostics to characterize topology in settings where spatial structure and disorder play an essential role. We also seek to understand Majorana modes in novel topological superconductors.
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
