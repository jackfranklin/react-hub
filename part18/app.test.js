import React from 'react'
import { shallow } from 'enzyme'
import App, { SEARCH_URL } from './app'
import fetchMock from 'fetch-mock'

const nextTick = () => new Promise(resolve => setTimeout(resolve, 0))

describe('Part 18 App', () => {
  it('lists some repositories', async () => {
    // EXERCISE: update the fetchMock fake data so that this test passes
    fetchMock.get(SEARCH_URL, {
      status: 200,
      body: {
        items: [{ id: 1, name: 'jack', stargazers_count: 22 }],
      },
    })
    const wrapper = shallow(<App />)

    await nextTick()
    wrapper.update()

    expect(wrapper.find('Repository').length).toEqual(3)
  })

  // EXERCISE: can you get this test passing, using the one above for guidance?
  // it('can click a button to remove a repository', () => {
  //   const wrapper = shallow(<App />)
  //   const button = wrapper.find('li button').first()
  //   button.simulate('click')
  //
  //   expect(
  //     wrapper.find('Repository').map(repo => repo.props().repository.name)
  //   ).toEqual(['ReactTraining/react-router', 'facebook/react'])
  // })
})
