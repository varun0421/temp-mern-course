import { CgDarkMode } from "react-icons/cg";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <CgDarkMode className="toggle-icon" />
      ) : (
        <CgDarkMode className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
