import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Innovation",
      description:
        "We're always pushing the boundaries of what's possible in water filtration, using advanced technology to deliver solutions that are ahead of the curve.",
    },
    {
      number: "02",
      title: "Quality",
      description:
        "Excellence is at the heart of everything we do. Our products are built to the highest standards to ensure they enrich your home and your health.",
    },
    {
      number: "03",
      title: "Integrity",
      description:
        "Trust is our foundation. We're committed to transparency, honesty, and doing what's right for our customers and the planet.",
    },
    {
      number: "04",
      title: "Sustainability",
      description:
        "We believe in protecting our world. Every step we take is aimed at reducing waste, conserving resources, and building a cleaner future.",
    },
    {
      number: "05",
      title: "Accessibility",
      description:
        "Everyone deserves access to clean, healthy water. Our solutions are designed to be simple, affordable, and effective for every household.",
    },
    {
      number: "06",
      title: "Customer-Centric",
      description:
        "Your experience matters. We create products that prioritize ease of use, convenience, and customer satisfaction at every step.",
    },
  ]

  const faqs = [
    {
      question: "What are the exact certifications of your filters?",
      answer:
        "All certifications for the P1 Under-Sink Water Filter are listed on the product's main page and the shop page. The P1 filter media carry three world-class certifications: one from NSF, one from WQA, and another from SGS.",
    },
    {
      question: "What is the filtering accuracy of the membrane (in microns)?",
      answer:
        "The P1 filter media reduces contaminants down to 0.5 microns in size. With our attached UF post-filter, the micron reduction size goes down to 0.01 microns.",
    },
    {
      question: "Do the replacements have a limited life?",
      answer:
        "The replacement cartridges are designed to last a minimum of three years. You can always purchase replacements in advance and stock them as needed.",
    },
    // Add more FAQs as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-6">Inspired by Nature, Perfected by Science</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Our Products</h2>
            <p className="text-gray-600 mb-6">
              Our products redefine what's possible in water filtration, using cutting-edge technology to solve
              real-world problems in a simple, accessible way. By staying at the forefront of innovation, we create
              solutions that go beyond basic filtration, delivering water purity with minimal effort from you.
            </p>
            <Button variant="default" size="lg">
              Shop Now
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://sjc.microlink.io/sRwNyof_nz23XmChWWQSLAsu0z3zo4tp5tsgP7ywM9uPYbjmx-0brzh8VM2DPqNcw4GwAJlYyNwVq2fUDN5Kmw.jpeg"
              alt="Water filtration products"
              width={500}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <h3 className="text-2xl font-semibold mb-6">A Commitment to Innovation and Quality</h3>
        <p className="text-gray-600 mb-8 max-w-3xl">
          At Purely Solutions, we believe that innovation and quality go hand in hand with caring for the people we
          serve. Our mission is simple: to make clean, healthy water a seamless part of your everyday life. We're driven
          by a passion for creating solutions that don't just meet industry standards—they set new ones.
        </p>
        <p className="text-gray-600 mb-8 max-w-3xl">
          By blending cutting-edge technology with a commitment to sustainability, we design products that bring peace
          of mind and ease to your home. We're not just building filters; we're building trust, one drop at a time. With
          Purely Solutions, you're choosing a partner dedicated to enhancing life through the purity of water.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Values we thrive for</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {values.map((value) => (
            <div key={value.number} className="p-6 border rounded-lg">
              <div className="text-xl font-semibold mb-2">{value.number}.</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-gray-50 p-12 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need a customized solution? Let's talk.</h2>
        <p className="text-gray-600 mb-6">Reach out to create a filtration design tailored to your home.</p>
        <Button variant="default" size="lg" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}

