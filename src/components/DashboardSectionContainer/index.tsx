import { ReactNode } from "react";

interface DashboardSectionContainerProps {
  children: ReactNode;
}

export default function DashboardSectionContainer({
  children,
}: DashboardSectionContainerProps) {
  return <div className="w-1/3 flex flex-col">{children}</div>;
}
