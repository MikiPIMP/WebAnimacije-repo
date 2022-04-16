let boje = [
    'blue',
    'green',
    'red',
    'black',
    'white',
    'navy',
    'aqua',
    'brown',
    'yellow',
    'orange',
    'grey',
    'aquamarine',
    'violet',
    'cyan',
    'darkgreen',
    'chartreuse',
    'maroon',
    'teal',
    'coral',
    'cornflowerblue',
    'indigo',
    'gold',
    'azure',
    'mediumseagreen',
    'lime'
];

let div = document.getElementById('nulti');

div.addEventListener('click', () => {
    var nasumicnaBoja = boje[Math.floor(Math.random() * boje.length)];
    let div1 = document.getElementById('nulti');
    div1.style.backgroundColor = nasumicnaBoja;
});