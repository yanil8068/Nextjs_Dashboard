import React from 'react'
import DataTable from './DataTable'

describe('<DataTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DataTable />)
  })
})