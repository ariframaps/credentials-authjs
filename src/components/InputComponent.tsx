import InfoIcon from "./svg/InfoIcon";

interface Props {
  name: string;
  label: string;
  isError: boolean;
  message?: string;
  children: React.ReactNode;
}

export const InputComponent = (props: Props) => {
  return (
    <div className={`flex flex-col gap-[8px]`}>
      <div className="flex flex-col items-start justify-between gap-1 pe-1.5">
        <label
          className={`${
            props.isError
              ? "text-text-danger-tertiary"
              : "text-neutral-secondary"
          } font-medium text-[14px] leading-[1.5em]`}
          htmlFor={props.name}>
          {props.label}
        </label>
        {props.isError && (
          <div className="flex items-center justify-between w-full gap-1">
            <span className="text-text-danger-tertiary">{props.message}</span>
            <InfoIcon
              width={20}
              height={20}
              viewBox="0 0 28 28"
              className="text-text-danger-tertiary"
            />
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
};
