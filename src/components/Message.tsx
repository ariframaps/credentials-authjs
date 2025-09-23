const Message = ({ message }: { message: string }) => {
  return (
    <div className="w-full min-h-[150px] h-full flex justify-center items-center">
      <p className="text-neutral-secondary text-[15px] font-normal">
        {message}
      </p>
    </div>
  );
};

export default Message;
