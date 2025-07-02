import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Header({ lenis }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Projects', to: '#projects' },
    { label: 'Experience', to: '#work-experience' },
    { label: 'Contact', to: '#contact' },
  ]

  const handleLenisScroll = (target) => {
    if (!lenis) return
    lenis.scrollTo(target)
    setIsOpen(false)
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone/80 backdrop-blur-md shadow border-b-gray-1' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 ">
        {/* Logo */}
        <div className={`text-2xl font-bold text-orange-500 cursor-pointer `} onClick={() => handleLenisScroll('#home')}>
          <svg width="42" height="48" viewBox="0 0 342 398" fill="none" className={` transition-all duration-200 ${scrolled ? 'opacity-100' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M255 52.25L246 0.75H341.5V256.75H87V162.75H142V195.75H284.5V52.25H255Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 342.75V90.75H256V342.75H203.5V397.25H153V342.75H0.5ZM51.5 146.75V298.25H153V269.25H203.5V146.75H51.5Z" fill="white"/>
            </svg>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleLenisScroll(item.to)}
              className="cursor-pointer relative group text-stone-700 dark:text-white font-medium"
            >
              <motion.span whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                {item.label}
              </motion.span>
              <span className="block h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          ))}
        </nav>

        {/* Burger Menu */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-6 h-6">
                <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="absolute block w-6 h-0.5 bg-white"
                transition={{ duration: 0.3 }}
                />
                <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="absolute block w-6 h-0.5 bg-white top-5"
                transition={{ duration: 0.3 }}
                />
                <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="absolute block w-6 h-0.5 bg-white top-7"
                transition={{ duration: 0.3 }}
                />
            </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-stone/80 backdrop-blur-md shadow border-b-gray-1 px-6 py-4"
            >
            {menuItems.map((item, i) => (
                <button
                key={i}
                onClick={() => handleLenisScroll(item.to)}
                className="block w-full text-left py-2 text-white font-medium"
                >
                {item.label}
                </button>
            ))}
            </motion.div>
        )}
        </AnimatePresence>

    </header>
  )
}

export default Header
