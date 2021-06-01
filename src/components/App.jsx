import { useState } from 'react';
import css from './App.module.scss';
import { Container } from './common';

export default function App() {
    const [cardList, setCardList] = useState([
        { id: 1, order: 3, text: 'Card 3' },
        { id: 2, order: 1, text: 'Card 1' },
        { id: 3, order: 2, text: 'Card 2' },
        { id: 4, order: 4, text: 'Card 4' },
    ]);
    const [currCard, setCurrCard] = useState(null);

    const handleDragStart = (e, card) => {
        console.log('drag', card);

        setCurrCard(card);
    };

    const handleDragLeave = e => {
        //
    };

    const handleDragEnd = e => {
        //
    };

    const handleDragOver = e => {
        e.preventDefault();

        //
    };

    const handleDrop = (e, card) => {
        e.preventDefault();

        console.log('drop', card);
        //
    };

    return (
        <Container>
            <div className={css.cardList}>
                {cardList.map(card => (
                    <div
                        onDragStart={e => handleDragStart(e, card)}
                        onDragLeave={handleDragLeave}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                        onDrop={e => handleDrop(e, card)}
                        draggable={true}
                        className={css.card}
                        key={card.id}
                    >
                        {card.text}
                    </div>
                ))}
            </div>
        </Container>
    );
}
