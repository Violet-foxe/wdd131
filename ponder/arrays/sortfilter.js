let hikeContainer = document.querySelector('#hike-container');

const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  },

  // defaults
  {
    name: "Default",
    stub: "default",
    imgSrc: "https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/verdant-1960-840e9b28c26a95231a6dd71f6fd6499b@1x.jpg",
    imgAlt: "Image of Green Forest",
    distance: "5 miles",
    tags: ["Forest", "Green", "View"],
    difficulty: 0,
    description:
      "A beautiful easy hike through the greenest of deciduous forests.",
    directions:
      "Go where the wind takes you",
    trailhead: [50, -100]
  },
  {
    name: "Default",
    stub: "default",
    imgSrc: "https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/verdant-1960-840e9b28c26a95231a6dd71f6fd6499b@1x.jpg",
    imgAlt: "Image of Green Forest",
    distance: "5 miles",
    tags: ["Forest", "Green", "View"],
    difficulty: 4,
    description:
      "A beautiful easy hike through the greenest of deciduous forests.",
    directions:
      "Go where the wind takes you",
    trailhead: [50, -100]
  },
  {
    name: "Default",
    stub: "default",
    imgSrc: "https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/verdant-1960-840e9b28c26a95231a6dd71f6fd6499b@1x.jpg",
    imgAlt: "Image of Green Forest",
    distance: "5 miles",
    tags: ["Forest", "Green", "View"],
    difficulty: 5,
    description:
      "A beautiful easy hike through the greenest of deciduous forests.",
    directions:
      "Go where the wind takes you",
    trailhead: [50, -100]
  },
  {
    name: "Default",
    stub: "default",
    imgSrc: "https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/verdant-1960-840e9b28c26a95231a6dd71f6fd6499b@1x.jpg",
    imgAlt: "Image of Green Forest",
    distance: "5 miles",
    tags: ["Forest", "Green", "View"],
    difficulty: 6,
    description:
      "A beautiful easy hike through the greenest of deciduous forests.",
    directions:
      "Go where the wind takes you",
    trailhead: [50, -100]
  }
];

function sendHTML(allHikes) {
  hikeContainer.innerHTML = "";
  let card;
  allHikes.forEach(hike => {
    // make and send the card
    card = makeHTMLTemplate(hike);
    hikeContainer.innerHTML += card;
  });
}
function addTagListeners() {
  const tagButtons = document.querySelectorAll(".hike-tags button");

  tagButtons.forEach(button => {

    // when click tag
    button.addEventListener("click", () => {
      // get the string from the button
      const tagString = button.textContent;
      console.log(tagString)

      // finds all the rags with the same string
      // go through each hike and filter
      const taggedHikes = hikes.filter(hike =>
        // see if it includes the string
        hike.tags.find(tag =>
          tag.toLowerCase().includes(tagString.toLowerCase())
        )
      );

      sendHTML(taggedHikes);
      addTagListeners();
    })
  })
}
function makeHTMLTemplate(hike) {
  const tags = makeTags(hike.tags);
  const shoes = showDifficulty(hike.difficulty, 5, "🥾", "▫️");
  const difClass = changeDifficultyClass(hike.difficulty)

  let image = "";
  // comment below out, if  there are no images
  // image = `<img src="${hike.imgSrc}" alt="${hike.imgAlt}">`;


  const card = `
  <div class="hike-card ${difClass}">
    <div class="hike-content">
      <h2>${hike.name}</h2>
      <div class="hike-tags">
        ${tags}
      </div>
      <p>${hike.description}</p>
      <p>${hike.directions}</p>
      <!--<p>${hike.trailhead}</p>-->
      <p>Distance: ${hike.distance}</p>
      <p>Trailhead: ${hike.trailhead[0]} Latitude, ${hike.trailhead[1]} Longitude</p>
      <p><span class="rating" role="img" aria-label="${hike.difficulty} out of 5">Rating: ${shoes}</span></p>
    </div>
    ${image}
  </div>
  `
  // console.log(tags,)
  return card;
}
function sortDifficulty(a, b) {
  if (a.difficulty < b.difficulty) {
    return -1;
  }
  else if (a.difficulty > b.difficulty) {
    return 1;
  }
  else {
    return 0;
  }
}

function makeTags(tagList) {
  let allTags = "";
  tagList.forEach(tag => {
    allTags += `<button>${tag}</button>`
  });
  return allTags;
}
function showDifficulty(rating, outof, symbol, empty) {
  let part = 1
  let string = "";

  // loop for number of times in outof
  while (part <= outof) {
    if (part <= rating) {
      string += symbol;
    }
    else {
      string += empty;
    }
    part += 1
  }
  return string;
}
function changeDifficultyClass(difficulty) {
  let theClass = '';
  if (difficulty < 1) {
    // color gray
    theClass = "gray"
  }
  if (difficulty === 1) {
    // color blue
    theClass = "blue"
  }

  if (difficulty === 2) {
    // color green
    theClass = "green"
  }

  if (difficulty === 3) {
    // color yellow
    theClass = "yellow"
  }

  if (difficulty === 4) {
    // color orange
    theClass = "orange"
  }
  if (difficulty === 5) {
    // color red
    theClass = "red"
  }
  if (difficulty > 5) {
    // color purple
    theClass = "purple"
  }
  return theClass;
}

// search function
function Search() {
  // console.log("You pressed the search Button!");

  // get string from search bar
  const searchString = document.getElementById("search").value.toLowerCase();
  // console.log(searchString);

  // get info from the hikes
  const filteredHikes = hikes.filter(hike => {
    // hike.tags.toLowerCase().includes(searchString)

    return (hike.name.toLowerCase().includes(searchString) ||
      hike.description.toLowerCase().includes(searchString) ||
      hike.directions.toLowerCase().includes(searchString) ||
      hike.distance.toLowerCase().includes(searchString) ||
      hike.tags.find(tag => tag.toLowerCase().includes(searchString)));
  })
  filteredHikes.sort(sortDifficulty);
  // console.log(filteredHikes);
  sendHTML(filteredHikes);
  addTagListeners();
};


hikes.sort(sortDifficulty);
sendHTML(hikes);
addTagListeners();

// when press search button
const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", Search)

// when press enter key from search bar
const search = document.getElementById("search");
search.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    Search();
  }
});

// I changed up the css a whole lot, made it very pretty
// I made the background color of a hike card correlate with the difficulty
// you can click on a tag, and it will find other tags that are similar