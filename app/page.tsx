import { StartMenu } from "@/components/start-menu"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">Spring Boot Quiz</h1>
          <p className="text-gray-600">Test your Spring Boot knowledge with this comprehensive quiz</p>
        </div>
        <StartMenu />
      </div>
    </main>
  )
}
