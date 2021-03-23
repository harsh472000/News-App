// 722ed2b539574a768fb3dae21f5a4926

// https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY
console.log("this is news");
let mainCard=document.getElementById('mainCard');

const xhr=new XMLHttpRequest();

xhr.open('GET',`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`,true);
//xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=722ed2b539574a768fb3dae21f5a4926`,true);



xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        // console.log(articles);
        let newsHtml="";
        articles.forEach(function(element){
            let news=`<div class="col noteCard">
            <div class="card h-100">
                <img src="${element["urlToImage"]}" class="card-img-top" alt="image not showing" height="250px">
                <div class="card-body">
                    <h5 class="card-title">${element["title"]}</h5>
                    <p class="card-text">${element["content"]}</p>
                </div>
                <div class="card-footer">
                    <a href="${element["url"]}" target="_blank"> Read more... </a>
                </div>
            </div>
        </div>`;
        newsHtml+=news;
        });
        mainCard.innerHTML=newsHtml;
    }
    else{
        console.log("some error occured");
    }
    
}
xhr.send();

//search news 

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})