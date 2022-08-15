let btn1 = document.getElementById('Change_color');

btn1.addEventListener('click', () => {
  let div = document.getElementById('test_div');
  div.style.background = "blue";
})


let btn2 = document.getElementById('Change_size');

btn2.addEventListener('click', () => {
  let div = document.getElementById('test_div');
  div.style.width = "200px";
  div.style.height = "200px";

})


let btn3 = document.getElementById('Add_image');

btn3.addEventListener('click', () => {

  img = document.createElement("img");

  img.setAttribute('src', 'https://www.google.co.in/images/srpr/logo11w.png');

  document.getElementById("test_div").appendChild(img);


})

let btn4 = document.getElementById('Remove_image');

btn4.addEventListener('click', () => {

 
  document.getElementById("test_img").style.visibility="hidden";


})