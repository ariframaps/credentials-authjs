import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
      {/* header */}
      <div className={`${styles.container__header}`}>
        <FormHeader
          title={"Create your partner account"}
          subtitle={"Create an account to list and manage your property."}
        />
      </div>

      {/* form */}
      <form className={`${styles.container__form}`}>
        <div className={`${styles.container__form__inputs}`}>
          <InputComponent
            name={"email"}
            label={"Email Address"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="email"
              name="email"
              isError={false}
              id="email"
              placeholder="Enter your email address"
            />
          </InputComponent>
        </div>
        <Button type="submit">Continue</Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>

      {/* login page button */}
      <Link href={"/sign-in"}>
        <Button type="button" variant={"transparent"} className="text-black">
          Login
        </Button>
      </Link>
    </div>
  );
}
