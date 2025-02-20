import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1512] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tap-water" className="hover:text-gray-300">
                  Get My Tap Water
                </Link>
              </li>
              <li>
                <Link href="/installation" className="hover:text-gray-300">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-gray-300">
                  Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/warranty" className="hover:text-gray-300">
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contaminants" className="hover:text-gray-300">
                  Contaminants
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2 bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-white/10 pt-8">
          <p>© 2025 Purely Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

