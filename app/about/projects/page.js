// export const dynamic = "force-dynamic";
import { Suspense } from "react";
import ProjectList from "./components/projectlist";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";
import H1 from "@/components/h1";

export default async function ProjectsPage() {
  return (
    <div>
      <H1>Projects</H1>
      <div className="mb-8">Hello, this is my list of Github repos!</div>
      <ErrorBoundary fallback={<div>Cannot fetch projects currently</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList></ProjectList>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
