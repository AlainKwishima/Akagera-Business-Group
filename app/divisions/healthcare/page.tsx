import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Heart, Stethoscope, Activity, Users, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HealthcarePage() {
  const services = [
    "Medical Consultations",
    "Health Screenings",
    "Wellness Programs",
    "Preventive Care",
    "Health Education",
    "Corporate Health Services",
  ]

  const specialties = [
    { name: "General Medicine", icon: <Stethoscope className="w-8 h-8" /> },
    { name: "Preventive Care", icon: <Heart className="w-8 h-8" /> },
    { name: "Health Monitoring", icon: <Activity className="w-8 h-8" /> },
    { name: "Community Health", icon: <Users className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Healthcare</h1>
              <p className="text-xl text-emerald-100">Committed to your health and wellness journey</p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Health, Our Priority</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Healthcare is dedicated to promoting community health through accessible, quality healthcare
                  services. We provide comprehensive medical care, preventive health programs, and wellness initiatives
                  designed to improve the overall health and well-being of our community.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of qualified healthcare professionals is committed to delivering compassionate care and
                  evidence-based treatments. We believe in the importance of preventive care and health education in
                  maintaining optimal health throughout life.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {specialties.map((specialty, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-emerald-600 mb-4 flex justify-center">{specialty.icon}</div>
                      <h3 className="font-bold text-gray-800">{specialty.name}</h3>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Healthcare Services</h2>
              <p className="text-xl text-gray-600">Comprehensive health solutions for everyone</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Quality healthcare for better living</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Healthcare Professionals</h2>
              <p className="text-xl text-gray-600">Qualified medical professionals dedicated to your health</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src="/images/doctor-healthcare.png"
                alt="Professional Healthcare Team"
                width={600}
                height={700}
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 text-lg">
                Our experienced medical professionals are committed to providing compassionate, quality healthcare
                services
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Take Care of Your Health</h2>
                    <p className="text-lg text-gray-600">Schedule your health consultation today</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 21 Ave, Gaculiro
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 123 456</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">healthcare@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/contact">Book Appointment</Link>
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
