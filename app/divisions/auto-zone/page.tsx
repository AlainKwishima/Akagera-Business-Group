import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Wrench, Package, Truck, Award, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function AutoZonePage() {
  const services = [
    "Automotive Parts & Accessories",
    "Engine Components",
    "Brake Systems",
    "Electrical Components",
    "Body Parts & Panels",
    "Performance Upgrades",
  ]

  const categories = [
    { name: "Engine Parts", icon: <Wrench className="w-8 h-8" /> },
    { name: "Body Parts", icon: <Package className="w-8 h-8" /> },
    { name: "Electronics", icon: <Award className="w-8 h-8" /> },
    { name: "Accessories", icon: <Truck className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Package className="w-16 h-16 mx-auto mb-6 text-orange-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Auto Zone</h1>
              <p className="text-xl text-orange-100">Your one-stop shop for quality automotive parts and accessories</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Premium Auto Parts Supplier</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Auto Zone is your trusted partner for high-quality automotive parts and accessories. We
                  maintain an extensive inventory of genuine and aftermarket parts for all major vehicle brands,
                  ensuring our customers have access to the components they need.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our experienced team provides expert advice and technical support to help you find the right parts for
                  your vehicle. Whether you're a professional mechanic or a DIY enthusiast, we have the parts and
                  expertise to keep your vehicle running smoothly.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-orange-600 mb-4 flex justify-center">{category.icon}</div>
                      <h3 className="font-bold text-gray-800">{category.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
              <p className="text-xl text-gray-600">Comprehensive automotive parts and accessories</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Quality parts from trusted manufacturers</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Parts Store</h2>
                    <p className="text-lg text-gray-600">Find the parts you need with expert assistance</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 7 Ave, Gisozi
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 345 678</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">autozone@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link href="/contact">Get Quote Today</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}
