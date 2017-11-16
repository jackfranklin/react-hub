import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

describe('Part 17 App', () => {
  it('lists some repositories', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Repository').length).toEqual(3)
  })

  it('can click a button to remove a repository', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('li button').first()
    button.simulate('click')

    expect(
      wrapper.find('Repository').map(repo => repo.props().repository.name)
    ).toEqual(['ReactTraining/react-router', 'facebook/react'])
  })

  it('can click the reset button to unhide all repositories', () => {
    const wrapper = shallow(<App />)
    const hideBtn = wrapper.find('li button').first()
    hideBtn.simulate('click')
    expect(wrapper.find('Repository').length).toEqual(2)

    const resetBtn = wrapper.find('button.reset')
    resetBtn.simulate('click')
    expect(wrapper.find('Repository').length).toEqual(3)
  })
})
