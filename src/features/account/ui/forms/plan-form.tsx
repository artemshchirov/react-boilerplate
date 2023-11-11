import Link from "next/link";
import { Button } from "@web/components/ui/button";

function PlanForm() {
  return (
    <div className="flex flex-row gap-5 w-max p-7">
      <div>
        <h2 className="text-xl font-bold">Your Plan</h2>
        <p>
          You&apos;re on <span className="text-blue-600">Pro plan</span>
        </p>
        <p>current plan expires 12.03.2023</p>
      </div>
      <div className="flex flex-col min-h-full items-between">
        <span className="ml-auto">...</span>
        <Link href="/pricing">
          <Button className="mt-4">Upgrade to Max</Button>
        </Link>
      </div>
    </div>
  );
}

export default PlanForm;
