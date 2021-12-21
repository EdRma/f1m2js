const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen =[
        {
                   "titel":"lente",
                   "image":"img/spring.jpg",

        }
];
// let seizoen = { 
//    "titel":"lente",
//   "image":"img/spring.jpg",
// };

function show(){
        myTitle.innerHTML = seizoen[0].titel;
        myImage.src = seizoen[0].image;
}