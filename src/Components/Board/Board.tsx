import React, {useState} from 'react';
import Square from '../Square/Square';
import calculateWinner from '../../Helper/CalculateWinner';

const Board = () => {

        const initialSquares: (string | null)[] = new Array(9).fill('');
        const initialUseX: boolean = true;
        const initialWinner: string | null = null;

        const [squares, setSquares] = useState<(string | null)[]>(initialSquares);
        const [useX, setUseX] = useState<boolean>(initialUseX);
        const [winner, setWinner] = useState<string | null>(initialWinner);

        const updateValue = (i: number): void => {
            if (!squares[i] && !winner){
                const squareVal = squares.slice();
                squareVal[i] = useX ? 'X' : '0';
                if (calculateWinner(squareVal)) {
                    setWinner(squareVal[i])
                }
                setSquares(squareVal);
                setUseX(currentUseX => !currentUseX);
            }
        }
    
        const renderSquare = (i: number) => {
            return <Square value={squares[i]} updateValue={() => updateValue(i)} />
        }

        const renderRow = (i: number) => {
            return  <div className="flex-row">
            { renderSquare(i*3) }
            { renderSquare(i*3 + 1) }
            { renderSquare(i*3 + 2) }
         </div>
    }

    const caption = (): string => {
        console.log("caption called")
        if (!winner) {
            if (squares.every(s => s)) {
                return `It's a draw`
            }
            return `Next player is ${useX ? 'X' : '0'}`
        }
        return `Congratulations ${winner} has won!`;
    }

        const reset = () => {
            setSquares(initialSquares);
            setUseX(initialUseX);
            setWinner(initialWinner);
        }

        return (<div className="d-flex flex-column">
        <div className="pb-2">{caption()}</div>
        {renderRow(0)}
        {renderRow(1)}
        {renderRow(2)}
        <div className="mt-2">
            <button onClick={reset}>Start Again</button>   
        </div>
        
    </div>)
}

export default Board;