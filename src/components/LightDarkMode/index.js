// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  toLightMode = () => {
    const {mode} = this.state
    this.setState(prevState => ({mode: 'light'}))
  }

  toDarkMode = () => {
    const {mode} = this.state
    this.setState(prevState => ({mode: 'dark'}))
  }

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'dark') {
      return (
        <div className="dark-card-container">
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.toLightMode}>
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="light-card-container">
        <h1 className="light-heading">Click To Change Mode</h1>
        <button className="button" type="button" onClick={this.toDarkMode}>
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.changeMode()}</div>
  }
}
export default LightDarkMode
