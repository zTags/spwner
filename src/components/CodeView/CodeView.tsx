import "./CodeView.css";

import React from "react";

interface IProps {
	editing?: string;
	file?: string;
}

interface IState {
	editing: string;
	file: string;
	contents: string;
	cursor: string;
}

export default class CodeView extends React.Component<IProps, IState> {
	constructor(props: any) { // TODO pls help wtf is this for type
		super(props);
		this.state = {
			editing: props.editing,
			file: "BUFFER",
			contents: "$.print(\"Hello World!\");",
			cursor: "animated-cursor",
		};
		document.title =  "SPWNer - " + this.props.file;
		this.keyDown = this.keyDown.bind(this);
	}

	keyDown(e: any) { // TODO pls help wtf is this for type
		if (e.key.toString() === "Backspace") {
			this.setState((state) => ({
				contents: state.contents?.substring(0, state.contents.length-1),
				cursor: "static-cursor",
			}));
		} else if (e.key.toString() === "Enter") {
			this.setState((state) => ({
				contents: state.contents + "\n",
				cursor: "static-cursor",
			}));
		} else if (e.key.toString() === "Shift" || e.key.toString() ===  "Control" || e.key.toString() === "Meta"|| e.key.toString() === "Alt") { // ugly ikik
			this.setState((state) => ({
				contents: state.contents,
				cursor: "static-cursor",
			}));
		} else {
			this.setState((state) => ({
				contents: state.contents + e.key.toString(),
				cursor: "static-cursor",
			}));
		}
	}

	render() {
		if (this.state.editing === "false") {
			return (
			<div className="CodeView">
				<h1 className="top-spwn-text">
         			SPWNing.
        		</h1>
        		<h2 className="bottom-redef-text">
          			Redefined.
        		</h2>
        	</div>
    		);
		} else {
			return (
			<div className="CodeView">
				<div className="code-input" onKeyDown={this.keyDown}>
					<p tabIndex={0}>
						{this.state.contents}
						<span className={this.state.cursor}>|</span>
					</p>
				</div>
        	</div>
    		);
		}
	}
}