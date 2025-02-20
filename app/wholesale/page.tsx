import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Wholesale() {
  const partners = [
    { name: "Blunt", logo: "/placeholder.svg" },
    { name: "Audi", logo: "/placeholder.svg" },
    { name: "Porsche", logo: "/placeholder.svg" },
    // Add more partners as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Discover Wholesale
            <br />
            Opportunities with Purely
            <br />
            Solutions
          </h1>
          <p className="text-gray-600 mb-8">
            Partner with Purely Solutions to access premium products at competitive wholesale prices. Whether you're
            looking to stock your store or B2B bulk orders, we're here to support your business's growth.
          </p>
          <Button variant="default" size="lg">
            DISCOVER FOR BUSINESS →
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-purelysolutions-ca-wholesale-for-businesses-2025-02-20-15_14_24-SAdWxyGtqnBXJp6HYWskQTSFg13Pmh.png"
            alt="Under-sink filter installation"
            width={400}
            height={500}
            className="object-cover rounded-lg"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-purelysolutions-ca-wholesale-for-businesses-2025-02-20-15_14_24-SAdWxyGtqnBXJp6HYWskQTSFg13Pmh.png"
            alt="Shower filter closeup"
            width={400}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Trusted partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Key benefits of working with us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Competitive Pricing</h3>
            <p className="text-gray-600">
              We understand the importance of maintaining pricing that works for your business. That's why we offer
              competitive wholesale pricing on all our products, ensuring you get the best value and margins to grow
              your business.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">2. Reliable Shipping and Logistics</h3>
            <p className="text-gray-600">
              Our dedicated shipping services ensure your orders arrive on time, every time. With real-time tracking and
              efficient handling, you can trust us to keep your business moving.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Get in touch</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone number" />
            <Input placeholder="Your Website" />
          </div>
          <Textarea placeholder="Message" className="h-32" />
          <Button className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </section>
    </div>
  )
}

