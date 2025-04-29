import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import ToolkitFooter from '../ToolkitFooter.vue'

describe('ToolkitFooter', () => {
  it('renders dark-mode LU logo in dark-mode', () => {
    const wrapper = mount(ToolkitFooter, { props: { theme: 'dark' } })
    const luLogo = wrapper.get('#lu-logo')
    expect(luLogo.attributes()['src']).toContain('/assets/dark/lu-logo.svg')
  })

  it('renders light-mode LU logo in non-dark-mode', () => {
    const wrapper = mount(ToolkitFooter, { props: { theme: '' } })
    const luLogo = wrapper.get('#lu-logo')
    expect(luLogo.attributes()['src']).toContain('/assets/lu-logo.svg')
  })
})
