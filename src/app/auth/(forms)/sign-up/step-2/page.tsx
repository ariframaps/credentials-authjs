import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
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
import LeftArrow from "@/components/svg/LeftArrow";
import InfoIcon from "@/components/svg/InfoIcon";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
      {/* back to previous step button */}

      <Link
        href={"/sign-up/step-1"}
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
          title={"Contact details"}
          subtitle={
            "Create your partner account create an account to list and manage your property"
          }
        />
      </div>

      {/* form */}
      <form className={`${styles.container__form}`}>
        <div className={`${styles.container__form__inputs}`}>
          {/* first name */}
          <InputComponent
            name={"firstname"}
            label={"First name"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="text"
              name="firstname"
              isError={false}
              id="firstname"
              placeholder="Enter your first name"
            />
          </InputComponent>
          {/* last name */}
          <InputComponent
            name={"lastname"}
            label={"Last name"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="text"
              name="lastname"
              isError={false}
              id="lastname"
              placeholder="Enter your Last name"
            />
          </InputComponent>
          {/* user name */}
          <InputComponent
            name={"username"}
            label={"Username"}
            isError={false}
            message="miaaaaw!!!">
            <Input
              type="text"
              name="username"
              isError={false}
              id="username"
              placeholder="Enter your username"
            />
          </InputComponent>
          {/* phone number */}
          <InputComponent
            name={"phone"}
            label={"Phone number"}
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
                placeholder="(888) 888-8888"
                className="ps-[91px]"
              />
            </div>
          </InputComponent>
        </div>
        <div
          className={`${styles.container__form__info} bg-info-surface border-l-[6px] border-info-main rounded-[8px]`}>
          <InfoIcon width={28} height={28} viewBox="0 0 28 28" />
          <span className="text-[12px] font-normal text-neutral-primary">
            We'll text a two-factor authentication code to this number when you
            sign in.
          </span>
        </div>
        <Button type="submit">Continue</Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>
    </div>
  );
}
