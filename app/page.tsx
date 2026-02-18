import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Waves, Box } from 'lucide-react';
import newsData from '@/data/news.json';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  const recentNews = newsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Mondragon-Shem
            <span className="block text-accent mt-2">Quantum Science and Engineering Group</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
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

      {/* Research Areas */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3 text-primary dark:text-white">Research Areas</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Our group investigates the fundamental properties of quantum matter and leverages them for quantum information processing.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/research/superconducting-circuits" className="group">
              <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-52 bg-gray-200 dark:bg-gray-700">
                  <Image src={`${basePath}/assets/superconducting.png`} alt="Superconducting Circuits" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Superconducting Quantum Processors</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Design of superconducting qubits and processors, Floquet engineering, correlated errors, error mitigation and quantum simulation.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/research/non-equilibrium" className="group">
              <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-52 bg-gray-200 dark:bg-gray-700">
                  <Image src={`${basePath}/assets/nonequilibrium.png`} alt="Non-Equilibrium Systems" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                      <Waves className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Non-Equilibrium Quantum Systems</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Novel phases in driven quantum systems, non-ergodic systems, quantum many-body scars, and quantum batteries.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/research/topological-phases" className="group">
              <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-52 bg-gray-200 dark:bg-gray-700">
                  <Image src={`${basePath}/assets/topology.png`} alt="Topological Phases" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg">
                      <Box className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Novel Quantum Matter</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Topological insulators, topological superconductors, Majorana modes, disorder-induced criticality, and quantum phase transitions.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px'}} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Interested in Joining Our Research Group?
              </h2>
              <p className="text-lg text-blue-100">
                We&apos;re looking for motivated students passionate about quantum physics and computation.
              </p>
            </div>
            <Link
              href="/join-us"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              Join Us <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-14 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-white">Group News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((item) => (
              <div key={item.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
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
