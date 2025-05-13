"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Question } from "@/data/questions"
import {Check, X} from "lucide-react";

interface QuizQuestionProps {
  question: Question
  selectedAnswer: string | null
  onSelectAnswer: (answer: string) => void
  isSubmitted: boolean
}

export function QuizQuestion({ question, selectedAnswer, onSelectAnswer, isSubmitted }: QuizQuestionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={isSubmitted ? () => {} : onSelectAnswer}
          className="space-y-3"
          disabled={isSubmitted}
        >
          {Object.entries(question.options).map(([key, value]) => {
            const isSelected = selectedAnswer === key
            const isCorrect = key === question.correctAnswer

            let optionClass = "flex items-center space-x-2 rounded-lg border p-4 transition-colors "

            if (isSubmitted) {
              if (isSelected && isCorrect) {
                optionClass += "bg-green-100 border-green-300"
              } else if (isSelected && !isCorrect) {
                optionClass += "bg-red-100 border-red-300"
              } else if (isCorrect) {
                optionClass += "bg-green-50 border-green-200"
              } else {
                optionClass += "opacity-70"
              }
            } else if (isSelected) {
              optionClass += "bg-gray-100 border-gray-300"
            }

            return (
              <div key={key} className={optionClass}>
                <RadioGroupItem value={key} id={`${question.id}-${key}`} disabled={isSubmitted} />
                <Label
                  htmlFor={`${question.id}-${key}`}
                  className={`flex-1 cursor-pointer text-base ${isSubmitted && !isSelected && isCorrect ? "font-semibold" : ""}`}
                >
                  <span className="font-semibold mr-2">{key}:</span> {value}
                  {isSubmitted && isSelected && isCorrect && (
                    <div className="flex items-center gap-1 ml-2 text-green-600 font-semibold"><Check /> Correct</div>
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <div className="flex items-center gap-1 ml-2 text-red-600 font-semibold"><X /> Incorrect</div>
                  )}
                </Label>
              </div>
            )
          })}
        </RadioGroup>

        {isSubmitted && selectedAnswer !== question.correctAnswer && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm font-medium text-blue-800">
              The correct answer is: <span className="font-bold">{question.correctAnswer}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
