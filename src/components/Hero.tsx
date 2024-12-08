'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative bg-white dark:bg-zinc-900 overflow-hidden transition-colors duration-300 bg-wave-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-zinc-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-zinc-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">GitLab in your pocket</span>{' '}
                <span className="block text-orange-600 dark:text-orange-400 xl:inline">with Labplus</span>
              </h1>
              <p className="mt-3 text-base text-zinc-500 dark:text-zinc-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Manage your GitLab projects, review code, and collaborate with your team - all from your mobile device. Labplus brings the power of GitLab to your fingertips, completely free and open-source.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="https://f-droid.org/packages/dev.labplus.app/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-colors duration-300">
                    Download Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="https://github.com/thelooter/labplus_for_gitlab" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 dark:text-orange-100 dark:bg-orange-800 dark:hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300">
                    View Source
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
        <Image
          src="/logo.svg"
          alt="Labplus Logo"
          width={512}
          height={512}
          className="w-48 h-48 lg:w-full lg:h-full max-w-lg object-contain"
          priority
        />
      </div>
    </div>
  )
}
