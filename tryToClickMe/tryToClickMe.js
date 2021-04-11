// TODO -- project: => tryTOClickMe :



const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
    // console.log('moused overed me!');
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    btn.style.left = `${width}px`
    btn.style.top = `${height}px`
    

});

btn.addEventListener('click', () => {
    btn.innerText = 'YOU GOT ME!';
    document.body.style.backgroundColor = 'green'

})