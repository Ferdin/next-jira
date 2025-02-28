import { ReactNode } from "react";

interface SideBarContainerProps {
  children: ReactNode;
}

export default function SideBarContainer({ children }: SideBarContainerProps) {
  return (
    <div className="bg-white rounded-md flex flex-col w-1/5 h-screen space-y-2 drop-shadow-md">
      {children}
    </div>
  );
}
