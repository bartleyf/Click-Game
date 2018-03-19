import React from "react";
import Card from "./Card";
import cardData from "./CardData.json";

class CardList extends React.Component {
    state = {
        guesses: [],
        score: 0,
        highScore: 0
    }

    validateGuess(id) {
        if (this.state.guesses.includes(id)){
            this.state.set({guesses: this.state.guesses.push(id)});
            this.state.set({score: this.score + 1});
        }
        this.resetGame();
    }

    resetGame() {
        this.state.set({guesses: []});
        this.state.set({score: 0});
    }

    render() {
        return cardData.map(cardElement => (
        <Card imageSrc = {cardElement.imageSrc} name={cardElement.name} key={cardElement.id} validateGuess={this.validateGuess} />
        ));
}

}

export default CardList;