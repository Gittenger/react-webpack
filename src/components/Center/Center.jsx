import React from 'react'
import styles from './Center.module.scss'

const Center = ({ className }) => (
	<div className={`${className} ${styles.centerGrid}`}>
		<h1 className={styles.title}>Website title goes here</h1>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
		<div>7</div>
		<div>8</div>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
		<div>7</div>
		<div>8</div>
	</div>
)

export default Center
