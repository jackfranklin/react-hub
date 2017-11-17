import React from 'react'
import { shallow } from 'enzyme'
import Repository from './repository'

describe('Part 16 tests', () => {
  const repository = {
    stars: 33,
    name: 'test',
    id: 1,
  }

  it('renders the right number of stars', () => {
    const wrapper = shallow(<Repository repository={repository} />)
    expect(wrapper.find('.star-count').text()).toEqual('33')
  })

  it('renders the name as the text of the anchor', () => {
    const wrapper = shallow(<Repository repository={repository} />)
    expect(wrapper.find('a').text()).toEqual('test')
  })

  it('renders the right href attribute on the anchor', () => {
    const wrapper = shallow(<Repository repository={repository} />)
    expect(wrapper.find('a').props().href).toEqual('https://github.com/test')
  })

  // EXERCISE: write a test that asserts that the right name is outputted
  // and that the right anchor with the right URL to github is created
  // hint: wrapper.find('a').props().href will give you the URL of the link
})
