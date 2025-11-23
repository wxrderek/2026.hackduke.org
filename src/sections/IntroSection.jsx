import './IntroSection.css';

export default function IntroSection() {
  return (
    <div className="intro-container">
      <section className="down1">
        <img src="/images/ceiling.svg" alt="" className="down1-ceiling"/>
        <img src="/images/big sign.svg" alt="" className="down1-big_sign"/>
        <img src="/images/left sign.svg" alt="" className="down1-left_sign"/>
        <div className="down1-left_side">
          <img src="/images/Lucky Cat.svg" alt="" className="down1-lucky_cat"/>
          <img src="/images/left shelf and assets.svg" alt="" className="down1-left_shelf"/>
          <img src="/images/lower left.svg" alt="" className="down1-lower_left"/>
        </div>
        <img src="/images/right protrusion.svg" alt="" className="down1-right_protrusion"/>
        <div className="down1-right_side">
          <img src="/images/clay barrels.svg" alt="" className="down1-clay_barrels"/>
          <img src="/images/right shelf and assets.svg" alt="" className="down1-right_shelf"/>
          <img src="/images/right shelf underneath.svg" alt="" className="down1-right_shelf_underneath"/>
        </div>
        <div className="down1-vending">
          <img src="/images/vending.svg" alt="" className="down1-vending-image"/>
        </div>
      </section>
    </div>
  );
}
