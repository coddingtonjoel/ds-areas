import "./GameSection.css";
import dsIArt from '../images/ds1.jpg';
import dsIIArt from '../images/ds2.jpg';
import dsIIIArt from '../images/ds3.jpg';
import GameContainer from "./GameContainer";

const GameSection = ({ gameData }) => {
  const { dsI, dsII, dsIII } = gameData;

  return (
    <div>
      <div className="cta">
        <h2>Click an area below to explore why it's one of the best!</h2>
      </div>
      <section className="gameSection">
        <GameContainer className="dsI" image={dsIArt} gameData={dsI}/>
        <GameContainer className="dsII" image={dsIIArt} gameData={dsII}/>
        <GameContainer className="dsIII" image={dsIIIArt} gameData={dsIII}/>
      </section>
    </div>
  )
}

export default GameSection;