let div = document.createElement('div');
let textNode = document.createTextNode('Глупая шутка про табуретку');
document.body.append(div);
div.append(textNode);

let ol = document.createElement('ol');
document.body.append(ol);
let li = document.createElement('li');
let textNode2 = document.createTextNode('Анекдот');
ol.prepend(li);
li.append(textNode2);

let li2 = document.createElement('li');
let textNode3 = document.createTextNode('анекдот2');
ol.prepend(li2);
li2.append(textNode3);

let li3 = document.createElement('li');
let textNode4 = document.createTextNode('анекаен3');
ol.prepend(li3);
li3.append(textNode4);

div.classList.add('goose');
let goose = document.querySelector('.goose');
goose.style.margin = "50px";