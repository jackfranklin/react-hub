import fetch from 'so-fetch-js'

export const HIDE_REPOSITORY = 'HIDE_REPOSITORY'
export const FETCHED_REPOSITORIES = 'FETCHED_REPOSITORIES'

const SEARCH_URL = `
  http://github-proxy-api.herokuapp.com/search/repositories?q=react+language:javascript+fork:false+stars:>=1000
`

export const hideRepository = id => ({
  type: HIDE_REPOSITORY,
  id,
})

export const fetchedRepositories = repositories => ({
  type: FETCHED_REPOSITORIES,
  repositories,
})

export const fetchRepositories = () => {
  return dispatch => {
    // EXERCISE: make this action fetch repositories from SEARCH_URL
    // and then dispatch the fetchedRepositories() action with the
    // repositories to populate the store
  }
}
