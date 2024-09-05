import { Button } from "@/components/ui/button"
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">MyPortfolio</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">Skills</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#works">Works</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">Experience</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button variant="outline" size="sm">
            Download CV
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
