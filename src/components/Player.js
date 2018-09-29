import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import HighScore from './HighScore';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool,
        id: PropTypes.number,
        index: PropTypes.number
    }

    render() {
        const { name, id, score, index, removePlayer, changeScore, isHighScore } = this.props;
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={ () => removePlayer(id)}>X</button>
                    <HighScore isHighScore={isHighScore}/>
                    {name}
                </span>
    
                <Counter 
                    score={score} 
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;