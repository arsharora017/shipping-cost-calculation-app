import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import AddBoxForm from "./views/AddBoxForm";
import TableView from "./views/TableView";
import Body from "./components/Body";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<AddBoxForm />} />
              <Route path="/table" element={<TableView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
