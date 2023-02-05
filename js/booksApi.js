const form = document.querySelector('#searchForm');
const inputFeild = document.querySelector('#searchID');

async function getBookData(query){ 
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms${query}`);
    let data = await response.json();
    render(data);
}

function render(data){
   let book = '';
        for(let i = 0; i< data.items.length; i++){
            const img = data.items[i].volumeInfo?.imageLinks?.smallThumbnail;
            const title = data.items[i].volumeInfo.title;
            const date = data.items[i].volumeInfo.publishedDate;
            if(img && title && date){
                book+=`
                <div id="mainDiv">
                <img class="bookImg" src=${img} />
                <div class="bookTitle">${title}</div>
                <div class="publishedDate">${date}</div>
                </div>
                `
            }
    }
    document.getElementById("resultContainer").innerHTML = book;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const feildValue = inputFeild.value;
    getBookData(feildValue);
  })