import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Login = lazy(() => import("@/app/login/page"));

function App() {
  return (
    <Router>
      <main className="flex-grow p-12">
        <Header />
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
