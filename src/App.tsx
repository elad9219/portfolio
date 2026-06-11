import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ExternalLink, Code2, Layers, Cpu, X, Monitor, Video, Copy, Check, FileText } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

// Interfaces ensuring type-safety across all components
interface Project {
  title: string;
  subtitle: string;
  achievement: string;
  tech: string[];
  imagePath: string;
  links: {
    githubBackend: string;
    githubFrontend?: string;
    live: string;
    swagger: string;
    videoDemo?: string;
  };
  architecture: {
    description: string;
    flow: string[];
  };
}

const PROJECTS: Project[] = [
  {
    title: 'Travelad',
    subtitle: 'Comprehensive Travel Planning Platform',
    achievement: 'Architected a data-intensive platform aggregating flights, hotels, and attractions, significantly improving load performance by implementing a multi-layered caching mechanism.',
    tech: ['Java', 'Spring Boot', 'React TS', 'PostgreSQL', 'Redis', 'Docker', 'Vercel', 'Geoapify API', 'Wikipedia API'],
    imagePath: '/screenshots/travelad.png',
    links: {
      githubBackend: 'https://github.com/elad9219/travelad-backend',
      githubFrontend: 'https://github.com/elad9219/travelad-frontend',
      live: 'https://travelad.vercel.app/',
      swagger: 'https://traveladd.runmydocker-app.com/swagger-ui.html',
      videoDemo: 'https://www.youtube.com/watch?v=bHFkiX9EYZc'
    },
    architecture: {
      description: 'Self-healing distributed data aggregation and multi-layer volatile/persistent caching matrix.',
      flow: [
        'React TS Frontend captures multi-tile analytical input queries safely.',
        'Spring Boot REST controller filters data fields using localized boundaries.',
        'Redis Layer intercepts queries to immediately resolve active location caching.',
        'Asynchronous lookup engines query Geoapify & Wikipedia APIs simultaneously on cache miss.',
        'Custom Regex pipeline filters incoming Wikipedia text arrays to eliminate non-Latin data pollution.',
        'PostgreSQL persists absolute core configurations and structural transactional definitions.'
      ]
    }
  },
  {
    title: 'Web Search Engine',
    subtitle: 'Distributed Web Crawler & Indexer',
    achievement: 'Optimized text search and retrieval times by implementing continuous web indexing and real-time asynchronous data streaming.',
    tech: ['Java', 'Spring Boot', 'React', 'Apache Kafka', 'Elasticsearch', 'Redis', 'Docker'],
    imagePath: '/screenshots/searchengine.png',
    links: {
      githubBackend: 'https://github.com/elad9219/searchengine',
      githubFrontend: 'https://github.com/elad9219/searchengine-frontend',
      live: 'https://esearchengine.vercel.app/',
      swagger: 'https://search.runmydocker-app.com/swagger-ui.html'
    },
    architecture: {
      description: 'Distributed pub/sub messaging architecture configured for rapid asynchronous parsing and content index indexing.',
      flow: [
        'Multi-threaded Web Crawler targets root nodes based on user boundaries and max limits.',
        'Apache Kafka queue buffers incoming raw HTML stream strings safely across active brokers.',
        'Spring Boot background service consumes topics asynchronously to calculate deep document links.',
        'Redis cache coordinates system state flags and enforces URL deduplication processing arrays.',
        'Elasticsearch cluster indexes tokenized web structures to facilitate instant keyword matching retrieval.'
      ]
    }
  },
  {
    title: 'Coupons Management System',
    subtitle: 'Secure Trading & E-Commerce Platform',
    achievement: 'Developed a comprehensive trading platform connecting companies and customers, governed by an administrator with strict transaction validation patterns.',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Redux Toolkit', 'PostgreSQL', 'Spring Security', 'JWT', 'Material UI'],
    imagePath: '/screenshots/coupons.png',
    links: {
      githubBackend: 'https://github.com/elad9219/coupons-system-backend',
      githubFrontend: 'https://github.com/elad9219/coupons-system-react',
      live: 'https://coupons-gamma.vercel.app/',
      swagger: 'https://coupons.runmydocker-app.com/swagger-ui.html'
    },
    architecture: {
      description: 'Role-Based Access Control architectural design protected by stateless session interceptors and daily background execution automation tasks.',
      flow: [
        'React SPA utilizes customized Axios interceptors to securely attach authorization vectors.',
        'Spring Security pipeline decrypts incoming stateless JSON Web Tokens (JWT).',
        'Service Layer validates company business permissions and customer purchasing capacity.',
        'PostgreSQL Database locks inventory allocations to prevent transactional out-of-stock anomalies.',
        'Scheduled Cron Task runs daily on a background thread to safely clear expired coupon entities.'
      ]
    }
  },
  {
    title: 'TinyURL',
    subtitle: 'High-Scale URL Shortening Service',
    achievement: 'Engineered a High-Availability system capable of handling massive read/write requests, while performing advanced click tracking and real-time analytics.',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MongoDB', 'Redis', 'Cassandra', 'Docker'],
    imagePath: '/screenshots/tinyurl.png',
    links: {
      githubBackend: 'https://github.com/elad9219/tinyurl',
      githubFrontend: 'https://github.com/elad9219/tinyurl-frontend',
      live: 'https://etinyurl.vercel.app/',
      swagger: 'https://surl.runmydocker-app.com/swagger-ui.html'
    },
    architecture: {
      description: 'Heterogeneous storage layout separating relational configuration metadata from massive analytical read write tracking lines.',
      flow: [
        'Short url link endpoint catches inbound incoming redirects inside an internal controller mapping routing.',
        'Redis memory layer instantly intercepts calls to match hot active destination links directly.',
        'MongoDB persists static client records and long/short master mapping configurations.',
        'Cassandra distributed engine captures write-heavy analytical link usage data logs asynchronously.',
        'Frontend aggregation utilities query system schemas to compile monthly traffic analytics charts.'
      ]
    }
  },
  {
    title: 'AI Chatbot',
    subtitle: 'Smart Conversational Agent',
    achievement: 'Built an interactive communication system integrating Natural Language Processing (NLP) with real-time data extraction from external APIs to manage complex conversation flows.',
    tech: ['Java', 'Spring Boot', 'React TS', 'Dialogflow NLU', 'Webhooks', 'Regex', 'Docker'],
    imagePath: '/screenshots/chatbot.png',
    links: {
      githubBackend: 'https://github.com/elad9219/chatbot',
      githubFrontend: 'https://github.com/elad9219/chatbot-frontend',
      live: 'https://eaichat.vercel.app/',
      swagger: 'https://aichat.runmydocker-app.com/swagger-ui.html'
    },
    architecture: {
      description: 'Webhook-driven messaging infrastructure translating natural text into structured third-party remote calls.',
      flow: [
        'React Chat Interface captures streaming content and manages live conversation states.',
        'Spring Boot backend proxies input arrays safely using explicit CORS filters.',
        'Google Dialogflow NLU engine evaluates phrases to extract core entities and intents.',
        'Custom Webhook integrations match context markers to fire external transactional engines.',
        'Advanced Regex algorithms clean incoming strings to ensure valid JSON payload assembly.'
      ]
    }
  }
];

const SKILLS = {
  backend: ['Java', 'Spring Boot', 'Spring Data JPA', 'Python'],
  frontend: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'HTML5', 'CSS3', 'Material UI'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch'],
  devops: ['Git', 'Docker', 'Kafka', 'REST API', 'Swagger', 'AWS', 'Vercel', 'Gemini', 'Cursor']
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('elad9219@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email script parameters', err);
    }
  };

  const sectionVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#0071e3] selection:text-white scroll-smooth">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0a0a0c]/70 border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight cursor-default">Elad Tennenboim</span>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[#0071e3] font-semibold tracking-wide text-lg mb-3"
        >
          Robust Software Architectures
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
        >
          Building scalable logic & microservice systems.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          Software Developer specializing in production-grade backends and dynamic client applications. Dedicated to optimization, caching structures, and messaging queues.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button 
            onClick={handleCopyEmail}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-200 shadow-lg min-w-[160px] justify-center"
          >
            {copied ? (
              <>
                <Check size={18} className="text-emerald-600" /> Email Copied!
              </>
            ) : (
              <>
                <Copy size={18} /> Copy Email
              </>
            )}
          </button>
          <a href="https://www.linkedin.com/in/elad-tennenboim/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#1c1c1e] border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-200">
            <FileText size={18} /> View LinkedIn
          </a>
          <a href="https://github.com/elad9219" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#1c1c1e] border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-all duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg> View GitHub
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-white/5 bg-[#050507]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Professional Summary</h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              Results-driven Software Developer specializing in robust backend architecture and dynamic frontend interfaces[cite: 14]. Proven self-learning capabilities and hands-on experience in the full software development lifecycle, from complex API integrations and database management to cloud containerized deployment[cite: 14].
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Highly focused on writing clean, maintainable code, solving distributed system challenges, and implementing modern storage paradigms including asynchronous query optimization and real-time streaming buffers[cite: 14].
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Portfolio</h2>
          <p className="text-neutral-400 text-lg">Production-grade systems incorporating structured backend layers, message brokers, and optimized storage clusters.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionVariant}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeInOut" } }}
              className="bg-[#1c1c1e] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Visual Presentation Area */}
              <div className="h-56 w-full relative bg-gradient-to-r from-neutral-900 via-zinc-800 to-neutral-900 border-b border-white/5 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.imagePath} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-35 absolute inset-0"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Visual Dark Overlay Mask to resolve low contrast parameters */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-black/40 to-black/20" />

                <div className="relative z-10 flex flex-col items-center gap-2 text-center p-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-md">
                    System Application
                  </span>
                  <p className="text-2xl font-bold tracking-tight text-white drop-shadow-md">{project.title} Workspace</p>
                </div>
              </div>

              {/* Content Specifications */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{project.title}</h3>
                      <p className="text-neutral-400 text-sm mt-1">{project.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-1.5 text-xs font-medium bg-[#0071e3] text-white rounded-full hover:bg-[#0071e3]/90 transition-all duration-200 flex items-center gap-1"
                      >
                        <Cpu size={12} /> View Architecture
                      </button>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 mt-4 border-l-2 border-[#0071e3] pl-4">
                    {project.achievement}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono bg-white/5 text-neutral-400 px-3 py-1.5 rounded-md border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 border-t border-white/5 pt-6 text-sm">
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#0071e3] hover:underline font-medium">
                      <Monitor size={14} /> Live Project
                    </a>
                    {project.links.videoDemo && (
                      <a href={project.links.videoDemo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-amber-400 hover:underline font-medium">
                        <Video size={14} /> Technical Video Demo
                      </a>
                    )}
                    <a href={project.links.swagger} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors duration-200">
                      Swagger Docs
                    </a>
                    <a href={project.links.githubBackend} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors duration-200">
                      Backend Code
                    </a>
                    {project.links.githubFrontend && (
                      <a href={project.links.githubFrontend} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors duration-200">
                        Frontend Code
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 border-t border-white/5 bg-[#050507]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Framework Hierarchy</h2>
            <p className="text-neutral-400 text-lg">Structured engineering capabilities broken down by ecosystem layer.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#1c1c1e] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-[#0071e3]">
                <Cpu size={20} />
                <h3 className="font-semibold text-lg">Backend Core</h3>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                {SKILLS.backend.map((s, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full" />{s}</li>)}
              </ul>
            </div>

            <div className="p-6 bg-[#1c1c1e] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-[#0071e3]">
                <Code2 size={20} />
                <h3 className="font-semibold text-lg">Frontend UI</h3>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                {SKILLS.frontend.map((s, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full" />{s}</li>)}
              </ul>
            </div>

            <div className="p-6 bg-[#1c1c1e] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-[#0071e3]">
                <Layers size={20} />
                <h3 className="font-semibold text-lg">Persistence Layer</h3>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                {SKILLS.databases.map((s, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full" />{s}</li>)}
              </ul>
            </div>

            <div className="p-6 bg-[#1c1c1e] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 text-[#0071e3]">
                <ExternalLink size={20} />
                <h3 className="font-semibold text-lg">DevOps & Tools</h3>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                {SKILLS.devops.map((s, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full" />{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-xs text-neutral-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Elad Tennenboim. All rights reserved.</p>
      </footer>

      {/* Interactive System Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Modal Box Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-[#1c1c1e] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-white transition-colors duration-150"
              >
                <X size={16} />
              </button>

              <span className="text-xs font-mono uppercase tracking-widest text-[#0071e3]">Architecture Specification</span>
              <h3 className="text-3xl font-bold tracking-tight mt-1 text-white">{selectedProject.title} Internal Flow</h3>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed border-b border-white/5 pb-6">
                {selectedProject.architecture.description}
              </p>

              {/* Sequential Architecture Step Visualizer */}
              <div className="mt-8 space-y-6">
                {selectedProject.architecture.flow.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex gap-4 items-start relative group">
                    {/* Visual Line connector dots */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-6 h-6 bg-[#0071e3]/10 border border-[#0071e3] text-[#0071e3] rounded-full flex items-center justify-center text-xs font-mono z-10">
                        {stepIdx + 1}
                      </div>
                      {stepIdx !== selectedProject.architecture.flow.length - 1 && (
                        <div className="w-[1px] h-16 bg-white/10 absolute top-7 left-[11px]" />
                      )}
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex-1 hover:bg-white/[0.07] transition-all duration-150">
                      <p className="text-sm md:text-base text-white/90 leading-relaxed font-mono">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Vercel Web Analytics Production Tracker */}
      <Analytics />

    </div>
  );
}