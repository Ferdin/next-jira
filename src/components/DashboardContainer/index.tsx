import { ReactNode } from "react";

interface DashboardContainerProps {
  children: ReactNode;
}

export default function DashboardContainer({
  children,
}: DashboardContainerProps) {
  return (
    <div className="flex flex-row w-full mt-6 gap-6 font-sans">{children}</div>
  );
}
