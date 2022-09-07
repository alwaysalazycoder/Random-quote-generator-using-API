const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const refresh = document.getElementById("refresh");
const tweetMe = document.getElementById("tweetMe");
const quotation = document.getElementById("quotation");
const box = document.getElementById("box");
const container = document.getElementById("container");
// const refresh = document.getElementById("refresh");


let realData = "";
let quotedata = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotedata.text}`;
  window.open(tweetPost);
};

const getNewQuotes = () => {
  let rando = Math.floor(Math.random() * 1000);

  quotedata = realData[rando];
  quotes.innerHTML = `${quotedata.text}`;

  console.log(realData[rando].text);

  if (quotedata.author == null) {
    author.innerHTML = "By Anonymous";
  } else {
    author.innerHTML = `By ${realData[rando].author}`;
  }

  console.log(realData[rando].author);
  console.log(rando);

}

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
    console.log(realData.length);
  } catch (error) {}
};
getQuotes();
const mode = () =>{
  alert("This is dark")
}
tweetMe.addEventListener("click", tweetNow);
refresh.addEventListener("click", getNewQuotes);


let dark = document.getElementById("dark");
let data = document.getElementById("whichmode");


const kuchhod = ()=>{
  confirm("Do you want to change mode ??");
  if(data.innerHTML == "Light Mode"){

    data.innerHTML = "Dark Mode";
    quotation.style = "color : white";
    quotes.style = "color : white"
    author.style = "color : white";
    box.style = "background-color: black";
    // container.style = "background-color : rgb(68, 27, 34)";
    container.style = "background-color: rgb(37, 9, 14)"
    data.style = "color : white";
    refresh.style = "color : white";
    refresh.style = "background-color : rgba(68,27,34)";
    refresh.style.color = "white";
    
  }
  else{
    
    data.innerHTML = "Light Mode";
    quotes.style = "color : black";
    author.style = "color : black";
    quotation.style = "color : black";
    box.style = "background-color: rgba(255, 192, 203, 0.459)";
    container.style = "background-color : rgba(255, 192, 203, 0.288)";
    data.style = "color : black";
    refresh.style = "background-color: pink";
    refresh.style = "color: black";



  }
  console.log("printing");
  
}
dark.addEventListener("click",kuchhod);


