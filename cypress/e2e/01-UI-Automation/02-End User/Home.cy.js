describe('template spec', () => {
  it('Tab:Home', () => {
    //pergi ke url localhost
    cy.visit('http://127.0.0.1:1753/') 

    //menekan tombol eksplore ulos
    cy.get('#btn-ekplore-ulos').click()

    //menekan text hyperlink jelajahi ulos
    cy.get('#text-jelajahi-ulos').click()

    //menekan text hyperlink telusuri sejarah ulos
    cy.get('#text-telusuri-sejarah-ulos')

    //Fakta Menarik ulos: menekan tombol next slider
    cy.get('#next-button')

    //Fakta Menarik ulos: menekan tombol prev slider
    cy.get('#prev-button')

    //Ragam ulos: menekan tombol batak toba
    cy.get('#text-batak-toba')

    //Ragam ulos: menekan tombol batak simalungun
    cy.get('#text-batak-simalungun')

    //Ragam ulos: menekan tombol batak mandailing
    cy.get('#text-batak-mandailing')

    //Ragam ulos: menekan tombol batak karo
    cy.get('#text-batak-karo')

    //Ragam ulos: menekan tombol batak angkola
    cy.get('#text-batak-angkola')
  })


  it('TAB: Sejarah Ulos', () => {
    //pergi ke url localhost
    cy.visit('http://127.0.0.1:1753/') 

    //menekan navbar sejarah ulos
    cy.get('#navbar-sejarah-ulos').click()

    //menekan button tab section sejarah ulos
    cy.get('#segment-item-1').click()

    //menekan button tab section arti ulos
    cy.get('#segment-item-2').click()

    //menekan button tab section Ulos di zaman modern
    cy.get('#segment-item-3').click()

  })

  it('TAB: Sejarah Ulos', () => {
    //pergi ke url localhost
    cy.visit('http://127.0.0.1:1753/') 

    //menekan navbar galery ulos
    cy.get('#navbar-galeri-ulos').click()

    //menekan field cari ulos
    cy.get('#field-cari-ulos').click()

    //menekan button filter
    cy.get('#btn-filter').click()

    cy.get('#navbar-penenun')
  })

  it('TAB: Penenun', () => {
    //pergi ke url localhost
    cy.visit('http://127.0.0.1:1753/') 

    //menekan navbar penenun
    cy.get('#navbar-penenun')
  })
})