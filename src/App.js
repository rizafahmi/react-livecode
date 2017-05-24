import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

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
