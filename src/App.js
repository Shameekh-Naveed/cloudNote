import "./App.css";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";
import AddNote from "./Components/AddNote";
import NoteState from "./Contexts/notes/NoteState";

function App() {
  return (
    <NoteState>
      <Navbar />
      <div className="App container-fluid px-5" id="app-root">
        <AddNote />
        <Notes />
      </div>
    </NoteState>
  );
}

export default App;
