import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Smooth scroll to section with navbar offset
export function smoothScrollToSection(sectionId) {
  const element = document.querySelector(sectionId)
  if (element) {
    const offset = 80 // Height of navbar
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}