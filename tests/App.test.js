import React from 'react'
import { shallow } from 'enzyme'

import App from '../src/components/App'

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').text()).toBe('App')
    expect(wrapper).toMatchSnapshtot
  })
})