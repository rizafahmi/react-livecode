/* global localStorage */
import React from 'react'

import { auth, database } from './firebase.js'

import Signin from './components/Signin.js'
import CurrentUser from './components/CurrentUser.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null,
      code: null,
      currentUser: null
    }
  }
  evalText (e) {
    e.preventDefault()
    // eslint-disable-next-line
    this.setState({ result: eval(this.state.codes) })
  }
  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      console.log('AUTH CHANGED: ', currentUser)
      this.setState({ currentUser })
    })
    database.ref().on('value', (snapshot) => {
      const data = snapshot.val()
      const code = data && data.code
      this.setState({
        data,
        code
      })
    })
  }
  changeCode (code) {
    this.setState({
      code
    })
  }
  saveCode (e) {
    if (e.key === 'Enter') {
      // save to db
      database.ref('/codes')
        .set(this.state.code)
    }
  }
  render () {
    return (
      <div>
        { !this.state.currentUser && <Signin /> }
        { this.state.currentUser && <CurrentUser user={this.state.currentUser} /> }
        { this.state.currentUser && (
        <div>
          <form onSubmit={(e) => this.evalText(e)}>
            <textarea
              cols='30'
              rows='10'
              value={this.state.code}
              placeholder={'// Your code here...'}
              onChange={(e) => this.changeCode(e.target.value)}
              onKeyPress={(e) => this.saveCode(e)}
          />
            <button>Run</button>
          </form>
          <pre>{JSON.stringify(this.state.data)}</pre>
        </div>
        ) }
      </div>
    )
  }
}

export default App
