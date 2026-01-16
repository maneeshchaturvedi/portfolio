import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredFramework, setHoveredFramework] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    // Check system preference on mount
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#frameworks", label: "Frameworks" },
    { href: "#writing", label: "Writing" },
    { href: "#specflow", label: "SpecFlow" },
    { href: "#ventures", label: "Ventures" },
    { href: "#connect", label: "Connect" },
  ];

  const frameworks = [
    {
      name: "Discover",
      description:
        "Build mental models of any codebase, no matter how complex.",
      metric: "Understand Unknown Code",
      icon: "◈",
    },
    {
      name: "Track",
      description:
        "Learn to manage and evolve systems that grow over time—complexity AI amplifies but cannot navigate.",
      metric: "Tame Complexity",
      icon: "◇",
    },
    {
      name: "Adapt",
      description:
        "Not retrofitting patterns, but thinking from first principles—the architecture AI needs you to define.",
      metric: "Design from Principles",
      icon: "○",
    },
  ];

  const metaFramework = [
    {
      axis: "Observers",
      insight: "Who sees the system? What lens do they use?",
    },
    {
      axis: "Time",
      insight: "How does behavior evolve? What triggers change?",
    },
    {
      axis: "Wrongness",
      insight: "Where can failures occur? What remains uncertain?",
    },
    {
      axis: "Pressure",
      insight: "What forces shape decisions? What constraints exist?",
    },
  ];

  const detailedExperience = [
    {
      company: "Microsoft India",
      role: "Principal Engineer",
      team: "Bing / Microsoft Search",
      period: "2022 – 2024",
      location: "Bangalore & Hyderabad",
      highlights: [
        "Optimized index generation pipelines—improved throughput and data freshness across critical search services",
        "Re-architected junk and spam detection systems for result quality and long-term maintainability",
        "Designed bot detection & DDoS mitigation using probabilistic data structures at web-scale",
        "Consolidated multiple authentication modules—reduced complexity, accelerated developer velocity",
      ],
      tags: ["Distributed Systems", "Security", "Performance"],
    },
    {
      company: "Lowe's SSCB",
      role: "Director, Enterprise Architecture",
      team: "Platform Engineering",
      period: "2020 – 2022",
      location: "Bangalore",
      highlights: [
        "Conceived Carbon—internal developer platform powering ~300 microservices across GCP, on-prem, and 1,800+ retail stores",
        "Enabled dynamic scaling and improved operational resiliency across enterprise systems",
        "Introduced best practices for API design, caching, data partitioning, monitoring, and transient failure handling",
      ],
      tags: ["Platform Engineering", "Microservices", "GCP"],
    },
    {
      company: "Myntra",
      role: "Architect, SCM Outbound",
      team: "Supply Chain Management",
      period: "2019 – 2020",
      location: "Bangalore",
      highlights: [
        "Led architecture for 27 services across Order, Inventory, Logistics, Warehousing, and CRM",
        "Fixed performance anti-patterns: chatty I/O, extraneous fetching, retry storms, improper caching",
        "Achieved 20% latency reduction and 30% throughput improvement in Order Management",
      ],
      tags: ["Performance", "E-commerce", "Optimization"],
    },
    {
      company: "Target Corporation",
      role: "Lead Staff Software Engineer",
      team: "Guest Order Management",
      period: "2015 – 2017",
      location: "Bangalore",
      highlights: [
        "Architected GOM omnichannel platform—BOPUS, Ship-to-Store, Ship-from-Store, curbside pickup, returns",
        "Introduced Domain-Driven Design, Event Sourcing, CQRS, and event-driven architectures at scale",
        "Built Enterprise Cart & Checkout platform; scaled team from 4 to 27 engineers",
      ],
      tags: ["DDD", "Event Sourcing", "CQRS"],
    },
    {
      company: "Intuit IDC",
      role: "Staff Engineer",
      team: "TurboTax Platform",
      period: "2014 – 2015",
      location: "Bangalore",
      highlights: [
        "Modernized TurboTax build and CI systems—reduced build times from 4 hours to 14 minutes",
        "Implemented AWS-based CI/CD pipelines, accelerating release cycles",
      ],
      tags: ["DevOps", "CI/CD", "Build Systems"],
    },
    {
      company: "Yahoo India",
      role: "Principal Engineer",
      team: "Yahoo Answers & Groups",
      period: "2011 – 2012",
      location: "Bangalore",
      highlights: [
        "Built distributed rate-limiting for Yahoo Answers",
        "Engineered DDoS detection systems; re-architected Yahoo Groups to SOA",
        "Implemented MapReduce clickstream analytics and bandit-algorithm A/B testing platform",
      ],
      tags: ["Distributed Systems", "Analytics", "SOA"],
    },
  ];

  const earlierRoles = [
    {
      role: "Chief Architect",
      company: "Veloz Software",
      period: "2008 – 2011",
    },
    {
      role: "Solution Architect",
      company: "Zensar Technologies",
      period: "2005 – 2008",
    },
    {
      role: "Senior Software Engineer",
      company: "Integral Development Corp",
      period: "2002 – 2005",
    },
    {
      role: "Software Engineer",
      company: "Infozech Software",
      period: "2000 – 2002",
    },
  ];

  const talksAndPublications = [
    {
      title: "Distributed Systems: A Finer Perspective",
      type: "Talk",
      description:
        "Advanced concepts and nuanced considerations in distributed systems design",
    },
    {
      title: "Performance Engineering Methodologies",
      type: "Talk",
      description:
        "Effective methodologies for understanding and optimizing system performance",
    },
    {
      title: "Challenges in Driving Innovation in Organizations",
      type: "Talk",
      description:
        "Obstacles and strategies for fostering innovation within corporate environments",
    },
    {
      title: "Chain Replication in Distributed Databases",
      type: "Talk",
      description: "Practical application of chain replication techniques",
    },
    {
      title: "Go The Other Way",
      type: "Book",
      description:
        "A pragmatic approach to learning the Go programming language",
    },
    {
      title: "Houston, We Have A Problem",
      type: "Book",
      description:
        "A fictional tale of software systems, and the people they break",
    },
  ];

  const keySkillsCategories = [
    {
      category: "System Architecture & Design",
      skills: [
        "Distributed Systems",
        "Evolutionary Architecture",
        "Domain-Driven Design",
        "Event Sourcing",
        "CQRS",
        "Microservices",
        "Platform Engineering",
      ],
    },
    {
      category: "System Comprehension",
      skills: [
        "Codebase Navigation",
        "Modular Reasoning",
        "Complexity Management",
        "Technical Debt Reduction",
        "Performance Engineering",
      ],
    },
    {
      category: "Security & Reliability",
      skills: [
        "Bot/DDoS Mitigation",
        "Probabilistic Data Structures",
        "System Reliability",
        "Security at Scale",
      ],
    },
  ];

  const ventures = [
    {
      name: "Stackshala Technologies",
      tagline: "Where engineers become craftsmen",
      description:
        "Advanced engineering education through first-principles thinking. Not pattern memorization—systematic understanding.",
      highlight: "100+ engineers transformed",
    },
    {
      name: "FocusCircle",
      tagline: "Deep work, together",
      description:
        "Focus accountability platform using virtual coin mechanics and live work sessions.",
      highlight: "Ship what matters",
    },
  ];

  const specflowFeatures = [
    {
      title: "Specification Generator",
      description:
        "Formal specification generation with type system, link database, and module architecture",
      icon: "◈",
    },
    {
      title: "Cold-Start & Drift Detection",
      description:
        "Detect unspecified code and spec drift—ensure AI changes remain spec-consistent",
      icon: "◇",
    },
    {
      title: "MCP Server Integration",
      description:
        "Embedded JSON-RPC 2.0 server enabling deep integration with Claude Code, Cursor, and AI environments",
      icon: "○",
    },
    {
      title: "LLM Proxy & Orchestration",
      description:
        "5-layer validation with SSE streaming—protects API keys, enforces limits in real-time",
      icon: "◆",
    },
    {
      title: "License & Tier Management",
      description:
        "Server-authoritative validation with tiered plans, usage tracking, and cost control",
      icon: "◈",
    },
    {
      title: "Multi-Platform Distribution",
      description:
        "Homebrew, Chocolatey, GitHub Releases with automated CI/CD builds for macOS, Linux, Windows",
      icon: "◇",
    },
  ];

  const specflowTechStack = [
    { name: "Go 1.21+", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "pgxpool", category: "Connection Pool" },
    { name: "OpenAI API", category: "LLM Provider" },
    { name: "Razorpay", category: "Payments" },
    { name: "Resend", category: "Email" },
    { name: "zerolog", category: "Logging" },
    { name: "Supabase", category: "Infrastructure" },
  ];

  const blogCategories = [
    { id: "all", label: "All Articles", count: "90+" },
    { id: "system-design", label: "System Design", count: "12" },
    { id: "refactoring", label: "Refactoring", count: "15" },
    { id: "philosophy", label: "Philosophy", count: "20" },
    { id: "practice", label: "Practice", count: "25" },
  ];

  const featuredArticles = [
    {
      title: "System Design 101: Observers",
      excerpt:
        "All system design problems reduce to managing how time, wrongness, and pressure are perceived by their observers.",
      category: "system-design",
      date: "Dec 2025",
      slug: "system-design-101-observers",
      featured: true,
    },
    {
      title: "The Paradox of System Design Preparation",
      excerpt:
        "The better you get at pattern-matching system design answers, the worse you get at actually designing systems.",
      category: "philosophy",
      date: "Dec 2025",
      slug: "the-paradox-of-system-design-preparation",
      featured: true,
    },
    {
      title: "Refactoring is About Causality, Not Just Behavior Preservation",
      excerpt:
        "Martin Fowler's definition has guided engineers for decades. It's clean, safe, and also incomplete.",
      category: "refactoring",
      date: "Oct 2025",
      slug: "refactoring-is-about-causality-not-just-behavior-preservation",
      featured: true,
    },
  ];

  const recentArticles = [
    {
      title: "Software Design 101: Twitter Timeline",
      excerpt: "Observer Analysis applied to real-world distributed systems.",
      category: "system-design",
      date: "Jan 2026",
      slug: "software-design-101-twitter-timeline",
    },
    {
      title: "System Design 101: Designing Uber",
      excerpt: "Putting the four-axis framework into comprehensive practice.",
      category: "system-design",
      date: "Dec 2025",
      slug: "system-design-101-designing-uber",
    },
    {
      title: "System Design 101: Pressure",
      excerpt:
        "Pressure is the rate at which expectations are created relative to the system's ability to resolve wrongness.",
      category: "system-design",
      date: "Dec 2025",
      slug: "system-design-101-pressure",
    },
    {
      title: "System Design 101: Wrongness",
      excerpt:
        "The distance between what an observer expected and what they encountered.",
      category: "system-design",
      date: "Dec 2025",
      slug: "system-design-101-wrongness",
    },
    {
      title: "System Design 101: Time",
      excerpt: "Time is the debt you redistribute between observers.",
      category: "system-design",
      date: "Dec 2025",
      slug: "system-design-101-time",
    },
    {
      title: "We Need to Learn How to Write Software",
      excerpt:
        "Everything traces back to bugs. Strip away the methodologies, and two problems remain.",
      category: "philosophy",
      date: "Nov 2025",
      slug: "we-need-to-learn-how-to-write-software",
    },
    {
      title: "What's Missing from Programming Books",
      excerpt:
        "Clean Code, Pragmatic Programmer, Design Patterns—excellent advice that fails at scale.",
      category: "philosophy",
      date: "Nov 2025",
      slug: "whats-missing-from-programming-books",
    },
    {
      title: "Why Code Reviews and Tests Don't Improve What Matters",
      excerpt: "The feedback we think we're getting vs. what actually changes.",
      category: "philosophy",
      date: "Nov 2025",
      slug: "why-code-reviews-and-tests-dont-improve-what-matters",
    },
    {
      title: "The Lost Art of Constraint-Based Thinking",
      excerpt:
        "We learned preconditions and postconditions. Then we forgot them entirely.",
      category: "practice",
      date: "Oct 2025",
      slug: "the-lost-art-of-constraint-based-thinking",
    },
    {
      title:
        "Beyond Extract Method: What Elite Developers See in the Tennis Kata",
      excerpt:
        "The kata has been solved thousands of times. Something profound is being missed.",
      category: "refactoring",
      date: "Oct 2025",
      slug: "beyond-extract-method-what-elite-developers-see-in-the-tennis-kata",
    },
    {
      title: "Gilded Rose: Four Complexity Patterns in One Kata",
      excerpt:
        "Everyone focuses on eliminating if statements. The kata teaches something deeper.",
      category: "refactoring",
      date: "Oct 2025",
      slug: "gilded-rose-four-complexity-patterns-in-one-kata",
    },
    {
      title: "Beyond Conway's Game of Life",
      excerpt:
        "How foundational principles reveal both excellence and pathology in real code.",
      category: "refactoring",
      date: "Oct 2025",
      slug: "beyond-patterns-what-conways-game-of-life-teaches-us-about-software-design",
    },
    {
      title: "Beyond Fowler's Refactoring",
      excerpt:
        "Going further than polymorphism—value objects, type-driven design, and MIRO principles.",
      category: "refactoring",
      date: "Oct 2025",
      slug: "beyond-fowlers-refactoring-advanced-domain-modeling-for-the-theatrical-players-kata",
    },
    {
      title: "When Causality Becomes Opaque: Lessons from the AWS Outage",
      excerpt:
        "Three components functioning correctly. One catastrophic interaction.",
      category: "practice",
      date: "Oct 2025",
      slug: "when-causality-becomes-opaque-lessons-from-the-aws-outage",
    },
    {
      title: "Clean Code Is About Boundaries",
      excerpt: "Everything else is just a side effect.",
      category: "philosophy",
      date: "Oct 2025",
      slug: "clean-code-is-about-boundaries-everything-else-is-just-a-side-effect",
    },
    {
      title: "How to Become a Better Developer in the Age of LLMs",
      excerpt:
        "Thinking rituals that actually work—beyond glorified autocomplete.",
      category: "practice",
      date: "Nov 2025",
      slug: "how-to-become-a-better-developer-in-the-age-of-llms-thinking-rituals-that-actually-work",
    },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? recentArticles
      : recentArticles.filter((a) => a.category === activeCategory);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-stone-950 dark:bg-stone-950 text-stone-100"
          : "bg-stone-50 text-stone-900"
      }`}
      style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
    >
      {/* Grain overlay */}
      <div
        className={`fixed inset-0 pointer-events-none z-50 ${
          darkMode ? "opacity-30" : "opacity-10"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        } ${
          darkMode ? "bg-stone-950 dark:bg-stone-950/90" : "bg-stone-50/90"
        } backdrop-blur-sm`}
      >
        <div
          className="text-lg tracking-widest font-light"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          MANEESH
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden lg:flex gap-8 text-sm tracking-wider ${
            darkMode ? "text-stone-400" : "text-stone-600"
          }`}
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-500 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              darkMode
                ? "text-stone-400 hover:text-amber-500 hover:bg-stone-800"
                : "text-stone-600 hover:text-amber-600 hover:bg-stone-200"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              darkMode
                ? "text-stone-400 hover:text-amber-500 hover:bg-stone-800"
                : "text-stone-600 hover:text-amber-600 hover:bg-stone-200"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-stone-950 dark:bg-stone-950/95" : "bg-stone-50/95"
          } backdrop-blur-md`}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-light tracking-wider transition-all duration-300 ${
                darkMode
                  ? "text-stone-300 hover:text-amber-500"
                  : "text-stone-700 hover:text-amber-600"
              }`}
              style={{
                fontFamily: "'Space Mono', monospace",
                transitionDelay: `${i * 50}ms`,
                transform: mobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: mobileMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-6 lg:px-16">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(251, 191, 36, 0.4) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-24">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-amber-500 tracking-widest text-sm mb-6 uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              25 Years Building Software
            </p>
            <h1 className="text-4xl lg:text-7xl font-light leading-tight mb-8 tracking-tight">
              First Principles,
              <br />
              <span
                className={`italic ${
                  darkMode ? "text-stone-400" : "text-stone-500"
                }`}
              >
                Not Patterns
              </span>
            </h1>
            <p
              className={`text-lg lg:text-xl leading-relaxed max-w-lg ${
                darkMode ? "text-stone-400" : "text-stone-600"
              }`}
            >
              The industry teaches pattern memorization. I teach systematic
              thinking. The difference? Engineers who understand{" "}
              <em
                className={`not-italic ${
                  darkMode ? "text-stone-200" : "text-stone-800"
                }`}
              >
                why
              </em>
              , not just{" "}
              <em
                className={`not-italic ${
                  darkMode ? "text-stone-200" : "text-stone-800"
                }`}
              >
                how
              </em>
              .
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div
                className={`absolute -inset-4 border ${
                  darkMode ? "border-stone-800" : "border-stone-300"
                }`}
                style={{ transform: "rotate(3deg)" }}
              />
              <div
                className={`p-6 lg:p-8 relative ${
                  darkMode ? "bg-stone-900" : "bg-white shadow-lg"
                }`}
              >
                <p
                  className={`text-sm tracking-wider mb-4 uppercase ${
                    darkMode ? "text-stone-500" : "text-stone-400"
                  }`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  From the notebook
                </p>
                <blockquote
                  className={`text-xl lg:text-2xl leading-relaxed italic ${
                    darkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  "Real understanding isn't about recognizing patterns—it's
                  about seeing the forces that create them."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-px bg-amber-500" />
                  <span
                    className={`text-sm ${
                      darkMode ? "text-stone-500" : "text-stone-400"
                    }`}
                  >
                    Silent Worker Philosophy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`flex flex-col items-center gap-2 ${
              darkMode ? "text-stone-600" : "text-stone-400"
            }`}
          >
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Scroll
            </span>
            <div
              className={`w-px h-12 bg-gradient-to-b ${
                darkMode ? "from-stone-600" : "from-stone-400"
              } to-transparent animate-pulse`}
            />
          </div>
        </div>
      </section>

      {/* Detailed Experience Section */}
      <section id="experience" className="py-16 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-2 mb-16">
            <div className="lg:col-span-1">
              <p
                className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Career Journey
              </p>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-5xl font-light leading-tight">
                25+ years of building
                <br />
                systems that last
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {detailedExperience.map((job, i) => (
              <div
                key={i}
                className={`group grid lg:grid-cols-12 gap-6 lg:gap-8 pb-12 border-b last:border-0 ${
                  darkMode ? "border-stone-800/50" : "border-stone-200"
                }`}
              >
                {/* Left Column - Company Info */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <h3 className="text-xl lg:text-2xl font-light mb-2 group-hover:text-amber-500 transition-colors duration-300">
                      {job.company}
                    </h3>
                    <p
                      className="text-amber-500 text-sm mb-1"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {job.role}
                    </p>
                    <p
                      className={`text-sm mb-1 ${
                        darkMode ? "text-stone-500" : "text-stone-500"
                      }`}
                    >
                      {job.team}
                    </p>
                    <p
                      className={`text-xs ${
                        darkMode ? "text-stone-600" : "text-stone-400"
                      }`}
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {job.period} · {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag, j) => (
                        <span
                          key={j}
                          className={`text-xs px-2 py-1 border ${
                            darkMode
                              ? "bg-stone-900 text-stone-500 border-stone-800"
                              : "bg-stone-100 text-stone-500 border-stone-200"
                          }`}
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Highlights */}
                <div className="lg:col-span-8">
                  <ul className="space-y-4">
                    {job.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className={`flex gap-4 leading-relaxed ${
                          darkMode ? "text-stone-400" : "text-stone-600"
                        }`}
                      >
                        <span className="text-amber-500/60 mt-1">◇</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Earlier Roles */}
          <div
            className={`mt-16 pt-16 border-t ${
              darkMode ? "border-stone-800" : "border-stone-200"
            }`}
          >
            <p
              className={`text-xs tracking-widest uppercase mb-6 ${
                darkMode ? "text-stone-600" : "text-stone-400"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Earlier Roles (2000 – 2011)
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {earlierRoles.map((role, i) => (
                <div key={i} className="group">
                  <span
                    className={`group-hover:text-amber-500 transition-colors duration-300 ${
                      darkMode ? "text-stone-400" : "text-stone-600"
                    }`}
                  >
                    {role.role}
                  </span>
                  <span
                    className={`mx-2 ${
                      darkMode ? "text-stone-600" : "text-stone-400"
                    }`}
                  >
                    @
                  </span>
                  <span
                    className={darkMode ? "text-stone-500" : "text-stone-500"}
                  >
                    {role.company}
                  </span>
                  <span
                    className={`text-xs ml-2 ${
                      darkMode ? "text-stone-700" : "text-stone-400"
                    }`}
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {role.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="py-16 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-2 mb-12 lg:mb-20">
            <div className="lg:col-span-1">
              <p
                className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                The Frameworks
              </p>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-5xl font-light leading-tight">
                Three lenses for seeing software clearly
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {frameworks.map((fw, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setHoveredFramework(i)}
                onMouseLeave={() => setHoveredFramework(null)}
              >
                <div
                  className={`absolute inset-0 border transition-all duration-500 ${
                    hoveredFramework === i
                      ? "border-amber-500 scale-105"
                      : darkMode
                      ? "border-stone-800"
                      : "border-stone-200"
                  }`}
                  style={{
                    transform:
                      hoveredFramework === i ? "rotate(-1deg)" : "rotate(0deg)",
                  }}
                />
                <div
                  className={`relative p-6 lg:p-8 h-full transition-transform duration-500 group-hover:-translate-y-2 ${
                    darkMode ? "bg-stone-900" : "bg-white shadow-sm"
                  }`}
                >
                  <div className="text-4xl lg:text-5xl text-amber-500 mb-6 opacity-60">
                    {fw.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light mb-4">
                    {fw.name}
                  </h3>
                  <p
                    className={`leading-relaxed mb-6 ${
                      darkMode ? "text-stone-400" : "text-stone-600"
                    }`}
                  >
                    {fw.description}
                  </p>
                  <div
                    className={`pt-6 border-t ${
                      darkMode ? "border-stone-800" : "border-stone-200"
                    }`}
                  >
                    <span
                      className="text-sm text-amber-500 tracking-wider"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {fw.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Framework */}
      <section
        id="philosophy"
        className={`py-16 lg:py-32 px-6 lg:px-16 ${
          darkMode ? "bg-stone-900/50" : "bg-stone-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <p
                className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Meta-Framework
              </p>
              <h2 className="text-3xl lg:text-5xl font-light leading-tight mb-8">
                Four Axes of
                <br />
                Software Design
              </h2>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-stone-400" : "text-stone-600"
                }`}
              >
                Every system can be understood through these four lenses. Master
                them, and complexity becomes navigable.
              </p>
            </div>

            <div className="space-y-6">
              {metaFramework.map((item, i) => (
                <div
                  key={i}
                  className={`group border-l-2 hover:border-amber-500 pl-6 py-4 transition-all duration-300 ${
                    darkMode ? "border-stone-700" : "border-stone-300"
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className={`text-xs ${
                        darkMode ? "text-stone-600" : "text-stone-400"
                      }`}
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="text-xl font-light group-hover:text-amber-500 transition-colors duration-300">
                      {item.axis}
                    </h3>
                  </div>
                  <p
                    className={`italic ${
                      darkMode ? "text-stone-500" : "text-stone-500"
                    }`}
                  >
                    {item.insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="writing" className="py-16 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p
              className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              90+ Articles & Counting
            </p>
            <h2 className="text-3xl lg:text-5xl font-light leading-tight mb-6">
              The Stackshala Blog
            </h2>
            <p
              className={`text-lg lg:text-xl max-w-2xl mx-auto ${
                darkMode ? "text-stone-400" : "text-stone-600"
              }`}
            >
              Deep dives into system design, refactoring wisdom, and the
              philosophy of software craftsmanship.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-12 lg:mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs text-amber-500 tracking-widest uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Featured
              </span>
              <div
                className={`flex-1 h-px ${
                  darkMode ? "bg-stone-800" : "bg-stone-200"
                }`}
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredArticles.map((article, i) => (
                <a
                  key={i}
                  href={`https://blog.stackshala.com/${article.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div
                    className={`relative border p-6 lg:p-8 h-full group-hover:border-amber-500/50 transition-all duration-300 ${
                      darkMode
                        ? "border-stone-800 bg-stone-950 dark:bg-stone-950"
                        : "border-stone-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs px-2 py-1 uppercase tracking-wider ${
                          darkMode
                            ? "bg-stone-800 text-stone-400"
                            : "bg-stone-100 text-stone-500"
                        }`}
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {article.category.replace("-", " ")}
                      </span>
                      <span
                        className={`text-xs ${
                          darkMode ? "text-stone-600" : "text-stone-400"
                        }`}
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-light mb-3 group-hover:text-amber-500 transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        darkMode ? "text-stone-500" : "text-stone-500"
                      }`}
                    >
                      {article.excerpt}
                    </p>
                    <div
                      className="mt-6 flex items-center gap-2 text-amber-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      <span>Read</span>
                      <span>→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
            <span
              className={`text-xs tracking-widest uppercase shrink-0 ${
                darkMode ? "text-stone-600" : "text-stone-400"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Filter:
            </span>
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-amber-500 text-stone-950"
                    : darkMode
                    ? "border border-stone-700 text-stone-400 hover:border-stone-500"
                    : "border border-stone-300 text-stone-600 hover:border-stone-400"
                }`}
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {cat.label}
                <span className="ml-2 opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 mb-12">
            {filteredArticles.slice(0, 8).map((article, i) => (
              <a
                key={i}
                href={`https://blog.stackshala.com/${article.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex gap-4 lg:gap-6 p-4 lg:p-6 border transition-all duration-300 ${
                  darkMode
                    ? "border-stone-800/50 hover:border-stone-700 hover:bg-stone-900/30"
                    : "border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                <div
                  className={`shrink-0 w-10 h-10 lg:w-12 lg:h-12 border flex items-center justify-center group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-300 ${
                    darkMode
                      ? "border-stone-800 text-stone-600"
                      : "border-stone-200 text-stone-400"
                  }`}
                >
                  <span className="text-lg">◇</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs uppercase tracking-wider ${
                        darkMode ? "text-stone-600" : "text-stone-400"
                      }`}
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {article.category.replace("-", " ")}
                    </span>
                    <span
                      className={darkMode ? "text-stone-700" : "text-stone-300"}
                    >
                      ·
                    </span>
                    <span
                      className={`text-xs ${
                        darkMode ? "text-stone-600" : "text-stone-400"
                      }`}
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {article.date}
                    </span>
                  </div>
                  <h4 className="text-base lg:text-lg font-light group-hover:text-amber-500 transition-colors duration-300 mb-2 truncate">
                    {article.title}
                  </h4>
                  <p
                    className={`text-sm line-clamp-2 ${
                      darkMode ? "text-stone-500" : "text-stone-500"
                    }`}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <a
              href="https://blog.stackshala.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-4 px-6 lg:px-8 py-3 lg:py-4 border hover:border-amber-500 hover:text-amber-500 transition-all duration-300 ${
                darkMode
                  ? "border-stone-700 text-stone-400"
                  : "border-stone-300 text-stone-600"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span>EXPLORE ALL 90+ ARTICLES</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SpecFlow Section */}
      <section
        id="specflow"
        className={`py-16 lg:py-32 px-6 lg:px-16 ${
          darkMode ? "bg-stone-900/50" : "bg-stone-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* SpecFlow Header */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <p
                className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Developer Tool
              </p>
              <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                SpecFlow
              </h2>
              <p className="text-xl text-stone-400 leading-relaxed mb-6">
                An AI-powered, specification-driven development platform
                enabling safe AI-assisted changes on large codebases. Built as a
                distributed client-server system with a cross-platform CLI (~14K
                LOC Go, 21 internal modules) and embedded MCP server for deep
                integration with Claude Code, Cursor, and AI coding
                environments.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Go",
                  "PostgreSQL",
                  "OpenAI",
                  "MCP",
                  "Razorpay",
                  "SSE Streaming",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-stone-700 text-stone-500"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Mini Diagram */}
            <div className="relative">
              <div
                className="absolute -inset-4 border border-stone-800 opacity-50"
                style={{ transform: "rotate(-1deg)" }}
              />
              <div className="relative bg-stone-950 dark:bg-stone-950 p-6 border border-stone-800">
                <p
                  className="text-xs text-stone-600 tracking-widest uppercase mb-4"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Architecture
                </p>
                <pre
                  className="text-xs text-stone-500 leading-relaxed overflow-x-auto"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {`┌─────────────────────────────────┐
│      SPECFLOW LICENSE SERVER    │
├─────────────────────────────────┤
│  Webhooks │ API │ LLM Proxy    │
├─────────────────────────────────┤
│         MIDDLEWARE              │
│   (Recovery, Logging, Auth)     │
├─────────────────────────────────┤
│       BUSINESS LOGIC            │
│ Licenses │ Tiers │ Email │ Pay │
├─────────────────────────────────┤
│       DATABASE LAYER            │
│     (pgxpool, 5-25 conn)        │
└─────────────────────────────────┘
            │
            ▼
    PostgreSQL (Supabase)`}
                </pre>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs text-amber-500 tracking-widest uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Core Capabilities
              </span>
              <div className="flex-1 h-px bg-stone-800" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {specflowFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="group flex gap-6 p-6 border border-stone-800/50 hover:border-stone-700 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 border border-stone-800 flex items-center justify-center text-amber-500/60 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-300">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-light mb-2 group-hover:text-amber-500 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Layer LLM Validation */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs text-amber-500 tracking-widest uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                LLM Proxy: 5-Layer Validation
              </span>
              <div className="flex-1 h-px bg-stone-800" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {[
                "License Valid?",
                "Under Op Limit?",
                "Token Budget OK?",
                "Request Cap OK?",
                "Rate Limit OK?",
              ].map((layer, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 flex items-center justify-center text-xs bg-stone-800 text-amber-500"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-stone-400 text-sm">{layer}</span>
                  {i < 4 && <span className="text-stone-700 text-lg">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs text-amber-500 tracking-widest uppercase"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Tech Stack
              </span>
              <div className="flex-1 h-px bg-stone-800" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {specflowTechStack.map((tech, i) => (
                <div
                  key={i}
                  className="group px-4 py-3 border border-stone-800 hover:border-stone-700 transition-all duration-300"
                >
                  <span className="text-stone-300 text-sm">{tech.name}</span>
                  <span
                    className="text-stone-600 text-xs ml-2"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="py-32 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-amber-500 tracking-widest text-sm mb-4 uppercase text-center"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Current Ventures
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-20 text-center">
            Building what matters
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {ventures.map((venture, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-px bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative border border-stone-800 p-10 h-full bg-stone-950 dark:bg-stone-950 group-hover:border-stone-700 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-light mb-2">
                        {venture.name}
                      </h3>
                      <p className="text-amber-500 text-sm italic">
                        {venture.tagline}
                      </p>
                    </div>
                    <div className="w-12 h-12 border border-stone-700 flex items-center justify-center text-stone-600 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-300">
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                  <p className="text-stone-400 leading-relaxed mb-8">
                    {venture.description}
                  </p>
                  <div className="pt-6 border-t border-stone-800">
                    <span
                      className="text-sm tracking-wider text-stone-500"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {venture.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-b from-stone-900/50 to-stone-950">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            In Progress
          </p>
          <h2 className="text-4xl lg:text-6xl font-light leading-tight mb-8 italic">
            "Defining You"
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto mb-12">
            A book about self-knowledge and identity—moving beyond traditional
            labels to observe oneself through behavioral patterns.
          </p>
          <div
            className="inline-flex items-center gap-4 text-stone-500 text-sm"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span className="w-8 h-px bg-stone-700" />
            Coming Soon
            <span className="w-8 h-px bg-stone-700" />
          </div>
        </div>
      </section>

      {/* Talks & Publications */}
      <section id="talks" className="py-32 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Talks & Publications
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Sharing what I've learned
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {talksAndPublications.map((item, i) => (
              <div
                key={i}
                className="group p-6 border border-stone-800/50 hover:border-stone-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`text-xs px-2 py-1 ${
                      item.type === "Book"
                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/30"
                        : "bg-stone-800 text-stone-400"
                    }`}
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {item.type}
                  </span>
                  <span className="text-stone-700 text-lg group-hover:text-amber-500 transition-colors duration-300">
                    {item.type === "Book" ? "◆" : "◇"}
                  </span>
                </div>
                <h4 className="text-lg font-light mb-2 group-hover:text-amber-500 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* The End of Software Engineering */}
          <div className="mt-12 p-8 border border-amber-500/30 bg-amber-500/5">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span
                  className="text-xs px-2 py-1 bg-amber-500/20 text-amber-500 border border-amber-500/30 mb-4 inline-block"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Online Book · In Progress
                </span>
                <h3 className="text-2xl font-light mb-4 italic">
                  "The End of Software Engineering"
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  Exploring why traditional notions of "software engineering"
                  break down under modern scale, complexity, and AI-assisted
                  development. A shift from implementation-centric thinking to
                  system behavior, invariants, and evolution under pressure.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href="https://maneeshchaturvedi.github.io/the-end-of-software-engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  <span>READ NOW</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section
        className={`py-16 lg:py-24 px-6 lg:px-16 ${
          darkMode ? "bg-stone-900/30" : "bg-stone-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Expertise
            </p>
            <h2 className="text-3xl lg:text-4xl font-light">
              Core Competencies
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {keySkillsCategories.map((cat, i) => (
              <div key={i} className="text-center">
                <h4
                  className="text-sm text-amber-500 tracking-wider uppercase mb-4"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {cat.category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 text-sm border transition-colors duration-300 ${
                        darkMode
                          ? "text-stone-400 border-stone-700 hover:border-amber-500 hover:text-amber-500"
                          : "text-stone-600 border-stone-300 hover:border-amber-500 hover:text-amber-600"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section
        className={`py-16 lg:py-24 px-6 lg:px-16 border-y ${
          darkMode ? "border-stone-800" : "border-stone-200"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years Building" },
              { number: "90+", label: "Articles Written" },
              { number: "100+", label: "Engineers Trained" },
              { number: "3×", label: "Bug Reduction" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl lg:text-5xl font-light text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div
                  className={`text-xs lg:text-sm tracking-wider uppercase ${
                    darkMode ? "text-stone-500" : "text-stone-500"
                  }`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="connect" className="py-16 lg:py-32 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-amber-500 tracking-widest text-sm mb-4 uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Let's Connect
          </p>
          <h2 className="text-3xl lg:text-5xl font-light leading-tight mb-8">
            Ready to think differently
            <br />
            about software?
          </h2>
          <p
            className={`text-lg lg:text-xl leading-relaxed mb-12 ${
              darkMode ? "text-stone-400" : "text-stone-600"
            }`}
          >
            Whether you're looking to transform your engineering team or deepen
            your own practice— the first step is a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <a
              href="mailto:hello@stackshala.com"
              className={`group relative px-6 lg:px-8 py-3 lg:py-4 font-medium tracking-wider overflow-hidden w-full sm:w-auto text-center ${
                darkMode
                  ? "bg-amber-500 text-stone-950"
                  : "bg-amber-500 text-white"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span className="relative z-10">START A CONVERSATION</span>
              <div
                className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${
                  darkMode ? "bg-stone-100" : "bg-amber-600"
                }`}
              />
            </a>
            <a
              href="https://stackshala.com"
              className={`px-6 lg:px-8 py-3 lg:py-4 border hover:border-amber-500 hover:text-amber-500 transition-all duration-300 tracking-wider w-full sm:w-auto text-center ${
                darkMode
                  ? "border-stone-700 text-stone-400"
                  : "border-stone-300 text-stone-600"
              }`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              EXPLORE STACKSHALA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-6 lg:px-16 border-t ${
          darkMode ? "border-stone-800" : "border-stone-200"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div
            className={`text-sm ${
              darkMode ? "text-stone-600" : "text-stone-400"
            }`}
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            © 2025 Maneesh · Bangalore, India
          </div>
          <div
            className="flex items-center gap-8 text-stone-500 text-sm"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <a
              href="https://www.linkedin.com/in/maneeshc"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/maneeshchaturvedi"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://blog.stackshala.com"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="https://devtools.stackshala.com"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              SpecFlow
            </a>
          </div>

          <div
            className={`text-xs italic ${
              darkMode ? "text-stone-700" : "text-stone-400"
            }`}
          >
            Silent work. Visible impact.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
