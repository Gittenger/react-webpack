import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Img from '../assets/mountain.jpeg'
import './App.css'
import './Typography.css'
import styles from './App.module.scss'

import Grid from '../components/Grid/Grid.jsx'

class App extends Component {
	render() {
		return (
			<div className={styles.App}>
				<Grid />
			</div>
		)
	}
}

export default hot(module)(App)
