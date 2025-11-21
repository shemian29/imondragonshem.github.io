import { BookOpen, Radio } from 'lucide-react';

export default function Teaching() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-8">Teaching</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-16">
                    Courses taught at the University of Illinois Chicago.
                </p>

                <div className="space-y-8">
                    {/* Course 1 */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex gap-6">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl h-fit">
                            <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ECE 225: Circuit Analysis</h2>
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium w-fit">
                                    Fall 2025
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Fundamental principles of circuit analysis. Topics include Kirchhoff's laws, resistive networks, nodal and mesh analysis, network theorems, energy storage elements, and transient analysis of first- and second-order circuits.
                            </p>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex gap-6">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl h-fit">
                            <Radio className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">ECE 394: Intro to Quantum Hardware and Sensing</h2>
                                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium w-fit">
                                    Spring 2026
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                An introduction to the physical principles and engineering challenges of quantum hardware. Covers superconducting circuits, trapped ions, and quantum sensing technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
