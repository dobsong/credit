import { ref } from 'vue'

interface FieldConfig {
  label: string
  key: string
}

const DEFAULT_FIELDS: FieldConfig[] = [
  { label: 'Project Title', key: 'title' },
  { label: 'Vision', key: 'vision' },
  { label: "Layman's Summary", key: 'laymansSummary' },
  { label: 'Stakeholder Analysis', key: 'stakeholderAnalysis' },
  { label: 'Approach', key: 'approach' },
  { label: 'Data', key: 'data' },
  { label: 'Ethics', key: 'ethics' },
  { label: 'Platform', key: 'platform' },
  { label: 'Support Materials', key: 'supportMaterials' },
  { label: 'Costings', key: 'costings' },
]

export function useClipboard() {
  const copySuccess = ref(false)

  async function copyToClipboard(text: string, successDurationMs: number = 2000): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text)
      copySuccess.value = true
      setTimeout(() => {
        copySuccess.value = false
      }, successDurationMs)
      return true
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      return false
    }
  }

  function formatAsPlainText(
    data: Record<string, any>,
    fields: FieldConfig[] = DEFAULT_FIELDS,
  ): string {
    const lines = fields
      .map((field) => {
        const value = data[field.key]
        if (!value) return null
        return `${field.label}:\n${value}`
      })
      .filter(Boolean)
      .join('\n\n')
    return lines
  }

  async function copyDataAsPlainText(
    data: Record<string, any>,
    fields?: FieldConfig[],
  ): Promise<boolean> {
    const text = formatAsPlainText(data, fields)
    return copyToClipboard(text)
  }

  return {
    copySuccess,
    copyToClipboard,
    formatAsPlainText,
    copyDataAsPlainText,
  }
}
