import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'

import { renderInRedux } from '../../src/Utils'
const { renderIntoDocument, findRenderedDOMComponentWithClass } = TestUtils
const { Simulate } = TestUtils

import Main from '../../src/Components/Main/Main.jsx'

describe('Main', () => {
  it('renders a button that increments a counter when clicked', () => {
    const component = renderIntoDocument(renderInRedux(<Main/>))
    const button = findRenderedDOMComponentWithClass(component, 'click-me')
    Simulate.click(button)

    const counter = findRenderedDOMComponentWithClass(component, 'counter')
    expect(counter.innerHTML).to.equal('1')
  })
})
