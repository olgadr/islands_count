import React, {useState} from 'react';
import FormData from './components/Form';
import Grid from './components/Grid';
import {generateMatrix, countIslands} from './utils/utils';
import './styles/App.scss';

function App() {
    const [matrix, setMatrix] = useState(null);
    const [numOfIslands, setNumOfIslands] = useState(null);

    return (
        <>
            {!(matrix && matrix.length) ?
                <FormData handleRandomize={(N, M) => {
                    setMatrix(generateMatrix(N, M))
                }}/> :
                <>
                    <Grid matrix={matrix} numOfIslands={numOfIslands} />
                    <div className={'flex-center-container'}>
                        {numOfIslands === null ? <button className={'app-button'}
                            onClick={() => {
                                const { count, grid } = countIslands(matrix);
                                setMatrix(grid);
                                setNumOfIslands(count);
                            }}>SOLVE</button>
                            :
                            <>
                                <div>FOUND {numOfIslands} ISLANDS!</div>
                                <div><button className={'app-button'} onClick={() => { setMatrix(null); setNumOfIslands(null); }}>RESTART</button></div>
                            </>
                        }
                    </div>
                </>}
        </>

    );
}

export default App;
