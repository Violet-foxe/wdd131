const movies = [
    {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and sea landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing in the water by Giulia",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through a river in the winter",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
    },

    {
        title: "The Incredibles",
        date: "Nov 5, 2004",
        description: "A family of undercover superheroes must work together to save the world from a dangerous villain.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg",
        imgAlt: "The Incredibles family posing in superhero suits",
        ages: "8+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Frozen",
        date: "Nov 27, 2013",
        description: "Two royal sisters discover the power of love and courage while saving their kingdom from eternal winter.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
        imgAlt: "Movie Poster of Elsa, Anna, Kristoff, Hans, and Olaf covered in snow.",
        ages: "5+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Moana",
        date: "Nov 23, 2016",
        description: "A brave Polynesian girl sails across the ocean to restore the heart of Te Fiti.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
        imgAlt: "Moana standing sand with Maui with the ocean swirling around",
        ages: "6+",
        genre: "Adventure/Family",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Toy Story",
        date: "Nov 22, 1995",
        description: "A group of toys come to life when humans are not around and learn the value of friendship.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        imgAlt: "Woody and Buzz Lightyear together falling with style",
        ages: "5+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Coco",
        date: "Nov 22, 2017",
        description: "A young boy journeys to the Land of the Dead to uncover his family's musical history.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        imgAlt: "Movie poster of the Characters of Coco standing behind a white guitar",
        ages: "7+",
        genre: "Animation/Music",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "A clownfish searches across the ocean for his missing son.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        imgAlt: "Marlin and Dory swimming underwater surrounded by sharks and other sea creatures",
        ages: "5+",
        genre: "Adventure/Animation",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Up",
        date: "May 29, 2009",
        description: "An elderly man ties balloons to his house and journeys to South America with an unexpected companion.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
        imgAlt: "House floating through the sky with balloons",
        ages: "6+",
        genre: "Adventure/Family",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Encanto",
        date: "Nov 24, 2021",
        description: "A magical family in Colombia discovers the true meaning of unity and self-worth.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg",
        imgAlt: "The Madrigal family standing inside of Casita",
        ages: "6+",
        genre: "Fantasy/Musical",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Big Hero 6",
        date: "Nov 7, 2014",
        description: "A robotics prodigy teams up with friends and a healthcare robot to stop a masked villain.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/4b/Big_Hero_6_%28film%29_poster.jpg",
        imgAlt: "Baymax leaning in from the left",
        ages: "8+",
        genre: "Action/Animation",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Zootopia",
        date: "Mar 4, 2016",
        description: "A rookie rabbit police officer teams up with a sly fox to solve a mysterious case.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg",
        imgAlt: "a crowded zity street of mammals",
        ages: "7+",
        genre: "Comedy/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Lion King",
        date: "Jun 24, 1994",
        description: "A young lion prince must reclaim his rightful place as king.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
        imgAlt: "Simba standing proudly on Pride Rock and a lion's face made of stars",
        ages: "6+",
        genre: "Adventure/Drama",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Tangled",
        date: "Nov 24, 2010",
        description: "A spirited princess with magical hair escapes her tower to discover the world.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
        imgAlt: "Rapunzel, Flynn, and Maximus posing to fight",
        ages: "6+",
        genre: "Fantasy/Romance",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "How to Train Your Dragon",
        date: "Mar 26, 2010",
        description: "A Viking teen befriends a dragon and changes the future of his village.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg",
        imgAlt: "Hiccup reaching his hand out to Toothless",
        ages: "8+",
        genre: "Fantasy/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Soul",
        date: "Dec 25, 2020",
        description: "A jazz musician explores the meaning of life after an unexpected accident.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg",
        imgAlt: "Joe Gardner walking down a piano",
        ages: "8+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Ratatouille",
        date: "Jun 29, 2007",
        description: "A talented rat dreams of becoming a chef in Paris.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
        imgAlt: "Remy dodging knives in a kitchen",
        ages: "6+",
        genre: "Comedy/Animation",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Inside Out",
        date: "Jun 19, 2015",
        description: "The emotions inside a young girl's mind help her navigate a difficult move.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
        imgAlt: "Joy, Sadness, Fear, Disgust, and Anger surrounded by colors",
        ages: "7+",
        genre: "Comedy/Family",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Princess Bride",
        date: "Sep 25, 1987",
        description: "A farm boy embarks on a quest to rescue the woman he loves.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/db/Princess_bride.jpg",
        imgAlt: "Westley and Buttercup together",
        ages: "10+",
        genre: "Adventure/Romance",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Sandlot",
        date: "Apr 7, 1993",
        description: "A group of boys spend an unforgettable summer playing baseball and making memories.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d4/Sandlot_poster.jpg",
        imgAlt: "four hands and a dog paw on a baseball bat",
        ages: "8+",
        genre: "Comedy/Sports",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "National Treasure",
        date: "Nov 19, 2004",
        description: "A historian races to uncover hidden treasure tied to American history.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/12/Movie_national_treasure.JPG",
        imgAlt: "Benjamin Gates infront of the Declaration of Independence",
        ages: "10+",
        genre: "Adventure/Mystery",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Remember the Titans",
        date: "Sep 29, 2000",
        description: "A high school football team learns teamwork and unity during a time of racial tension.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d1/Remember_the_titansposter.jpg",
        imgAlt: "a determined face, and a football sillhouette",
        ages: "10+",
        genre: "Drama/Sports",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Lego Movie",
        date: "Feb 7, 2014",
        description: "An ordinary LEGO figure is mistaken for the hero destined to save the universe.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Lego_Movie_poster.jpg",
        imgAlt: "Emmet yelling with LEGO characters",
        ages: "6+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Monsters, Inc.",
        date: "Nov 2, 2001",
        description: "Two monsters discover that laughter is more powerful than fear.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG",
        imgAlt: "Sulley and Mike Wazowski together",
        ages: "5+",
        genre: "Comedy/Animation",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Secret Life of Walter Mitty",
        date: "Dec 25, 2013",
        description: "A daydreamer embarks on a global adventure to find a missing photograph.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/c5/SecretLifeofwalter.jpg",
        imgAlt: "Walter Mitty posing",
        ages: "10+",
        genre: "Adventure/Drama",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "The Greatest Showman",
        date: "Dec 20, 2017",
        description: "P.T. Barnum creates a dazzling spectacle celebrating imagination and individuality.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Greatest_Showman_poster.png",
        imgAlt: "Performers singing on stage with barnum in front",
        ages: "9+",
        genre: "Musical/Drama",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "A Bug's Life",
        date: "Nov 25, 1998",
        description: "An inventive ant recruits circus bugs to save his colony from grasshoppers.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg",
        imgAlt: "Bugs peaking through a bitten hole in a leaf",
        ages: "5+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Brave",
        date: "Jun 22, 2012",
        description: "A Scottish princess changes her fate after making a reckless wish.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg",
        imgAlt: "Merida holding a bow in the forest",
        ages: "7+",
        genre: "Fantasy/Adventure",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Cars",
        date: "Jun 9, 2006",
        description: "A race car learns humility and friendship in a small desert town.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
        imgAlt: "Lightning McQueen surrounded by cars",
        ages: "5+",
        genre: "Animation/Sports",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Mulan",
        date: "Jun 19, 1998",
        description: "A courageous young woman disguises herself to protect her family and country.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a3/Movie_poster_mulan.JPG",
        imgAlt: "Mulan pulling the reins of her horse",
        ages: "7+",
        genre: "Adventure/Animation",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Bolt",
        date: "Nov 21, 2008",
        description: "A TV dog believes he has superpowers and journeys across the country to save his owner.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/44/Bolt_ver2.jpg",
        imgAlt: "Bolt posing with Mittens and Rhino",
        ages: "5+",
        genre: "Comedy/Adventure",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "The Croods",
        date: "Mar 22, 2013",
        description: "A prehistoric family discovers a changing world filled with danger and wonder.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Croods.png",
        imgAlt: "The Croods family surrounded by nature",
        ages: "6+",
        genre: "Adventure/Comedy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Meet the Robinsons",
        date: "Mar 30, 2007",
        description: "A young inventor travels to the future and discovers the importance of family.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/dc/Meet_the_robinsons.jpg",
        imgAlt: "Lewis surrounded by the Robinsons",
        ages: "6+",
        genre: "Sci-Fi/Animation",
        stars: "⭐⭐⭐⭐"
    }
];

movies.forEach(movie => {

    // Code for going through each movie and creating content for that movie
    // display a movie card for each movie object in the array

    // build html for the card
    const card = `
            <article class="movie">
                <h2>${movie.title}</h2>
                <img src=${movie.imgSrc} alt="${movie.imgAlt}">
                
                <p><strong>Release Date:</strong> ${movie.date}</p>
                <p><strong>Recommended Age:</strong> ${movie.ages}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
                
                <p class="desc">${movie.description}</p>
            </article>
        `;
    // putting that html on the page
    document.getElementById("movie-list").innerHTML += card;
    // document.getElementById("movie-list").appendChild(card);
});