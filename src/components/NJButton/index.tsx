import { Button } from "@heroui/react";

interface NJButtonProps {
  label: string;
  onPress: () => void;
}

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6 mt-auto mb-auto stroke-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default function NJButton({ label, onPress }: NJButtonProps) {
  return (
    <Button
      onPress={onPress}
      className="text-white bg-black text-xl pl-2 gap-0 rounded-md font-light"
    >
      <PlusIcon />
      {label}
    </Button>
  );
}
