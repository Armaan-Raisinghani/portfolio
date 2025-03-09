"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">John Doe</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/#experience" className="text-sm font-medium hover:underline underline-offset-4">
            Experience
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">John Doe</span>
            </Link>
            <Button variant="outline" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container mt-8 flex flex-col gap-6 px-4">
            <Link href="/" className="text-lg font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/#about" className="text-lg font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/#projects" className="text-lg font-medium" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/#experience" className="text-lg font-medium" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

