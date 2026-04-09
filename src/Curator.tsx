import myAvatar from "./my-avatar.jpg";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  Download, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
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
  MousePointer2,
  Database,
  BarChart3,
  Search
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const projects = [
  {
    id: 1,
    title: "Flux Dashboard",
    description: "A high-performance analytics engine focused on real-time data streaming for fintech platforms.",
    link: "https://example.com/flux",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzM-aBjt_Y0Z0yo7TOz7V2C5peGewsIqx12ifKEIA7lVMXpcpJ2KkFOXLf8lBgmSWCi4SR95wDYAcXHEXzGCbHYY9Tf__1IdcQs92PExUYcpDzwUCn-5rwOLm_NE4CBlIZWD4563Rt6hRsRDZAqWTZ9kIKKh02hM-b0zeQYaxY42araHg6Gq7T3xDypcoz21hzBYqIPk1ucFUmNnHV6DhO-1yny3VhNUfBoYOvIGrPE_7_6P7iPvE4MS_SWdv0tiEqLboyvxXGEEoN",
    tech: ["React", "D3.js", "WebGL", "TypeScript", "Tailwind"],
    role: "Lead Frontend Engineer",
    year: "2023"
  },
  {
    id: 2,
    title: "Nexus Core",
    description: "Decentralized asset management protocol designed for cross-chain liquidity and transparency.",
    link: "https://example.com/nexus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTh9fPSzgWmm_r5D8T5iOGtwf-F1pC7P2-SK05IY_q5M5xalCej86hT3a5cOGSiCLuYX3f_7RsPLqn8Jaywqgqi3kmQYvYFYJIJSxHF5F4S1vRMinMnaSRJ-e3NyIek0pH4SjBlue2OGgMBFJSiFrIBhdOsvMjRTFYjWQ36hjDtYAJq0D_2kp9rA3hGT4Yru3NPVtjl3cyccaKnHFDahZV9nyXlWLeTksnTCEsdHxtwX_OFalTJr811jtMKJkdzoON2bjq-XVmuts",
    tech: ["Next.js", "Ethers.js", "Solidity", "Framer Motion", "Radix UI"],
    role: "Product Designer & Dev",
    year: "2024"
  },
  {
    id: 3,
    title: "Lumina App",
    description: "Hyper-minimalist productivity application focused on deep work and intentional focus cycles.",
    link: "https://example.com/lumina",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKvoJPhyxA6pjpSfN_zN9mnBMRLyzafqxXXE0y8Z3ILf9iZdoC31tk1G-cLjgg5yEZ0HjARG3ZlfilcN3aALJgA2avovGgarJFQOyJ6Hv5udi1xygIPX6Dh2I924-6GU3tGhnlVwJxHyWx8XVJGvLuQ9Lj0Qs_ZKQrcTaE7-R6xp-cGF_UazcwLmlEykSisDbL4lJvuCPw4iWEsINZ9tvKNQPdUB_L3z0Nyp7khfow0dqLPp36OEIG2mL-OKx9ZdFuUck0doXqTGmA",
    tech: ["React Native", "Node.js", "PostgreSQL", "Web Audio API"],
    role: "Full Stack Architect",
    year: "2023"
  }
];

export default function Curator() {
  const [activeLink, setActiveLink] = useState("Home");
  const [showBackToTop, setShowBackToTop] = useState(false);

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
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900 font-headline cursor-pointer">
            Hoang Phuong Quan
          </Link>
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
          <Link 
            to="/"
            className="bg-surface-container-highest text-on-surface px-6 py-2.5 rounded-full font-headline text-sm font-medium hover:opacity-90 active:scale-95 duration-200 transition-all"
          >
            Back to Portfolio
          </Link>
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
                Transforming curiosity into <span className="text-primary italic">actionable insights</span>.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                I bridge the gap between raw data and strategic decisions, crafting narratives that reveal the hidden truth within numbers.
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
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low relative">
                <img 
                  alt="Professional Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src={myAvatar}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={myAvatar} 
                    alt="The Analyst" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tighter mb-8">The Analyst's Journey</h2>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>
                    My journey didn't start with complex algorithms. It began with a simple question: "Why?" I've always been obsessed with the patterns that govern our world—how a small change in process can lead to a massive shift in outcome.
                  </p>
                  <p>
                    As I delved deeper into project management and quality consulting, I realized that data is the most powerful tool for change. A spreadsheet isn't just a grid; it's a map of possibilities. I transitioned into data analysis to help organizations navigate their own landscapes with clarity and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-20">Core Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-12 rounded-2xl border border-outline-variant/10 shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center text-primary mb-6">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Inquisitive Mindset</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  I believe every data point has a story to tell. My goal is to ask the right questions to uncover the most impactful narratives.
                </p>
              </div>
              <div className="bg-primary p-12 rounded-2xl text-white shadow-xl">
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Actionable Clarity</h3>
                <p className="opacity-90 leading-relaxed">
                  Data is only valuable if it leads to action. I focus on delivering insights that are clear, concise, and ready to implement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="bg-white rounded-[2rem] p-12 md:p-20 shadow-sm border border-outline-variant/10 text-center">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">Let's build something lasting.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
                <Link 
                  to="/"
                  className="bg-primary text-white px-10 py-4 rounded-full font-headline font-bold"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">© 2026 Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.a 
              href="https://www.linkedin.com/in/hoangquan1112/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              className="text-slate-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://github.com/hoaQuann/" 
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
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full signature-gradient text-white shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
