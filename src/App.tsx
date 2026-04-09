import myAvatar from "./my-avatar.jpg";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  Download, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone,
  LayoutTemplate, 
  Terminal, 
  Lightbulb,
  Linkedin,
  Github,
  Dribbble,
  X,
  ExternalLink,
  Layers,
  ArrowUp,
  Send,
  Check,
  MessageSquare,
  Globe,
  Code2,
  Palette,
  ChevronDown,
  FileText,
  Database,
  BarChart3,
  Cpu
} from "lucide-react";
import Curator from "./Curator";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const experiences = [
  {
    period: "10/2023 — 12/2025",
    role: "Junior Project Management Specialist",
    company: "Institute for Standards and Quality Development Studies (ISSQ) - Vietnam",
    description: "Systematizing operational workflows through advanced spreadsheet modeling and data analysis to ensure audit compliance and accelerate project delivery.",
    active: true
  },
  {
    period: "06/2023 — 08/2023",
    role: "Education Consultant",
    company: "Marathon Education (MRT) - Vietnam",
    description: "Crafting high-fidelity components and interactive prototypes for a leading digital banking solution used by 2M+ users.",
    active: false
  },
  {
    period: "06/2022 — 06/2023",
    role: "Fresher Productivity and Quality Tools Consultant",
    company: "SMEs Development Support Center 2 (SMEDEC 2) - Vietnam",
    description: "Leveraging operational data and continuous improvement frameworks (5S/Kaizen) to optimize quality management systems and ensure data integrity for SME clients.",
    active: false
  }
];

const skills = [
  {
    title: "SQL Data Analysis",
    icon: (
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
          <path d="M3 12A9 3 0 0 0 21 12"></path>
        </svg>
      </div>
    ),
    tags: ["DML Commands", "Window Functions", "Cohort Analysis", "Data Retrieval", "Query Optimization"]
  },
  {
    title: "Data Visualization",
    icon: (
      <div className="w-12 h-12 flex items-center justify-center bg-[#F2C811]/10 rounded-xl">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F2C811]">
          <path d="M11 12h3V21h-3v-9zm5-4h3V21h-3V8zm5-4h3V21h-3V4zM6 16h3V21H6v-5zm-5 4h3V21H1v-1z"/>
        </svg>
      </div>
    ),
    tags: ["Power BI Dashboards", "DAX Formulas", "Data Storytelling", "Interactive Reports", "Visual Analytics"]
  },
  {
    title: "Python Data Science",
    icon: (
      <div className="w-12 h-12 flex items-center justify-center bg-[#3776AB]/10 rounded-xl">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3776AB]">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.38.31-.58.23-.51.13-.57.07-.64.03H11.2V9.33H15V8.5H11.2V7.67H15V6.83H11.2V6H15V5.17H11.2V4.33H15V3.5H11.2V2.67H15V1.83H11.2V1H15V.17H11.2V0h3.05l.2.18zm-5.96 6.19l.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13v4.02l-.05.63-.13.55-.21.46-.26.38-.38.31-.58.23-.51.13-.57.07-.64.03H5.48v-1.34h3.8V11.5H5.48v-.83h3.8v-.84H5.48v-.83h3.8v-.84H5.48v-.83h3.8v-.84H5.48v-.83h3.8v-.84H5.48v-.83h3.8V6h-3.05l-.2-.18-.9-.2-.73-.26z" transform="scale(0.8) translate(3, 3)"/>
        </svg>
      </div>
    ),
    tags: ["Pandas/NumPy", "Scikit-Learn", "EDA & Data Cleaning", "ML Forecasting", "Data Correlation"]
  }
];

const projects = [
  {
    id: 2,
    title: "Flux Dashboard",
    description: "A high-performance analytics engine focused on real-time data streaming.",
    link: "https://example.com/flux",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzM-aBjt_Y0Z0yo7TOz7V2C5peGewsIqx12ifKEIA7lVMXpcpJ2KkFOXLf8lBgmSWCi4SR95wDYAcXHEXzGCbHYY9Tf__1IdcQs92PExUYcpDzwUCn-5rwOLm_NE4CBlIZWD4563Rt6hRsRDZAqWTZ9kIKKh02hM-b0zeQYaxY42araHg6Gq7T3xDypcoz21hzBYqIPk1ucFUmNnHV6DhO-1yny3VhNUfBoYOvIGrPE_7_6P7iPvE4MS_SWdv0tiEqLboyvxXGEEoN",
    tech: ["React", "D3.js", "WebGL", "TypeScript"],
    role: "Lead Frontend Engineer",
    year: "2023"
  },
  {
    id: 3,
    title: "Nexus Core",
    description: "Decentralized asset management protocol designed for cross-chain liquidity.",
    link: "https://example.com/nexus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTh9fPSzgWmm_r5D8T5iOGtwf-F1pC7P2-SK05IY_q5M5xalCej86hT3a5cOGSiCLuYX3f_7RsPLqn8Jaywqgqi3kmQYvYFYJIJSxHF5F4S1vRMinMnaSRJ-e3NyIek0pH4SjBlue2OGgMBFJSiFrIBhdOsvMjRTFYjWQ36hjDtYAJq0D_2kp9rA3hGT4Yru3NPVtjl3cyccaKnHFDahZV9nyXlWLeTksnTCEsdHxtwX_OFalTJr811jtMKJkdzoON2bjq-XVmuts",
    tech: ["Next.js", "Ethers.js", "Solidity", "Framer Motion"],
    role: "Product Designer & Dev",
    year: "2024"
  }
];

function Portfolio() {
  const [activeLink, setActiveLink] = useState("Home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+84");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct mailto link
    const subject = `New Portfolio Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${countryCode} ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:hoangquan0269@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after a delay
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const countryCodes = [
    { code: "+84", name: "VN" },
    { code: "+1", name: "US" },
    { code: "+44", name: "UK" },
    { code: "+81", name: "JP" },
    { code: "+82", name: "KR" },
    { code: "+65", name: "SG" },
    { code: "+61", name: "AU" },
  ];

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const char = { 3: "-", 6: "-" };
    let formatted = "";
    for (let i = 0; i < numbers.length; i++) {
      formatted += (char[i as keyof typeof char] || "") + numbers[i];
    }
    return formatted.slice(0, 11); // Limit to 9 digits + 2 hyphens
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const link = navLinks.find(l => l.id === sectionId);
          if (link) {
            setActiveLink(link.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="min-h-screen bg-surface-container-lowest">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tighter text-slate-900 font-headline cursor-pointer"
          >
            Portfolio
          </motion.span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`font-headline tracking-tight text-sm font-semibold transition-all duration-200 ${
                  activeLink === link.name 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="signature-gradient text-white px-6 py-2.5 rounded-full font-headline text-sm font-medium hover:opacity-90 active:scale-95 duration-200 transition-all"
          >
            Hire Me
          </motion.button>
        </div>
      </nav>

      <main>
        <section id="home" className="min-h-screen flex items-center pt-20 px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 z-10"
            >
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Data Analyst</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6">
                Hoang Phuong Quan <span className="text-primary italic">The Inquisitive</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Transforming curiosity into actionable insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="https://drive.google.com/file/d/1uQ2v4cxwU30tub0QvbnZGSzX4SslXdTY/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="signature-gradient text-white px-8 py-4 rounded-full font-headline font-bold flex items-center gap-2 hover:opacity-95 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
                <Link to="/curator">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold hover:bg-surface-container-high transition-all"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 relative"
            >
              <div className="aspect-square rounded-full overflow-hidden bg-surface-container-low relative border-8 border-white shadow-2xl">
                <img src={myAvatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-20">Professional Odyssey</h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(0, 62, 199, 0.02)" }}
                  viewport={{ once: true }}
                  transition={{ 
                    x: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.5, delay: idx * 0.1 }
                  }}
                  className="flex gap-8 group p-6 rounded-2xl transition-colors duration-300 cursor-default"
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${exp.active ? 'bg-primary border-primary' : 'border-slate-300 group-hover:border-primary'}`} 
                    />
                    <div className="w-0.5 h-full bg-slate-100 group-last:hidden" />
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.period}</span>
                    <h3 className="font-headline text-xl font-bold mt-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-sm font-semibold text-slate-500 mb-4">{exp.company}</p>
                    <p className="text-on-surface-variant leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-20">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl border border-outline-variant/10 shadow-sm h-full"
                >
                  <div className="mb-6">{skill.icon}</div>
                  <h3 className="font-headline text-xl font-bold mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 62, 199, 0.1)", color: "#003EC7" }}
                        className="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full cursor-default transition-colors duration-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-20">Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden ambient-shadow border border-outline-variant/10 shadow-sm transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      {project.link.startsWith('/') ? (
                        <Link to={project.link} className="hover:text-primary transition-colors">
                          <h3 className="font-headline text-xl font-bold tracking-tight">{project.title}</h3>
                        </Link>
                      ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          <h3 className="font-headline text-xl font-bold tracking-tight">{project.title}</h3>
                        </a>
                      )}
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded">{project.year}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-8 line-clamp-2">{project.description}</p>
                    {project.link.startsWith('/') ? (
                      <Link 
                        to={project.link}
                        className="flex items-center gap-2 text-sm font-bold font-headline text-slate-900 group/btn"
                      >
                        View Details <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Link>
                    ) : (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold font-headline text-slate-900 group/btn"
                      >
                        View Details <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-20">Connect with Me</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side: Contact Info */}
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-bold mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Mail, label: "Email", value: "hoangquan0269@gmail.com", link: "mailto:hoangquan0269@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+84 395 502 249", link: "tel:+84395502249" },
                    { icon: Linkedin, label: "LinkedIn", value: "Hoàng Quân", link: "https://www.linkedin.com/in/hoangquan1112/" },
                    { icon: FileText, label: "Resume", value: "Download CV", link: "https://drive.google.com/file/d/1uQ2v4cxwU30tub0QvbnZGSzX4SslXdTY/view?usp=sharing" }
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      target={item.link.startsWith('http') ? "_blank" : undefined}
                      rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -5 }}
                      className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-primary/20 transition-all shadow-sm group"
                    >
                      <item.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="font-bold text-slate-700">{item.value}</p>
                    </motion.a>
                  ))}
                </div>
                <div className="pt-8">
                  <p className="text-slate-500 leading-relaxed italic">
                    "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                  </p>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-10 h-10" />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-slate-900 mb-2">Message Prepared!</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      Your email client has been opened with your message. Please click "Send" in your email app to finish.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-primary font-bold text-sm uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <div className="flex gap-3">
                        <div className="relative min-w-[100px]">
                          <select 
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-full h-full px-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-700 appearance-none cursor-pointer font-bold"
                          >
                            {countryCodes.map((c) => (
                              <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                        <input 
                          type="text" 
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="123-456-789"
                          className="flex-1 px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-700 font-mono tracking-wider"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                      <textarea 
                        rows={4} 
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project..."
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-700 resize-none"
                      ></textarea>
                    </div>

                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full signature-gradient text-white py-5 rounded-2xl font-headline font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      {isSubmitting ? "Preparing..." : "Send Message"}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-20 text-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 mx-auto font-bold text-sm uppercase tracking-widest"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Home
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">© 2026 Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.a 
              href="https://www.linkedin.com/in/hoang-phuong-quan/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              className="text-slate-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://github.com/hoaQuann" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#333" }}
              className="text-slate-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="mailto:hoangquan0269@gmail.com"
              whileHover={{ scale: 1.2, color: "#EA4335" }}
              className="text-slate-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full signature-gradient text-white shadow-lg"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/curator" element={<Curator />} />
    </Routes>
  );
}
