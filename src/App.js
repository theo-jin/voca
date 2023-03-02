import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="/create_word" element={<CreateWord/>} />
        <Route path="/create_day" element={<CreateDay/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
