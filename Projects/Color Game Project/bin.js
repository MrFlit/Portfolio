window.onload=function(){
alert('Угадай правильный цвет');
var numOfSquares = 6;
var colors=generateRandomColors(numOfSquares);
var resetButton = document.querySelector('#reset');
var squares = document.getElementsByClassName('square');
var pickedColor=pickColor();
var colorDisplay=document.getElementById('colorDisplay');
var message=document.querySelector('#message');
var h1 = document.querySelector('h1');
colorDisplay.textContent=pickedColor;
var easybtn = document.querySelector('#easybtn');
var hardbtn = document.querySelector('#hardbtn');

easybtn.addEventListener('click',function(){
    easybtn.classList.add('selected');
    message.textContent="";
    resetButton.textContent="New Colors";
    hardbtn.classList.remove('selected');
    h1.style.background="blue";
    numOfSquares=3;
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

hardbtn.addEventListener('click',function(){
    hardbtn.classList.add('selected');
    easybtn.classList.remove('selected');
    message.textContent="";
    resetButton.textContent="New Colors";
    h1.style.background="blue";
    numOfSquares=6;
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i =0;i<squares.length;i++){
       
            squares[i].style.backgroundColor=colors[i];
        
            squares[i].style.display="block";
        
    }
});

resetButton.addEventListener('click',function(){
    this.textContent="New Colors";
    message.textContent="";
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i =0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];}
        h1.style.background="blue";
});
function generateRandomColors(num){
    var arr = [];
    for(var i =0;i<num;i++){
        arr[i]=randomColor();
    }
    return arr;
}

function randomColor(){
    red=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

for(var i =0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener('click',function(){
        clickedColor=this.style.backgroundColor;
        //console.log(clickedColor,pickedColor);
        if(clickedColor===pickedColor){
            message.textContent="Correct!";
            resetButton.textContent="Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again";
            h1.style.background="blue";
        }
    });
}

function changeColors(color){
    for(var i =0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}}