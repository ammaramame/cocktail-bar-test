import { Provider } from "react-redux";
import { store } from "store/store";
import "./app.css";
import PageSlider from "components/complex/page-slider/page-slider";
import AppTemplate from "components/templates/app-template/app-template";
import AppBar from "components/complex/app-bar/app-bar";
import ThemeProvider from "components/complex/theme-provider/theme-provider";
import "setups/language";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppTemplate body={<PageSlider />} header={<AppBar />} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
