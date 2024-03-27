interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function TagButton({
  children,
  isChecked,
  onClick,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "border-white text-white bg-darkO-opacity"
    : "border-primary text-primary bg-white";

  return (
    <button
      className={`rounded-tag-button px-3.5 pt-1 pb-1.5 border border-solid font-medium ${isChecked && buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
