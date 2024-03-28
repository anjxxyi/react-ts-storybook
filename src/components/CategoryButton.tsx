import { flexColCenter } from "../mixins/styles";

interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  isDarked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
  iconPath,
  iconAlt,
  text,
  isDarked,
  onClick,
}: ICategoryButtonProps) {
  const buttonStyle = isDarked ? "border-white text-white " : "border-primary text-primary";
  return (
    <button
      className={`
        rounded-button-default 
        px-5 py-4 
        border 
        text-base font-bold
        bg-darkO-opacity
        ${flexColCenter}
        ${buttonStyle} 
      `}
      onClick={onClick}
    >
      <img className="w-8" src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
}
