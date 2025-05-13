"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { BookOpen, Zap } from "lucide-react"

export function StartMenu() {
  const router = useRouter()

  const startQuiz = (mode: "full" | "zhai") => {
    router.push(`/quiz?mode=${mode}`)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="transition-all hover:shadow-md justify-between">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gray-700" />
            Full Mode
          </CardTitle>
          <CardDescription>All questions in random order</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Challenge yourself with all 299 Spring Boot questions in a randomized sequence. Perfect for comprehensive
            review and testing your complete knowledge.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => startQuiz("full")}>
            Start Full Quiz
          </Button>
        </CardFooter>
      </Card>

      <Card className="transition-all hover:shadow-md justify-between">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-gray-700" />
            Zhai Mode
          </CardTitle>
          <CardDescription>30 random questions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Take a quick quiz with 30 randomly selected questions. Great for a brief practice session or when you&apos;re
            short on time.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => startQuiz("zhai")}>
            Start Zhai Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
