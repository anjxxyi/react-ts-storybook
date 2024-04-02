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
    ? "text-primary bg-white"
    : "text-white bg-dark-opacity";

  return (
    <button
      className={`
        rounded-tag-button 
        px-3.5 pt-1 pb-1.5 
        border border-solid border-white 
        font-medium 
        ${buttonStyle}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
