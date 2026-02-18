import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import pubsData from '@/data/publications.json';

interface Publication {
    id: string;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    category: string;
    doi: string | null;
    pdf: string | null;
    summary: string | null;
}

export default function Publications() {
    const pubs = (pubsData as Publication[])
        .slice()
        .sort((a, b) => b.year - a.year);

    return (
        <div className="min-h-screen">
            <section className="bg-primary text-white py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Publications</h1>
                    <p className="text-xl text-gray-300">
                        For a complete list, please visit <Link href="https://scholar.google.com/citations?user=ZOGF2S4AAAAJ&hl=en" className="text-accent hover:underline">Google Scholar</Link>.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 dark:bg-gray-950 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {pubs.map((pub) => (
                    <div key={pub.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-accent/50 transition-all hover:shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {pub.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                            {pub.authors.join(', ')}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
                            <span className="font-medium text-primary dark:text-gray-200 italic">
                                {pub.journal} ({pub.year})
                            </span>
                            {(pub.doi || pub.pdf) && (
                                <Link href={pub.doi || pub.pdf || '#'} className="flex items-center gap-1 text-accent hover:text-accent-hover">
                                    <ExternalLink className="h-4 w-4" /> View Paper
                                </Link>
                            )}
                        </div>
                        {pub.summary && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {pub.summary}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
