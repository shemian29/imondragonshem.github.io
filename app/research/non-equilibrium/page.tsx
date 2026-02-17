import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
                        src="/assets/nonequilibrium.png"
                        alt="Non-Equilibrium Quantum Systems"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        When quantum systems are driven out of equilibrium, they can exhibit novel phases of matter with no static counterpart. Our group investigates the rich physics of driven quantum systems, non-ergodic dynamics, and their applications to quantum technologies.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Driven Quantum Phases &amp; Floquet Systems</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Periodically driven (Floquet) quantum systems can realize phases of matter that have no equilibrium counterpart, such as time crystals and anomalous Floquet topological insulators. We study signatures of these drive-induced phases on the Floquet lattice—comprised of spatial dimensions plus the frequency domain. By introducing the concept of frequency-domain polarization, defined through a non-adiabatic Berry phase, we identify a quantized invariant that distinguishes genuinely driven phases from those continuously connected to static states. This framework has been applied to characterize driven topological phases and symmetry-broken phases such as time crystals.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Non-Ergodic Systems &amp; Quantum Many-Body Scars</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Isolated quantum systems are generically expected to thermalize under their own dynamics—a property known as ergodicity. However, certain systems violate this expectation. Many-body localization (MBL) and quantum many-body scars are two prominent mechanisms for ergodicity breaking. In MBL systems, strong disorder prevents thermalization entirely, while quantum many-body scars are special non-thermal eigenstates embedded in an otherwise ergodic spectrum. We have provided numerical evidence for many-body mobility edges—energy-dependent boundaries between ergodic and localized behavior—arising from symmetry-constrained dynamics and strong interactions in spin models. These phenomena have deep implications for quantum information storage and the stability of quantum coherence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quantum Batteries</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Quantum batteries are energy storage devices that leverage quantum mechanical effects—including entanglement, coherence, and many-body interactions—to potentially achieve advantages over classical energy storage. We investigate how collective quantum effects in driven many-body systems can be harnessed to optimize charging speed, energy capacity, and work extraction. This research connects fundamental questions about quantum thermodynamics to practical applications in quantum technologies.
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
