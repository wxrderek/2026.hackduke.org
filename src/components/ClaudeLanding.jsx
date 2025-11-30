import React from 'react';
import './ClaudeLanding.css';

// Import all SVG assets from landing folder
import sunsetBg1 from '../assets/landing/sunset bg 1.svg';
import sunsetBg2 from '../assets/landing/sunset bg 2.svg';
import coolSunsetEffect1 from '../assets/landing/cool sunset effect 1.svg';
import coolSunsetEffect2 from '../assets/landing/cool sunset effect 2.svg';
import coolSunsetEffectBehind from '../assets/landing/cool sunset effect - behind.svg';
import yellowishSunsetLeft from '../assets/landing/yellowish sunset effect - left side.svg';
import yellowishSunsetRight from '../assets/landing/yellowish sunset effect - right side.svg';
import concrete from '../assets/landing/concrete .svg';
import clouds from '../assets/landing/clouds.svg';
import buildingsBodyOnly from '../assets/landing/buildings - body only .svg';
import buildingWindowsAll from '../assets/landing/building windows - all.svg';
import bushesBehindTrain from '../assets/landing/bushes behind train.svg';
import powerLine from '../assets/landing/power line.svg';
import train from '../assets/landing/train.svg';
import fence from '../assets/landing/fence.svg';
import bigBush from '../assets/landing/big bush.svg';
import boxes from '../assets/landing/boxes.svg';
import convenienceStore from '../assets/landing/convenience store -building.svg';
import text from '../assets/landing/text.svg';
import trainDoorWindows from '../assets/landing/train door windows.svg';
import openSign from '../assets/landing/open sign.svg';
import cat from '../assets/landing/cat.svg';
import vector77 from '../assets/landing/Vector 77.svg';
import vector78 from '../assets/landing/Vector 78.svg';
import vector79 from '../assets/landing/Vector 79.svg';
import vector80 from '../assets/landing/Vector 80.svg';

export default function ClaudeLanding() {
  return (
    <div className="claude-landing-container">
      {/* Sky gradients */}
      <div className="sunset-bg-2"></div>
      <div className="sunset-bg-1"></div>

      {/* Sunset effects */}
      <img src={coolSunsetEffect2} alt="" className="cool-sunset-effect-2" />
      <img src={coolSunsetEffect1} alt="" className="cool-sunset-effect-1" />
      <img src={yellowishSunsetLeft} alt="" className="yellowish-sunset-left" />
      <img src={yellowishSunsetRight} alt="" className="yellowish-sunset-right" />

      {/* Concrete ground */}
      <div className="concrete-ground"></div>

      {/* Clouds */}
      <img src={clouds} alt="" className="clouds" />

      {/* Buildings */}
      <img src={buildingsBodyOnly} alt="" className="buildings-body" />
      <img src={buildingWindowsAll} alt="" className="building-windows" />

      {/* Sunset effect behind */}
      <img src={coolSunsetEffectBehind} alt="" className="cool-sunset-behind" />

      {/* Bushes behind train */}
      <img src={bushesBehindTrain} alt="" className="bushes-behind-train" />

      {/* Power lines */}
      <img src={powerLine} alt="" className="power-line" />

      {/* Train */}
      <img src={train} alt="" className="train" />
      <img src={trainDoorWindows} alt="" className="train-door-windows" />

      {/* Fence */}
      <img src={fence} alt="" className="fence" />

      {/* Ground vectors */}
      <img src={vector77} alt="" className="vector-77" />
      <img src={vector78} alt="" className="vector-78" />
      <img src={vector80} alt="" className="vector-80" />
      <img src={vector79} alt="" className="vector-79" />

      {/* Big bush left */}
      <img src={bigBush} alt="" className="big-bush-left" />

      {/* Boxes */}
      <img src={boxes} alt="" className="boxes" />

      {/* Convenience store */}
      <img src={convenienceStore} alt="" className="convenience-store" />

      {/* Text (HackDuke - code for good) */}
      <img src={text} alt="" className="text-hackduke" />

      {/* Open sign */}
      <img src={openSign} alt="" className="open-sign" />

      {/* Big bush right */}
      <img src={bigBush} alt="" className="big-bush-right" />

      {/* Cat */}
      <img src={cat} alt="" className="cat" />
    </div>
  );
}
