import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Smartphone, Laptop, Tv, Headphones, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Section from "@/components/section" // Declare the Section variable

export default function ElectronicsPage() {
  const services = [
    "Consumer Electronics Sales",
    "Mobile Phone & Accessories",
    "Computer & Laptop Sales",
    "Home Appliances",
    "Audio & Video Equipment",
    "Repair & Technical Support",
  ]

  const categories = [
    { name: "Mobile Devices", icon: <Smartphone className="w-8 h-8" /> },
    { name: "Computers", icon: <Laptop className="w-8 h-8" /> },
    { name: "Home Entertainment", icon: <Tv className="w-8 h-8" /> },
    { name: "Audio Equipment", icon: <Headphones className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <Smartphone className="w-16 h-16 mx-auto mb-6 text-purple-200" />
              <h1 className="text-5xl font-bold mb-6">Akagera Electronics</h1>
              <p className="text-xl text-purple-100">Your trusted source for the latest technology and electronics</p>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Technology at Your Fingertips</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Akagera Electronics is your premier destination for cutting-edge technology and consumer electronics.
                  We offer a comprehensive range of products from leading global brands, ensuring our customers have
                  access to the latest innovations in technology.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our expert team provides personalized service, technical support, and repair services to ensure you
                  get the most out of your electronic devices. From smartphones to home entertainment systems, we have
                  everything you need to stay connected and entertained.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="grid grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-purple-600 mb-4 flex justify-center">{category.icon}</div>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products & Services</h2>
              <p className="text-xl text-gray-600">Complete electronics solutions for modern living</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Latest technology from trusted brands</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Electronics Collection</h2>
              <p className="text-xl text-gray-600">Complete range of home appliances and consumer electronics</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="max-w-5xl mx-auto text-center">
              <Image
                src="/images/home-appliances.png"
                alt="Complete Electronics and Home Appliances Collection"
                width={900}
                height={600}
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 text-lg">
                From refrigerators and washing machines to TVs and audio systems - we have everything for your modern
                home
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <Section className="py-20 bg-gray-50">
        {" "}
        {/* Use the Section component */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Electronics Store</h2>
                    <p className="text-lg text-gray-600">Discover the latest in technology</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">
                        KG 15 Ave, Remera
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                    <div>
                      <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+250 788 567 890</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">electronics@akagerabg.com</p>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/contact">Shop Now</Link>
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
