import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Car, Wrench, Award, Users, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MotorsPage() {
  const services = [
    "New Vehicle Sales",
    "Used Vehicle Sales",
    "Vehicle Servicing & Maintenance",
    "Spare Parts & Accessories",
    "Vehicle Financing Solutions",
    "Extended Warranty Programs",
  ]

  const brands = ["Toyota", "Honda", "Nissan", "Mazda", "Mitsubishi", "Suzuki"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Car className="w-16 h-16 mx-auto mb-6 text-blue-300" />
              <h1 className="text-5xl font-bold mb-6">Akagera Motors</h1>
              <p className="text-xl text-blue-200">
                Your premier automotive dealership providing quality vehicles and exceptional service
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Leading Automotive Excellence</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Motors stands as the premier automotive dealership in the region, representing major
                  international brands and delivering exceptional customer service. With decades of experience in the
                  automotive industry, we have built a reputation for reliability, quality, and customer satisfaction.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive automotive solutions include new and used vehicle sales, professional servicing,
                  genuine parts supply, and flexible financing options. We are committed to helping our customers find
                  the perfect vehicle to meet their needs and budget.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Authorized Dealer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Professional Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Quality Vehicles</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl transform rotate-3" />
                <Card className="relative bg-white shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Authorized Brands</h2>
              <p className="text-xl text-gray-600">We represent leading automotive brands</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">{brand[0]}</span>
                    </div>
                    <h3 className="font-bold text-gray-800">{brand}</h3>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Automotive Services</h2>
              <p className="text-xl text-gray-600">Expert technicians and quality service</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/images/construction-workers.png"
                alt="Professional Automotive Technicians"
                width={800}
                height={500}
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 text-lg">
                Our skilled technicians provide professional automotive services with the highest safety standards
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Showroom</h2>
                    <p className="text-lg text-gray-600">Experience our vehicles and services firsthand</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 11 Ave, Kimisagara
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 234 567</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">motors@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">Contact Us Today</Link>
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
