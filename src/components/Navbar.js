import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

	return (

		// WITH ROUTER

		// <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
		// 	<div className="container-fluid">
		// 		<Link className="navbar-brand" to="/">
		// 			{/* <img src="logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
		// 			{props.title}
		// 		</Link>

		// 		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		// 			<li className="nav-item">
		// 				<Link className="nav-link active" aria-current="page" to="/">Home</Link>
		// 			</li>
		// 			<li className="nav-item">
		// 				<Link className="nav-link" to="/about">About</Link>
		// 			</li>
		// 		</ul>

		// 		<div className="form-check form-switch text-light">
		// 			<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
		// 			<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
		// 		</div>

		// 	</div>
		// </nav >

		// WITHOUT ROUTER

		<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{/* <img src="logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
					{props.title}
				</a>				
				<div className="form-check form-switch text-light">
					<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
				</div>
			</div>
		</nav >
	)



}

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
	title: "a title"
}