import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
                        src="/assets/topology.png"
                        alt="Novel Quantum Matter"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        Topological phases of matter are characterized by global quantum properties that are robust against local perturbations and disorder. Our group studies topological insulators, topological superconductors, and the role of disorder in driving quantum phase transitions.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topological Insulators &amp; Superconductors</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Topological insulators are materials that are insulating in their bulk but conduct electricity along their edges or surfaces through symmetry-protected boundary states. Topological superconductors are the superconducting analog, hosting exotic Majorana modes at their boundaries—quasiparticles that are their own antiparticles and obey non-Abelian statistics. These Majorana modes are of intense interest for topological quantum computation, as they can encode quantum information in a way that is inherently protected from local noise. Our research develops theoretical tools such as topological markers and projected symmetry operators to characterize these phases, even in the absence of translational invariance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Disorder-Induced Criticality</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Real materials are never perfectly ordered—impurities, defects, and randomness are always present. Rather than simply destroying topological order, disorder can play a constructive role: it can induce phase transitions between topologically distinct phases, modify critical properties, and even stabilize new phases. We have shown that topological invariants constructed from projected symmetry operators remain robust against impurities located away from spatial symmetry fixed points, providing a practical way to characterize disordered topological crystalline phases. Our work also revealed critical behavior at the topological phase transition of disordered one-dimensional systems, including unexpected absence of levitation and annihilation of critical states.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quantum Phase Transitions &amp; Entanglement</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Quantum phase transitions occur at zero temperature and are driven by quantum fluctuations rather than thermal fluctuations. We use quantum entanglement as a powerful diagnostic tool to characterize these transitions. Our work introduced the momentum-space entanglement spectrum as a means of characterizing disordered fermion systems: by measuring the entanglement between left and right movers in momentum space, we can identify localized and delocalized phases, detect phase transitions, and map out the energy spectrum of delocalized states—all from a single numerical diagonalization.
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
