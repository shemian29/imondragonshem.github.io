import Link from 'next/link';
import { ExternalLink, FileText } from 'lucide-react';
import pubsData from '@/data/publications.json';

export default function Publications() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-8">Publications</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Selected publications and preprints. For a complete list, please visit <Link href="https://scholar.google.com/citations?user=ZOGF2S4AAAAJ&hl=en" className="text-accent hover:underline">Google Scholar</Link>.
                </p>

                <div className="space-y-6">
                    {pubsData.map((pub) => (
                        <div key={pub.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-accent/50 transition-colors">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {pub.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                {pub.authors.join(', ')}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <span className="font-medium text-primary dark:text-gray-200 italic">
                                    {pub.journal} ({pub.year})
                                </span>
                                {pub.url && (
                                    <Link href={pub.url} className="flex items-center gap-1 text-accent hover:text-accent-hover">
                                        <ExternalLink className="h-4 w-4" /> View Paper
                                    </Link>
                                )}
                                {pub.doi && (
                                    <span className="text-gray-400">DOI: {pub.doi}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
