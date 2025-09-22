import { Button } from "@/components/ui/button";
import styles from "./_styles/page.module.scss";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
          <InputComponent
            name={"email"}
            label={"Email Address"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="password"
              name="email"
              isError={false}
              id="email"
              placeholder="Enter your email address"
            />
          </InputComponent>
          <InputComponent
            name={"email"}
            label={"Email Address"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="password"
              name="email"
              isError={false}
              id="email"
              placeholder="Enter your email address"
            />
          </InputComponent>
          <InputComponent
            name={"phone"}
            label={"phone Address"}
            isError={false}
            message="miaaaaw!!!">
            <div className="relative flex items-center">
              <Select>
                <SelectTrigger className="absolute px-[16px] border-r-[1px] border-neutral-input rounded-none min-w-[75px]">
                  <SelectValue placeholder="+1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+62">+62</SelectItem>
                  <SelectItem value="+94">+94</SelectItem>
                  <SelectItem value="+9">+9</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="tel"
                name="phone"
                isError={false}
                id="phone"
                placeholder="Enter your phone address"
                className="ps-[91px]"
              />
            </div>
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
