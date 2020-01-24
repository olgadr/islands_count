import React from "react";
import {generateKey} from "../utils/utils";
import classNames from "classnames";

const Cell = ({columnIndex, rowIndex, style, item }) => {
    let { color } = item;
    if(color != null) {
        color = color % 10;
    }

    return (
        <div key={generateKey(rowIndex + columnIndex)}
            style={style}
            className={classNames("Grid-item", { [`color-${color}`]: color }, { 'island': item === '1' })}
        >&nbsp;</div>
    )
};

export default React.memo(Cell);