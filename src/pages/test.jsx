/**
 * @Author: 张威
 * @Date: 2018-05-29 16:02:51
 * @Last Modified by: 张威
 * @Last Modified time: 2018-05-29 16:49:45
 */
import React from 'react'
import 'styl/base.styl'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return pug`
      div
        h1(className='clearfix') Hello, ${ this.props.name }
        h2(onClick=${ this._handleClick }) It is ${this.state.date.toLocaleTimeString()}.
    `
  }
  _handleClick = () => {
    console.log('click me', this)
  }
}

export default Welcome
