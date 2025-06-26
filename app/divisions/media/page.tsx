import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Camera, Video, Megaphone, Palette, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Section from "@/components/section" // Declare the Section variable

export default function MediaPage() {
  const services = [
    "Digital Marketing",
    "Video Production",
    "Graphic Design",
    "Brand Development",
    "Social Media Management",
    "Content Creation",
  ]

  const specialties = [
    { name: "Photography", icon: <Camera className="w-8 h-8" /> },
    { name: "Video Production", icon: <Video className="w-8 h-8" /> },
    { name: "Marketing", icon: <Megaphone className="w-8 h-8" /> },
    { name: "Design", icon: <Palette className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-pink-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Camera className="w-16 h-16 mx-auto mb-6 text-pink-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Media</h1>
              <p className="text-xl text-pink-100">Creative media solutions that bring your brand to life</p>
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Storytelling Through Media</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Media is your creative partner for comprehensive media production and marketing services. We
                  specialize in creating compelling visual content, developing strong brand identities, and executing
                  effective marketing campaigns that resonate with your target audience.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of creative professionals combines artistic vision with strategic thinking to deliver media
                  solutions that not only look great but also drive results. From concept to completion, we're committed
                  to bringing your brand's story to life.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {specialties.map((specialty, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-pink-600 mb-4 flex justify-center">{specialty.icon}</div>
                      <h3 className="font-bold text-gray-800">{specialty.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Creative Services</h2>
              <p className="text-xl text-gray-600">Full-service media production and marketing</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Creative solutions that deliver results</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Create Together</h2>
                    <p className="text-lg text-gray-600">Transform your brand with our creative expertise</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 13 Ave, Kacyiru
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 890 123</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">media@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-pink-600 hover:bg-pink-700">
                      <Link href="/contact">Start Your Project</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </Section>
    </div>
  )
}
