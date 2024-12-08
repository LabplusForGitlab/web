'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className="p-2 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100" aria-label="Toggle theme" />
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}

