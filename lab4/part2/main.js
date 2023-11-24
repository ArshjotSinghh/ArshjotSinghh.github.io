const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const allImages=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Declaring the alternative text for each image file */

const alts={
    'pic1.jpg':'Closeup of a human eye',
    'pic2.jpg':'Rock that looks like a wave',
    'pic3.jpg':'White and purple pansies',
    'pic4.jpg':'Section of wall from a pharoahs tomb',
    'pic5.jpg':'Large moth on a leaf'
}

/* Looping through images */

for(const image of allImages){
    const newImage=document.createElement('img');
    newImage.setAttribute('src',`images/${img}`);
    thumbBar.appendChild(newImage)
}

function setEventToEverySingleImage(event){
    displayedImage.setAttribute('src',event.target.getAttribute('src'));
}

thumbBar.addEventListener('click',setEventToEverySingleImage)

/* Wiring up the Darken/Lighten button */



