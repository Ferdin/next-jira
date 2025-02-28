import { ReactNode } from "react";

interface MainContentContainerProps {
  children: ReactNode;
}

export default function MainContentContainer({
  children,
}: MainContentContainerProps) {
  return <div className="w-4/5 drop-shadow-md mr-6">{children}</div>;
}
