import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import AppContent from "./layout/Content";
import { HOME_PAGE_URL, LOGIN_PAGE_URL, REGISTER_PAGE_URL } from "./routes/URL";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={HOME_PAGE_URL} element={<Home/>}/>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="*" element={<AppContent />} />  
            </Route>
            <Route path={LOGIN_PAGE_URL} element={<PublicRoute><Login /></PublicRoute>} />
            <Route path={REGISTER_PAGE_URL} element={<PublicRoute><Register /></PublicRoute>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
