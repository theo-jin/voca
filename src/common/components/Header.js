import { Link } from "react-router-dom";
import classes from "./Header.module.css"

export default function Header (){

  return (
  <div className={classes.header}>
    <h1>
      <Link className={classes.logo} to="/"> VOCA </Link>
    </h1>
    <div className="menu">
        <Link className={classes.btn} to="/create_word" className="link">
          단어 추가
        </Link>
        <Link className={classes.btn} Link to="/create_day" className="link">
          Day 추가
        </Link>
      </div>
  </div>
)}