import type { NextPage } from 'next'

type TestCardProps = {
  title: string
  description: string
  highlight?: boolean
}

const TestCard: React.FC<TestCardProps> = ({ title, description, highlight }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        highlight ? 'bg-indigo-100' : 'bg-white'
      } border border-gray-200`}
    >
      <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  )
}

const TestPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">🚀 Tech Stack Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <TestCard
          title="Next.js"
          description="Pages, routing, and SSR are working!"
          highlight
        />
        <TestCard
          title="Tailwind CSS"
          description="Utility classes and styling are functional."
        />
        <TestCard
          title="TypeScript"
          description="Types and interfaces are compiling correctly."
        />
        <TestCard
          title="Component Rendering"
          description="Everything is rendering and styled properly."
        />
      </div>
    </div>
  )
}

export default TestPage
