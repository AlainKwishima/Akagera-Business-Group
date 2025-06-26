import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { TrendingUp, Target, Users, Lightbulb, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function AntlerJayVixPage() {
  const services = [
    "Strategic Planning",
    "Business Development",
    "Operational Excellence",
    "Market Analysis",
    "Performance Optimization",
    "Change Management",
  ]

  const expertise = [
    { name: "Strategy", icon: <Target className="w-8 h-8" /> },
    { name: "Growth", icon: <TrendingUp className="w-8 h-8" /> },
    { name: "Innovation", icon: <Lightbulb className="w-8 h-8" /> },
    { name: "Leadership", icon: <Users className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Target className="w-16 h-16 mx-auto mb-6 text-indigo-300" />
              <h1 className="text-5xl font-bold mb-6">Antler Jay Vix</h1>
              <p className="text-xl text-indigo-200">Strategic consulting and business development excellence</p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Driving Business Excellence</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Antler Jay Vix specializes in strategic consulting and business development services that help
                  organizations achieve sustainable growth and operational excellence. Our team of experienced
                  consultants brings deep industry knowledge and proven methodologies to every engagement.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We work closely with leadership teams to identify opportunities, overcome challenges, and implement
                  strategies that drive measurable results. Our collaborative approach ensures that solutions are
                  practical, sustainable, and aligned with your business objectives.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-indigo-700 mb-4 flex justify-center">{item.icon}</div>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Consulting Services</h2>
              <p className="text-xl text-gray-600">Strategic solutions for business transformation</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-6 h-6 text-indigo-700" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Expert consulting for business success</p>
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Transform Your Business</h2>
                    <p className="text-lg text-gray-600">Schedule a strategic consultation</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-indigo-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 9 Ave, Nyarugenge
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-indigo-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 123 456</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-indigo-700 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">consulting@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-indigo-700 hover:bg-indigo-800">
                      <Link href="/contact">Get Consultation</Link>
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
