
const listTitle = document.createElement('h3')
listTitle.innerHTML = '<code>Shopping_List</code>'
document.body.append(listTitle)
const addItemInput = document.createElement('input')
addItem.id = 'addItem'
addItemInput.placeholder = 'list item'
document.body.append(addItemInput)
const itemsUl = document.createElement('ul')
itemsUl.id = 'items'
document.body.append(itemsUl)
const inputUsername = document.querySelector('#username')
inputUsername.style.marginTop = '12px';

document.body.style.textAlign = 'center'

// TODO when key is pressed down
inputUsername.addEventListener('keydown', function(evt) {
    console.log('key down!');
})

// TODO when key is released
inputUsername.addEventListener('keyup', function(evt) {
    console.log('key up!');
})
// TODO is between first is keydown-> keypressed -> keyUp
inputUsername.addEventListener('keypress', function(evt) {
    console.log('keypressed!');
})


addItemInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        if (! this.value) return;
        console.log(this.value);
        const newItem = document.createElement('li');
        newItem.innerText = this.value
        itemsUl.appendChild(newItem)
        this.value = ''

    }
})