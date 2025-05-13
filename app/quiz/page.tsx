"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { springBootTestQuestions } from "@/data/questions"
import { QuizQuestion } from "@/components/quiz-question"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react"
import { QuizResults } from "@/components/quiz-results"

type AnswerState = {
  [questionId: number]: string | null
}

export default function QuizPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const mode = searchParams.get("mode") || "full"

  const [questions, setQuestions] = useState<typeof springBootTestQuestions>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerState>({})
  const [quizCompleted, setQuizCompleted] = useState(false)

  const [submittedAnswers, setSubmittedAnswers] = useState<{ [questionId: number]: boolean }>({})

  useEffect(() => {
    const shuffled = [...springBootTestQuestions].sort(() => Math.random() - 0.5)

    if (mode === "zhai") {
      setQuestions(shuffled.slice(0, 30))
    } else {
      setQuestions(shuffled)
    }
  }, [mode])

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const submitAnswer = () => {
    if (!currentQuestion || !answers[currentQuestion.id]) return

    setSubmittedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: true,
    }))
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const isCurrentQuestionSubmitted = () => {
    return currentQuestion ? submittedAnswers[currentQuestion.id] : false
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setQuizCompleted(false)

    const shuffled = [...springBootTestQuestions].sort(() => Math.random() - 0.5)

    if (mode === "zhai") {
      setQuestions(shuffled.slice(0, 30))
    } else {
      setQuestions(shuffled)
    }
  }

  const goToHome = () => {
    router.push("/")
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Loading questions...</h2>
          <div className="animate-spin h-8 w-8 border-4 border-gray-300 rounded-full border-t-gray-800 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    return <QuizResults questions={questions} answers={answers} onRestart={restartQuiz} onGoHome={goToHome} />
  }

  const progress = (currentQuestionIndex / questions.length) * 100
  const answeredCount = Object.values(answers).filter(Boolean).length
  const totalQuestions = questions.length

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">Spring Boot Quiz - {mode === "zhai" ? "Zhai Mode" : "Full Mode"}</h1>
          <span className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>
            Answered: {answeredCount}/{totalQuestions}
          </span>
          <Button variant="ghost" size="sm" onClick={restartQuiz} className="text-gray-500 hover:text-gray-700">
            <RotateCcw className="h-4 w-4 mr-2" />
            Restart
          </Button>
        </div>
      </div>

      {currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id] || null}
          onSelectAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
          isSubmitted={isCurrentQuestionSubmitted()}
        />
      )}

      <div className="mt-8 flex justify-between">
        <Button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0} variant="outline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {!isCurrentQuestionSubmitted() ? (
          <Button
            onClick={submitAnswer}
            disabled={!currentQuestion || !answers[currentQuestion.id]}
            className="bg-green-600 hover:bg-green-700"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={goToNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
            {currentQuestionIndex !== questions.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>
        )}
      </div>
    </div>
  )
}
