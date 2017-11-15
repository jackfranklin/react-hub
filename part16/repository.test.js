import React from 'react'
import { shallow } from 'enzyme'
import Repository from './repository'

describe('Part 16 tests', () => {
  it('renders the right number of stars', () => {
    const repository = {
      stars: 33,
      name: 'test',
      id: 1,
    }
    const wrapper = shallow(<Repository repository={repository} />)
    expect(wrapper.find('.star-count').text()).toEqual('33')
  })

  // EXERCISE: write a test that asserts that the right name is outputted
  // and that the right anchor with the right URL to github is created
  // hint: wrapper.find('a').props().href will give you the URL of the link
})
