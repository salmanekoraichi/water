import Image from "next/image"
import { Star } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  rating: number
  price: number
  originalPrice: number
  image: string
}

export default function ProductCard({ title, description, rating, price, originalPrice, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm rounded">Sale</div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{rating}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${price.toFixed(2)} CAD</span>
            <span className="ml-2 text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

