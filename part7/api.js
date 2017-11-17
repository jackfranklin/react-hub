import fetch from 'so-fetch-js'

const getSearchUrl = query => `
  http://github-proxy-api.herokuapp.com/search/repositories?q=${query}+language:javascript+fork:false+stars:>=1000
`

export const makeRequest = query =>
  fetch(getSearchUrl(query)).then(result => {
    return { repositories: result.data.items }
  })
