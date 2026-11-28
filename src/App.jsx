import { useEffect, useRef, useState } from "react";
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
    type: "Original world and tabletop RPG",
    description: "A worldbuilding project and tabletop roleplaying game inspired by early-2000s card game and monster-collecting anime.",
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

function routeScope(route) {
  if (route.startsWith("/projects/orbellion")) return "/projects/orbellion";
  if (route.startsWith("/projects/familiar-frontier")) return "/projects/familiar-frontier";
  return route;
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
        <div className="nav-dropdown">
          <a className={route.startsWith("/projects") ? "active" : ""} href="#/projects">Projects<NotificationDot /></a>
          <div className="nav-menu">
            <a href="#/projects/orbellion">Orbellion<NotificationDot /></a>
            <a href="#/projects/familiar-frontier">Familiar Frontier</a>
          </div>
        </div>
        <a className={route === "/ai-policy" ? "active" : ""} href="#/ai-policy">AI policy</a>
        <a href="mailto:starryprinceling@proton.me">Contact</a>
      </nav>
    </header>
  );
}

function NotificationDot() {
  return <span className="notification-dot" aria-hidden="true" />;
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
      <h3>{project.title}{project.id === "orbellion" && <NotificationDot />}</h3>
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
        <p>Some other games I love are the Legend of Zelda, Metroid, Deltarune, Outer Wilds, and Disco Elysium.</p>
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
        <p>I’m vehemently against using AI in art of all kinds, be it images, video, audio, or writing. All content I produce is my own original creative vision.</p>
        <h2>Coding assistance</h2>
        <p>I do sometimes use AI to assist in coding (never asset or idea generation). It is standard industry practice now and I am forced to use it in my professional career, and it has helped me learn to make small Minecraft mods that it would have taken me weeks to figure out on my own.</p>
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
    { label: "TTRPG & devlogs", href: "#/projects/orbellion", id: "ttrpg" },
    { label: "Setting & future plans", href: "#/projects/orbellion/setting", id: "setting" },
    { label: "Card game", href: "#/projects/orbellion/card-game", id: "card-game" },
  ];
  return (
    <nav className="project-tabs" aria-label="Orbellion sections">
      {links.map((link) => <a className={active === link.id ? "selected" : ""} href={link.href} key={link.id}>{link.label}{link.id === "card-game" && <NotificationDot />}</a>)}
    </nav>
  );
}

const cardGameOverviewPhotos = [
  {
    src: "/orbellion/overview.jpg",
    alt: "The Orbellion card game box, cards, and instruction sheet arranged on a table",
    caption: "Overview",
  },
  {
    src: "/orbellion/light_cards.jpg",
    alt: "Three Orbellion cards displayed on a table",
    caption: "Example cards",
  },
];

const cardGameMorePhotos = [
  {
    src: "/orbellion/card_backs.jpg",
    alt: "The front and back designs of Orbellion cards",
    caption: "Card backs",
  },
  {
    src: "/orbellion/box1.jpg",
    alt: "The Orbellion card game box featuring elemental symbols",
    caption: "The box",
  },
  {
    src: "/orbellion/instructions_open.jpg",
    alt: "The printed Orbellion card game instructions opened to a rules spread",
    caption: "The instructions",
  },
];

function CardGameGallery({ photos, className = "" }) {
  return (
    <div className={`card-game-gallery ${className}`}>
      {photos.map((photo) => (
        <figure key={photo.src}>
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function OrbellionCardGameContent() {
  return (
    <div className="card-game-content">
      <section className="detail-panel card-game-section">
        <h2>Physical card game</h2>
        <p>Made for an Emergent Design class in Winter 2023, this physical card game adapts the combat system from the larger Orbellion project.</p>
        <CardGameGallery photos={cardGameOverviewPhotos} className="card-game-gallery-overview" />
        <blockquote className="card-game-quote">
          <p>In Orbellion, two or more players each command a team of three Hellions—magical creatures from the underworld with a variety of elemental abilities. Each Hellion comes with a deck of cards representing different actions it can take. By combining their abilities in clever ways, players can defeat their foes.</p>
        </blockquote>
        <p>The game has over a hundred unique cards. Each card has its own AI-generated art, which was used to save time and cost. The starter set contains over 200 cards across twelve themed packs. Each player chooses three packs to form their deck.</p>
        <p>The game is designed mainly for one-on-one duels, but its mechanics can theoretically support any number of players. The rules recommend a maximum of four players, and the starter set contains enough packs for four.</p>
      </section>

      <section className="detail-panel card-game-section">
        <h2>Design process</h2>
        <p>I developed the card game with a couple of other group members in less than three months, using notes I had made for the Orbellion video game.</p>
        <p>We ran into unexpected design and production challenges, but worked together to complete the project on time. For example, playtesters had trouble tracking each Hellion's HP while moving them around. Our first solution was to combine each player's Hellions' HP into one shared life total. We later found this made “tanky” Hellions too powerful and gave players little reason to use their other Hellions. After more brainstorming, we kept the original per-Hellion HP system and changed how Hellions move. That solved the tracking problem without losing the benefits of individual HP.</p>
      </section>

      <section className="detail-panel card-game-section">
        <h2>More Photos</h2>
        <CardGameGallery photos={cardGameMorePhotos} className="card-game-gallery-more" />
      </section>
    </div>
  );
}

function OrbellionSettingContent() {
  return (
    <div className="card-game-content">
      <section className="detail-panel card-game-section">
        <h2>The original game concept</h2>
        <p>By the time I made the physical card game in 2023, Orbellion had been in development for over three years. It began as an idea for a card-based RPG, loosely inspired by Pokémon, Undertale, Slay the Spire, and Magic: The Gathering. Players command monsters called Hellions, each with a variety of elemental affinities, and play cards to defeat their opponents.</p>
        <p>Developing a full RPG as a team of one takes time, so I made the physical card game as a smaller project based on its combat system.</p>
      </section>
      <section className="detail-panel card-game-section">
        <h2>Setting and story</h2>
        <p>The original video game concept follows a player about 16 years old who thinks they are playing an ordinary card game. In fact, the game is connected to Elysium, a world with heaven-and-hell themes whose inhabitants are called Hellions.</p>
        <p>The company behind the card game has allied itself with the evil Hellion ruler of Elysium and plans to take over the human world. The player and their friends join forces with Elysium's other Hellions to stop them.</p>
      </section>
      <section className="detail-panel card-game-section">
        <h2>Future plans</h2>
        <p>I have made a couple of small prototypes, but most of the video game's development so far has been in ideas. Much of the planned combat system went into the physical card game, and I have also developed the setting and story.</p>
        <p>I also made a simple text-based adventure for a class project, covering a simplified version of the game's introduction.</p>
        <p>More story and worldbuilding are in progress. I’ll share further details when there is more concrete material to show.</p>
      </section>
    </div>
  );
}

function OrbellionTTRPGContent() {
  return (
    <div className="card-game-content">
      <section className="detail-panel">
        <span className="status-label">A WORK IN PROGRESS</span>
        <h2>About the tabletop RPG</h2>
        <p>Orbellion is in development as an original tabletop roleplaying game inspired by early-2000s card games and monster-collecting anime.</p>
        <p>This is the current focus of Orbellion as an IP. The rules and setting are still being developed, but already in playtesting. Stay tuned for updates!</p>
        <div className="detail-chips"><span>Tabletop roleplaying game</span><span>Original setting</span><span>Monster collecting</span></div>
      </section>
      <section className="detail-panel">
        <span className="status-label">NO UPDATES PUBLISHED</span>
        <h2>Development log</h2>
        <p>There are no development updates yet. Check back here for future progress reports.</p>
        <a className="text-link" href="https://www.youtube.com/channel/UCSCE7TQXAhqAS8MXP6OWIXQ" target="_blank" rel="noreferrer">Follow along on YouTube <span aria-hidden="true">↗</span></a>
      </section>
    </div>
  );
}

function OrbellionPage({ route }) {
  const active = route.endsWith("/card-game") ? "card-game" : route.endsWith("/setting") || route.endsWith("/lore") ? "setting" : "ttrpg";
  return (
    <ProjectLayout
      eyebrow="ORIGINAL WORLD AND TABLETOP RPG"
      title="Orbellion"
      lead="A worldbuilding project and tabletop roleplaying game inspired by early-2000s card game and monster-collecting anime."
      className="orbellion-detail"
    >
      <ProjectNav active={active} />
      {active === "card-game" ? <OrbellionCardGameContent /> : active === "setting" ? <OrbellionSettingContent /> : <OrbellionTTRPGContent />}
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

function FamiliarFrontierNav({ active }) {
  const links = [
    { label: "Overview", href: "#/projects/familiar-frontier", id: "overview" },
    { label: "Design process", href: "#/projects/familiar-frontier/design-process", id: "design-process" },
  ];
  return (
    <nav className="project-tabs" aria-label="Familiar Frontier pages">
      {links.map((link) => <a className={active === link.id ? "selected" : ""} href={link.href} key={link.id}>{link.label}</a>)}
    </nav>
  );
}

function FamiliarFrontierProcessContent() {
  return (
    <>
      <section className="detail-panel process-intro">
        <h2>Build on what makes Minecraft work</h2>
        <p>Familiar Frontier aims to keep Minecraft’s recognizable vanilla style while expanding underused features and polishing the experience. Changes should feel at home in the existing game, not pull it in a different direction.</p>
        <a className="text-link" href="https://modrinth.com/user/StarryPrinceling" target="_blank" rel="noreferrer">View the pack on Modrinth <span aria-hidden="true">↗</span></a>
      </section>
      <div className="process-grid">
        <article className="process-card">
          <span className="process-number">01</span>
          <h2>Make the world feel demanding</h2>
          <p>Exploration should feel dangerous and sometimes lonely, drawing on the challenge of older versions of Minecraft.</p>
        </article>
        <article className="process-card">
          <span className="process-number">02</span>
          <h2>Give players a reason to settle</h2>
          <p>Building a home and community should be worthwhile, not just a pause between adventures.</p>
        </article>
        <article className="process-card">
          <span className="process-number">03</span>
          <h2>Make quiet activities count</h2>
          <p>Farming, fishing, cooking, and stargazing provide useful and enjoyable things to do between dangerous trips.</p>
        </article>
        <article className="process-card">
          <span className="process-number">04</span>
          <h2>Polish the whole experience</h2>
          <p>New and existing features should fit together cleanly and support the pack’s balance of risk and comfort.</p>
        </article>
      </div>
      <section className="detail-panel process-outro">
        <h2>The intended rhythm</h2>
        <p>Familiar Frontier is designed to move between challenging exploration and a comfortable home life. The harder the world feels outside, the more valuable it is to have a place and a community to return to.</p>
      </section>
    </>
  );
}

function FamiliarFrontierOverviewContent() {
  return (
    <>
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
    </>
  );
}

function FamiliarFrontierPage({ route }) {
  const active = route === "/projects/familiar-frontier/design-process" ? "design-process" : "overview";
  return (
    <ProjectLayout eyebrow="MINECRAFT MODPACK" title="Familiar Frontier" lead="A vanilla-inspired modpack focused on exploration, community, and a comfortable home." className="frontier-detail">
      <FamiliarFrontierNav active={active} />
      {active === "design-process" ? <FamiliarFrontierProcessContent /> : <FamiliarFrontierOverviewContent />}
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
  const routeRef = useRef(route);
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#/")) {
        const nextRoute = currentRoute();
        if (routeScope(routeRef.current) !== routeScope(nextRoute)) {
          window.scrollTo(0, 0);
        }
        routeRef.current = nextRoute;
        setRoute(nextRoute);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isOrbellion = route.startsWith("/projects/orbellion");
  const isFrontier = route.startsWith("/projects/familiar-frontier");
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
      {isOrbellion ? <OrbellionPage route={route} /> : isFrontier ? <FamiliarFrontierPage route={route} /> : isAiPolicy ? <AIPolicyPage /> : route === "/projects" ? <AllProjectsPage /> : <HomePage />}
      <SiteFooter />
    </div>
  );
}
