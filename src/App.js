import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorSuccess: "#0bd71f",
          colorError: "#f54040",
          colorPrimary: "#2f54eb",
          fontFamily: "Lato",
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <Routes />
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
