import React from 'react';
import CardData from "./CardData.json";
import Card from "./components/Body/Card";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper/index";
import './App.css';

class App extends React.Component {
  state = {
    guesses: [],
    score: 0,
    highScore: 0,
    CardData
  };

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleOnChange = (id) => {
      this.validateGuess(id)
      this.shuffleArray(this.state.CardData)
  }

  validateGuess = (id) => {
    if (this.state.guesses.includes(id)) {
      this.setState({ guesses: this.state.guesses.push(id) });
      this.setState({ score: this.score + 1 });
    } else {
      this.resetGame();
    }
  }

  resetGame() {
    this.setState({ guesses: [] });
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
      <Navbar score={this.state.score} highScore={this.state.highScore} />
      <Wrapper>
        {this.state.CardData.map(CardData => (
            <span key={CardData.id}>
                <Card
                handleOnchange={this.handleOnChange}
                id={CardData.id}
                name={CardData.name}
                image={CardData.imageSrc}
                />
            </span>
        ))}
      </Wrapper>
      <Footer/>
      </div>
    );
  }
}

export default App;
