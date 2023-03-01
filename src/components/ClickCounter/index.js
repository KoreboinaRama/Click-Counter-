// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">
          The Button has been clicked <span className="count">{count} </span>
          times
        </h1>
        <p className="desc">Click the button to increase the count!</p>
        <button type="button" className="btn" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
