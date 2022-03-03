var catArray =      [["https://upload.wikimedia.org/wikipedia/commons/5/57/Abyssinian_cat_-_Patricia.jpg", "Abyssinian"],
                    ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/American_bobtail_2.jpg/640px-American_bobtail_2.jpg", "American Bob Tail"],
                    ["https://upload.wikimedia.org/wikipedia/commons/0/09/Bengal_-_20150402_22h18_%2810049%29.jpg", "Bengal"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Birman2.jpg", "Birman"],
                    ["https://upload.wikimedia.org/wikipedia/commons/0/09/Bengal_-_20150402_22h18_%2810049%29.jpg", "Bombay"],
                    ["https://upload.wikimedia.org/wikipedia/commons/b/be/A_two_years_old_British_Shorthair_cat.jpg", "British Shorthair"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/1/1b/British_burmese_cat_-_London_1.jpg", "Burmese"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/8/80/Chartreux-cat-edouard-marie.jpg", "Chartreux"],
                    ["https://upload.wikimedia.org/wikipedia/commons/0/02/Devon_Rex_Yoshimi.jpg", "Devon Rex"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/3/3c/Bissel.jpg", "Exotic Shorthair"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/7/7f/Himalayan_Male_Cat_Cosmo_51x84x3456_2012-2-7_by_A_Silverstein.jpg", "Himalayan"],
                    ["https://upload.wikimedia.org/wikipedia/commons/5/52/GeorgeManxProfile.jpg", "Manx"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Norskskogkatt_Evita_3.JPG", "Norwegian Forest"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/8/87/Lavender_Chocolate_Ocicats.jpg", "Ocicat"],
                    ["https://upload.wikimedia.org/wikipedia/commons/9/94/OrientalShorthairAndSiameses.jpg", "Oriental Shorthair"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/5/54/Maine_Coon_look.jpg", "Maine Coon"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Grouchy_Persian_cat_%28Unsplash%29.jpg", "Persian"],
                    ["https://upload.wikimedia.org/wikipedia/commons/7/72/Russian_Blue_Cat_American_type.jpg", "Russian Blue"], 
                    ["https://upload.wikimedia.org/wikipedia/commons/7/78/CustardBlanket.jpg", "Scottish Fold"],
                    ["https://upload.wikimedia.org/wikipedia/commons/5/56/Cat_Sphynx._img_006.jpg", "Sphynx"]];


//initializing random array start point (prevIndex to implemented later to avoid duplicates)
var index = randomInt();
var prevIndex = -1;

//returns random int between 0-20
function randomInt(){
    return Math.floor(Math.random() *21);
}
//populates container with a random image when page is loaded 
function imageInit(){
var imageContainer = document.getElementById("image");
var startImg = document.createElement("img");

//trying to avoid duplicates upon reload
if(index != prevIndex){
    startImg.src = catArray[index][0];
}
else if(index < 19){
    startImg.src = catArray[index+1][0];
    index++;
}
else{
    startImg.src = catArray[0][0];
    index = 0;
}
console.log(prevIndex);
prevIndex = index;
console.log(index);

startImg.width = 500;
startImg.height = 400;

imageContainer.appendChild(startImg);
populateButtons(index);
}

function populateButtons(n){
    var correct = catArray[n][1];
    //lots of testing
    console.log(correct);

    var choices = [];
    choices.push(correct);

    console.log(choices);

    for(var i =1; i < 4; i++)
    {   //adding random answers other than the correct choice
        var randm = randomInt();
        console.log(randm);
        while(randm == n)
        {
            randm = randomInt();
        }
        choices.push(catArray[randm][1]);
    }
    console.log(choices);
    shuffle(choices);
    console.log(choices);

    //initializing button elements and populating with shuffled array
    let btn1 = document.getElementById('ans1');
    let btn2 = document.getElementById('ans2');
    let btn3 = document.getElementById('ans3');
    let btn4 = document.getElementById('ans4');
    btn1.innerHTML = choices[0];
    btn2.innerHTML = choices[1];
    btn3.innerHTML = choices[2];
    btn4.innerHTML = choices[3];
}

//simple fisher-yates shuffle to help mix answer choices 
function shuffle(arr) {
    var currentInd = arr.length;
    var randomInd = -1;
  
    while (currentInd != 0) {
  
      randomInd = Math.floor(Math.random() * currentInd);
      currentInd--;

      [arr[currentInd], arr[randomInd]] = [arr[randomInd], arr[currentInd]];
    }
  
    return arr;
  }

window.addEventListener("load", imageInit, false);