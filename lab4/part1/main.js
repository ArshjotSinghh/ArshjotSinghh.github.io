// Variables are defined below
let customName=document.getElementById('customname');
let randomize=document.querySelector('.randomize');
let story = document.querySelector('.story');

let storyText= 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX=['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY=['the soup kitchen','Disneyland','the White House'];
let insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
//Function is defined which picks a random value from an array
function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)]
}

randomize.addEventListener('click',result)
// The main function is defined here
function result(){
    // Variables are defined here
    let newStory=storyText
    let itemX=randomValueFromArray(insertX)
    let itemY=randomValueFromArray(insertY)
    let itemZ=randomValueFromArray(insertZ)

    newStory=newStory.replace(':insertx:',itemX)
    newStory=newStory.replace(':insertx:',itemX)
    newStory=newStory.replace(':inserty:',itemY)
    newStory=newStory.replace(':insertz:',itemZ)
    // It checks whether the customName label is empty or not
    if(customName.value!=''){
        let name=customName.value;
        newStory=newStory.replace('Bob',name)
    }
    // It checks whether the uk radio button is checked or not
    if(document.getElementById("uk").checked){
        let weight=Math.round(300*0.71429)+' stone';
        let temperature=Math.round((94-32)*5/9)+' centigrade';
        newStory=newStory.replace('300 pounds',weight)
        newStory=newStory.replace('94 fahrenheit',temperature)
    }

    story.textContent=newStory;
    story.style.visibility='visible';
}