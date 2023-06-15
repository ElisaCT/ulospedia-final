import RagamUlos from './RagamUlos.vue'

describe('<RagamUlos />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(RagamUlos)
  })
})