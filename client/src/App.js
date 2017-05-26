/* global localStorage */
import React from 'react'
import Gun from 'gun'

const GUN_SERVER = 'http://localhost:8080/gun'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.gun = Gun([ GUN_SERVER ])

    this.state = {
      code: '',
      result: ''
    }
  }
  evalText (e) {
    e.preventDefault()
    this.setState({ result: eval(this.state.code) })
  }
  changeCode (code) {
    this.setState({
      code
    })
    setInterval(() => {
      this.saveCode()
    }, 500)
  }
  saveCode () {
    // localStorage.setItem('code', JSON.stringify(this.state.code))
    this.gun.get('livecode').put({ code: this.state.code })
  }
  loadCode () {
    const code = this.gun.get('livecode')
    console.log(code.get('code').val())
  }
  saveResult () {

  }
  loadResult () {

  }
  componentDidMount () {
    this.loadCode()
  }
  render () {
    return (
      <div>
        <form onSubmit={(e) => this.evalText(e)}>
          <textarea
            cols='30'
            rows='10'
            value={this.state.code}
            placeholder={'// Your code here...'}
            onChange={(e) => this.changeCode(e.target.value)}
          />
          <button>Run</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    )
  }
}

export default App
