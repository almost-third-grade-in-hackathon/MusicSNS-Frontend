import React from "react";
import CustomButton from "../components/custom-button";
import EmailPassword from "../components/e-mail-password";
import "../style.css";

const page = () => {
	return (
		<main>
			<div className="all-login">
				<img className="music-image" src="./music-img.png" alt="音符の画像" />
				<text className="text">サイト名</text>
				<EmailPassword />
				<a className="link link-info" href="/">
					アカウント作成はこちら
				</a>
				<CustomButton text="ログイン" />
			</div>
		</main>
	);
};

export default page;
