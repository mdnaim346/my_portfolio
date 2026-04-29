import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

const availableProjectImages = ['/project1.jpg', '/project2.jpg', '/project3.jpg', '/project4.jpg'];

const profile = {
  name: 'Naim Reza',
  role: 'Odoo Full Stack Developer',
  headline: 'I design ERP systems that make complex operations feel clear, fast, and measurable.',
  location: 'Dhaka, Bangladesh',
  email: 'naimreza3333@gmail.com',
  github: 'https://github.com/mdnaim346',
  linkedin: 'https://www.linkedin.com/in/naim-reza66/',
};

const stats = [
  { label: 'ERP modules shipped', value: '24+' },
  { label: 'Workflow time saved', value: '42%' },
  { label: 'Core stack depth', value: '7 yrs' },
  { label: 'Business domains', value: '9' },
];

const fallbackProjects = [
  {
    id: 'sale-approval',
    title: 'Sale Order Approval Workflow',
    category: 'ERP',
    desc: 'Multi-level approval flows for Odoo sales teams with automated notifications and audit-ready status tracking.',
    image: '/project1.jpg',
    impact: 'Reduced approval delays by 42%',
    stack: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript'],
    role: 'Architecture, module development, testing, deployment',
  },
  {
    id: 'inventory-intelligence',
    title: 'AI Powered Inventory System',
    category: 'Automation',
    desc: 'Forecasting-focused inventory planning that helps teams detect demand shifts and reduce stock waste.',
    image: '/project2.jpg',
    impact: 'Improved reorder visibility across SKUs',
    stack: ['Python', 'Odoo', 'ML workflows', 'REST APIs'],
    role: 'Prediction flow, dashboard design, ERP integration',
  },
  {
    id: 'team-operations',
    title: 'Task Management System',
    category: 'Product',
    desc: 'Role-based task operations with permissions, progress visibility, and clean handoffs between teams.',
    image: '/project3.jpg',
    impact: 'Created one source of truth for delivery teams',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Odoo RPC'],
    role: 'Full stack development and workflow modeling',
  },
  {
    id: 'commerce-erp',
    title: 'Ecommerce ERP Integration',
    category: 'Commerce',
    desc: 'Customized garment workflow covering order processing, cloth tracking, and fulfillment automation.',
    image: '/project4.jpg',
    impact: 'Automated repeat manual operation steps',
    stack: ['Odoo', 'Python', 'Website Sale', 'Accounting'],
    role: 'Module customization, integrations, performance tuning',
  },
  {
    id: 'project-control',
    title: 'Project Management System',
    category: 'Product',
    desc: 'Project tracking with assignment flows, milestone status, and manager-level progress monitoring.',
    image: '/project1.jpg',
    impact: 'Improved team planning and delivery clarity',
    stack: ['React', 'Express', 'PostgreSQL', 'Odoo'],
    role: 'Frontend experience, API design, reporting logic',
  },
  {
    id: 'support-chatbot',
    title: 'AI Chat Bot',
    category: 'AI',
    desc: 'Customer support assistant connected to business systems for faster answers and cleaner escalation.',
    image: '/project2.jpg',
    impact: 'Shortened first response time for common queries',
    stack: ['Python', 'NLP', 'REST APIs', 'Odoo'],
    role: 'Conversation flow, integration, admin controls',
  },
];

const capabilities = [
  {
    title: 'Odoo architecture',
    detail: 'Custom modules, approval logic, reporting models, access rules, and maintainable business workflows.',
  },
  {
    title: 'Full stack delivery',
    detail: 'React interfaces, Express APIs, PostgreSQL design, integrations, and deployment-ready implementation.',
  },
  {
    title: 'Business automation',
    detail: 'Manual process analysis, role-based systems, notification flows, and operational dashboards.',
  },
  {
    title: 'AI-enabled systems',
    detail: 'Practical AI features for support, forecasting, classification, and internal productivity tools.',
  },
];

const skills = [
  { name: 'Odoo', level: 96 },
  { name: 'Python', level: 94 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'React', level: 84 },
  { name: 'JavaScript', level: 86 },
  { name: 'API integration', level: 90 },
];

const timeline = [
  {
    period: 'Discover',
    title: 'Map the business flow',
    detail: 'Clarify actors, rules, exceptions, and reporting needs before a single model is built.',
  },
  {
    period: 'Build',
    title: 'Ship the clean core',
    detail: 'Design modules, views, APIs, tests, and dashboards around the operational reality.',
  },
  {
    period: 'Harden',
    title: 'Measure, refine, deploy',
    detail: 'Tune performance, close edge cases, document handoff points, and prepare teams for use.',
  },
];

const visualThemes = {
  ERP: {
    className: 'theme-erp',
    label: 'ERP',
    pattern: ['SO', 'PO', 'INV', 'CRM'],
  },
  Automation: {
    className: 'theme-automation',
    label: 'AUTO',
    pattern: ['Trigger', 'Rule', 'Action', 'Report'],
  },
  Product: {
    className: 'theme-product',
    label: 'APP',
    pattern: ['Board', 'Role', 'Sprint', 'Status'],
  },
  Commerce: {
    className: 'theme-commerce',
    label: 'SHOP',
    pattern: ['Order', 'Stock', 'Cart', 'Pay'],
  },
  AI: {
    className: 'theme-ai',
    label: 'AI',
    pattern: ['Prompt', 'Intent', 'Answer', 'Learn'],
  },
};

function imageFor(project, index) {
  const incoming = project.image || project.img;
  return availableProjectImages.includes(incoming)
    ? incoming
    : availableProjectImages[index % availableProjectImages.length];
}

function projectInitials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 4)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function titleKeywords(title) {
  return title
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .slice(0, 3);
}

function normalizeProject(project, index) {
  const fallback = fallbackProjects[index % fallbackProjects.length];

  return {
    ...fallback,
    ...project,
    id: project.id || fallback.id,
    category: project.category || fallback.category,
    desc: project.desc || fallback.desc,
    image: imageFor(project, index),
    impact: project.impact || fallback.impact,
    stack: Array.isArray(project.stack) && project.stack.length ? project.stack : fallback.stack,
    role: project.role || fallback.role,
  };
}

function SmartProjectImage({ project, compact = false }) {
  const theme = visualThemes[project.category] || visualThemes.Product;
  const keywords = titleKeywords(project.title);
  const initials = projectInitials(project.title);

  return (
    <div className={`smart-image ${theme.className} ${compact ? 'compact' : ''}`} aria-hidden="true">
      <div className="smart-image-grid">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="smart-image-header">
        <span>{theme.label}</span>
        <span>{project.category}</span>
      </div>
      <div className="smart-image-core">
        <strong>{initials}</strong>
        <div>
          {keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>
      <div className="smart-image-flow">
        {theme.pattern.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProjectId, setSelectedProjectId] = useState(fallbackProjects[0].id);
  const [sourceLabel, setSourceLabel] = useState('Curated portfolio');
  const [contact, setContact] = useState({
    name: '',
    email: '',
    scope: 'Odoo workflow automation',
  });

  useEffect(() => {
    if (typeof fetch !== 'function') {
      return undefined;
    }

    const controller = new AbortController();

    fetch('http://localhost:5001/api/projects', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Projects API unavailable');
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          return;
        }

        const normalizedProjects = data.map(normalizeProject);
        setProjects(normalizedProjects);
        setSelectedProjectId(normalizedProjects[0].id);
        setSourceLabel('Live project API');
      })
      .catch(() => {
        setSourceLabel('Curated portfolio');
      });

    return () => controller.abort();
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  const selectedProject = useMemo(() => {
    const fromFiltered = filteredProjects.find((project) => project.id === selectedProjectId);
    return fromFiltered || filteredProjects[0] || projects[0];
  }, [filteredProjects, projects, selectedProjectId]);

  const mailSubject = encodeURIComponent(`Portfolio inquiry from ${contact.name || 'a new client'}`);
  const mailBody = encodeURIComponent(
    `Hi Naim,\n\nI would like to discuss: ${contact.scope}\n\nName: ${contact.name}\nEmail: ${contact.email}`
  );
  const mailtoHref = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <div className="portfolio-shell" id="top">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Naim Reza portfolio home">
          <span>NR</span>
        </a>
        <nav className="site-nav" aria-label="Portfolio sections">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href="#contact">
          Start project
        </a>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Odoo ERP, automation, React dashboards</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-lede">{profile.headline}</p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="primary-action" href="#work">
                View work
              </a>
              <a className="secondary-action" href={mailtoHref}>
                Email Naim
              </a>
            </div>

            <div className="stats-grid" aria-label="Portfolio metrics">
              {stats.map((stat) => (
                <div className="stat-tile" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="profile-panel"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            aria-label="Profile summary"
          >
            <div className="profile-image-wrap">
              <img src="/profile.png" alt="Naim Reza" />
            </div>
            <div className="profile-details">
              <span className="availability">Available for selected builds</span>
              <h2>ERP systems with product-grade UX.</h2>
              <p>
                Based in {profile.location}, focused on dependable Odoo modules,
                business automation, and dashboards that leaders can actually use.
              </p>
            </div>
            <div className="system-strip">
              <span>{sourceLabel}</span>
              <span>Performance-first React build</span>
            </div>
          </motion.aside>
        </section>

        <section className="section-band" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <p className="eyebrow">Capability stack</p>
            <h2 id="capabilities-title">Built for operational software, not decoration.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <motion.article
                className="capability-card"
                key={capability.title}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <h3>{capability.title}</h3>
                <p>{capability.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-band work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Case studies across ERP, automation, AI, and product systems.</h2>
            </div>
            <div className="filter-bar" role="tablist" aria-label="Project filters">
              {categories.map((category) => (
                <button
                  className={category === activeCategory ? 'filter-button active' : 'filter-button'}
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={category === activeCategory}
                  onClick={() => {
                    setActiveCategory(category);
                    const nextProject =
                      category === 'All'
                        ? projects[0]
                        : projects.find((project) => project.category === category);
                    setSelectedProjectId(nextProject?.id || projects[0].id);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="work-layout">
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <motion.button
                  className={project.id === selectedProject?.id ? 'project-card active' : 'project-card'}
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProjectId(project.id)}
                  layout
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                >
                  <SmartProjectImage project={project} />
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-card-footer">
                    <strong>{project.impact}</strong>
                    <span>{project.stack.slice(0, 2).join(' + ')}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.aside
                  className="case-study-panel"
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                  aria-label={`${selectedProject.title} details`}
                >
                  <SmartProjectImage project={selectedProject} compact />
                  <div className="case-meta">
                    <span>{selectedProject.category}</span>
                    <span>{selectedProject.stack.length} tools</span>
                    <span>{sourceLabel}</span>
                  </div>
                  <span className="case-label">Focused case study</span>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.desc}</p>
                  <div className="impact-box">
                    <span>Impact</span>
                    <strong>{selectedProject.impact}</strong>
                  </div>
                  <div className="stack-list" aria-label="Project stack">
                    {selectedProject.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="role-note">
                    <span>Role</span>
                    <p>{selectedProject.role}</p>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section className="section-band skill-section" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Engineering depth</p>
            <h2 id="skills-title">A practical stack for serious business systems.</h2>
          </div>
          <div className="skill-layout">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.level}%</span>
                </div>
                <progress max="100" value={skill.level}>
                  {skill.level}%
                </progress>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band process-section" id="process" aria-labelledby="process-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Delivery process</p>
              <h2 id="process-title">From operational pain to shipped software.</h2>
            </div>
            <p className="section-copy">
              The strongest ERP work starts with business reality, then turns it into models,
              permissions, screens, automations, and reporting that match how teams operate.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.period}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have an ERP workflow, dashboard, or automation that needs a sharper system?</h2>
            <p>
              Send the short version and I will shape it into a technical plan, module map,
              and delivery path.
            </p>
            <div className="contact-links">
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={profile.github}>GitHub</a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>

          <form className="contact-form" aria-label="Project inquiry">
            <label>
              Name
              <input
                type="text"
                value={contact.name}
                onChange={(event) => setContact({ ...contact, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={contact.email}
                onChange={(event) => setContact({ ...contact, email: event.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Project focus
              <select
                value={contact.scope}
                onChange={(event) => setContact({ ...contact, scope: event.target.value })}
              >
                <option>Odoo workflow automation</option>
                <option>Custom ERP module</option>
                <option>React dashboard</option>
                <option>AI assisted business tool</option>
              </select>
            </label>
            <a className="primary-action full-width" href={mailtoHref}>
              Compose email
            </a>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>Designed and built for {profile.name}</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
