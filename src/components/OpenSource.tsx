import { Github, GitPullRequest, Users } from 'lucide-react';
import Link from "next/link";

export default function OpenSource() {
  return (
    <div className="bg-white dark:bg-zinc-800" id="open-source">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 sm:text-4xl hover:scale-105 transition-transform duration-300">Open Source and Community-Driven</h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-300">Labplus is built by the community, for the community. Join us in making GitLab mobile experience better for everyone.</p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          <div className="relative group p-4 rounded-lg transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:scale-105">
            <dt>
              <Github className="absolute h-6 w-6 text-orange-500 dark:text-orange-400 transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-zinc-900 dark:text-zinc-100">Open Source on GitHub</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-zinc-500 dark:text-zinc-300">Access the source code, contribute, and help shape the future of Labplus.</dd>
          </div>
          <div className="relative group p-4 rounded-lg transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:scale-105">
            <dt>
              <GitPullRequest className="absolute h-6 w-6 text-orange-500 dark:text-orange-400 transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-zinc-900 dark:text-zinc-100">Contribute</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-zinc-500 dark:text-zinc-300">Submit pull requests, report bugs, and suggest new features to improve Labplus.</dd>
          </div>
          <div className="relative group p-4 rounded-lg transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:scale-105">
            <dt>
              <Users className="absolute h-6 w-6 text-orange-500 dark:text-orange-400 transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
              <p className="ml-9 text-lg leading-6 font-medium text-zinc-900 dark:text-zinc-100">Community Support</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-zinc-500 dark:text-zinc-300">Join our community forums for support, discussions, and to connect with other Labplus users.</dd>
          </div>
        </dl>
        <div className="mt-10 text-center">
          <Link href="https://github.com/thelooter/labplus_for_gitlab" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
