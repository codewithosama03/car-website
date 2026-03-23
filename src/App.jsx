import { use, useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";



const App = () => {

  let heroData = [
    {text1:"Dive into",text2:"What You Love"},
    {text1:"Indulge",text2:"Your Passion"},
    {text1:"Give In To",text2:"Your Passions"},
  ]

  const [heroCount,setHeroCount] = useState(0)
  const [playStatus,setPlayStatus] = useState(false)


useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((count) => (count === 2 ? 0 : count + 1));
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>    
      <Navbar/>
      <Hero
       heroData={heroData[heroCount]}
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
       setPlayStatus = {setPlayStatus}
      />
    </div>
  );
}

export default App;

