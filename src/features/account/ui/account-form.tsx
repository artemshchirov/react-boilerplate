import { cn } from "@web/shared/lib/utils";

interface AccountFormProps {
  children: React.ReactNode;
  className?: string;
}

const AccountForm = ({ children, className }: AccountFormProps) => {
  return (
    <div
      className={cn(
        "bg-white shadow-[0px_8px_20px_0px_rgba(0,0,0,0.04)] p-7 pb-9 lg:pb-2 rounded-2lg  w-full max-w-[527px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AccountForm;
