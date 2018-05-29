import React from 'react'
import Welcome from './test'

class App extends React.Component {
  render() {
    return pug`
      div
        Welcome(name='sara')
    `
  }
}

export default App
