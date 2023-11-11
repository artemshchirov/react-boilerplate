import Link from "next/link";
import AccountForms from "../features/account/ui/account-forms";
import Section from "../shared/components/layouts/section";
import AccountAvatar from "../features/account/ui/account-avatar";
import AccountForm from "../features/account/ui/account-form";
import { Button } from "../components/ui/button";

interface MonthlyProjectsUploadProps {
  currentUploads: number;
  maxUploads: number;
}

const MonthlyProjectsUpload: React.FC<MonthlyProjectsUploadProps> = ({
  currentUploads,
  maxUploads,
}) => {
  const progressWidth = (currentUploads / maxUploads) * 100;

  return (
    <Section className="bg-white shadow-[0px_8px_20px_0px_rgba(0,0,0,0.04)] p-7 pb-9 rounded-2lg gap-y-10 w-full max-w-[527px] ">
      <h2 className="mb-4 text-xl font-bold ">Projects Uploaded</h2>
      <p className="mb-4">
        You&apos;ve uploaded {currentUploads} out of {maxUploads} projects
      </p>
      <div className="h-1 mb-8 bg-[#EDEDED] rounded-lg">
        <div
          className="h-full bg-[#034057] rounded-lg"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
      <Link href="/pricing">
        <Button className="bg-[#034057]">Upgrade Now</Button>
      </Link>
    </Section>
  );
};

function AccountPage() {
  return (
    <Section className="bg-[#FBFBFB]">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col items-center lg:items-start lg:justify-evenly lg:flex-row gap-y-10 ">
          <div className="flex flex-col gap-8 rounded-lg max-w-[348px]">
            <AccountAvatar />
            <MonthlyProjectsUpload currentUploads={6} maxUploads={10} />
          </div>
          <AccountForms />
        </div>
      </div>
    </Section>
  );
}

export default AccountPage;
