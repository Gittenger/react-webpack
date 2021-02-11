import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Img from './assets/mountain.jpeg'
import './App.css'
import styles from './App.module.scss'

class App extends Component {
	render() {
		return (
			<div className={styles.App}>
				<p> Hello, World! </p>
				<img src={Img} alt="" />
			</div>
		)
	}
}

export default hot(module)(App)
