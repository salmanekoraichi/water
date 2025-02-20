import { Headphones, Mail, Building2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  const supportCards = [
    {
      icon: Headphones,
      title: "GET SUPPORT →",
      description:
        "Need help after your purchase? We're here to assist with returns, warranty, and post-purchase let us know what you need!",
    },
    {
      icon: Mail,
      title: "CONTACT US →",
      description:
        "We're here to enhance your water experience. Have questions or need help? Reach out, and let's make clean water a part of your home!",
    },
    {
      icon: Building2,
      title: "WHOLESALE INQUIRY →",
      description:
        "Got questions about pre-purchase, wholesale, or replacements? We're here to provide fast, tailored support—just choose your category, and we'll take care of the rest",
    },
  ]

  const faqs = [
    {
      question: "What are the exact certifications of your filters?",
      answer:
        "All certifications for the P1 Under-Sink Water Filter are listed on the product's main page and the shop page. The P1 filter media carry three world-class certifications: one from NSF, one from WQA, and another from SGS. For more information, please don't hesitate to reach out!",
    },
    {
      question: "What is the filtering accuracy of the membrane (in microns)?",
      answer:
        "The P1 filter media reduces contaminants down to 0.5 microns in size. With our attached UF post-filter, the micron reduction size goes down to 0.01 microns. For more information, please don't hesitate to reach out!",
    },
    // Add more FAQs as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-2">Purely Support</h1>
        <p className="text-gray-600">We're here to help, every step of the way</p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {supportCards.map((card, index) => (
          <div key={index} className="border p-8 text-center hover:shadow-lg transition-shadow rounded-lg">
            <div className="flex justify-center mb-4">
              <card.icon className="w-12 h-12" />
            </div>
            <h2 className="font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border p-4 rounded-lg">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Subscribe to our Newsletter</h2>
        <div className="flex gap-4">
          <Input placeholder="Enter email address" type="email" className="flex-1" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  )
}

