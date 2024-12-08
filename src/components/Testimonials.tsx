import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Image
            className="mx-auto h-8"
            src="/placeholder.svg?height=32&width=160"
            alt="OpenSource Inc"
          />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900 dark:text-gray-100">
              <p>
                &ldquo;Labplus has revolutionized how our team collaborates on projects. Being able to review code and manage issues on the go has significantly improved our productivity. The fact that it's open-source allows us to customize it to our needs.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src="/placeholder.svg?height=40&width=40"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900 dark:text-gray-100">Sarah Thompson</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500 dark:text-gray-400">CTO, OpenSource Inc</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

