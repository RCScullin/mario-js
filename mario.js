printPyramid(6);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
 /*
function printPyramid(height) {
  for (var line = "##"; line.length <= height + 1; line += "#") {
    var spaces = ""
    while (line.length + spaces.length < height + 1) {
      spaces += " "
    }
    console.log(spaces + line);
    spaces = ""
  }
}
*/
function printPyramid(height) {
  for (var bricks = "##"; bricks.length <= height + 1; bricks += "#") {
    console.log(" ".repeat(height + 2 - bricks.length) + bricks);
  }
}
