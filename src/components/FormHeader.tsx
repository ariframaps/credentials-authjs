interface Props {
  title: string;
  subtitle: string;
}

const FormHeader = (props: Props) => {
  return (
    <>
      <h1 className="font-semibold phone:text-[36px] text-[32px] leading-[1.2em] text-neutral-primary">
        {props.title}
      </h1>
      <p className="text-neutral-secondary font-normal text-[16px] leading-[1.5em]">
        {props.subtitle}
      </p>
    </>
  );
};

export default FormHeader;
