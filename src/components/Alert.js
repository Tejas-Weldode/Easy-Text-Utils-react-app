import React from 'react'

function Alert(props) {
	return (
		props.alert_content && <div className={`alert alert-${props.alert_content.type} alert-dismissible fade show`} role="alert">
			<strong>{props.alert_content.message}</strong>
		</div>
	)
}

export default Alert