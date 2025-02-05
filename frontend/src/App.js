// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checklist from "./pages/Checklist";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="w-full bg-blue-600 p-4 shadow-md">
          <ul className="flex space-x-4 justify-center">
            <li>
              <a
                href="/"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/checklist"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Checklist
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/course"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
