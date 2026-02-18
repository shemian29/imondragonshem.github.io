import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const publications = [
    {
        title: "Systematic Construction of Time-Dependent Hamiltonians for Microwave-Driven Josephson Circuits",
        authors: "Y. Lu, T. Zhao, A. Vallières, K.C. Smith, D. Weiss, X. You, Y. Zhang, S. Ganjam, A. Maiti, J.W.O. Garmon, S. Mundhada, Z. Huang, I. Mondragon-Shem, S.M. Girvin, J. Koch, R.J. Schoelkopf",
        journal: "arXiv:2512.20743",
        year: 2025,
        link: "https://doi.org/10.48550/arxiv.2512.20743"
    },
    {
        title: "Exceeding the Parametric Drive Strength Threshold in Nonlinear Circuits",
        authors: "M. Xia, C. Lledó, M. Capocci, J. Repicky, B. D\u2019Anjou, I. Mondragon-Shem, R. Kaufman, J. Koch, A. Blais, M. Hatridge",
        journal: "arXiv:2506.03456",
        year: 2025,
        link: "https://arxiv.org/pdf/2506.03456"
    },
    {
        title: "Computer-aided quantization and numerical analysis of superconducting circuits",
        authors: "S.P. Chitta, T. Zhao, Z. Huang, I. Mondragon-Shem, J. Koch",
        journal: "New Journal of Physics 24, 103020",
        year: 2022,
        link: "https://doi.org/10.1088/1367-2630/ac94f2"
    },
    {
        title: "Local imaging of diamagnetism in proximity-coupled niobium nanoisland arrays on gold thin films",
        authors: "L. Bishop-Van Horn, I.P. Zhang, E.N. Waite, I. Mondragon-Shem, S. Jensen, J. Oh, T. Lippman, M. Durkin, T.L. Hughes, N. Mason, K.A. Moler, I. Sochnikov",
        journal: "Phys. Rev. B 106, 054521",
        year: 2022,
        link: "https://doi.org/10.1103/physrevb.106.054521"
    },
];

export default function SuperconductingCircuits() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/research" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
                </Link>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">Superconducting Quantum Processors</h1>

                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src={`${basePath}/assets/superconducting.png`}
                        alt="Superconducting Quantum Processors"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        At present, we develop theoretical models and design tools for superconducting quantum processors. Our focus is on capturing realistic processor physics in ways that inform next-generation qubit design and operation.
                    </p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Many-Body Quantum Dynamics in Quantum Processors</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We study how collective many-body dynamics emerges as superconducting processors scale to larger numbers of coupled qubits. Using tools from Floquet theory and random matrix theory, we characterize driven, interacting dynamics in realistic architectures and identify constraints on control and performance, including drive-induced errors.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Protected Qubits</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We study mechanisms for building qubits that are intrinsically robust to noise. In particular, we investigate encodings with disjoint support that reduce sensitivity to local error processes, and we analyze when such protection can remain compatible with practical control and readout.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Semiclassical Analysis of Superconducting Circuits</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We develop semiclassical methods for analyzing superconducting circuits as engineered nonlinear oscillators governed by Josephson physics. These approaches provide interpretable, quantitative insight in regimes where fully quantum modeling is possible but less transparent and more computationally demanding.
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
