// import './index.css'
import Card from '../Card';

const Cards = ({num = 1}) => {
  const cards = [];
  for (let i = 0; i < num; i++) {
    cards.push(<Card/>)
 }
  return (
    <div className="cards">
      {cards}
    </div>
  );
};

export default Cards;
