import './App.css';
import dsI from './images/ds1/ds1.jpg';
import dsII from './images/ds2/ds2.jpg';
import dsIII from './images/ds3/ds3.jpg';
import dsFire from './images/ds-fire.png';

const App = () => {
  const fireIcon = <img className="fireIcon" src={dsFire} alt="Fire icon"/>;
  return (
    <div className="App">
    {/*  I'm thinking of having a header section that spans the whole horizontal width, then the section below it is
         split into three large columns, each with the box art for the games, then the two areas I've selected below it as link
         buttons with lil arrow svgs that move right as you hover over the buttons 
    */}
      <header className="headerSection">
        <div className="headerText">
          <h1>The Dark Souls Trilogy</h1>
          <p>Best areas, as ranked by Joel Coddington-Lopez</p>
        </div>
      </header>
      <section className="ctaSection">
        <h2>Pick a section below to explore why it's one of the best!</h2>
      </section>
      <section className="gameSection">
        <div className="dsI">
          <img src={dsI} alt="Dark Souls I"/>
          <div className="buttonContainer">
            <button>
              {fireIcon}
              <span>Undead Burg</span>
            </button>
            <button>
              {fireIcon}
              <span>Anor Londo</span>
            </button>
          </div>
        </div>
        <div className="dsII">
          <img src={dsII} alt="Dark Souls II"/>
          <div className="buttonContainer">
            <button>
            {fireIcon}
            <span>Forest of Fallen Giants</span>
          </button>
            <button>
            {fireIcon}
            <span>Heide's Tower of Flame</span>
          </button>
          </div>
        </div>
        <div className="dsIII">
          <img src={dsIII} alt="Dark Souls III"/>
          <div className="buttonContainer">
            <button>
            {fireIcon}
            <span>Irithyll of the Boreal Valley</span>
          </button>
            <button>
            {fireIcon}
            <span>Lothric Castle</span>
          </button>
          </div>
        </div>
      </section>
      <section className="submissionSection">
        <p>Have a favorite area you didn't see here? Let me know and I'll consider adding it!</p>
      </section>
    </div>
  );
}

export default App;
