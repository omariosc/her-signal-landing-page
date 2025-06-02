"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X, ChevronDown, ExternalLink, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "prototype",
        "problem",
        "theory",
        "concept",
        "context",
        "challenge",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".resources-dropdown")) {
        setResourcesDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navItems = [
    { href: "#prototype", label: "Download" },
    { href: "#problem", label: "Problem" },
    { href: "#theory", label: "Theory" },
    { href: "#concept", label: "Concept" },
    { href: "#context", label: "Context" },
    // { href: "#challenge", label: "Challenge" },
  ];

  const resourceItems = [
    {
      label: "24-hour National Domestic Abuse Helpline",
      href: "https://www.nationaldahelpline.org.uk/",
      description:
        "Free, confidential helpline for women and men experiencing domestic abuse",
    },
    {
      label: "End Violence Against Women - Find Help",
      href: "https://www.endviolenceagainstwomen.org.uk/find-help/",
      description: "Resources and support for those experiencing violence",
    },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 max-[350px]:hidden max-h-[350px]:hidden",
        scrolled ? "glass-effect shadow-lg/25" : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="relative animate-float p-2">
              <Shield className="h-8 w-8 text-primary p-1 animate-pulse-slow rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gradient">HerSignal</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full max-[405px]:hidden flex items-center gap-1 ring-2 ring-primary ring-offset-2 ring-offset-background cursor-default">
                      <Trophy className="h-3 w-3" />
                      Hackathon Winner
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Won the most inclusive and accessible prize</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Full menu for screens 1024px+ */}
              <div className="hidden xl:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                      activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Limited menu for 750px-1024px: Download + Need Help + Hamburger */}
              <div className="hidden md:flex xl:hidden items-center space-x-6">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => handleNavClick("#prototype")}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    activeSection === "prototype"
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  Download
                  {activeSection === "prototype" && (
                    <motion.div
                      layoutId="activeTabMd"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Need Help for 750px+ */}
            <div className="relative resources-dropdown hidden md:block">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navItems.length }}
                onClick={() =>
                  setResourcesDropdownOpen(!resourcesDropdownOpen)
                }
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                className="px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors flex items-center"
              >
                Need Help?
                <ChevronDown
                  className={cn(
                    "ml-1 h-3 w-3 transition-transform",
                    resourcesDropdownOpen && "rotate-180"
                  )}
                />
              </motion.button>

              {resourcesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="absolute top-full right-0 mt-2 w-80 glass-effect rounded-lg shadow-lg border p-2 z-50 resources-dropdown"
                >
                  {resourceItems.map((resource, index) => (
                    <motion.a
                      key={resource.href}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block p-3 rounded-md hover:bg-accent transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {resource.label}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button - visible at different breakpoints */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 space-y-2 glass-effect rounded-lg p-4"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                )}
              >
                {item.label}
              </button>
            ))}

            {/* Need Help? section for mobile */}
            <div className="pt-2 mt-2 border-t border-border/50">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                <span className="bg-purple-500/30 w-[min-content] p-2 -ml-1 rounded-lg">
                  Need Help?
                </span>
              </div>
              {resourceItems.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-accent group"
                >
                  <span>{resource.label}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navigation;
