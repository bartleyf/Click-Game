import React from 'react';
import './App.css';
import CardList from "./components/CardList";

class App extends React.Component {
        state = {
        guesses: [],
        score: 0,
        highScore: 0
    }

    validateGuess(id) {
        if (this.state.guesses.includes(id)){
            this.setState({guesses: this.state.guesses.push(id)});
            this.setState({score: this.score + 1});
        } else {
        this.resetGame();
    }
}

    resetGame() {
        this.setState({guesses: []});
        this.setState({score: 0});
    }

  render() {
    return (
      <CardList />
    );
  }
}

export default App;
