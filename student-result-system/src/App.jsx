import { useEffect, useState } from "react";
import axios from "axios";

import StudentsTab from "./studentsTab";
import SectionsTab from "./SectionsTab";
import ResultsTab from "./ResultTab";

const TABS = {
  STUDENTS: "Students",
  SECTIONS: "Sections",
  RESULTS: "Results",
};

export default function App() {

  const [activeTab, setActiveTab] = useState(TABS.STUDENTS);

  const [students, setStudents] = useState([]);
  const [sections, setSections] = useState([]);
  const [results, setResults] = useState([]);

  // load all data from backend
  useEffect(() => {

    axios.get("http://localhost:3000/students").then(res => setStudents(res.data));
    axios.get("http://localhost:3000/sections").then(res => setSections(res.data));
    axios.get("http://localhost:3000/results").then(res => setResults(res.data));

  }, []);

  return (
    <div className="app">

      <header className="app-header">
        <h1>Student Result Management System</h1>
      </header>

      <nav className="tabs">
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "tab-btn--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="tab-content">
        {activeTab === TABS.STUDENTS && (
          <StudentsTab
            students={students}
            sections={sections}
            setStudents={setStudents}
          />
        )}

        {activeTab === TABS.SECTIONS && (
          <SectionsTab
            sections={sections}
            setSections={setSections}
          />
        )}

        {activeTab === TABS.RESULTS && (
          <ResultsTab
            students={students}
            results={results}
            setResults={setResults}
          />
        )}
      </main>

    </div>
  );
}