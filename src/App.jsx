import { BrowserRouter, Routes, Route } from "react-router";
import AddBoxForm from "./views/AddBoxForm";
import TableView from "./views/TableView";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<AddBoxForm />} />
            <Route path="/table" element={<TableView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
