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

const HomePage: NextPage = () => {
  return (
    <div className="p-8 bg-green-500 text-white text-4xl font-bold rounded-xl text-center shadow-lg">
  🎉 Tailwind is 100% working!
</div>

  )
}

export default HomePage
