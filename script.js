const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

let apiQuotes=[]

function showLoadingSpinner(){
    loader.hidden=false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner(){
    quoteContainer.hidden = false
    loader.hidden = true
}
async function getQuotes(){
    showLoadingSpinner();
    const apiUrl = "https://type.fit/api/quotes"

    try{
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()

        newQuote()
    }catch(error){
        console.log(error)
    }

}

function newQuote(){
    showLoadingSpinner()

    setTimeout(function(){
        const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]

        console.log(quote)
        // {text: "Quote text", author: "Author Name"}
    
        if(!quote.author){
            authorText.textContent = 'Unknown'
        }else{
            authorText.textContent = quote.author
        }
        if(quote.text.length>100){
            quoteText.classList.add("long-quote")
        }else{
            quoteText.classList.remove("long-quote")
        }
        quoteText.textContent = quote.text;
        removeLoadingSpinner()

    },200)
}

getQuotes();

newQuoteBtn.addEventListener("click", newQuote)
/*
const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuotesBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

let apiQuotes = []

const showLoadingSpinner = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const hideLoadingSpinner = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

const getQuotes = async () => {
    showLoadingSpinner()
    const apiUrl = "https://type.fit/api/quotes"

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();

        newQuote()
    }catch(err){
        console.log(err)
    }
}

const getQuoteDetails = () => {
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]

    if(quote.text.length>100){
        quoteText.classList.add("long-quote")
    }else{
        quoteText.classList.remove("long-quote")
    }
    quoteText.textContent = quote.text;
    if(!quote.author){
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author
    }

    hideLoadingSpinner()
}
const newQuote = () => {
    showLoadingSpinner()

    setTimeout(()=>getQuoteDetails(),200)
    
}

getQuotes()

newQuotesBtn.addEventListener("click",newQuote)
*/
