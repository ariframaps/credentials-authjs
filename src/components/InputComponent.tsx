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
      <div className="flex items-center gap-2">
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
          <InfoIcon
            width={15}
            height={15}
            viewBox="0 0 28 28"
            className="text-text-danger-tertiary"
          />
        )}
      </div>
      {props.children}
      {props.isError && (
        <span className="text-text-danger-tertiary">{props.message}</span>
      )}
    </div>
  );
};
