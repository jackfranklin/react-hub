import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SearchResults from './search-results'
import SearchForm from './search-form'

export default class App extends React.Component {
  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        {/* EXERCISE:
            * can you make it so the SearchForm is also rendered at
            * /results/:query ?
            * HINT: you might want to use the <Switch> component...
            */}
        <Route path="/" exact component={SearchForm} />

        <Route
          path="/results/:query"
          render={props => <SearchResults query={props.match.params.query} />}
        />
        {/* EXERCISE: can you render a link back to the index page
          * if the user ends up on /results/ with no query?
          */}
      </div>
    )
  }
}
