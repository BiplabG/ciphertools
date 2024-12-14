import { Button } from "@blueprintjs/core";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      icon={theme === "dark" ? "flash" : "moon"}
      minimal={true}
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    />
  );
};

export default ThemeToggle;
