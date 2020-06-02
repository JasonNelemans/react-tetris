export const STAGE_WIDTH = 12;
export const STAGE_HEIGTH = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGTH), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we are on actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game area's height (y)
          // We shouldn't go through the bottom of the game area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game area's width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we are moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !=="clear"
        ) {
          return true;
        }
      }
    }
  }
  //5. if everything above is false
  return false;
};
