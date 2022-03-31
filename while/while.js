const shoppingListElement = document.querySelector('.shopping .list')

const shopping_list = ['pane', 'latte di avena', 'gelato', 'pizza'];

let index = 0;

while (index < shopping_list.length){

    const product = shopping_list[index];
    const liElement = document.createElement('li');
    liElement.append(product);
    shoppingListElement.append(liElement)


    index++
}

/* for (let i = 0; i< shopping_list.length; i++) {
    const product = shopping_list[i];
    const liElement = document.createElement('li');
    liElement.append(product);
    shoppingListElement.append(liElement)
} */

