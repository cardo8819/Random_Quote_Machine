window.onload = pageLoad;
function pageLoad(){
   generateQuote(); 
};


function generateQuote(){
    let randomQuoteObj = quotes;
    let index = Math.floor(Math.random() * randomQuoteObj.length);
    let randomQuote = randomQuoteObj[index];
   
    let body = document.body;
    
    let textElement = document.getElementById('text');
    let authorElement = document.getElementById('author');
    let changeElements = document.querySelectorAll('.change')

    let colors = ["#5D5C61", "#379683", "#7395AE", "#557A95", "#B1A296"]
    
    let colorIndex = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[colorIndex];   
    
    body.style.transition = 'background-color 1s';
    
    textElement.style.transition = 'color 1s';
    authorElement.style.transition = 'color 1s';
    
    body.style.backgroundColor = selectedColor;
    changeElements.forEach( classEl=>{ 
        classEl.style.backgroundColor = selectedColor;
        classEl.style.transition = "background-color 1s"
    });
    textElement.style.color = selectedColor;
    authorElement.style.color = selectedColor;
    textElement.innerText = `" ${randomQuote.quote} "`;
    authorElement.innerText = `-${randomQuote.author}`;
};

function tweetQuote(){
    const quote = document.getElementById('text').innerText;
    const author = document.getElementById('author').innerText;
    
    // Construct the Twitter sharing URL
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}&via=RichardGAdams`;
    document.getElementById('tweet-quote').href = tweetUrl;
    // Open a new window/tab with the Twitter sharing URL
    window.open(tweetUrl, '_blank');
}