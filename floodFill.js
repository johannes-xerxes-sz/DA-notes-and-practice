/* LC : 733. Flood Fill : Easy

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

e.g.
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

e.g.
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

Constraints:
  m == image.length
  n == image[i].length
  1 <= m, n <= 50
  0 <= image[i][j], color < 216
  0 <= sr < m
  0 <= sc < n
*/

var floodFill = (image, sr, sc, color) => {
  if (image[sr][sc] === color) {
    return image;
  }

  fill(image, sr, sc, image[sr][sc], color)
  return image;

}

var fill = (image, i, j, initialColor, newColor) => {
  //base case
  if (i < 0 || i > image.length - 1 || j < 0 || j > image[0].length - 1 || image[i][j] !== initialColor) {
    return;
  }
  //recursive cases
  image[i][j] = newColor;
  fill(image, i-1, j, initialColor, newColor)
  fill(image, i+1, j, initialColor, newColor)
  fill(image, i, j-1, initialColor, newColor)
  fill(image, i, j+1, initialColor, newColor)
}




floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2)
floodFill([[0,0,0],[0,0,0]], 1, 0, 2)



/*--------------------------------TESTS---------------------------------*/
console.log('floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2) => [[2,2,2],[2,2,0],[2,0,1]]', JSON.stringify(floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2)) === JSON.stringify([[2,2,2],[2,2,0],[2,0,1]]))
console.log('floodFill([[0,0,0],[0,0,0]], 1, 0, 2) => [[2,2,2],[2,2,2]]', JSON.stringify(floodFill([[0,0,0],[0,0,0]], 1, 0, 2)) === JSON.stringify([[2,2,2],[2,2,2]]))
