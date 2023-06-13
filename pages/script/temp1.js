let container = document.getElementById('container');
let tiles = document.getElementById('tabOne');
let tiles2 = document.getElementById('tabtwo');
let tiles3 = document.getElementById('tabthree');
let tiles4 = document.getElementById('tabfour');
function updateBlog(){
     let blogBgc = document.getElementById('blogBgc').value;
    let tilesBgc = document.getElementById('tilesBgc').value;
    container.style.backgroundColor = blogBgc;
    tiles.style.backgroundColor = tilesBgc;
    tiles2.style.backgroundColor = tilesBgc;
    tiles3.style.backgroundColor = tilesBgc;
    tiles4.style.backgroundColor = tilesBgc;
}
function selectFontONe(){
    document.body.style.fontFamily = document.getElementById('fontOne').innerHTML; 
}function selectFontTwo(){
    document.body.style.fontFamily =  document.getElementById('fontTwo').innerHTML;
}
function selectFontThree(){
    document.body.style.fontFamily =  document.getElementById('fontThree').innerHTML;
}function selectFontFour(){
    document.body.style.fontFamily =  document.getElementById('fontFour').innerHTML;
}function selectFontFive(){
    document.body.style.fontFamily =  document.getElementById('fontFive').innerHTML;
}
function finalblog(){
    document.getElementById('editingBox').style.display = 'none';
}
function pagereload(){
    location.reload(location.href);
}