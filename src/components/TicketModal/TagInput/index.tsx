import React, { useState } from "react";
import { Input, Chip } from "@heroui/react";

interface TagInputProps {
  label?: string;
  placeholder?: string;
  onTagsChange?: (tags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({
  label = "Tags",
  placeholder = "Enter tags",
  onTagsChange,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();

      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        const updatedTags = [...tags, newTag];
        setTags(updatedTags);
        setInputValue("");

        onTagsChange?.(updatedTags);
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    onTagsChange?.(updatedTags);
  };

  return (
    <div className="w-full">
      <Input
        label={label}
        placeholder={placeholder}
        value={inputValue}
        onValueChange={setInputValue}
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-wrap gap-1 max-w-[200px] mt-2">
        {tags.map((tag) => (
          <Chip
            key={tag}
            size="sm"
            onClose={() => removeTag(tag)}
            variant="flat"
          >
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
