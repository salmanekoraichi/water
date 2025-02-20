import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-blue-600">
              Water Filtration Co.
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/installation" className="hover:text-blue-600">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-blue-600">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

