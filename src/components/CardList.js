import React from "react";
import Card from "./Card";
import CardData from "../CardData.json";

class CardList extends React.Component {
    render() {
        return CardData.map(CardData => (
        <Card imageSrc = {CardData.imageSrc} name={CardData.name} key={CardData.id} validateGuess={this.validateGuess} />
        ));
}
}

export default CardList;