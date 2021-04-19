import React, { useState } from 'react';
import Squere from './Squere';

function Start({ start }) {
  const [history, setHistory] = useState([]);

  // for hendeling history
  const handleHistory = (name) => {
    name.status
      ? setHistory((old) => [...old, name.path])
      : setHistory(history.filter((item, i) => item !== name.path));
  };

  // generate single squere for board
  const returnDivsSquere = (count) => {
    const arr = [];
    count = parseInt(count);
    for (let i = 1; i <= count * count; i++) {
      arr.push(
        <Squere
          data={{
            col: i % count || count,
            row: Math.ceil(i / count),
          }}
          handleHistory={handleHistory}
          key={i}
        />
      );
    }

    return arr;
  };

  return (
    <div className="game-borad">
      <div
        className="wrapper"
        style={{ gridTemplateColumns: `repeat(${start}, 1fr)` }}
      >
        {returnDivsSquere(start)}
      </div>
      <div className="history">
        <h6>HISTORY</h6>
        <ul className="history-list">
          {history.map((item, i) => {
            return (
              <li key={i}>
                <p className="history-title">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Start;
