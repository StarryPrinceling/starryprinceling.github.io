import { useEffect, useState } from "react";
import { siBluesky, siGithub, siModrinth, siSteam, siTwitch, siYoutube } from "simple-icons";

const socialLinks = [
  { name: "YouTube", handle: "Videos", href: "https://www.youtube.com/channel/UCSCE7TQXAhqAS8MXP6OWIXQ", icon: siYoutube },
  { name: "Twitch", handle: "Live streams", href: "https://www.twitch.tv/starryprinceling", icon: siTwitch },
  { name: "Bluesky", handle: "Social updates", href: "https://bsky.app/profile/starryprinceling.bsky.social", icon: siBluesky },
  { name: "Modrinth", handle: "Minecraft projects", href: "https://modrinth.com/user/StarryPrinceling", icon: siModrinth },
  { name: "GitHub", handle: "Code and projects", href: "https://github.com/StarryPrinceling", icon: siGithub },
  { name: "Steam", handle: "Steam profile", href: "https://steamcommunity.com/profiles/76561198600212555/", icon: siSteam },
];

const projects = [
  {
    id: "orbellion",
    title: "Orbellion",
    type: "Original tabletop RPG",
    description: "An original tabletop roleplaying game inspired by early-2000s card games and monster-collecting anime.",
    icon: "✧",
    className: "orbellion",
    href: "#/projects/orbellion",
    tag: "View project",
  },
  {
    id: "familiar-frontier",
    title: "Familiar Frontier",
    type: "Minecraft modpack",
    description: "A vanilla-inspired modpack with a more challenging world and new reasons to build a comfortable community.",
    icon: "⌂",
    className: "frontier",
    href: "#/projects/familiar-frontier",
    tag: "View project",
  },
];

function currentRoute() {
  const hash = window.location.hash;
  return hash.startsWith("#/") ? hash.slice(1) : "/";
}

function SiteHeader({ route }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#/" aria-label="StarryPrinceling home">
        <span className="wordmark-star" aria-hidden="true">✦</span>
        <span>Starry<span className="wordmark-light">Princeling</span></span>
      </a>
      <nav className="top-nav" aria-label="Main navigation">
        <a className={route === "/" ? "active" : ""} href="#/">Home</a>
        <a className={route.startsWith("/projects") ? "active" : ""} href="#/projects">Projects</a>
        <a className={route === "/ai-policy" ? "active" : ""} href="#/ai-policy">AI policy</a>
        <a href="mailto:starryprinceling@proton.me">Contact</a>
      </nav>
    </header>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow"><span aria-hidden="true">✦</span>{children}</p>;
}

function ProjectCard({ project }) {
  return (
    <a className={`project-card ${project.className}`} href={project.href}>
      <div className="project-card-top">
        <span className="project-icon" aria-hidden="true">{project.icon}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="project-card-link">{project.tag}<span aria-hidden="true"> ↗</span></span>
    </a>
  );
}

function Socials() {
  return (
    <section className="social-section" id="socials">
      <div className="section-heading social-heading">
        <div>
          <Eyebrow>FOLLOW MY WORK</Eyebrow>
          <h2>Socials<span className="lavender">.</span></h2>
        </div>
        <p>Videos, streams, project updates, and code.</p>
      </div>
      <div className="social-grid">
        {socialLinks.map((link) => (
          <a className="social-link" href={link.href} key={link.name} target="_blank" rel="noreferrer">
            <span className="social-mark" aria-hidden="true">
              <svg className="brand-icon" viewBox="0 0 24 24" focusable="false"><path d={link.icon.path} /></svg>
            </span>
            <span className="social-copy"><strong>{link.name}</strong><small>{link.handle}</small></span>
            <span className="social-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      <p className="username-note">I'm called <strong>StarryPrinceling</strong> on most major platforms, including Discord and Minecraft.</p>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section page-width" id="about">
      <Eyebrow>ABOUT</Eyebrow>
      <h2>About me<span className="lavender">.</span></h2>
      <div className="about-copy">
        <p>I’ve loved games for as long as I can remember. I’m a nonbinary person in my twenties with a computer science degree, and I enjoy thinking about how games work as much as I enjoy playing them.</p>
        <p>I’ve been playing Magic: The Gathering for over 15 years and Minecraft since its early beta days. I’m also a fan of tabletop RPGs, especially Dungeons &amp; Dragons.</p>
        <p>Some other games I love are The Legend of Zelda: Tears of the Kingdom, Deltarune, Outer Wilds, and Disco Elysium.</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
        <section className="hero page-width">
          <div className="hero-copy">
            <Eyebrow>GAME DESIGN · VIDEO ESSAYS</Eyebrow>
            <h1>Games, worlds,<br />and <span className="gradient-text">stories.</span></h1>
            <p className="hero-intro">
              I’m <strong>StarryPrinceling</strong>, a game design content creator working on tabletop games, Minecraft projects, and development videos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
              <a className="quiet-link" href="mailto:starryprinceling@proton.me">Contact me <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="portrait-wrap" aria-label="StarryPrinceling's Minecraft avatar">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <span className="sparkle sparkle-one" aria-hidden="true">✦</span>
            <span className="sparkle sparkle-two" aria-hidden="true">✧</span>
            <span className="sparkle sparkle-three" aria-hidden="true">·</span>
            <div className="portrait-card">
              <img src="/avatar.png" alt="Minecraft avatar with dark teal hair, a plum sweater, and lavender accents" />
            </div>
          </div>
        </section>

        <Socials />

        <AboutSection />

        <section className="projects-section page-width" id="projects">
          <div className="section-heading">
            <div>
              <Eyebrow>TABLETOP AND MINECRAFT PROJECTS</Eyebrow>
              <h2>Projects<span className="lavender">.</span></h2>
            </div>
            <p>Current and upcoming projects.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
          </div>
        </section>
      </main>
  );
}

function AIPolicyPage() {
  return (
    <main className="detail-page page-width ai-policy-page">
      <Eyebrow>CREATIVE WORK AND AI</Eyebrow>
      <h1>AI policy</h1>
      <p className="detail-lead">How I use—and do not use—AI in my creative work.</p>
      <section className="detail-panel">
        <h2>Art and creative work</h2>
        <p>I’m strongly opposed to using AI to create art in any medium, including images, video, audio, and writing. I don’t use AI to generate creative work; everything I produce reflects my own original creative vision.</p>
        <h2>Coding assistance</h2>
        <p>I sometimes use AI to assist with coding, but never to generate creative ideas or assets. AI-assisted coding is standard industry practice and is required in my professional work. It has also helped me learn to make small Minecraft mods—work that might otherwise have taken me weeks to figure out on my own.</p>
      </section>
    </main>
  );
}

function ProjectLayout({ eyebrow, title, lead, children, className = "" }) {
  return (
    <main className={`detail-page page-width ${className}`}>
      <a href="#/projects" className="back-link"><span aria-hidden="true">←</span> All projects</a>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="detail-lead">{lead}</p>
      {children}
    </main>
  );
}

function ProjectNav({ active }) {
  const links = [
    { label: "Overview", href: "#/projects/orbellion", id: "overview" },
    { label: "Development log", href: "#/projects/orbellion/devlogs", id: "devlogs" },
    { label: "Setting", href: "#/projects/orbellion/lore", id: "lore" },
  ];
  return (
    <nav className="project-tabs" aria-label="Orbellion pages">
      {links.map((link) => <a className={active === link.id ? "selected" : ""} href={link.href} key={link.id}>{link.label}</a>)}
    </nav>
  );
}

function OrbellionPage({ route }) {
  const active = route.endsWith("/devlogs") ? "devlogs" : route.endsWith("/lore") ? "lore" : "overview";
  if (active === "devlogs") {
    return (
      <ProjectLayout eyebrow="PROJECT UPDATES" title="Orbellion development log" lead="Development updates for the Orbellion tabletop roleplaying game." className="orbellion-detail">
        <ProjectNav active={active} />
        <section className="detail-panel">
            <span className="status-label"><span className="status-dot" /> NO UPDATES PUBLISHED</span>
            <h2>Updates will be posted here.</h2>
            <p>There are no development updates yet. Check back here for future progress reports.</p>
          <a className="text-link" href="https://www.youtube.com/channel/UCSCE7TQXAhqAS8MXP6OWIXQ" target="_blank" rel="noreferrer">Follow along on YouTube <span aria-hidden="true">↗</span></a>
        </section>
      </ProjectLayout>
    );
  }
  if (active === "lore") {
    return (
      <ProjectLayout eyebrow="SETTING" title="Orbellion setting" lead="Background information about the world, locations, and creatures in Orbellion." className="orbellion-detail">
        <ProjectNav active={active} />
        <section className="detail-panel lore-panel">
          <span className="lore-sigil" aria-hidden="true">✧</span>
            <div><span className="status-label">IN DEVELOPMENT</span><h2>Setting information is in progress.</h2><p>Details about Orbellion’s world will be added here as they are ready to share.</p></div>
        </section>
      </ProjectLayout>
    );
  }
  return (
    <ProjectLayout eyebrow="ORIGINAL TABLETOP ROLEPLAYING GAME" title="Orbellion" lead="An original tabletop roleplaying game inspired by early-2000s card games and monster-collecting anime." className="orbellion-detail">
      <ProjectNav active={active} />
      <section className="detail-panel">
        <span className="status-label"><span className="status-dot" /> A WORK IN PROGRESS</span>
        <h2>About the game</h2>
        <p>Orbellion is in development. This page will provide an overview of its rules and how to play as more information becomes available.</p>
        <div className="detail-chips"><span>Tabletop roleplaying game</span><span>Original setting</span><span>Monster collecting</span></div>
      </section>
    </ProjectLayout>
  );
}

const familiarFaq = [
  {
    question: "What is Familiar Frontier?",
    answer: "A Minecraft modpack that stays close to vanilla while expanding underused features and refining gameplay.",
  },
  {
    question: "What does it feel like to play?",
    answer: "The world is more challenging and isolated than modern Minecraft, with community building and home life as a contrast to dangerous exploration.",
  },
  {
    question: "What can I do between adventures?",
    answer: "Build, fish, farm, cook, and stargaze between dangerous adventures.",
  },
  {
    question: "Where can I download it?",
    answer: "Visit StarryPrinceling’s Modrinth profile for Familiar Frontier and its available files.",
  },
];

function FamiliarFrontierPage() {
  return (
    <ProjectLayout eyebrow="MINECRAFT MODPACK" title="Familiar Frontier" lead="A vanilla-inspired modpack focused on exploration, community, and a comfortable home." className="frontier-detail">
      <section className="frontier-banner">
        <span className="frontier-moon" aria-hidden="true">☾</span>
        <div><span className="status-label">VANILLA-INSPIRED MINECRAFT MODPACK</span><p>Download and version information on Modrinth.</p></div>
        <a className="button button-primary" href="https://modrinth.com/user/StarryPrinceling" target="_blank" rel="noreferrer">View on Modrinth <span aria-hidden="true">↗</span></a>
      </section>
      <div className="frontier-columns">
        <section className="frontier-intro">
          <Eyebrow>OVERVIEW</Eyebrow>
          <h2>Explore, build, and settle in.</h2>
          <p>Familiar Frontier stays true to vanilla Minecraft while expanding underused features and refining the overall experience.</p>
          <p>The world is more challenging and isolated, taking inspiration from older versions of the game. Build a community and a comfortable home, then spend time fishing, farming, cooking, and stargazing between dangerous adventures.</p>
          <div className="activity-list"><span>⌂ Build</span><span>♧ Farm</span><span>✧ Stargaze</span><span>⌁ Fish</span><span>♨ Cook</span></div>
        </section>
        <section className="faq-section">
          <Eyebrow>COMMON QUESTIONS</Eyebrow>
          <h2>FAQ<span className="lavender">.</span></h2>
          <div className="faq-list">
            {familiarFaq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">＋</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}

function AllProjectsPage() {
  return (
    <main className="page-width listing-page">
      <Eyebrow>TABLETOP AND MINECRAFT PROJECTS</Eyebrow>
      <h1>Projects<span className="lavender">.</span></h1>
      <p className="detail-lead">Current and upcoming projects.</p>
      <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer page-width">
      <a className="wordmark" href="#/"><span className="wordmark-star" aria-hidden="true">✦</span><span>Starry<span className="wordmark-light">Princeling</span></span></a>
      <span>Game design and development by StarryPrinceling.</span>
      <a href="#top" className="to-top">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState(currentRoute);
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#/")) {
        setRoute(currentRoute());
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isOrbellion = route.startsWith("/projects/orbellion");
  const isFrontier = route === "/projects/familiar-frontier";
  const isAiPolicy = route === "/ai-policy";
  useEffect(() => {
    const title = isOrbellion ? "Orbellion — StarryPrinceling" : isFrontier ? "Familiar Frontier — StarryPrinceling" : isAiPolicy ? "AI policy — StarryPrinceling" : "StarryPrinceling";
    document.title = title;
  }, [isOrbellion, isFrontier, isAiPolicy]);
  useEffect(() => {
    if (route === "/socials") document.getElementById("socials")?.scrollIntoView();
  }, [route]);

  return (
    <div id="top">
      <SiteHeader route={route} />
      {isOrbellion ? <OrbellionPage route={route} /> : isFrontier ? <FamiliarFrontierPage /> : isAiPolicy ? <AIPolicyPage /> : route === "/projects" ? <AllProjectsPage /> : <HomePage />}
      <SiteFooter />
    </div>
  );
}
