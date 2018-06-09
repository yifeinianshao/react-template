/**
 * @Author: 张威
 * @Date: 2018-05-29 16:02:51
 * @Last Modified by: 张威
 * @Last Modified time: 2018-06-09 10:35:50
 */
import React from 'react'
import { Link } from 'react-router-dom'
import 'styl/triangle.styl'

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
        h1(className='clearfix')
          Link(to='/test') Hello, ${ this.props.name }
        h2(onClick=${ this._handleClick })
          Link(to='/abc') It is ${this.state.date.toLocaleTimeString()}.
    `
  }
  _handleClick = () => {
    console.log('click me', this)
  }
}

export default Welcome
