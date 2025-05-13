"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {useEffect, useState} from "react"
import type {Question} from "@/data/questions"
import {Check, X} from "lucide-react";

type ShuffledOption = {
  text: string
  originalKey: string
}

interface QuizQuestionProps {
  question: Question
  selectedAnswer: string | null
  onSelectAnswer: (answer: string) => void
  isSubmitted: boolean
}

export function QuizQuestion({question, selectedAnswer, onSelectAnswer, isSubmitted}: QuizQuestionProps) {
  const [shuffledOptions, setShuffledOptions] = useState<ShuffledOption[]>([])

  useEffect(() => {
    const options = Object.entries(question.options).map(([key, value]) => ({
      text: value,
      originalKey: key,
    }))

    const shuffled = [...options].sort(() => Math.random() - 0.5)
    setShuffledOptions(shuffled)
  }, [question])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">
          {question.id}. {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswer || ""}
          onValueChange={isSubmitted ? () => {
          } : onSelectAnswer}
          className="space-y-3"
          disabled={isSubmitted}
        >
          {shuffledOptions.map((option) => {
            const isSelected = selectedAnswer === option.originalKey
            const isCorrect = option.originalKey === question.correctAnswer

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
              <div key={option.originalKey} className={optionClass}>
                <RadioGroupItem
                  value={option.originalKey}
                  id={`${question.id}-${option.originalKey}`}
                  disabled={isSubmitted}
                />
                <Label
                  htmlFor={`${question.id}-${option.originalKey}`}
                  className={`flex-1 cursor-pointer text-base ${isSubmitted && !isSelected && isCorrect ? "font-semibold" : ""}`}
                >
                  {option.text}
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
      </CardContent>
    </Card>
  )
}


