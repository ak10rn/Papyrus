import NoteList from "./components/note-list";
import Banner from "./components/banner";
import AddNote from "./components/add-note";
import Navbar from "./components/navbar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/create" element={<AddNote />} />
        </Routes>
      </div>
    </>
  );
};

export default App;