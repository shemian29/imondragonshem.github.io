import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-lg font-semibold">Mondragon-Shem Research Group</p>
                        <p className="text-sm text-gray-400">Department of Electrical and Computer Engineering</p>
                        <p className="text-sm text-gray-400">University of Illinois Chicago</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="https://uic.edu" className="text-gray-400 hover:text-white transition-colors">
                            UIC
                        </Link>
                        <Link href="https://ece.uic.edu" className="text-gray-400 hover:text-white transition-colors">
                            ECE Dept
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Ian Mondragon-Shem. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
