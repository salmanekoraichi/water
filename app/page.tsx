import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/product-card"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-blue-600 font-medium">PREMIUM WATER PURIFICATION SYSTEMS</span>
          <h1 className="text-5xl font-bold mt-4 mb-8">
            Redefining home life through pure, clean water filtration system
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="relative aspect-square">
              <Image
                src="https://sjc.microlink.io/sRwNyof_nz23XmChWWQSLAsu0z3zo4tp5tsgP7ywM9uPYbjmx-0brzh8VM2DPqNcw4GwAJlYyNwVq2fUDN5Kmw.jpeg"
                alt="Whole House Filtration"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Whole House Filtration</h3>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://sjc.microlink.io/sRwNyof_nz23XmChWWQSLAsu0z3zo4tp5tsgP7ywM9uPYbjmx-0brzh8VM2DPqNcw4GwAJlYyNwVq2fUDN5Kmw.jpeg"
                alt="P1 Under-Sink"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">P1 Under-Sink</h3>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://sjc.microlink.io/sRwNyof_nz23XmChWWQSLAsu0z3zo4tp5tsgP7ywM9uPYbjmx-0brzh8VM2DPqNcw4GwAJlYyNwVq2fUDN5Kmw.jpeg"
                alt="S1 Shower Filter"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">S1 Shower Filter</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Water Solution</h2>
            <p className="text-gray-600">Designed to deepen your connection to wellness with every drop</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Under-Sink Filters"
              description="Under-sink filters deliver clean water by removing harmful contaminants for safer drinking and cooking."
              rating={5.0}
              price={199.99}
              originalPrice={259.99}
              image="/placeholder.svg"
            />
            <ProductCard
              title="Shower Filters"
              description="Shower filters remove impurities from water, ensuring safer, cleaner showers that are better for skin and hair."
              rating={4.8}
              price={145.0}
              originalPrice={195.0}
              image="/placeholder.svg"
            />
            <ProductCard
              title="Whole House Filters"
              description="Whole-house filters ensure clean, filtered water throughout your home, protecting appliances and improving overall water quality."
              rating={4.5}
              price={2299.0}
              originalPrice={2500.0}
              image="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Advanced Carbon Fiber</h3>
              <p className="text-gray-600">
                Activated carbon fiber (ACF) has precisely aligned pores that guide water smoothly through the entire
                filter.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Four Stage Filtration</h3>
              <p className="text-gray-600">Four stages, seamless filtration. Smart, efficient, and built for purity.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Fast Flow, Low Maintenance</h3>
              <p className="text-gray-600">
                Our advanced technology maintains steady water pressure while providing powerful filtration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform your home today</h2>
          <p className="mb-8">Pure water. Elevated living. Discover the difference with Purely Solutions.</p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}

