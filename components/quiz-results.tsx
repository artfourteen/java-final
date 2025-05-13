"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, RotateCcw, XCircle } from "lucide-react"
import type { Question } from "@/data/questions"

interface QuizResultsProps {
  questions: Question[]
  answers: { [questionId: number]: string | null }
  onRestart: () => void
  onGoHome: () => void
}

export function QuizResults({ questions, answers, onRestart, onGoHome }: QuizResultsProps) {
  const correctAnswers = questions.filter((q) => answers[q.id] === q.correctAnswer).length
  const totalQuestions = questions.length
  const score = Math.round((correctAnswers / totalQuestions) * 100)

  let performanceMessage = ""
  if (score >= 90) {
    performanceMessage = "Outstanding! You're a Spring Boot expert!"
  } else if (score >= 80) {
    performanceMessage = "Great job! You have strong Spring Boot knowledge."
  } else if (score >= 70) {
    performanceMessage = "Good work! You know Spring Boot well."
  } else if (score >= 60) {
    performanceMessage = "Not bad! You have a decent understanding of Spring Boot."
  } else {
    performanceMessage = "Keep learning! Spring Boot has many concepts to master."
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Quiz Results</CardTitle>
          <CardDescription>Your Spring Boot knowledge assessment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">{score}%</div>
            <p className="text-gray-500">
              {correctAnswers} correct out of {totalQuestions} questions
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 text-center">
            <p className="text-lg font-medium">{performanceMessage}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Question Summary</h3>
            <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
              {questions.map((question) => {
                const userAnswer = answers[question.id]
                const isCorrect = userAnswer === question.correctAnswer

                return (
                  <div
                    key={question.id}
                    className={`p-3 rounded-lg flex items-start gap-2 ${isCorrect ? "bg-green-50" : "bg-red-50"}`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">Question {question.id}</p>
                      <p className="text-xs text-gray-700">
                        {question.question.length > 80 ? question.question.substring(0, 80) + "..." : question.question}
                      </p>
                      <p className="text-xs text-gray-500">
                        {userAnswer && (
                          <>
                            Your answer:{" "}
                            <span className={isCorrect ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                              {userAnswer}
                            </span>{" "}
                            |{" "}
                          </>
                        )}
                        Correct answer: <span className="text-green-600 font-medium">{question.correctAnswer}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 justify-between">
          <Button variant="outline" onClick={onGoHome}>
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button onClick={onRestart}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
