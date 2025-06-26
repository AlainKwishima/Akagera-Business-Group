import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Hammer, Wrench, Package, Building, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function HardwarePage() {
  const services = [
    "Construction Hardware",
    "Plastic Components",
    "Industrial Tools",
    "Building Materials",
    "Safety Equipment",
    "Custom Manufacturing",
  ]

  const categories = [
    { name: "Hand Tools", icon: <Hammer className="w-8 h-8" /> },
    { name: "Power Tools", icon: <Wrench className="w-8 h-8" /> },
    { name: "Plastic Products", icon: <Package className="w-8 h-8" /> },
    { name: "Building Supplies", icon: <Building className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Hammer className="w-16 h-16 mx-auto mb-6 text-amber-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Hardware & Plastic</h1>
              <p className="text-xl text-amber-100">
                Quality hardware and plastic solutions for construction and manufacturing
              </p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Building Excellence Together</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Hardware & Plastic is your comprehensive supplier of quality hardware and plastic products for
                  construction, manufacturing, and industrial applications. We serve contractors, manufacturers, and
                  retail customers with an extensive inventory of reliable products.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From basic hand tools to specialized plastic components, we provide the materials and equipment needed
                  to complete projects efficiently and effectively. Our commitment to quality and competitive pricing
                  makes us the preferred choice for professionals and DIY enthusiasts alike.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-amber-600 mb-4 flex justify-center">{category.icon}</div>
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
              <p className="text-xl text-gray-600">Complete hardware and plastic solutions</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Hammer className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Durable products for every project</p>
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Hardware Store</h2>
                    <p className="text-lg text-gray-600">Find everything you need for your project</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        Industrial Park, Masoro
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 901 234</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">hardware@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700">
                      <Link href="/contact">Shop Hardware</Link>
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
