import { Code, GitPullRequest, MessageSquare, Bell, GitMerge, GitBranch } from 'lucide-react'

const features = [
  {
    name: 'Code Review',
    description: 'Review code changes and leave comments directly from your mobile device.',
    icon: Code,
  },
  {
    name: 'Merge Requests',
    description: 'Create, review, and merge requests on the go.',
    icon: GitPullRequest,
  },
  {
    name: 'Issue Tracking',
    description: 'Stay on top of project issues and collaborate with your team in real-time.',
    icon: MessageSquare,
  },
  {
    name: 'Notifications',
    description: 'Receive instant notifications for important project updates and mentions.',
    icon: Bell,
  },
  {
    name: 'Branch Management',
    description: 'Create, delete, and switch branches directly from your mobile device.',
    icon: GitBranch,
  },
  {
    name: 'CI/CD Pipeline Monitoring',
    description: 'Monitor your CI/CD pipelines and get real-time updates on build statuses.',
    icon: GitMerge,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white dark:bg-zinc-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-600 dark:text-orange-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Everything you need to manage GitLab on mobile
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-300 lg:mx-auto">
            Labplus brings the power of GitLab to your mobile device, allowing you to stay productive wherever you are.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-6 bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-zinc-200 dark:hover:bg-zinc-600">
              <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 dark:bg-orange-600 text-white mb-4 transition-colors duration-300 ease-in-out group-hover:bg-orange-600 dark:group-hover:bg-orange-500">
              <feature.icon className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-110" aria-hidden="true" />
              </div>
              <p className="text-lg leading-6 font-medium text-zinc-900 dark:text-white transition-colors duration-300">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-zinc-500 dark:text-zinc-300 transition-colors duration-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

