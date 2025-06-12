import dsFire from '../images/ds-fire.png';
import { Link } from 'react-router-dom';

const GameContainer = ({ className, image, gameData }) => {
  const { gameTitle, locations } = gameData;

  const fireIcon = <img className="fireIcon" src={dsFire} alt="Fire icon"/>;

  return (
    <div className={className}>
      <img draggable={false} src={image} alt={gameTitle}/>
      <div className="buttonContainer">
        {locations.map(loc =>
          <Link to={loc.route}>
            <button>
                {fireIcon}
                <span>{loc.title}</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default GameContainer;