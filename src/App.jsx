import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Layout from "./components/layout";
import Users from "./components/users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={} /> */}
            <Route path="/users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
