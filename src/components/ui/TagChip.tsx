import React from "react";

interface TagChipProps {
  label: string;
  theme?: "light" | "dark";
  className?: string;
}

export const TagChip: React.FC<TagChipProps> = ({
  label,
  theme = "light",
  className = "",
}) => {
  const styles =
    theme === "light"
      ? "bg-[#EAE8E2] text-neutral-800 hover:bg-[#DFDDD7]"
      : "bg-white/10 text-white/90 hover:bg-white/20 border border-white/10";

  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-150 select-none ${styles} ${className}`}
    >
      {label}
    </span>
  );
};
