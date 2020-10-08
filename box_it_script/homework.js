const names = process.argv.slice(2);
// enumerated values
const TOP_LINE = 'top_line';
const MIDDLE_LINE = 'middle_line';
const BOTTOM_LINE = 'bottom_line';
// create flag to track if we have drawn the first line or not
let isFirstLineDraw = false;
function getLongestName(names) {
  let longestLength = 0;
  for (let name of names) {
    if (name.length > longestLength) longestLength = name.length;
  }
  return longestLength;
}
function createPadding(spaces) {
  let result = '';
  for (let i = 0; i < spaces; i++) {
    result += ' ';
  }
  return result;
}
function drawLine(lineType, length) {
  let horizontalLine = '';
  for (let i = 0; i < length + 2; i++) {
    horizontalLine = horizontalLine + '━';
  }
  if (lineType === TOP_LINE) {
    console.log(`┏${horizontalLine}┓`);
  } else if (lineType === MIDDLE_LINE) {
    console.log(`┣${horizontalLine}┫`);
  } else if (lineType === BOTTOM_LINE) {
    console.log(`┗${horizontalLine}┛`);
  } else {
    console.log('ERROR: Invalid Line Type: ', lineType);
  }
}
function drawName(name, maxLength) {
  const padding = createPadding(maxLength - name.length + 1);
  const result = `┃ ${name}${padding}┃`;
  console.log(result);
}
function drawTable(names) {
  if (names.length === 0) return;
  let lineLength = getLongestName(names);
  // console.log(lineLength);
  for (let name of names) {
    const lineTypeToDraw = isFirstLineDraw ? MIDDLE_LINE : TOP_LINE;
    drawLine(lineTypeToDraw, lineLength);
    drawName(name, lineLength);
    isFirstLineDraw = true;
  }
  drawLine(BOTTOM_LINE, lineLength);
}
drawTable(names);

jasontau  7:26 PM
Loops:
// iterative -- good when you know/can find out the length of the loop
// say happy birthday to bob for each year of his life
let bob = {
  gender: 'Male',
  age: 50,
  height: 178,
  weight: 80,
};
for (let i = 1; i <= bob.age; i++) console.log(`Happy ${i} Birthday Bob!`);
// for...in -- for going through objects
// print out bob's vitals
for (vital in bob) {
  console.log(`${vital}: ${bob[vital]}`)
}
// for...of -- good for iterating through an array
const countries = ['Canada', 'Zimbabwe', 'China']
for (let name of countries) {
  console.log(name.toUpperCase())
}
// while --- can run forever, be very carefuly
// 1. Can I use a for loop instead?
// 2. Can I construct this loop with a surefire way to exit?
// 3. Things like Games might use While loops, but are otherwise very rare