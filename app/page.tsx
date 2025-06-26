import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"
import { Car, Wrench, Shield, ShoppingCart, Factory, ArrowRight, Award, Users, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const businessUnits = [
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      name: "AKAGERA MINING",
      description: "Mining operations and resource extraction services with focus on sustainable practices.",
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      name: "AKAGERA AUTOHAUS",
      description: "Automotive sales, service and maintenance providing quality vehicles and solutions.",
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      name: "AKAGERA CAR RENTAL",
      description: "Vehicle rental services offering reliable transportation solutions.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      name: "AKAGERA ELECTRONICS",
      description: "Electronics retail and repair services specializing in consumer electronics.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      name: "AKAGERA SECURITY",
      description: "Professional security services and investigation solutions.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      name: "AKAGERA TRADING",
      description: "Import and export trading services facilitating international business.",
    },
  ]

  const stats = [
    { number: 25, suffix: "+", label: "Years of Excellence" },
    { number: 11, suffix: "", label: "Business Divisions" },
    { number: 500, suffix: "+", label: "Employees" },
    { number: 1000, suffix: "+", label: "Satisfied Clients" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl">
              <FadeInSection>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  AKAGERA BUSINESS GROUP
                </h1>
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">Your Trusted Business Partner</p>
              </FadeInSection>

              <FadeInSection delay={400}>
                <p className="text-lg mb-12 text-blue-200 max-w-3xl leading-relaxed">
                  A leading conglomerate committed to innovation, sustainability, and exceptional value creation across
                  multiple business sectors. Building tomorrow's success today.
                </p>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg group">
                    <Link href="/about">
                      Discover Our Story
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                  >
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </FadeInSection>
            </div>

            {/* Hero Images */}
            <div className="relative hidden lg:block">
              <FadeInSection delay={300}>
                <div className="relative">
                  {/* Main rotating image - Now featuring the businessman */}
                  <div className="relative w-96 h-96 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full animate-spin-slow" />
                    <div className="relative flex items-center justify-center backdrop-blur-sm p-4">
                      <Image
                        src="/images/businessman-professional.png"
                        alt="Business Excellence"
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating images - Enlarged */}
                  <div className="absolute -top-8 -right-8 w-48 h-48 delay-300">
                    <Image
                      src="/images/range-rover.png"
                      alt="Automotive Services"
                      width={350}
                      height={350}
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </div>

                  <div className="absolute -bottom-4 -left-8 w-40 h-40  delay-700">
                    <Image
                      src="/images/home-appliances.png"
                      alt="Electronics"
                      width={300}
                      height={300}
                      className="rounded-xl object-cover shadow-xl"
                    />
                  </div>

                  <div className="absolute top-1/2 -right-12 w-112 h-112  delay-1000">
                    <Image
                      src="/images/doctor-healthcare.png"
                      alt="Healthcare"
                      width={112}
                      height={112}
                      className="rounded-full object-cover shadow-lg"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Leading Innovation Across Industries</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  For over two decades, Akagera Business Group has been at the forefront of business excellence,
                  operating across diverse sectors with unwavering commitment to quality and innovation.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Industry Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Global Reach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <span className="font-medium">Sustainable Growth</span>
                  </div>
                </div>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl transform rotate-3" />
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver exceptional value through diversified business excellence, fostering innovation and
                    sustainable growth while maintaining the highest standards of integrity and professionalism.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Business Divisions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our diverse portfolio of companies, each excelling in their respective industries
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((unit, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {unit.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">{unit.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{unit.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={600}>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/about">
                  View All Business Units
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Excellence?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Join hands with Akagera Business Group and experience the difference that comes with working alongside
              industry leaders.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-6 text-xl">CONTACT US</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  KG 9 Ave, Kigali, Rwanda
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +250 788 123 456
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  info@akagerabg.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">BUSINESS HOURS</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">QUICK LINKS</h3>
              <div className="space-y-2">
                <p>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </p>
                <p>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">FOLLOW US</h3>
              <div className="space-y-2">
                <p>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Facebook
                  </a>
                </p>
                <p>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Akagera Business Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
