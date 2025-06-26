import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Car, Clock, Shield, Star, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CarRentalsPage() {
  const services = [
    "Daily Car Rentals",
    "Weekly & Monthly Rentals",
    "Corporate Fleet Solutions",
    "Airport Transfer Services",
    "Wedding Car Rentals",
    "Tourist Package Deals",
  ]

  const features = [
    { icon: <Car className="w-8 h-8" />, title: "Modern Fleet", description: "Well-maintained vehicles" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Service", description: "Round-the-clock support" },
    { icon: <Shield className="w-8 h-8" />, title: "Full Insurance", description: "Comprehensive coverage" },
    { icon: <Star className="w-8 h-8" />, title: "Premium Service", description: "Exceptional customer care" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Car className="w-16 h-16 mx-auto mb-6 text-green-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Car Rentals</h1>
              <p className="text-xl text-green-100">
                Premium vehicle rental services for all your transportation needs
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Mobility Partner</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Car Rentals provides reliable and affordable vehicle rental services for business and leisure
                  travelers. Our diverse fleet of well-maintained vehicles ensures you have the perfect transportation
                  solution for any occasion.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From economy cars for budget-conscious travelers to luxury vehicles for special occasions, we offer
                  competitive rates and exceptional service. Our commitment to customer satisfaction has made us the
                  preferred choice for car rentals in the region.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-green-600 mb-4 flex justify-center">{feature.icon}</div>
                      <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Rental Services</h2>
              <p className="text-xl text-gray-600">Flexible rental options to meet your needs</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Competitive rates and flexible terms</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Service Team</h2>
              <p className="text-xl text-gray-600">Dedicated professionals ensuring your rental experience</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src="/images/construction-workers.png"
                alt="Professional Car Rental Service Team"
                width={800}
                height={500}
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 text-lg">
                Our professional team ensures every vehicle meets the highest standards of safety and cleanliness
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Vehicle</h2>
                    <p className="text-lg text-gray-600">Reserve your rental car today</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        Airport Road, Kanombe
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 456 789</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">rental@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/contact">Book Now</Link>
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
