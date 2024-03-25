interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img className="w-5" src={iconPath} alt={alt} />
    </button>
  );
}