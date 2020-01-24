import React, {useState} from 'react';
import '../styles/Form.scss';
import {getRandomInt} from "../utils/utils";

const DEFAULT_MIN_VAL = 3;
const DEFAULT_MAX_VAL = 100;

function FormData(props) {
    const [M, setNumOfRows] = useState(getRandomInt(DEFAULT_MIN_VAL, DEFAULT_MAX_VAL));
    const [N, setNumOfColumns] = useState(getRandomInt(DEFAULT_MIN_VAL, DEFAULT_MAX_VAL));
    const isDisabled = !M || !N;

    return (
        <div className={'form-wrapper'}>
            <div className={'form-title'}>Please enter bitmap size:</div>
            <div className={'form-row'}><label>Number of rows</label> <input type={'number'} min={DEFAULT_MIN_VAL} defaultValue={M}
                                                         onChange={(e) => setNumOfRows(e.target.value)}/></div>
            <div className={'form-row'}><label>Number of columns</label> <input type={'number'} min={DEFAULT_MIN_VAL} defaultValue={N}
                                                             onChange={(e) => setNumOfColumns(e.target.value)}/></div>
            <div className={'form-footer'}>
                <button
                    className={'app-button'}
                    onClick={isDisabled ? null : () => props.handleRandomize(N, M)}
                    disabled={isDisabled}
                >
                    RANDOMIZE
                </button>
            </div>

        </div>
    )
}


export default React.memo(FormData);