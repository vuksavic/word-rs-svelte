import { writable } from 'svelte/store'
import { browser } from '$app/environment'

function createThemeStore () {
  const { subscribe, set, update } = writable(false)

  return {
    subscribe,
    initialize: () => {
      if (browser) {
        const isDark = localStorage.theme === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        set(isDark)
      }
    },
    toggle: () => {
      update(isDark => {
        const newValue = !isDark
        if (browser) {
          localStorage.theme = newValue ? 'dark' : 'light'
        }
        return newValue
      })
    }
  }
}

export const isDarkMode = createThemeStore()
