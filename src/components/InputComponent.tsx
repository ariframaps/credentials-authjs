import InfoIcon from "./svg/InfoIcon";

export const InputComponent = ({
  name,
  label,
  isError = false,
  message,
  children,
}: {
  name: string;
  label: string;
  isError: boolean;
  message?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col gap-[8px]`}>
      <div className="flex items-center gap-2">
        <label
          className={`${
            isError ? "text-text-danger-tertiary" : "text-neutral-secondary"
          } font-medium text-[14px] leading-[1.5em]`}
          htmlFor={name}>
          {label}
        </label>
        {isError && (
          <InfoIcon
            width={15}
            height={15}
            viewBox="0 0 28 28"
            className="text-text-danger-tertiary"
          />
        )}
      </div>
      {children}
      {isError && <span className="text-text-danger-tertiary">{message}</span>}
    </div>
  );
};
