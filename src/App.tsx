import { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail, ArrowRight, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1c110a] text-[#fdf8f5] font-sans selection:bg-[#e65c19] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#1c110a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e65c19] flex items-center justify-center">
                <span className="font-bold text-white text-lg">L</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">Lumina Dental</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-[#e65c19] transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium hover:text-[#e65c19] transition-colors">Services</a>
              <a href="#team" className="text-sm font-medium hover:text-[#e65c19] transition-colors">Team</a>
              <a href="#contact" className="text-sm font-medium hover:text-[#e65c19] transition-colors">Contact</a>
              <button className="bg-[#e65c19] hover:bg-[#c44d15] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#e65c19] transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1c110a] border-b border-white/5 absolute w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-lg">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-lg">Services</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-lg">Team</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-lg">Contact</a>
              <div className="pt-4 px-3">
                <button className="w-full bg-[#e65c19] text-white px-6 py-3 rounded-full text-base font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://drive.google.com/thumbnail?id=1tpGT6dlG0bugdA5GXaepAWiB0KpJZhiu&sz=w2000" 
              alt="Dental Clinic Background" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[#1c110a]/70 lg:bg-gradient-to-r lg:from-[#1c110a]/95 lg:via-[#1c110a]/80 lg:to-[#1c110a]/30"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
                Modern Care for a <br className="hidden lg:block" /><span className="text-[#e65c19]">Perfect Smile</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
                Experience advanced dentistry in a relaxing environment. We combine technology with compassionate care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#1c110a] hover:bg-gray-200 px-8 py-4 rounded-full text-base font-bold transition-colors flex items-center justify-center gap-2">
                  Book Appointment <ArrowRight size={18} />
                </button>
                <button className="border border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold transition-colors flex items-center justify-center gap-2 text-white">
                  <Phone size={18} /> (555) 123-4567
                </button>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <CheckCircle2 size={16} className="text-[#e65c19]" />
                  <span>Top Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <CheckCircle2 size={16} className="text-[#e65c19]" />
                  <span>Modern Tech</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <CheckCircle2 size={16} className="text-[#e65c19]" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-32 bg-[#a13d14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:mb-16 md:flex md:justify-between md:items-end">
              <div className="max-w-2xl">
                <span className="text-white/70 font-semibold tracking-widest uppercase text-xs mb-4 block">Our Services</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Comprehensive dental care for your family</h2>
              </div>
              <button className="hidden md:flex items-center gap-2 text-white hover:text-white/80 font-medium transition-colors">
                View all services <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Cosmetic Dentistry",
                  desc: "Enhance your smile with veneers, whitening, and bonding treatments tailored to you.",
                  icon: "✨"
                },
                {
                  title: "Dental Implants",
                  desc: "Permanent, natural-looking replacements for missing teeth that restore full function.",
                  icon: "🦷"
                },
                {
                  title: "Orthodontics",
                  desc: "Straighten your teeth with traditional braces or clear aligners like Invisalign.",
                  icon: "😁"
                },
                {
                  title: "General Dentistry",
                  desc: "Routine cleanings, exams, and preventative care to keep your mouth healthy.",
                  icon: "🩺"
                },
                {
                  title: "Oral Surgery",
                  desc: "Expert extractions, including wisdom teeth, performed with maximum comfort.",
                  icon: "⚕️"
                },
                {
                  title: "Pediatric Dentistry",
                  desc: "Gentle, friendly dental care designed specifically for children and teens.",
                  icon: "🧸"
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-[#1c110a]/10 border border-white/10 hover:bg-[#1c110a]/20 transition-colors p-8 rounded-3xl group cursor-pointer">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-8 text-sm md:text-base">{service.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:text-white text-white/70 transition-colors">
                    Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 md:hidden flex items-center justify-center w-full gap-2 border border-white/20 hover:bg-white/5 py-4 rounded-full text-white font-medium transition-colors">
              View all services <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#e65c19] font-semibold tracking-widest uppercase text-xs mb-4 block">Our Specialists</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Meet the experts behind your perfect smile</h2>
              <p className="text-lg text-white/70">Our team of highly qualified professionals is dedicated to providing you with the best possible care.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  name: "Dr. Sarah Jenkins",
                  role: "Lead Dentist",
                  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Orthodontist",
                  img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Cosmetic Dentist",
                  img: "https://images.unsplash.com/photo-1594824436998-058a231b611c?q=80&w=800&auto=format&fit=crop"
                },
                {
                  name: "Dr. James Wilson",
                  role: "Oral Surgeon",
                  img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
                }
              ].map((member, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/5]">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c110a] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-[#e65c19] text-sm font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32 bg-[#a13d14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h2>
                <p className="text-white/80 text-lg mb-12 max-w-md">
                  Have a question or want to book an appointment? Leave us a message and we will contact you as soon as possible.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1c110a]/20 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Location</h4>
                      <p className="text-white/70">123 Dental Avenue, Suite 400<br />New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1c110a]/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-white/70">(555) 123-4567<br />(555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1c110a]/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-white/70">hello@luminadental.com<br />appointments@luminadental.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 bg-[#1c110a] p-6 sm:p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-white/70">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e65c19] focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-white/70">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e65c19] focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e65c19] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/70">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e65c19] focus:border-transparent transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e65c19] focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button type="button" className="w-full bg-white text-[#1c110a] hover:bg-gray-200 px-8 py-4 rounded-xl text-base font-bold transition-colors mt-6">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c110a] pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#e65c19] flex items-center justify-center">
                  <span className="font-bold text-white text-lg">L</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">Lumina Dental</span>
              </div>
              <p className="text-white/60 mb-8 max-w-sm text-sm md:text-base">
                Providing exceptional dental care with a focus on comfort, aesthetics, and long-term oral health.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e65c19] hover:text-white transition-colors text-white/70">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e65c19] hover:text-white transition-colors text-white/70">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#e65c19] hover:text-white transition-colors text-white/70">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Cosmetic Dentistry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dental Implants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orthodontics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">General Care</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h4 className="font-semibold mb-6">Hours</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex justify-between gap-4">
                  <span>Mon - Fri</span>
                  <span>8am - 6pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span>9am - 2pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
