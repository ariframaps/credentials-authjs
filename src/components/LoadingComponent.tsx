import { Loader2Icon } from "lucide-react";

const LoadingComponent = ({ size }: { size?: number }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader2Icon className="animate-spin" size={size || 40} strokeWidth={1} />
    </div>
  );
};

export default LoadingComponent;
