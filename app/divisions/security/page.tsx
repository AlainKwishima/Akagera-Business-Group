import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Shield, Camera, Lock, Users, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  const services = [
    "Security System Installation",
    "CCTV Surveillance",
    "Access Control Systems",
    "Alarm Systems",
    "Security Personnel",
    "Safety Consulting",
  ]

  const solutions = [
    { name: "Surveillance", icon: <Camera className="w-8 h-8" /> },
    { name: "Access Control", icon: <Lock className="w-8 h-8" /> },
    { name: "Security Guards", icon: <Users className="w-8 h-8" /> },
    { name: "Safety Systems", icon: <Shield className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-red-300" />
              <h1 className="text-5xl font-bold mb-6">Akagera Security & Safety Systems</h1>
              <p className="text-xl text-red-200">Comprehensive security solutions for complete peace of mind</p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Protecting What Matters Most</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Security & Safety Systems provides comprehensive security solutions designed to protect your
                  property, assets, and people. Our integrated approach combines advanced technology with professional
                  security services to deliver complete protection.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From state-of-the-art surveillance systems to trained security personnel, we offer customized security
                  solutions that meet the unique needs of residential, commercial, and industrial clients. Your safety
                  is our priority.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-red-700 mb-4 flex justify-center">{solution.icon}</div>
                      <h3 className="font-bold text-gray-800">{solution.name}</h3>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Security Services</h2>
              <p className="text-xl text-gray-600">Advanced security solutions for every need</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-700" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Professional security solutions</p>
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Secure Your Property</h2>
                    <p className="text-lg text-gray-600">Get a free security assessment today</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-red-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 5 Ave, Muhima
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-red-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 678 901</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-red-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">security@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-red-700 hover:bg-red-800">
                      <Link href="/contact">Get Protected</Link>
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
