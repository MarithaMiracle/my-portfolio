// 'use client'
// import { useEffect, useState } from 'react'
// import Image from 'next/image' // Import Image from next/image

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     // Load saved mode or system preference
//     const saved = localStorage.getItem('theme')
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

//     const enabled = saved === 'dark' || (!saved && systemPrefersDark)
//     setIsDark(enabled)
//     document.documentElement.classList.toggle('dark', enabled)
//   }, [])

//   const toggleTheme = () => {
//     const newMode = !isDark
//     setIsDark(newMode)
//     localStorage.setItem('theme', newMode ? 'dark' : 'light')
//     document.documentElement.classList.toggle('dark', newMode)
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle Dark Mode"
//       className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
//     >
//       <Image
//         src={isDark ? '/butterfly-svgrepo-com.svg' : '/flower-svgrepo-com (1).svg'}
//         alt="Theme Icon"
//         width={24}
//         height={24}
//       />

//       {/* {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />} */}
//     </button>
//   )
// }
