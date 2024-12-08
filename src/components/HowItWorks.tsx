import { Smartphone, GitMerge, Check } from 'lucide-react'

const steps = [
  {
    name: 'Install the app',
    description: 'Download Labplus from your app store or build it from source and install it on your device.',
    icon: Smartphone,
  },
  {
    name: 'Connect to GitLab',
    description: 'Log in with your GitLab credentials or connect to your self-hosted instance.',
    icon: GitMerge,
  },
  {
    name: 'Start collaborating',
    description: 'Review code, manage issues, and stay updated on your projects from anywhere.',
    icon: Check,
  },
]

export default function HowItWorks() {
  return (
    <div className="py-12 bg-zinc-50 dark:bg-zinc-900" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-600 dark:text-orange-400 font-semibold tracking-wide uppercase hover:text-orange-700 dark:hover:text-orange-300 transition-colors">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Get started in minutes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-300 lg:mx-auto">
            Labplus makes it easy to connect to your GitLab projects and start collaborating on the go.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div 
                key={step.name} 
                className="relative p-4 rounded-lg hover:bg-white dark:hover:bg-zinc-800 transform hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 dark:bg-orange-600 text-white hover:scale-110 transition-transform">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-zinc-900 dark:text-white">{step.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-zinc-500 dark:text-zinc-300">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
