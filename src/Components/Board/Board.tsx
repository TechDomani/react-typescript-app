import React, {useState} from 'react';
import Square from '../Square/Square';

function Board() {

        const [squares, setSquares] = useState<string[]>(new Array(9).fill(null));
        const [useX, setUseX] = useState<boolean>(true);

        const updateValue = (i: number): void => {
            if (squares[i] === null){
                const squareVal = squares.slice();
                squareVal[i] = useX ? 'X' : '0';
                setSquares(squareVal);
                setUseX(currentUseX => !currentUseX);
                console.log(squares);
            }
        }
    
        const renderSquare = (i: number) => {
            return <Square value={squares[i]} updateValue={() => updateValue(i)} />
        }

        return (<div className="d-flex flex-column">
        <div>{`Next player is ${useX ? 'X' : '0'}`}</div>
        <div className="flex-row">
           { renderSquare(0) }
           { renderSquare(1) }
           { renderSquare(2) }
        </div>
        
        <div className="flex-row">
           { renderSquare(3) }
           { renderSquare(4) }
           { renderSquare(5) }
        </div>
        
        <div className="flex-row">
           { renderSquare(6) }
           { renderSquare(7) }
           { renderSquare(8) }
        </div>
    </div>)
}

export default Board;