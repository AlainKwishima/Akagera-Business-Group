"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeInSection } from "@/components/fade-in-section"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const businessContacts = [
    {
      name: "AKAGERA BUSINESS GROUP",
      address: "KG 9 Ave, Nyarugenge",
      city: "Kigali, Rwanda",
      phone: "+250 788 123 456",
      email: "info@akagerabg.com",
    },
    {
      name: "AKAGERA MOTORS",
      address: "KG 11 Ave, Kimisagara",
      city: "Kigali, Rwanda",
      phone: "+250 788 234 567",
      email: "motors@akagerabg.com",
    },
    {
      name: "AKAGERA AUTO ZONE",
      address: "KG 7 Ave, Gisozi",
      city: "Kigali, Rwanda",
      phone: "+250 788 345 678",
      email: "autozone@akagerabg.com",
    },
    {
      name: "AKAGERA CAR RENTALS",
      address: "Airport Road, Kanombe",
      city: "Kigali, Rwanda",
      phone: "+250 788 456 789",
      email: "rental@akagerabg.com",
    },
    {
      name: "AKAGERA ELECTRONICS",
      address: "KG 15 Ave, Remera",
      city: "Kigali, Rwanda",
      phone: "+250 788 567 890",
      email: "electronics@akagerabg.com",
    },
    {
      name: "AKAGERA SECURITY & SAFETY SYSTEMS",
      address: "KG 5 Ave, Muhima",
      city: "Kigali, Rwanda",
      phone: "+250 788 678 901",
      email: "security@akagerabg.com",
    },
    {
      name: "AKAGERA TRADING",
      address: "KG 3 Ave, Nyabugogo",
      city: "Kigali, Rwanda",
      phone: "+250 788 789 012",
      email: "trading@akagerabg.com",
    },
    {
      name: "AKAGERA MEDIA",
      address: "KG 13 Ave, Kacyiru",
      city: "Kigali, Rwanda",
      phone: "+250 788 890 123",
      email: "media@akagerabg.com",
    },
    {
      name: "AKAGERA HARDWARE & PLASTIC",
      address: "Industrial Park, Masoro",
      city: "Kigali, Rwanda",
      phone: "+250 788 901 234",
      email: "hardware@akagerabg.com",
    },
    {
      name: "AKAGERA DESIGN & CONSTRUCTION",
      address: "KG 17 Ave, Kimihurura",
      city: "Kigali, Rwanda",
      phone: "+250 788 012 345",
      email: "construction@akagerabg.com",
    },
    {
      name: "AKAGERA HEALTHCARE",
      address: "KG 21 Ave, Gaculiro",
      city: "Kigali, Rwanda",
      phone: "+250 788 123 456",
      email: "healthcare@akagerabg.com",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-200">Get in touch with our team across all business divisions</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Business Locations</h2>
              <p className="text-xl text-gray-600">Find the right contact for your specific needs</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {businessContacts.map((contact, index) => (
              <FadeInSection key={index} delay={index * 50}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-blue-200 group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg group-hover:text-blue-600 transition-colors">
                      {contact.name}
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>{contact.address}</p>
                          <p>{contact.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <p>{contact.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <p>{contact.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInSection>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                      <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                      <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-blue-600 hover:bg-blue-700">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg group"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeInSection>

            {/* Contact Information */}
            <FadeInSection delay={200}>
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-2xl font-bold text-gray-800">Head Office</h3>
                    </div>
                    <div className="text-gray-600 space-y-2">
                      <p className="text-lg">KG 9 Ave, Nyarugenge</p>
                      <p className="text-lg">Kigali, Rwanda</p>
                      <p className="text-lg">East Africa</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Phone className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-2xl font-bold text-gray-800">Phone & Email</h3>
                    </div>
                    <div className="text-gray-600 space-y-3">
                      <p className="text-lg">📞 +250 788 123 456</p>
                      <p className="text-lg">📠 +250 788 123 457</p>
                      <p className="text-lg">✉️ info@akagerabg.com</p>
                      <p className="text-lg">🌐 www.akagerabg.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Clock className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
                    </div>
                    <div className="text-gray-600 space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">8:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
              <p className="text-xl text-gray-600">Visit our head office in the heart of Kigali, Rwanda</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p>KG 9 Ave, Nyarugenge, Kigali, Rwanda</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
