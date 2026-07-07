'use client'

import { motion } from "motion/react"
import { usePathname, useRouter } from "next/navigation"
import {
  Briefcase,
  FolderKanban,
  Heart,
  Mail,
  User,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useAppSelector } from "@/hook/hook"

type NavItem = {
  name: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { name: "Personal", href: "personal", icon: Heart },
  { name: "About", href: "about", icon: User },
  { name: "Skills", href: "skills", icon: Zap },
  { name: "Services", href: "service", icon: Wrench },
  { name: "Experience", href: "experience", icon: Briefcase },
  { name: "Projects", href: "projects", icon: FolderKanban },
  { name: "Contact", href: "contact", icon: Mail },
]

export function SideNav() {
  const pathname = usePathname()
  const router = useRouter()
  const activeSection = useAppSelector((s) => s.active_section.active)
  const isHome = pathname === "/"

  const handleClick = (href: string) => {
    if (isHome) {
      const el = document.getElementById(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${href}`)
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-40"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col gap-1.5 p-1.5 rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-lg">
        {navItems.map((item) => {
          const active = isHome && activeSection === item.name
          const Icon = item.icon
          return (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => handleClick(item.href)}
                aria-label={item.name}
                aria-current={active ? "true" : undefined}
                title={item.name}
                className={cn(
                  "group/nav relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                  active
                    ? "bg-accent text-accent-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                )}
              >
                <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                <span
                  className={cn(
                    "pointer-events-none absolute right-full mr-2 px-2.5 py-1 rounded-md bg-foreground text-background text-xs font-medium whitespace-nowrap",
                    "opacity-0 -translate-x-1 group-hover/nav:opacity-100 group-hover/nav:translate-x-0",
                    "transition-all duration-200 hidden md:block shadow-md"
                  )}
                >
                  {item.name}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </motion.aside>
  )
}
