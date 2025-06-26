import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import {
  Factory,
  Car,
  Wrench,
  Shield,
  ShoppingCart,
  Radio,
  Hammer,
  Construction,
  Stethoscope,
  Building2,
  Target,
  Eye,
  Award,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const businessUnits = [
    {
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      name: "Akagera Motors",
      description:
        "Leading automotive dealership providing premium vehicles and exceptional customer service. We represent major international brands and offer comprehensive automotive solutions including sales, service, and parts distribution.",
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      name: "Akagera Auto Zone",
      description:
        "Specialized automotive parts and accessories retailer serving both individual customers and commercial clients. Our extensive inventory ensures availability of quality parts for all major vehicle brands.",
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      name: "Akagera Car Rentals",
      description:
        "Premium car rental services offering a diverse fleet of vehicles for business and leisure travel. From economy cars to luxury vehicles, we provide reliable transportation solutions with competitive rates.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      name: "Akagera Electronics",
      description:
        "Consumer electronics retailer and service center specializing in the latest technology products. We offer sales, repairs, and technical support for smartphones, computers, home appliances, and entertainment systems.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      name: "Akagera Trading",
      description:
        "International trading company facilitating import and export operations across various industries. We specialize in connecting global suppliers with local markets, ensuring efficient supply chain management.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      name: "Akagera Hardware & Plastic",
      description:
        "Comprehensive hardware and plastic products supplier serving construction, manufacturing, and retail sectors. Our extensive product range includes building materials, tools, and specialized plastic components.",
    },
    {
      icon: <Radio className="w-8 h-8 text-blue-600" />,
      name: "Akagera Media",
      description:
        "Full-service media production company offering advertising, marketing, and content creation services. We specialize in digital marketing, video production, graphic design, and brand development.",
    },
    {
      icon: <Construction className="w-8 h-8 text-blue-600" />,
      name: "Akagera Design & Construction",
      description:
        "Integrated design and construction services for residential and commercial projects. From architectural planning to project completion, we deliver quality construction solutions with attention to detail.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      name: "Akagera Security & Safety Systems",
      description:
        "Professional security services and safety system installations. We provide comprehensive security solutions including surveillance systems, access control, alarm systems, and security personnel services.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      name: "Antler Jay Vix",
      description:
        "Specialized consulting and business development services focusing on strategic planning and operational excellence. We help businesses optimize their operations and achieve sustainable growth.",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      name: "Akagera Healthcare",
      description:
        "Healthcare services provider offering medical consultations, health screenings, and wellness programs. We are committed to promoting community health through accessible and quality healthcare services.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">About ABG</h1>
              <p className="text-xl text-blue-200">
                Discover our journey of excellence and innovation across diverse industries
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Arafura Business Group stands as a testament to entrepreneurial vision and unwavering commitment to
                  excellence. Founded with the mission to create value across diverse industries, we have grown from a
                  single enterprise into a dynamic conglomerate that spans multiple sectors.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our journey began with a simple yet powerful belief: that success comes from understanding market
                  needs and delivering solutions that exceed expectations. This philosophy has guided our expansion into
                  automotive, electronics, construction, healthcare, and many other industries.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we continue to innovate and adapt, always staying ahead of market trends while maintaining our
                  core values of integrity, quality, and customer satisfaction.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl transform -rotate-3" />
                <Card className="relative bg-white shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                        <div className="text-gray-600">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">11</div>
                        <div className="text-gray-600">Business Units</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600">Employees</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                        <div className="text-gray-600">Satisfied Clients</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInSection>
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To deliver exceptional value through diversified business excellence, fostering innovation and
                    sustainable growth while maintaining the highest standards of integrity and professionalism. We
                    strive to be the preferred partner for our clients and a responsible corporate citizen in our
                    communities.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={200}>
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-12 h-12 text-red-600 mr-4" />
                    <h3 className="text-3xl font-bold text-gray-800">Vision</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be recognized as the leading diversified business group in the region, known for our commitment
                    to excellence, innovation, and sustainable business practices. We envision a future where our
                    companies set industry standards and contribute meaningfully to economic development and social
                    progress.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Leadership Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our success is driven by visionary leadership and professional expertise
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src="/images/businessman-professional.png"
                alt="Business Leadership"
                width={600}
                height={700}
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 text-lg">
                Professional leadership committed to driving innovation and excellence across all business divisions
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Business Units */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Business Units</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each of our business units operates with autonomy while benefiting from our collective expertise and
                resources
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {businessUnits.map((unit, index) => (
              <FadeInSection key={index} delay={index * 50}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                        {unit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{unit.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{unit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                The principles that guide every decision and action across our organization
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Integrity",
                description: "We conduct business with honesty and transparency",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Innovation",
                description: "We embrace change and continuously improve",
              },
              {
                icon: <Eye className="w-12 h-12" />,
                title: "Sustainability",
                description: "We build for the future with responsible practices",
              },
            ].map((value, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="flex justify-center mb-4 text-blue-300">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-blue-200">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
