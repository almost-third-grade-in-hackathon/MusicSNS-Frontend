// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react"
import "../style.css"
import CustomButton from "../components/custom-button"
import EmailPassword from "../components/e-mail-password"

export default function Home() {
	return (
		<main>
			<div className="all-login">
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					className="music-image"
					src="./music-img.png"
				/>
				<text className="text">サイト名</text>
				<EmailPassword />
				<text className="new-people">アカウント作成はこちら</text>
				<CustomButton text="ログイン" />
			</div>
		</main>
	)
}
