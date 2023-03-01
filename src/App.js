import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
