// d216727044354302912fe48f31545861  <--api key hai ye.

let sources = 'bbc-news';
let apiKey = 'd216727044354302912fe48f31545861';

let newsaccordian = document.getElementById('newsaccordian');

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHTML = "";

        articles.forEach(function (element,index) { 
            let news = ` <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}"><strong>Breaking News ${index + 1}
                                         :</strong> ${element.title}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsaccordian">
                                <div class="card-body">${element.content} <a href="${element.url}" target = "_blank">read more here</a></div>
                            </div>
                        </div>`;

            newsHTML += news;
        });

        newsaccordian.innerHTML = newsHTML;


    }
    else {

    }
}

xhr.send();





