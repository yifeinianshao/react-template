import './assets/a.stylus'
import React from 'react'
import ReactDOM from 'react-dom'
import b from './b'

const test = 123
const a = new Set([1, 2, 3, 4, 2, 3])
console.log(Array.from(a))
b()

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
)
