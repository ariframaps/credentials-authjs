import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
      {/* back to previous step button */}

      <Link
        href={"/sign-up/step-2"}
        className={`${styles.container__backBtn} text-neutral-primary font-semibold text-[18px]`}>
        <LeftArrow
          className="text-brand-green-color-01"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        />
        Back
      </Link>

      {/* header */}
      <div className={`${styles.container__header}`}>
        <FormHeader
          title={"Create password"}
          subtitle={
            "Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers."
          }
        />
      </div>

      {/* form */}
      <form className={`${styles.container__form}`}>
        <div className={`${styles.container__form__inputs}`}>
          {/* password*/}
          <InputComponent
            name={"password"}
            label={"Password"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="password"
              name="password"
              isError={false}
              id="password"
              placeholder="Enter your password"
            />
          </InputComponent>
          {/*confirm password*/}
          <InputComponent
            name={"confirmPassword"}
            label={"Confirm password"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="password"
              name="confirmPassword"
              isError={false}
              id="confirmPassword"
              placeholder="Enter your confirm password"
            />
          </InputComponent>
        </div>
        <Button type="submit">Create Account</Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>
    </div>
  );
}
