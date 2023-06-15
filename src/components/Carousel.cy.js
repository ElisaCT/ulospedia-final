import Carousel from './Carousel.vue'

describe('<Carousel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Carousel)
  })
})