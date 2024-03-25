import IconButton from "./IconButton";

interface INavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  isDark: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  showBackButton,
  showCloseButton,
  showTitle,
  isDark = false,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="flex justify-between">
      <div className="flex navigation-title-wrapper">
        {/* Back Button */}
        {showBackButton && (
          <IconButton
            iconPath={`/icons/ic-back-arrow-${isDark ? "white" : "dark"}.svg`}
            alt="back-arrow"
            onClick={onBackButtonClick}
          />
        )}
        {/* Page Title */}
        {showTitle && <h1 className={`text-2xl ${isDark && "text-white"}`}>{title}</h1>}
      </div>
      {/* Close Button */}
      {showCloseButton && (
        <IconButton
          iconPath={`/icons/ic-delete-${isDark ? "white" : "dark"}.svg`}
          alt="close"
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
