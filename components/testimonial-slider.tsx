"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Ethan C",
    text: "Great product and great value for clean water.",
    rating: 5,
  },
  {
    name: "Katie W.",
    text: "Never realized my water could taste this good.",
    rating: 5,
  },
  {
    name: "Greg N.",
    text: "Simple, effective, and affordable. Highly recommend.",
    rating: 5,
  },
  // Add more testimonials as needed
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Are Saying</h2>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-center px-12">
            <p className="text-xl mb-4">{testimonials[currentSlide].text}</p>
            <p className="font-medium">- {testimonials[currentSlide].name}</p>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

