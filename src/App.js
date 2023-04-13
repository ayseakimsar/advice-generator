import { useEffect, useState, useCallback } from "react";
import "./scss/main.scss";
import Card from "./Card";

export default function App() {
  const [advice, setAdvice] = useState([]);

  function fetchAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAdvice(data);
        console.log(advice);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = useCallback(fetchAdvice, []);

  return (
    <div>
      <Card
        adviceNo={advice?.slip?.id}
        advice={advice?.slip?.advice}
        handleClick={handleClick}
      />
    </div>
  );
}
