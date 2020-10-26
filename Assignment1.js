function drawLine(lineType, length) {
    let hrLine = '';
    for (let i = 0; i < length + 2; i++) {
      hrLine = hrLine + '━';
    }
function getLongestName(names) {
    let longestNameLength = 0;
    for (let name of names) {
      if (name.length > longestNameLength) longestNameLength = name.length;
    }
    return longestNameLength;
  }
function insertPadding(spaces) {
    let resultpad = '';
    for (let i = 0; i < spaces; i++) {
      resultpad += ' ';
    }
    return resultpad;
  }
  function drawName(name, maxLength) {
    const padding = insertPadding(maxLength - name.length + 1);
    const result = `┃ ${name}${padding}┃`;
    console.log(result);
  }
  function drawTable(names) {
    if (names.length === 0) return;
    let lineLength = getLongestName(names);
    for (let name of names) {
      const lineTypeToDraw = isFirstLineDraw ? MIDDLE_LINE : TOP_LINE;
      drawLine(lineTypeToDraw, lineLength);
      drawName(name, lineLength);
      isFirstLineDraw = true;
    }
    drawLine(BOTTOM_LINE, lineLength);
  }
  drawTable(names);

function boxIt(arrOfStr){
    for(let i=0;i<arrOfStr.length;i++){
        console.log(`${drawTopBorder(9)}'\n'${drawBarsAround()}${arrOFStr[i]}'\n${middleBorder(9)}'\n'${drawBarsAround()}${arrOfStr[i+1]}'\n'
        ${drawBottomBorder(9)}`)
    }
    
}

 
boxIt(['Jon Snow', 'Cersei Lannister']);
/*console.log(drawLine(3));
console.log(drawLine(8));
drawTopBorder();
drawBarsAround('John Snow');
middleBorder();
drawBarsAround('daniel');
drawBottomBorder();*/