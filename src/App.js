import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(["common"]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("FULL_NAME")}</p>
        <button onClick={() => i18n.changeLanguage("ar")}>ar</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("de")}>de</button>
      </header>
    </div>
  );
};

export default App;
