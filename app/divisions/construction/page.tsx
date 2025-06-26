import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Building, Ruler, HardHat, Wrench, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConstructionPage() {
  const services = [
    "Architectural Design",
    "Construction Management",
    "Residential Construction",
    "Commercial Buildings",
    "Interior Design",
    "Project Consultation",
  ]

  const expertise = [
    { name: "Design", icon: <Ruler className="w-8 h-8" /> },
    { name: "Construction", icon: <Building className="w-8 h-8" /> },
    { name: "Safety", icon: <HardHat className="w-8 h-8" /> },
    { name: "Engineering", icon: <Wrench className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Building className="w-16 h-16 mx-auto mb-6 text-gray-300" />
              <h1 className="text-5xl font-bold mb-6">Akagera Design & Construction</h1>
              <p className="text-xl text-gray-300">Building dreams with precision, quality, and innovation</p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Constructing Excellence</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Design & Construction brings together architectural innovation and construction expertise to
                  deliver exceptional building solutions. From initial concept to final completion, we manage every
                  aspect of your construction project with meticulous attention to detail.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our integrated approach combines creative design with practical construction knowledge, ensuring that
                  every project meets the highest standards of quality, safety, and functionality. We pride ourselves on
                  delivering projects on time and within budget.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-gray-700 mb-4 flex justify-center">{item.icon}</div>
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Construction Services</h2>
              <p className="text-xl text-gray-600">Complete design and construction solutions</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Building className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Professional construction excellence</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Premium Construction Equipment</h2>
              <p className="text-xl text-gray-600">Modern equipment for superior construction results</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/images/range-rover.png"
                alt="Premium Construction Equipment"
                width={800}
                height={500}
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 text-lg">
                We utilize premium equipment and vehicles to ensure efficient project delivery and superior results
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Build Your Vision</h2>
                    <p className="text-lg text-gray-600">Let's discuss your construction project</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 17 Ave, Kimihurura
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 012 345</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">construction@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-gray-700 hover:bg-gray-800">
                      <Link href="/contact">Start Building</Link>
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
