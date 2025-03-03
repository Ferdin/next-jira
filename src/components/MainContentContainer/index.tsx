import { ReactNode } from "react";

interface MainContentContainerProps {
  children: ReactNode;
}

export default function MainContentContainer({
  children,
}: MainContentContainerProps) {
  return <div className="w-full drop-shadow-md">{children}</div>;
}
