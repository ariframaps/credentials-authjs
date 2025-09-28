import Image from "next/image";
import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShowEmail from "@/components/ShowEmail";

export default function Page() {
  return (
    <main className={`${styles.main}`}>
      <section className={`${styles.main__container}`}>
        <Image
          src={"/CheckCircle.png"}
          alt={"Verify your account"}
          width={48}
          height={48}
        />
        <div className={`${styles.main__container__info}`}>
          <h1 className="text-[36px] font-semibold text-neutral-primary">
            Check your inbox
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            We just emailed instructions and a reset password link to{" "}
            <ShowEmail isCencored={true} />. It might take a few minutes to
            arrive.
          </p>
        </div>
        <div className={`${styles.main__container__button}`}>
          <Link
            href={"/auth/request-reset-password-sent/submit"}
            className="w-full">
            <Button>Open your email</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
