import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, FileText, GraduationCap } from 'lucide-react';
import teamData from '@/data/team.json';

export default function People() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Team</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl">
                    We are a diverse group of researchers passionate about quantum physics and engineering.
                </p>

                <div className="grid gap-12">
                    {teamData.map((member) => (
                        <div key={member.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-64 md:h-auto bg-gray-200 dark:bg-gray-800">
                                {/* Placeholder for image if not found */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-6xl">👤</span>
                                </div>
                                {/* Uncomment when real images are added
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                */}
                            </div>
                            <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h2>
                                    <p className="text-accent font-medium text-lg">{member.role}</p>
                                    <p className="text-gray-500 dark:text-gray-400">{member.title}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{member.affiliation}</p>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {member.bio}
                                </p>

                                <div className="flex gap-4">
                                    {member.links.email && (
                                        <Link href={member.links.email} className="text-gray-500 hover:text-accent transition-colors">
                                            <Mail className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {member.links.scholar && (
                                        <Link href={member.links.scholar} className="text-gray-500 hover:text-accent transition-colors">
                                            <GraduationCap className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {member.links.linkedin && (
                                        <Link href={member.links.linkedin} className="text-gray-500 hover:text-accent transition-colors">
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {member.links.cv && (
                                        <Link href={member.links.cv} className="text-gray-500 hover:text-accent transition-colors flex items-center gap-1 text-sm font-medium">
                                            <FileText className="h-5 w-5" /> CV
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
