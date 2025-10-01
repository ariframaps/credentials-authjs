"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/_form.module.scss";
import FormHeader from "./FormHeader";
import { Button } from "./ui/button";

function SessionAlert() {
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		const expiry = Number(localStorage.getItem("sessionExpiry"));
		const remainingSession = expiry - Date.now();

		const timer = setTimeout(() => {
			setShowMessage(true);
			localStorage.removeItem("sessionExpiry");
		}, remainingSession);
		return () => clearTimeout(timer);
	}, []);

	return showMessage ? (
		<div className="fixed inset-0 flex justify-center items-center bg-black/75 z-[1000]">
			<div className="bg-white p-10 rounded-lg flex flex-col gap-5">
				{/* header */}
				<div className={`${styles.container__header}`}>
					<FormHeader
						title={"Your Session is Expired"}
						subtitle={`Please sign in again to continue using this account`}
					/>
				</div>
				<Button onClick={() => window.location.reload()}>
					Continue
				</Button>
			</div>
		</div>
	) : null;
}

export default SessionAlert;
