// TODO -> pick a color and h2 changes color

const container = document.querySelector('#boxes');


const colors2 = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet',
    'white',
    'teal'
];


// h2ColPick.addEventListener('mouseover', function(){
//     console.log(this.innerText);

// })
const changeColor = function() {
    const h2ColPick = document.querySelector('#pickAColor')
    // console.log(this); // this will refair to its original object ( box in this case)
    console.log(this.style.backgroundColor);
    // document.body.style.backgroundColor = this.style.backgroundColor;
    h2ColPick.style.color = this.style.backgroundColor;
    
}
for(let col of colors2){
    const box = document.createElement('div')
    box.style.backgroundColor = col;
    box.classList.add('box')
    container.appendChild(box);
    box.addEventListener('click', changeColor); // this refair to box element(div)
}


//FIXME -> additional_css :

// #boxes {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// .box {
//     width: 100px;
//     height: 100px;
// }
