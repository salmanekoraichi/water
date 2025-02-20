import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Clean water is the foundation of a better life. Our advanced filtration systems deliver purity and peace of
            mind, enhancing health and comfort in every home.
          </p>
          <div className="flex gap-4">
            <Input placeholder="Enter email address" type="email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

