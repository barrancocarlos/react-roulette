import React, { FC, useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./Home.css";

const options = [
  { option: '10' },
  { option: '20' },
  { option: '30', style: { textColor: '#f9dd50' } },
  { option: '40' },
  { option: '50' },
  { option: '60' },
  { option: '70', style: { textColor: '#70bbe0' } },  
];

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;
const fontSize = 17;
const textDistance = 60;
const spinDuration = 0.5;


const Home: FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * options.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="center">
      <h1>Ruleta</h1>
      <hr />
      <Wheel
        mustStartSpinning={mustSpin}
        data={options}
        prizeNumber={prizeNumber}
        backgroundColors={backgroundColors}
          textColors={textColors}
          fontSize={fontSize}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          // perpendicularText
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        
     
      />
      <button className="button2" onClick={handleSpinClick}>
        JUGAR!
      </button>
      <div>
        <button onClick={refreshPage}>Nuevo Juego</button>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Home;
