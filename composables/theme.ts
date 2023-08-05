export const useTheme = (fallback = 'light') => {
  const theme = ref(fallback)
  if (process.client && window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    if (media.matches) {
      theme.value = 'dark'
    }

    const themeUpdate = (event: MediaQueryListEvent) => {
      theme.value = event.matches ? 'dark' : 'light'
    }

    onMounted(() => media.addEventListener('change', themeUpdate))
    onUnmounted(() => media.removeEventListener('change', themeUpdate))
  }
  return theme
}
