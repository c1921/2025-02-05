"use strict";
// 获取游戏容器
const gameContainer = document.getElementById('game-container');
// 创建10x10格子
function createGrid() {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row.toString();
            cell.dataset.col = col.toString();
            cell.addEventListener('click', handleCellClick);
            gameContainer.appendChild(cell);
        }
    }
}
// 处理格子点击事件
function handleCellClick(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    console.log(`点击了格子：行 ${row}, 列 ${col}`);
    cell.style.backgroundColor = '#a0d8ef';
}
// 初始化游戏
createGrid();
//# sourceMappingURL=script.js.map