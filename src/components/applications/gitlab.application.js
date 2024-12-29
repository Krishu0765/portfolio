import { IconButton, TextField } from "@fluentui/react";
import React, { useState } from "react";

function Chrome() {
	const [urlToShow, seturlToShow] = useState("https://gitlab.com/Krishna_Ramrakhyani");
	const [url, seturl] = useState("http://gitlab.com");
	const onURLChange = (event) => {
		const target = event.target;
		seturlToShow(target.value);
	};

	const onGO = () => {
		seturl(urlToShow);
	};

	return (
		<div className="height-100">
			<iframe
				src="https://gitlab.com/Krishna_Ramrakhyani"
				frameBorder="0"
				height="100%"
				width="100%"
				title="Gitlab"
			></iframe>
		</div>
	);
}

export default Chrome;