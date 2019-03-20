function drawTriangle(symbol, height) {
    let line = '';
    if (height < 3 || height > 100) {
        height = 3;
    }   
        
    for (let i = 0; i < height; i++) {
        line +=symbol;
        console.log(line);
    }
}
drawTriangle('$', 4);