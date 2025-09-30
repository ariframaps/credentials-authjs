import Image from "next/image";
import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShowEmail from "@/components/ShowEmail";

export default function Page() {
	return (
		<div className={`${styles.main}`}>
			<section className={`${styles.main__container}`}>
				<Image
					src={"/CheckCircle.png"}
					alt={"Verify your account"}
					width={48}
					height={48}
				/>
				<div className={`${styles.main__container__info}`}>
					<h1 className="text-[36px] font-semibold text-neutral-primary">
						Verify your email address
					</h1>
					<p className="text-[16px] font-normal text-neutral-secondary">
						We sent you an email with a verification link to{" "}
						<ShowEmail isCencored={false} />. To confirm your
						account please follow the link in the email we just
						sent.
					</p>
				</div>
				<div className={`${styles.main__container__button}`}>
					<Link
						href={"/auth/verify-account/submit"}
						className="w-full">
						<Button>Open your email</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
