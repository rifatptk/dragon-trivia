import './App.css';
import playbtn from './assets/PlayButton.png';
import baby from './assets/baby.png';
import baby2 from './assets/baby2.png';
import bg from './assets/bg.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>PLAY FREE TRIVIA AND WIN</h1>
        <div className="innerContainer">
          <div className="left">
            <img src={playbtn} alt="" />
            <div>
              <h5>Play our trivia game to win stars</h5>
              <p>
                Every 5 stars you win 1 free entry into our <br />
                daily/weekly contests where you can win <br /> prizes like food,
                gift cards and <br />
                DragonCamp merchandise! Win your <br /> own green DragonCamp
                onesie. Follow <br /> us on social to see if you've won!
              </p>
            </div>
          </div>
          <div className="right">
            <img src={baby} alt="" />
            <img src={baby2} alt="" />
          </div>
        </div>
        <img src={bg} className="bg" alt="" />
      </div>
    </div>
  );
}

export default App;
