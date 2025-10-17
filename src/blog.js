var blogs = [
    {
        title: "Man City vs Brentford",
        date: "10-5-2025",
        description: "Read about the Man City vs Brentford game, find out about the score and the key players",
        image: "soccergame.jpg",
        imageAlt: "Image of Haaland and one Brentford player",
        slug: "mancity-vs-brentford",
    },
    {
        title: "Chelsea vs Liverpool",
        date: "10-4-2025",
        description: "Read about the Chelsea vs Liverpool game, find out the score and the key players",
        image: "chelseagame.jpg",
        imageAlt: "Image of Mo Salah and Reece James with the teams logos",
        slug: "chelsea-vs-liverpool",
    },
    {
        title: "Brentford vs Man United",
        date: "9-27-2025",
        description: "Read about the Brentford vs Man United game, find out the score and the key players",
        image: "manugame.jpg",
        imageAlt: "Two soccer players one from Brentford one from Man U",
        slug: "brentford-vs-manu",
    }
];
var blogContainer = document.getElementById('blog-container');
function addBlog() {
    var len = blogs.length;
    for (var i = 0; i < len; i++) {
        var createDiv = document.createElement('div');
        createDiv.className = "blog-post";
        var createH = document.createElement('h1');
        createH.innerHTML = blogs[i].title;
        createH.className = "blog-title";
        var createImg = document.createElement('img');
        createImg.src = blogs[i].image;
        createImg.alt = blogs[i].imageAlt;
        createImg.className = "blog-img";
        var createH2 = document.createElement("h2");
        createH2.innerHTML = blogs[i].date;
        createH2.className = "blog-title";
        var createP = document.createElement('p');
        createP.innerHTML = blogs[i].description;
        createDiv.appendChild(createH);
        createDiv.appendChild(createH2);
        createDiv.appendChild(createImg);
        createDiv.appendChild(createP);
        var createLink = document.createElement('a');
        createLink.innerHTML = "Click to Read Me";
        createLink.href = "blogs/" + blogs[i].slug + ".html";
        createLink.className = "blog-link";
        createDiv.appendChild(createLink);
        blogContainer.appendChild(createDiv);
    }
}
addBlog();
