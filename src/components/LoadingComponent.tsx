import { Loader2Icon } from "lucide-react";

const LoadingComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader2Icon className="animate-spin" size={40} strokeWidth={1} />
    </div>
  );
};

export default LoadingComponent;
