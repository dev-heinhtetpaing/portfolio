'use client'

import { useCallback, useEffect, useRef, useState } from "react"
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

// How long to stay visible after the user stops scrolling / leaves the nav.
const HIDE_DELAY_MS = 1500

export function SideNav() {
  const pathname = usePathname()
  const router = useRouter()
  const activeSection = useAppSelector((s) => s.active_section.active)
  const isHome = pathname === "/"

  const [isVisible, setIsVisible] = useState(true)
  const isHoveredRef = useRef(false)
  const isFocusedRef = useRef(false)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleHide = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current && !isFocusedRef.current) {
        setIsVisible(false)
      }
    }, HIDE_DELAY_MS)
  }, [])

  const revealAndReschedule = useCallback(() => {
    setIsVisible(true)
    scheduleHide()
  }, [scheduleHide])

  // Auto-hide on scroll idle; reveal on any scroll activity.
  useEffect(() => {
    const onScroll = () => revealAndReschedule()
    scheduleHide()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [scheduleHide, revealAndReschedule])

  // Reveal briefly whenever the route changes so the nav re-announces itself.
  useEffect(() => {
    revealAndReschedule()
  }, [pathname, revealAndReschedule])

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
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onMouseEnter={() => {
        isHoveredRef.current = true
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
        setIsVisible(true)
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
        scheduleHide()
      }}
      onFocus={() => {
        isFocusedRef.current = true
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
        setIsVisible(true)
      }}
      onBlur={(e) => {
        // Blur bubbles from children; only mark unfocused when focus leaves the aside entirely.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          isFocusedRef.current = false
          scheduleHide()
        }
      }}
      className={cn(
        "fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-40",
        !isVisible && "pointer-events-none"
      )}
      aria-label="Section navigation"
      aria-hidden={!isVisible}
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
                tabIndex={isVisible ? 0 : -1}
                className={cn(
                  "group/nav relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                  active
                    ? "bg-accent text-accent-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                )}
              >
                <Icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
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
