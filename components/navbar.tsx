import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-[#1a1512] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/placeholder.svg" alt="Purely Solutions Logo" width={40} height={40} className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-300">
              HOME
            </Link>
            <Link href="/products" className="hover:text-gray-300">
              PRODUCTS
            </Link>
            <Link href="/wholesale" className="hover:text-gray-300">
              WHOLE SALE FOR BUSINESS
            </Link>
            <Link href="/technology" className="hover:text-gray-300">
              TECHNOLOGY
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              CONTACT
            </Link>
          </div>

          <Link
            href="/shop"
            className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </nav>
  )
}

