import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Globe, Ship, Truck, BarChart3, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function TradingPage() {
  const services = [
    "Import & Export Services",
    "Supply Chain Management",
    "International Trade Consulting",
    "Customs Clearance",
    "Logistics Coordination",
    "Market Research & Analysis",
  ]

  const sectors = [
    { name: "Consumer Goods", icon: <BarChart3 className="w-8 h-8" /> },
    { name: "Industrial Equipment", icon: <Truck className="w-8 h-8" /> },
    { name: "Raw Materials", icon: <Ship className="w-8 h-8" /> },
    { name: "Technology Products", icon: <Globe className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 text-teal-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Trading</h1>
              <p className="text-xl text-teal-100">
                Connecting global markets through strategic import and export solutions
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Global Trade Excellence</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Trading serves as your gateway to international markets, facilitating seamless import and
                  export operations across diverse industries. With extensive experience in global trade, we help
                  businesses expand their reach and optimize their supply chains.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive trading services include market analysis, supplier sourcing, logistics coordination,
                  and regulatory compliance. We leverage our global network and industry expertise to deliver
                  cost-effective solutions that drive business growth.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {sectors.map((sector, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-teal-600 mb-4 flex justify-center">{sector.icon}</div>
                      <h3 className="font-bold text-gray-800">{sector.name}</h3>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Trading Services</h2>
              <p className="text-xl text-gray-600">Comprehensive solutions for international trade</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Professional trade facilitation</p>
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Expand Your Global Reach</h2>
                    <p className="text-lg text-gray-600">Partner with us for international trade success</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 3 Ave, Nyabugogo
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 789 012</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">trading@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700">
                      <Link href="/contact">Start Trading</Link>
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
