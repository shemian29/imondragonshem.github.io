import QubitDemo from '@/components/QubitDemo';

export default function Interactive() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-8">Interactive Quantum Lab</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl">
                    Explore quantum mechanics concepts through interactive simulations.
                </p>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <h2 className="text-2xl font-bold mb-8">Single Qubit Visualization</h2>
                    <QubitDemo />
                </div>
            </div>
        </div>
    );
}
