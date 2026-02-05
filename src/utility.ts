import axios from 'axios'

// Helper function to scroll to a section by ID
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// Helper function to safely extract error message
export function getErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    return err.response?.data?.message || err.message || 'An API error occurred'
  }
  if (err instanceof Error) {
    return err.message
  }
  return String(err)
}
