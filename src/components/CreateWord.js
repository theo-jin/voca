import useFetch from '../hooks/useFetch';
import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateWord(){
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const[isLoading,setIsLoding]=useState(false);

  function onSubmit(e){
    e.preventDefault();
    setIsLoding(true);
      if(!isLoading){
      fetch(`http://localhost:3001/words/`, {
          method:'POST',
          headers:{'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
      day :dayRef.current.value,
      eng :engRef.current.value,
      kor :korRef.current.value,
      isDone :false,
      }),
    }).then(res =>{
      if (res.ok){
      alert("생성이 완료되었습니다.");
      navigate(`/day/${dayRef.current.value}`);
      setIsLoding(false);
      }
    });
  }
  }

  const engRef =useRef(null);
  const korRef =useRef(null);
  const dayRef =useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="Voca" ref={engRef}/>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="단어"  ref={korRef}/>
      </div>
      <div className="input_area">
        <label>day</label>
        <select ref={dayRef}>
          {days.map(day=>(
            <option key={day.id} value={day.day} >
              {day.day}
              </option>
          ))}
        </select>
      </div>
      <button style={{opacity : isLoading ? 0.3 : 1,}}>{isLoading ? "Saving..." : "저장"}</button>
    </form>
  )
}