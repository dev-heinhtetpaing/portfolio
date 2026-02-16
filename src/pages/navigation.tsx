'use client'

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "@/hook/hook";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const AcitveSection = useAppSelector(state => state.active_section.active)
  const navItems = [
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Services", href: "service" },
    { name: "Projects", href: "projects" },
    { name: "Personal", href: "personal" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];
  const ScrollIntoView=(href:string)=>{
    const element=document.getElementById(href)
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-xl text-foreground"
          >
            Hein Htet Paing
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              console.log(item.href),
              <motion.span
                key={item.name}
                onClick={() => ScrollIntoView(item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                // href={item.href}
                className={`${AcitveSection === item.name ? "text-accent" : "text-muted-foreground"} hover:text-foreground transition-colors duration-200 cursor-pointer`}
              >
                {item.name}
              </motion.span>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Button
              onClick={() =>
                location.assign("https://github.com/dev-heinhtetpaing")
              }
              variant="ghost"
              size="sm"
              className="p-2"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              onClick={() =>
                location.assign(
                  "https://www.linkedin.com/in/hein-htet-paing-1053462b1"
                )
              }
              variant="ghost"
              size="sm"
              className="p-2"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <a href="mailto:heinhtetpaing2273@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${AcitveSection === item.name ? "text-accent" : "text-muted-foreground"} block  hover:text-foreground transition-colors duration-200 py-2`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button
                  onClick={() =>
                    location.assign("https://github.com/dev-heinhtetpaing")
                  }
                  variant="ghost"
                  size="sm"
                  className="p-2"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() =>
                    location.assign(
                      "https://www.linkedin.com/in/hein-htet-paing-1053462b1"
                    )
                  }
                  variant="ghost"
                  size="sm"
                  className="p-2"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <a href="mailto:heinhtetpaing2273@gmail.com">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
