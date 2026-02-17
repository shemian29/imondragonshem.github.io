import Link from 'next/link';
import { BookOpen, Code, CheckCircle, ArrowRight } from 'lucide-react';

export default function JoinUsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Research Group</h1>
                    <p className="text-xl text-gray-200">
                        We welcome motivated students interested in quantum information, superconducting circuits,
                        and topological phases of matter.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* How to Apply */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Code className="h-8 w-8 text-accent" />
                        <h2 className="text-3xl font-bold text-primary dark:text-white">How to Apply</h2>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl space-y-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            Prospective students who have taken undergraduate quantum mechanics courses are encouraged to apply.
                            Apply to the <strong>UIC ECE PhD program (Fall 2026)</strong>. In your application, please mention
                            interest in working with Ian Mondragon-Shem.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Students are also welcome to reach out via email to discuss the position. Please include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Your CV or resume</li>
                            <li>A brief statement of your research interests (1 paragraph)</li>
                            <li>Unofficial transcript (for students)</li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600">
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                <strong>Contact:</strong> Ian Mondragon-Shem
                            </p>
                            <Link
                                href="mailto:mondrag2@uic.edu"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-all"
                            >
                                Email Me <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Who Can Join */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="h-8 w-8 text-accent" />
                        <h2 className="text-3xl font-bold text-primary dark:text-white">Who Can Join?</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Undergraduate Students</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                Undergraduates interested in research are welcome to join. Ideal candidates have completed:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Quantum Mechanics I (or equivalent)</li>
                                <li>Programming experience (Python preferred)</li>
                                <li>Linear Algebra and Differential Equations</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Graduate Students</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                PhD students should have taken courses in:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Quantum Mechanics (graduate level)</li>
                                <li>Statistical Mechanics or Condensed Matter Physics</li>
                                <li>Computational physics and numerical methods</li>
                                <li>Programming skills (Python, Julia, or similar)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Preparation Resources */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="h-8 w-8 text-accent" />
                        <h2 className="text-3xl font-bold text-primary dark:text-white">How to Prepare</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        If you&apos;re not quite ready yet, here are resources to build your background:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Quantum Mechanics</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>Textbooks:</strong> Griffiths &quot;Introduction to Quantum Mechanics&quot;, Sakurai &quot;Modern Quantum Mechanics&quot;</li>
                                <li><strong>Online:</strong> MIT OCW 8.04 (Quantum Physics I), 8.05 (Quantum Physics II)</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Condensed Matter Physics</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>Textbooks:</strong> Ashcroft &amp; Mermin &quot;Solid State Physics&quot;, Altland &amp; Simons &quot;Condensed Matter Field Theory&quot;</li>
                                <li><strong>Topics:</strong> Many-body quantum mechanics, second quantization, Green&apos;s functions</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Programming &amp; Computation</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>Python:</strong> NumPy, SciPy, Matplotlib for scientific computing</li>
                                <li><strong>Quantum Libraries:</strong> QuTiP (Quantum Toolbox in Python), scqubits</li>
                                <li><strong>Practice:</strong> Solve physics problems numerically, implement quantum algorithms</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">Recommended Papers</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                Start with review articles in these areas:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Topological insulators and superconductors (review by Qi &amp; Zhang)</li>
                                <li>Many-body localization (review by Abanin et al.)</li>
                                <li>Superconducting qubits (review by Devoret &amp; Schoelkopf)</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
