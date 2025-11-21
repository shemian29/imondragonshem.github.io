import Link from 'next/link';
import { ArrowRight, Cpu, Waves, Box } from 'lucide-react';
import newsData from '@/data/news.json';

export default function Home() {
  const recentNews = newsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Mondragon-Shem
            <span className="block text-accent mt-2">Quantum Engineering Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Exploring the frontiers of quantum information science, superconducting circuits, and topological phases of matter.
          </p>
          <div className="flex gap-4">
            <Link
              href="/research"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2"
            >
              Our Research <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/people"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all backdrop-blur-sm"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary dark:text-white">Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-6">
                <Cpu className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Superconducting Circuits</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Theory and design of superconducting qubits and circuits for quantum information processing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-6">
                <Waves className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Non-Equilibrium Systems</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Investigating quantum many-body scars, quantum batteries, and driven quantum systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-4 rounded-full mb-6">
                <Box className="h-10 w-10 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Topology & Disorder</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding the interplay between topological phases and disorder in quantum matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white">Recent News</h2>
            <Link href="/news" className="text-accent hover:text-accent-hover font-medium flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
