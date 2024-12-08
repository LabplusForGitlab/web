import Link from "next/link";
import {
  Braces,
  Download,
  GitBranch,
  Github,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { DarkModeToggle } from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-800 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-orange-500 lg:border-none">
          <div className="flex items-center">
            <Link
              href="/"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <span className="sr-only">Labplus for GitLab</span>
              <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Labplus for GitLab"
                width={128}
                height={32}
              />
            </Link>
            <div className="hidden ml-8 space-x-6 lg:flex">
              <Link
                href="#features"
                className="text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 flex items-center transform hover:translate-y-[-2px] transition-all duration-200 hover:scale-105"
              >
                <Braces className="h-5 w-5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 mr-2" />
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 flex items-center transform hover:translate-y-[-2px] transition-all duration-200 hover:scale-105"
              >
                <Settings className="h-5 w-5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 mr-2" />
                How It Works
              </Link>
              <Link
                href="#open-source"
                className="text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 flex items-center transform hover:translate-y-[-2px] transition-all duration-200 hover:scale-105"
              >
                <GitBranch className="h-5 w-5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 mr-2" />
                Open Source
              </Link>
            </div>
          </div>
          <div className="ml-8 space-x-3 flex items-center">
            <DarkModeToggle />
            <Link
              href="https://github.com/thelooter/labplus_for_gitlab"
              className="inline-flex items-center h-10 bg-orange-500 py-2 px-3 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Github className="h-5 w-5 text-white dark:text-orange-100 mr-2" />
              GitHub
            </Link>
            <Link
              href="https://f-droid.org/packages/dev.labplus.app"
              className="inline-flex items-center h-10 bg-white dark:bg-orange-800 py-2 px-3 border border-transparent rounded-md text-base font-medium text-orange-600 dark:text-orange-100 hover:bg-orange-50 dark:hover:bg-orange-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Download className="h-5 w-5 text-orange-600 dark:text-orange-100 mr-2" />
              Download
            </Link>
          </div>
        </div>
        <div className="py-3 flex flex-wrap justify-center space-x-4 lg:hidden">
          <Link
            href="#features"
            className="text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transform hover:translate-y-[-2px] transition-all duration-200"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transform hover:translate-y-[-2px] transition-all duration-200"
          >
            How It Works
          </Link>
          <Link
            href="#open-source"
            className="text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transform hover:translate-y-[-2px] transition-all duration-200"
          >
            Open Source
          </Link>
        </div>
      </nav>
    </header>
  );
}
