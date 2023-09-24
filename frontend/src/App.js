import UserForm from "./component/Form";
import LoginPage from "./component/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResultPage from "./component/ResultPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LoginPage />
              </>
            }
          />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/result-page" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
