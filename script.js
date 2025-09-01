const gridElement = document.getElementById("grid");

    // Create 9x9 input grid
    for (let i = 0; i < 9; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 9; j++) {
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1; // only one digit
        cell.appendChild(input);
        row.appendChild(cell);
      }
      gridElement.appendChild(row);
    }

    // Read grid into 2D array
    function getGrid() {
      let grid = [];
      const rows = gridElement.querySelectorAll("tr");
      rows.forEach(row => {
        let rowData = [];
        row.querySelectorAll("input").forEach(cell => {
          let val = cell.value;
          rowData.push(val === "" ? 0 : parseInt(val));
        });
        grid.push(rowData);
      });
      return grid;
    }

    // Write solution back into grid
    function setGrid(grid) {
      const rows = gridElement.querySelectorAll("tr");
      rows.forEach((row, i) => {
        row.querySelectorAll("input").forEach((cell, j) => {
          cell.value = grid[i][j] === 0 ? "" : grid[i][j];
        });
      });
    }

    // Sudoku solver logic
    function isSafe(grid, row, col, num) {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) return false;
      }
      let startRow = row - row % 3, startCol = col - col % 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + startRow][j + startCol] === num) return false;
        }
      }
      return true;
    }

    function solve(grid) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;
                if (solve(grid)) return true;
                grid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    function solveSudoku() {
      let grid = getGrid();
      if (solve(grid)) {
        setGrid(grid);
      } else {
        alert("No solution exists!");
      }
    }