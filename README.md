# Sudoku Solver (9x9 Grid)

This project is a simple **web-based Sudoku Solver** built using **HTML, CSS, and JavaScript**.  
It allows the user to input numbers into a 9×9 grid, and then automatically solves the Sudoku puzzle using a **backtracking algorithm**.

---

## 🚀 Features
- Interactive **9x9 Sudoku grid** for user input.
- Automatically solves the puzzle with **one click**.
- Uses the classic **backtracking algorithm** for solving.
- Highlights the **3x3 subgrids** with bold borders for better readability.
- Simple, clean, and responsive design.

---

## 📂 Project Structure
sudoku-solver/          
│── index.html # Main HTML file             
│── style.css # Styling for the grid and page                  
│── script.js # JavaScript logic for Sudoku solving                         
│── README.md # Documentation (this file)                   

---

## ⚙️ How It Works
1. The user enters numbers (1–9) into the grid.  
   - Leave cells blank for empty positions.
2. When the **"Solve" button** is clicked:
   - The algorithm tries possible numbers in empty cells.
   - It checks validity against **row, column, and 3×3 subgrid constraints**.
   - Uses **recursive backtracking** to find the solution.
3. The solved Sudoku is displayed in the same grid.

---
