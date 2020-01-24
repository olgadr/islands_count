export const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const generateMatrix = (N, M) => {
    let matrix = [];
    for (let c = 0; c < N; c++) {
        matrix[c] = Array.from({length: M}, () => '' + Math.floor(Math.random() * 2));
    }

    return matrix;
};

export const countIslands = function(grid) {
    let visited = Array.from({length: grid.length}, () => []);   

    let markIsland = function(grid, x, y, visited, color) {
        if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
            return;
        }
        if(visited[x][y] === true) {
            return;
        }
        visited[x][y] = true;
        if(grid[x][y] === '0') {
            return;
        }

        grid[x][y] = {'color': color};

        markIsland(grid, x - 1, y, visited, color);
        markIsland(grid, x + 1, y, visited, color);
        markIsland(grid, x, y - 1, visited, color);
        markIsland(grid, x, y + 1, visited, color);
    };


    let count = 0;
    for(let x = 0; x < grid.length; x++) {
        for(let y = 0; y < grid[x].length; y++) {
            if(!visited[x][y] && grid[x][y] === '1') {
                count++;
                markIsland(grid, x, y, visited, count);
            }
            visited[x][y] = true;
        }
    }
    visited.length = 0;
    return {count, grid};
};

