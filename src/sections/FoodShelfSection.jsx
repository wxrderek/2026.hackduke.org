import './FoodShelfSection.css';
import catSvg from '../assets/Cat.svg';
import doubleShelfSvg from '../assets/double_shelf.svg';
import ramenGroupSvg from '../assets/ramen_group.svg';
import pockySvg from '../assets/pocky.svg';
import potatoSvg from '../assets/potato.svg';
import shrimpSvg from '../assets/shrimp.svg';

export default function FoodShelfSection() {
  return (
    <div className="fs-strip">
      <div className="fs-bg" />

      <div className="fs-row">
        <div className="fs-cell">
          <div className="fs-scene">
            {/* Background shelf */}
            <div className="food-item shelf-back">
              <img src={doubleShelfSvg} alt="Double Shelf" style={{ width: '3337px', height: '1573px' }} />
            </div>

            {/* Food items on shelves with explicit dimensions */}
            <div className="food-item ramen">
              <img src={ramenGroupSvg} alt="Ramen" style={{ width: '578px', height: '358px' }} />
            </div>

            <div className="food-item pocky">
              <img src={pockySvg} alt="Pocky" style={{ width: '386px', height: '284px' }} />
            </div>

            <div className="food-item potato">
              <img src={potatoSvg} alt="Potato Chips" style={{ width: '827px', height: '454px' }} />
            </div>

            <div className="food-item shrimp">
              <img src={shrimpSvg} alt="Shrimp Chips" style={{ width: '827px', height: '454px' }} />
            </div>

            {/* Decorative items */}
            <div className="food-item cat">
              <img src={catSvg} alt="Cat" style={{ width: '1057px', height: '527px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}