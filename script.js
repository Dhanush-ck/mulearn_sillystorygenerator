const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const baseStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function storyUpdate() {
    let newStory = baseStory;

    newStory = newStory.replace(/:insertx:/g, randomValueFromArray(insertX));
    newStory = newStory.replace(/:inserty:/g, randomValueFromArray(insertY));
    newStory = newStory.replace(/:insertz:/g, randomValueFromArray(insertZ));
    
    return newStory;
}

function result() {

    let updatedStory = storyUpdate();

    if(customName.value !== '') {
        const name = customName.value;
        updatedStory = updatedStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286) + ' stones';
        const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
        updatedStory = updatedStory.replace("300 pounds", weight);
        updatedStory = updatedStory.replace("94 fahrenheit", temperature);
    }

    story.textContent = updatedStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);