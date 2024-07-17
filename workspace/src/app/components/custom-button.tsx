// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import "../style.css";

type Tpops = {
	text: string;
};

const CustomButton: React.FC<Tpops> = ({ text }) => {
	return (
		<div>
			<button
				className="btn"
				type="submit"
				style={{
					background: "#007afe",
					color: "white",
					fontWeight: "lighter",
					marginTop: "7px",
				}}
			>
				{text}
			</button>
		</div>
	);
};

export default CustomButton;
