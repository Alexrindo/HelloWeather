import React from "react";

class ErrorModal extends React.Component {
	componentDidMount() {
		let modal = new Foundation.Reveal($("#error-modal"));
		modal.open();
	}
	render() {
		let {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		)
	}

	static get propTypes() {
		return {
			title: React.PropTypes.string,
			message: React.PropTypes.string.isRequired
		}
	}

	static get defaultProps() {
		return {
			title: "Error"
		}
	}
}


export default ErrorModal;