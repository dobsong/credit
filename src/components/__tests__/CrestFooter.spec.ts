import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CrestFooter from '../CrestFooter.vue'

describe('CrestFooter', () => {
  it('renders dark-mode LU logo in dark-mode', () => {
    const wrapper = mount(CrestFooter, { props: { theme: 'dark' } })
    const luLogo = wrapper.get('#lu-logo')
    expect(luLogo.attributes()['src']).toContain('/assets/dark/lu-logo.svg')
  })

  it('renders light-mode LU logo in non-dark-mode', () => {
    const wrapper = mount(CrestFooter, { props: { theme: '' } })
    const luLogo = wrapper.get('#lu-logo')
    expect(luLogo.attributes()['src']).toContain('/assets/lu-logo.svg')
  })
})
