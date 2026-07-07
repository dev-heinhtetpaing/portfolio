'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import { Briefcase, FolderKanban, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const routeLinks = [
  { name: "Experiences", href: "/experiences", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderKanban },
]

export function Navigation() {
  const pathname = usePathname()
  const isRouteActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-xl text-foreground shrink-0"
          >
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Hein <span className="text-accent">Htet</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-1 sm:gap-2"
          >
            {routeLinks.map((link) => {
              const active = isRouteActive(link.href)
              return (
                <Button
                  key={link.href}
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "gap-2 transition-colors",
                    active
                      ? "text-accent hover:text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Link href={link.href}>
                    <link.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </Link>
                </Button>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-1 shrink-0"
          >
            <Button asChild variant="ghost" size="sm" className="p-2">
              <a
                href="https://github.com/dev-heinhtetpaing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="p-2">
              <a
                href="https://www.linkedin.com/in/hein-htet-paing-1053462b1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="p-2">
              <a
                href="mailto:heinhtetpaing2273@gmail.com"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
