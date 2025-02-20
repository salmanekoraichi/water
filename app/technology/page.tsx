import Image from "next/image"
import Link from "next/link"

export default function Technology() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-20">
        <span className="text-blue-600 text-sm">PURELY TECHNOLOGY</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">
          Engineered to Perfection,
          <br />
          Designed for Your Life
        </h1>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-2">3</h2>
              <p className="text-gray-600">WORLD-CLASS FILTRATION MEDIA COMBINED IN ONE FILTER</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">10x</h2>
              <p className="text-gray-600">SUPERIOR ABSORPTION EFFICIENCY THAN TRADITIONAL FILTERS</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">99%</h2>
              <p className="text-gray-600">REDUCTION IN CONTAMINANTS FOR PURE, CLEAN WATER</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-purelysolutions-ca-technology-2025-02-20-15_15_59-ILZQBHrjm5GcuypZUlgwGMwOxdxgqD.png"
              alt="Advanced water filter technology"
              width={600}
              height={800}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="text-center">
          <h3 className="font-semibold mb-4">MAXIMUM EFFICIENCY</h3>
          <p className="text-gray-600">
            Engineered to maximize full water flow and filtration while maintaining optimal pressure for seamless daily
            use.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-4">SUPERIOR DESIGN</h3>
          <p className="text-gray-600">
            Designed for modern spaces, our filters provide powerful purification while maintaining a sleek, minimal
            look.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-4">MAXIMUM CONVENIENCE</h3>
          <p className="text-gray-600">
            Easy installation and maintenance, with smart indicators to let you know when it's time for a replacement.
          </p>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Our blog</h2>
          <Link href="/blog" className="text-blue-600 hover:underline">
            BROWSE ALL ARTICLES →
          </Link>
        </div>
        {/* Blog posts grid would go here */}
      </section>
    </div>
  )
}

