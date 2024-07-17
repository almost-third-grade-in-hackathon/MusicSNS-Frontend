// biome-ignore lint/style/useImportType: <explanation>
import React from "react"

type Tpops = {
	// biome-ignore lint/style/useNamingConvention: <explanation>
	text: string
}

const CustomButton: React.FC<Tpops> = ({ text }) => {
	return (
		<div>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button className="btn">{text}</button>
		</div>
	)
}

export default CustomButton
