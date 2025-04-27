import { useState, useEffect } from 'react';

function App() {

  const [ball, setBall] = useState(0);
  const [show, setShow] = useState(false);

  function handleStartGame(){
    setShow(true);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key === "ArrowLeft"){
        setBall((prev) => prev - 5);
      } else if(event.key === "ArrowRight"){
        setBall((prev) => prev + 5);
      };
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div style={{width: '1300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{height: '100px', width: '100px', display: `${show ? "block" : "none"}`, background: 'white', borderRadius: '50%', margin: 'auto', position: 'relative', left: `${ball}px`}} id='ball'></div>
        <button style={{display: `${show ? "none" : "block"}`}} onClick={handleStartGame}>Start</button>
      </div>
    </>
  )
}

export default App
