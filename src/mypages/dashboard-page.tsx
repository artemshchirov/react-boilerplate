import TopProjects from "../features/dashboard/ui/top-projects";
import MaxWidthWrapper from "../shared/components/layouts/max-width-wrapper";
import type { Project } from "../shared/lib/generate-mock-data";
import { Still } from "../shared/lib/generate-mock-data";

function DashboardPage({ topProjects }: { topProjects: Project[] }) {
  return (
    <>
      {/* <MaxWidthWrapper className="flex flex-col items-center justify-center mb-12 text-center sm:mt-40"> */}
      <div className="flex flex-col items-center justify-center w-full mx-auto overflow-hidden transition-all border border-gray-200 shadow-md bg-red backdrop-blur hover:border-gray-300 hover:bg-white/50">
        <h1 className="pt-6 mb-4 text-3xl font-bold text-center">
          Infinite Images
        </h1>
        <TopProjects topProjects={topProjects} />
      </div>
      {/* </MaxWidthWrapper> */}
    </>
  );
}

export default DashboardPage;
