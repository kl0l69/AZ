import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Target, 
  Cpu, 
  BarChart3, 
  DollarSign, 
  GraduationCap,
  ChevronDown,
  Zap,
  Shield,
  Wifi,
  Activity,
  CheckCircle,
  ArrowRight,
  Crown,
  Star,
  MousePointer,
  Cpu as CpuIcon,
  Cable
} from 'lucide-react';

import Navigation from './components/Navigation';
import AnimatedSection from './components/AnimatedSection';
import ScrollToTop from './components/ScrollToTop';
import Typewriter from './components/Typewriter';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'abstract', 'problem', 'objectives', 'methodology', 'results', 'cost', 'team', 'future', 'acknowledgement'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    { name: "Mohamed Hussein ", id: "ARSINEK", role: "Team Leader" },
    { name: "Youssef Samir Mohamed", id: "2421480", role: "Member" },
    { name: "Mostafa Mohamed Rashad", id: "2421205", role: "Software Leader" },
    { name: "Mohamed Ibrahim Freig", id: "2420958", role: "Hardware Leader" },
    { name: "Mohamed Elsaid Abdel Fattah", id: "2420976", role: "Member" },
    { name: "Yahya Reda", id: "2421430", role: "Member" },
    { name: "Omar Wageeh", id: "2420848", role: "Software Leader" },
    { name: "Adel Mahmoud", id: "2420647", role: "Member" },
    { name: "Ahmed Adnan", id: "2420219", role: "Member" },
    { name: "Omar Mohamed", id: "2420838", role: "Member" },
    { name: "Ziad Ahmed Abdel Hamid", id: "2420495", role: "Member" },
    { name: "Ammar Atiya Hassan Abdel Barakat", id: "2420811", role: "Member" },
    { name: " Mohamed Mahboub", id: "2421089", role: "Hardware Leader" },
    { name: "Mahmoud Hassan", id: "2421129", role: "Member" },
    { name: "Saleh Mahrous Ahmed El-Sayed", id: "2420629", role: "Member" },
    { name: "Mohamed Hany", id: "2421105", role: "Member" },
    { name: "Yousef Khamees Safar", id: "2421474", role: "Member" },
    { name: "Nourhan Hany Abdel Fadil", id: "2421367", role: "Member" },
    { name: "Omnia Ahmed Mohamed Hassan", id: "2421540", role: "Member" },
    { name: "Rehab Raslan Saad", id: "2420430", role: "Member" },
    { name: "Yara Ali", id: "2421415", role: "Member" },
    { name: "Judy Samy Ragab Arafah", id: "2420330", role: "Member" },
    { name: "Saeeda Abdelmoty", id: "2420537", role: "Member" },
    { name: "Habiba Yahya Mohamed", id: "2420368", role: "Software Leader" },
    { name: "Shiamaa Rady", id: "2420620", role: "Member" },
    { name: "Noura Abdallah Thabet", id: "2421354", role: "Software Leader" },
    { name: "Eman Raafat", id: "2420176", role: "Member" },
    { name: "Amira Saad Abdelaziz", id: "2420158", role: "Member" },
    { name: "Hady Ragab Abdelgawad", id: "2421384", role: "Member" }
  ];

  const costBreakdown = [
    { item: "ESP32", cost: "400" },
    { item: "Vibration Motors (x45)", cost: "1800" },
    { item: "Air Mattress", cost: "1200" },
    { item: "Motor Driver Modules", cost: "600" },
    { item: "Foam Head Pillow", cost: "700" },
    { item: "Power Supply Unit", cost: "1000" },
    { item: "Custom Bed Frame", cost: "4000" },
    { item: "Soundproof Foam", cost: "300" },
    { item: "Misc. Components", cost: "700" },
    { item: "Breadboards", cost: "200" },
    { item: "Switches/Buttons", cost: "20" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 parallax-bg relative overflow-hidden" 
               style={{ 
                 background: 'linear-gradient(135deg, var(--color-background) 0%, #E6FFFA 100%)',
                 minHeight: '100vh',
                 display: 'flex',
                 alignItems: 'center',
                 position: 'relative'
               }}>
       
        <div className="pointer-events-none absolute inset-0 z-0">
          
          <MousePointer className="absolute left-2 top-2 sm:left-8 sm:top-8 text-blue-400 opacity-30 animate-bounce" size={36} />
          <CpuIcon className="absolute right-4 top-1/4 sm:right-10 sm:top-1/3 text-green-400 opacity-25 animate-spin-slow" size={44} />
          <Cable className="absolute left-1/4 bottom-4 sm:left-1/3 sm:bottom-8 text-pink-400 opacity-25 animate-pulse" size={40} />
          <CpuIcon className="absolute left-1/6 top-1/2 text-yellow-400 opacity-20 animate-spin-slow hidden sm:block" size={32} />
          <MousePointer className="absolute right-1/5 bottom-8 text-indigo-400 opacity-20 animate-float hidden sm:block" size={32} />
          {/* Extra icons for more dynamic effect */}
          <CpuIcon className="absolute left-1/2 top-1/6 text-purple-400 opacity-15 animate-float-fast hidden md:block" size={28} />
          <MousePointer className="absolute right-1/2 bottom-1/6 text-cyan-400 opacity-15 animate-bounce hidden md:block" size={24} />
          <Cable className="absolute left-1/5 top-1/4 text-pink-200 opacity-10 animate-float-slow hidden md:block" size={28} />
          {/* Animated code lines in the background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[16%] w-[95vw] max-w-2xl flex flex-col gap-1 opacity-10 select-none z-0">
            <div className="font-mono text-xs sm:text-sm md:text-base bg-black/20 rounded px-2 py-1 mb-1 whitespace-nowrap overflow-x-auto text-white rotate-2">for i in range(10): print(i)</div>
            <div className="font-mono text-xs sm:text-sm md:text-base bg-black/20 rounded px-2 py-1 mb-1 whitespace-nowrap overflow-x-auto text-white -rotate-2">digitalWrite(pin, HIGH)  # Activate motor</div>
            <div className="font-mono text-xs sm:text-sm md:text-base bg-black/20 rounded px-2 py-1 mb-1 whitespace-nowrap overflow-x-auto text-white rotate-3">if (pressure &gt; threshold): alert()</div>
            <div className="font-mono text-xs sm:text-sm md:text-base bg-black/20 rounded px-2 py-1 mb-1 whitespace-nowrap overflow-x-auto text-white -rotate-3">#define ESP32 1</div>
            <div className="font-mono text-xs sm:text-sm md:text-base bg-black/20 rounded px-2 py-1 mb-1 whitespace-nowrap overflow-x-auto text-white rotate-1">print('TEAM AZ rocks!')</div>
          </div>
        </div>


        <div className="container relative z-10">
          <div className="text-center">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
                <GraduationCap className="h-4 w-4 text-[var(--color-secondary)] animate-bounce" />
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: 1 }}>Project 2025/2026</span>
              </div>
            </AnimatedSection>
            

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mb-10 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.1 21.35l-1.1-1.02C5.14 15.14 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.14 6.64-8.9 11.83l-1 1.02z"/>
                  </svg>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg uppercase tracking-wider">LIFE BED</span>
                </div>
               
                <div className="w-full flex justify-center z-10 relative mt-4 mb-2">
                  <div className="bg-black/90 rounded-lg shadow-lg border border-gray-800 px-6 py-4 flex flex-col gap-2 font-mono text-sm sm:text-base opacity-95 animate-fade-in backdrop-blur-md max-w-xl w-full">
                    <div className="flex items-center"><span className="text-green-400">&gt;&gt;&gt;</span>&nbsp;<span className="text-white animate-typewriter">print('Welcome to AZ website!')</span></div>
                    <div className="flex items-center"><span className="text-green-400">output:</span>&nbsp;<span className="text-yellow-200 animate-fade-in">كل شخص من التيم بيدحرج السلام</span></div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-medium text-gray-700 mt-2 text-center">Smart Therapeutic Bed System</div>
                <div className="mt-2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 text-center">
                  Revolutionary IoT-based therapeutic bed designed to enhance recovery and comfort for bedridden patients through intelligent vibration therapy and pressure relief systems.
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="card flex items-center space-x-2 px-4 py-2">
                  <Cpu className="h-5 w-5 text-[var(--color-secondary)]" />
                  <span style={{ color: 'var(--color-text-primary)' }} className="font-medium">ESP32 Powered</span>
                </div>
                <div className="card flex items-center space-x-2 px-4 py-2">
                  <Wifi className="h-5 w-5 text-[var(--color-secondary)]" />
                  <span style={{ color: 'var(--color-text-primary)' }} className="font-medium">IoT Enabled</span>
                </div>
                <div className="card flex items-center space-x-2 px-4 py-2">
                  <Heart className="h-5 w-5 text-[var(--color-accent)]" />
                  <span style={{ color: 'var(--color-text-primary)' }} className="font-medium">Patient Care</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={1000}>
              <div className="text-center mb-8">
                <p style={{ color: 'var(--color-text-secondary)' }} className="mb-2">Faculty of Industrial and Energy Technology</p>
                <p style={{ color: 'var(--color-text-muted)' }} className="text-sm">Academic Year 2025/2026</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={1200}>
              <button
                onClick={() => scrollToSection('abstract')}
                className="btn-primary"
              >
                <span>Explore Project</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12 relative">
              <Heart className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Abstract</h2>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 font-bold animate-pulse">Prof. Osama El-Nahhas</span>
                <span className="px-2 py-1 rounded bg-purple-100 text-purple-800 font-bold animate-pulse">Assistant Lecturer Amany El-Deeb</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Comprehensive overview of our innovative therapeutic bed system
              </p>
              {/* Animated hardware icons background (no cable near doctor names) */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <MousePointer className="absolute left-10 top-10 text-blue-300 opacity-30 animate-bounce" size={48} />
                <CpuIcon className="absolute right-20 top-32 text-green-300 opacity-30 animate-spin-slow" size={56} />
                <CpuIcon className="absolute left-1/4 top-1/2 text-yellow-300 opacity-20 animate-spin-slow" size={40} />
                <MousePointer className="absolute right-1/3 bottom-20 text-indigo-300 opacity-20 animate-bounce" size={36} />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="card p-8 lg:p-12" style={{ 
              background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
              border: '1px solid var(--color-secondary)'
            }}>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                This project presents the design and development of a smart therapeutic bed equipped with advanced vibration therapy, dynamic pressure relief via air mattress technology, and intelligent monitoring through ESP32 microcontroller integration. The system aims to significantly enhance the recovery process and comfort of patients confined to long-term bed rest by addressing critical health challenges including muscle contractures, pressure ulcers, and reduced blood circulation. Our solution integrates cutting-edge IoT technology with medical care to provide a non-invasive, cost-effective alternative to traditional therapeutic interventions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Problem Statement</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Critical health challenges facing bedridden patients today
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="slide-left">
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>Major Health Complications</h3>
                <div className="space-y-4">
                  {[
                    { title: "Partial Paralysis", desc: "Limited mobility leading to muscle deterioration" },
                    { title: "Muscle Stiffness", desc: "Severe contractures affecting quality of life" },
                    { title: "Pressure Ulcers", desc: "Painful skin breakdown from prolonged pressure" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                      <div>
                        <h4 className="font-medium" style={{ color: 'var(--color-primary)' }}>{item.title}</h4>
                        <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right">
              <div className="card p-8" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Current Solutions Gap</h3>
                <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  Existing therapeutic solutions for bedridden patients are either prohibitively expensive, 
                  inefficient in addressing multiple complications simultaneously, or require extensive manual 
                  intervention from healthcare providers.
                </p>
                <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                  <p className="font-medium" style={{ color: 'var(--color-primary)' }}>
                    A smarter, more integrated, and cost-effective system is urgently needed to provide 
                    comprehensive care for long-term bedridden patients.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Project Objectives</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Our mission to revolutionize patient care through intelligent technology
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Muscle Relaxation", desc: "Use precision vibration motors to effectively relax muscles and reduce stiffness", color: 'var(--color-secondary)' },
              { icon: Shield, title: "Pressure Prevention", desc: "Prevent pressure ulcers with dynamic air mattress technology", color: 'var(--color-secondary)' },
              { icon: Wifi, title: "Smart Monitoring", desc: "Provide IoT-based monitoring and wireless control capabilities", color: 'var(--color-secondary)' },
              { icon: Heart, title: "Patient Comfort", desc: "Enhance overall patient experience with comfort-focused design", color: 'var(--color-accent)' }
            ].map((objective, index) => {
              const Icon = objective.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="card card-interactive p-6 h-full">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                         style={{ backgroundColor: `${objective.color}20` }}>
                      <Icon className="h-6 w-6" style={{ color: objective.color }} />
                    </div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{objective.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">{objective.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <Cpu className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Methodology</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Comprehensive approach combining advanced hardware and intelligent software
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-left">
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center" style={{ color: 'var(--color-primary)' }}>
                  <Cpu className="h-6 w-6 mr-2" style={{ color: 'var(--color-secondary)' }} />
                  Hardware Components
                </h3>
                <div className="space-y-4">
                  {[
                    "ESP32 Microcontroller - Central processing unit",
                    "45 DC Vibration Motors - Therapeutic stimulation",
                    "Dynamic Air Mattress - Pressure distribution",
                    "Foam Head Pillow - Comfort enhancement",
                    "Custom Bed Frame - Structural foundation"
                  ].map((component, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg" 
                         style={{ backgroundColor: 'var(--color-background)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
                      <span style={{ color: 'var(--color-text-primary)' }}>{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection animation="slide-right">
                <div className="card p-8" style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)' }}>
                  <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'var(--color-primary)' }}>
                    <Zap className="h-6 w-6 mr-2" style={{ color: 'var(--color-secondary)' }} />
                    Software Development
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    Developed using Arduino IDE with real-time control algorithms and wireless interface capabilities 
                    for seamless patient and caregiver interaction.
                  </p>
                  <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <div className="space-y-1">
                      {["Real-time vibration control", "Wireless connectivity", "User-friendly interface"].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" style={{ color: 'var(--color-secondary)' }} />
                          <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-right" delay={200}>
                <div className="card p-8" style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)' }}>
                  <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'var(--color-primary)' }}>
                    <BarChart3 className="h-6 w-6 mr-2" style={{ color: 'var(--color-secondary)' }} />
                    Testing & Validation
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                    Comprehensive internal team simulations, noise reduction improvements, and component tuning 
                    to ensure optimal performance and patient safety.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <BarChart3 className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Experimental Results</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Promising outcomes from comprehensive testing and validation
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "Initial Success", desc: "Successful initial testing with positive internal team feedback", color: 'var(--color-secondary)' },
              { icon: Zap, title: "Enhanced Vibration", desc: "Vibration strength significantly improved after hardware upgrades", color: 'var(--color-secondary)' },
              { icon: Shield, title: "Noise Reduction", desc: "Operational noise effectively mitigated through foam insulation", color: 'var(--color-secondary)' },
              { icon: Activity, title: "Clinical Potential", desc: "Recommended for further clinical testing and validation", color: 'var(--color-accent)' }
            ].map((result, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <div className="card card-interactive p-6 text-center h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: `${result.color}20` }}>
                    {typeof result.icon === 'string' ? (
                      <span className="text-2xl font-bold" style={{ color: result.color }}>{result.icon}</span>
                    ) : (
                      <result.icon className="h-8 w-8" style={{ color: result.color }} />
                    )}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{result.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">{result.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section id="cost" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <DollarSign className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Cost Breakdown</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Comprehensive financial analysis of project components
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="card overflow-hidden">
              {/* Timeline style for cost breakdown */}
              <div className="relative flex flex-col gap-8 py-8 px-2 before:content-[''] before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-green-300 before:to-blue-300">
                {costBreakdown.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6 group">
                    <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border-2 border-blue-200 group-hover:scale-110 transition-transform">
                      {/* Example icons: DollarSign, CpuIcon, MousePointer, etc. Use different icons for variety */}
                      {index % 3 === 0 ? <DollarSign className="text-green-500 w-7 h-7" /> : index % 3 === 1 ? <CpuIcon className="text-blue-500 w-7 h-7" /> : <MousePointer className="text-purple-500 w-7 h-7" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-[var(--color-primary)] flex items-center gap-2">
                        <span>{item.item}</span>
                        <span className="bg-gradient-to-r from-green-200 to-blue-200 text-xs px-2 py-0.5 rounded-full animate-fade-in font-mono shadow-md border border-blue-100">{parseInt(item.cost).toLocaleString()} <span className="text-blue-700 font-bold">LE</span></span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Total at the end */}
                <div className="relative flex items-center gap-6 mt-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-400 shadow-lg border-2 border-green-300">
                    <DollarSign className="text-white w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl text-[var(--color-primary)]">Total Project Cost</div>
                    <div className="text-right font-bold text-[var(--color-secondary)]">11,020 LE</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium" 
                   style={{ backgroundColor: `${CSS.supports('color', 'var(--color-secondary)') ? 'var(--color-secondary)' : '#38A169'}20`, color: 'var(--color-secondary)' }}>
                <span>Final Project Cost</span>
                <span>•</span>
                <span className="font-bold text-green-700">11,020 LE</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Our Team</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Dedicated individuals working together to revolutionize patient care
              </p>
            </div>
          </AnimatedSection>
          
          {/* Supervisors */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>Project Supervisors</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="card card-interactive p-6 text-center" style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: `${CSS.supports('color', 'var(--color-secondary)') ? 'var(--color-secondary)' : '#38A169'}20` }}>
                    <GraduationCap className="h-8 w-8" style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Prof. Osama El-Nahhas</h4>
                  <p className="font-medium" style={{ color: 'var(--color-secondary)' }}>Project Supervisor</p>
                </div>
                <div className="card card-interactive p-6 text-center" style={{ background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: `${CSS.supports('color', 'var(--color-accent)') ? 'var(--color-accent)' : '#F6AD55'}20` }}>
                    <GraduationCap className="h-8 w-8" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>Assistant Lecturer Amany El-Deeb</h4>
                  <p className="font-medium" style={{ color: 'var(--color-accent)' }}>Co-Supervisor</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Team Members */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--color-primary)' }}>Team Members</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {teamMembers.map((member, index) => {
                  // Special styles for leaders
                  let isTeamLeader = member.role === 'Team Leader';
                  let isSoftwareLeader = member.role === 'Software Leader';
                  let isHardwareLeader = member.role === 'Hardware Leader';
                  let leader = isTeamLeader || isSoftwareLeader || isHardwareLeader;
                  let leaderBg = isTeamLeader
                    ? 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)'
                    : isSoftwareLeader
                      ? 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
                      : isHardwareLeader
                        ? 'linear-gradient(135deg, #FEE2E2 0%, #FCA5A5 100%)'
                        : 'var(--color-surface)';
                  let borderColor = isTeamLeader
                    ? 'var(--color-accent)'
                    : isSoftwareLeader
                      ? '#2563eb' // blue-600
                      : isHardwareLeader
                        ? '#dc2626' // red-600
                        : 'transparent';
                  let icon = isTeamLeader
                    ? <Crown className="w-4 h-4 mr-1 inline animate-bounce" style={{ color: 'var(--color-accent)' }} />
                    : isSoftwareLeader
                      ? <Star className="w-4 h-4 mr-1 inline animate-spin-slow" style={{ color: '#2563eb' }} />
                      : isHardwareLeader
                        ? <Shield className="w-4 h-4 mr-1 inline animate-pulse" style={{ color: '#dc2626' }} />
                        : null;
                  let leaderLabel = isTeamLeader
                    ? 'Team Leader'
                    : isSoftwareLeader
                      ? 'Software Leader'
                      : isHardwareLeader
                        ? 'Hardware Leader'
                        : null;
                  let circleBg = isTeamLeader
                    ? `${CSS.supports('color', 'var(--color-accent)') ? 'var(--color-accent)' : '#F6AD55'}20`
                    : isSoftwareLeader
                      ? '#DBEAFE'
                      : isHardwareLeader
                        ? '#FEE2E2'
                        : `${CSS.supports('color', 'var(--color-secondary)') ? 'var(--color-secondary)' : '#38A169'}20`;
                  let circleColor = isTeamLeader
                    ? 'var(--color-accent)'
                    : isSoftwareLeader
                      ? '#2563eb'
                      : isHardwareLeader
                        ? '#dc2626'
                        : 'var(--color-secondary)';
                  return (
                    <AnimatedSection key={index} animation="scale-in" delay={index * 50}>
                      <div className={`card card-interactive p-4 group relative overflow-hidden ${leader ? 'border-2' : ''} hover:scale-105 hover:shadow-2xl transition-all duration-300`}
                        style={{
                          background: leaderBg,
                          borderColor: borderColor,
                          boxShadow: leader ? '0 4px 24px 0 rgba(0,0,0,0.08)' : undefined
                        }}>
                        {/* Dynamic background effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{background: leader ? 'radial-gradient(circle at 60% 40%, #facc15 0%, transparent 70%)' : 'radial-gradient(circle at 60% 40%, #38bdf8 0%, transparent 70%)'}}></div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg transition-transform duration-300 group-hover:scale-125 bg-white/80 border border-blue-100 animate-float-fast`}
                            style={{
                              backgroundColor: circleBg,
                              color: circleColor
                            }}>
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate animate-fade-in" style={{ color: 'var(--color-primary)' }}>{member.name}</h4>
                            <p style={{ color: 'var(--color-text-muted)' }} className="text-xs animate-fade-in">ID: {member.id}</p>
                            {leaderLabel && (
                              <p className="text-xs font-medium flex items-center animate-fade-in" style={{ color: circleColor }}>{icon}{leaderLabel}</p>
                            )}
                          </div>
                        </div>
                        {/* Floating badge for more dynamic look */}
                        <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-400 to-green-400 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md animate-float opacity-80">{index + 1}</span>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Future Work Section */}
      <section id="future" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Future Work</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Roadmap for expanding and enhancing the therapeutic bed system
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Vital Sign Sensors", desc: "Integrate comprehensive vital sign monitoring for real-time health tracking", color: 'var(--color-secondary)' },
              { icon: Wifi, title: "Mobile & Desktop Apps", desc: "Develop comprehensive applications for remote monitoring and control", color: 'var(--color-secondary)' },
              { icon: Target, title: "Actuator Control", desc: "Add automated bed positioning and adjustment capabilities", color: 'var(--color-secondary)' },
              { icon: BarChart3, title: "Analytics Platform", desc: "Implement patient data tracking and analytical insights", color: 'var(--color-accent)' },
              { icon: Users, title: "Industry Partnership", desc: "Collaborate with healthcare industry for commercial production", color: 'var(--color-accent)' },
              { icon: Heart, title: "Clinical Trials", desc: "Conduct comprehensive clinical testing and medical validation", color: 'var(--color-accent)' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="card card-interactive p-6 h-full">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                         style={{ backgroundColor: `${item.color}20` }}>
                      <Icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{item.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section id="acknowledgement" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12 relative">
              <GraduationCap className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Acknowledgement</h2>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 font-bold animate-pulse">Prof. Osama El-Nahhas</span>
                <span className="px-2 py-1 rounded bg-purple-100 text-purple-800 font-bold animate-pulse">Assistant Lecturer Amany El-Deeb</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                Expressing gratitude to those who made this project possible
              </p>
              {/* Animated hardware icons background */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <MousePointer className="absolute left-10 top-10 text-blue-300 opacity-30 animate-bounce" size={48} />
                <CpuIcon className="absolute right-20 top-32 text-green-300 opacity-30 animate-spin-slow" size={56} />
                <CpuIcon className="absolute left-1/4 top-1/2 text-yellow-300 opacity-20 animate-spin-slow" size={40} />
                <MousePointer className="absolute right-1/3 bottom-20 text-indigo-300 opacity-20 animate-bounce" size={36} />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="card p-8 lg:p-12" style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)' }}>
              <p className="text-lg leading-relaxed text-center" style={{ color: 'var(--color-text-primary)' }}>
                We extend our heartfelt gratitude to our esteemed supervisors, <span className="font-bold text-yellow-700 bg-yellow-100 px-1 rounded">Prof. Osama El-Nahhas</span> and 
                <span className="font-bold text-purple-700 bg-purple-100 px-1 rounded">Assistant Lecturer Amany El-Deeb</span>, for their invaluable guidance and expertise. Special thanks 
                to the Faculty of Industrial and Energy Technology, university leadership, our families for 
                their unwavering support, and every dedicated <span className="font-bold text-blue-700 bg-blue-100 px-1 rounded">team member</span> who contributed their skills, time, 
                and passion to make this innovative project a reality. This collaborative effort exemplifies 
                the power of <span className="font-bold text-green-700 bg-green-100 px-1 rounded">teamwork</span> in advancing healthcare technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Arabic Summary Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>الملخص العربي</h2>
              <p style={{ color: 'var(--color-text-secondary)' }} className="max-w-2xl mx-auto">
                ملخص المشروع باللغة العربية
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="card p-8 lg:p-12 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-background) 0%, #E6FFFA 100%)' }}>
              <div className="mb-8 space-y-4" dir="rtl">
                <div className="font-bold text-lg text-green-700">هدف المشروع</div>
                <div className="leading-relaxed text-base text-gray-800">
                  يهدف هذا المشروع إلى تطوير سرير علاجي ذكي يُسهم في تحسين راحة المرضى وتسريع عملية الشفاء من خلال دمج تقنيات العلاج بالاهتزاز وتخفيف الضغط والمراقبة الذكية.
                </div>
                <div className="font-bold text-lg text-blue-700">المميزات الرئيسية</div>
                <ul className="list-disc list-inside text-right pr-4 text-base text-gray-800 space-y-1">
                  <li>تقنية العلاج بالاهتزاز لتحفيز الدورة الدموية وتقليل التقرحات.</li>
                  <li>توزيع الضغط ديناميكياً باستخدام مرتبة هوائية ذكية.</li>
                  <li>مراقبة ذكية لحالة المريض عبر متحكم ESP32.</li>
                  <li>واجهة استخدام سهلة وذكية للطبيب والمريض.</li>
                </ul>
                <div className="font-bold text-lg text-purple-700">الفئة المستهدفة</div>
                <div className="text-base text-gray-800">
                  المرضى ذوو الإقامة الطويلة في المستشفيات أو المنازل، وذوو الاحتياجات الخاصة.
                </div>
              </div>
              {/* Animated hardware icons background - organized at the card corners */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <MousePointer className="absolute left-6 top-6 text-blue-300 opacity-30 animate-bounce" size={38} />
                <CpuIcon className="absolute right-8 top-8 text-green-300 opacity-30 animate-spin-slow" size={44} />
                <CpuIcon className="absolute right-1/4 bottom-8 text-yellow-300 opacity-20 animate-spin-slow" size={32} />
                <MousePointer className="absolute left-1/3 bottom-8 text-indigo-300 opacity-20 animate-bounce" size={28} />
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <a href="https://www.facebook.com/nq704/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-400 text-white shadow-2xl hover:scale-125 hover:shadow-blue-400/60 transition-all duration-300 animate-float ring-4 ring-blue-200 group" aria-label="Facebook Team">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="https://chat.whatsapp.com/EV9UZcW0FzUKEpoTJRE2Nh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-700 to-green-400 text-white shadow-2xl hover:scale-125 hover:shadow-green-400/60 transition-all duration-300 animate-float-fast ring-4 ring-green-200 group" aria-label="WhatsApp Team">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.02 4.23.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <AnimatedSection animation="fade-up">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-8 w-8" style={{ color: 'var(--color-secondary)' }} />
                  <span className="font-bold text-xl animate-gradient-x bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Life Bad</span>
                </div>
                <p className="leading-relaxed opacity-80">
                  Revolutionary smart therapeutic bed system designed to enhance patient care 
                  through innovative IoT technology and medical engineering.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div>
                <h3 className="font-semibold text-lg mb-4">Project Info</h3>
                <ul className="space-y-2 opacity-80">
                  <li>Faculty of Industrial and Energy Technology</li>
                  <li>Academic Year 2025/2026</li>
                  <li className="font-semibold text-[var(--color-secondary)] animate-pulse">Project 2025/2026</li>
                  <li>Total Cost: 11,020 EGP</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <div>
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-2 opacity-80">
                  <li>ESP32 Microcontroller</li>
                  <li>45 Vibration Motors</li>
                  <li>Dynamic Air Mattress</li>
                  <li>IoT Connectivity</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="opacity-80 mb-4">
                © 2025 Developed by أرســـينك | جميع الحقوق محفوظة.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a href="https://www.facebook.com/nq703/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
                  تواصل مع المطور على فيسبوك
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="https://wa.me/201141345223" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition">
                  تواصل مع المطور على واتساب
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.02 4.23.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}

export default App;