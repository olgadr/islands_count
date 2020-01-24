import React from 'react';
import {FixedSizeGrid} from "react-window";
import Cell from './Cell.jsx';
import '../styles/Grid.scss';

const MAX_GRID_ROWS = 35;
const MAX_GRID_COLUMNS = 50;
const CELL_SIZE = 20;
const GRID_SPACER = 5;

function Grid(props) {
    const {matrix} = props;

    const GridCell = (props) => {
        return <Cell {...props} item={matrix[props.columnIndex][props.rowIndex]}/>;
    };

    const rowsCount = matrix[0].length;
    const columnsCount = matrix.length;
    const height = (rowsCount > MAX_GRID_ROWS ? MAX_GRID_ROWS : rowsCount) * CELL_SIZE + GRID_SPACER;
    const width = (matrix.length > MAX_GRID_COLUMNS ? MAX_GRID_COLUMNS : columnsCount) * CELL_SIZE + GRID_SPACER;
    return (
        <FixedSizeGrid
            className="Grid"
            columnCount={columnsCount}
            columnWidth={20}
            height={height}
            rowCount={rowsCount}
            rowHeight={20}
            width={width}
        >
            {GridCell}
        </FixedSizeGrid>

    )
}

// Set default props
Grid.defaultProps = {
    matrix: []
};

export default React.memo(Grid);