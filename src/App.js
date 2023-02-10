import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextArea from './components/TextArea';
// import About from './components/About';
import React, { useState } from 'react';
// import {
// 	BrowserRouter,
// 	Routes,
// 	Route
// } from "react-router-dom";

function App() {

	const [mode, setmode] = useState("dark");
	const [alert_content, change_alert_content] = useState(null);

	const add_alert_content = (msg, typ) => {

		let dummy_alert_content = {
			message: msg,
			type: typ
		}
		change_alert_content(dummy_alert_content);

		setTimeout(() => {
			change_alert_content(null);
		}, 5000);
	}

	const toggleMode = () => {
		if (mode === "light") {
			setmode("dark");
			document.body.style.backgroundColor = "black";
		}
		else {
			setmode("light");
			document.body.style.backgroundColor = "white";
		}
	}

	return (
		<>
			{/* WITH ROUTER */}

			{/* <BrowserRouter>
				<Navbar title="Easy Text Utils" toggleMode={toggleMode} />
				<div className="container">
					<Alert alert_content={alert_content} />

					<Routes>
						<Route exact path="/about" element={<About />} />

						< Route exact path="/"
							element={<TextArea mode={mode} add_alert_content={add_alert_content} />} />
					</Routes>
				</div>
			</BrowserRouter> */}

			{/* WITHOUT ROUTER */}

			<Navbar title="Easy Text Utils" toggleMode={toggleMode} />
			<div className="container">
				<Alert alert_content={alert_content} />
				<TextArea mode={mode} add_alert_content={add_alert_content} />
			</div>


		</>
	);
}

export default App;