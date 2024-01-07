export const exerciseUrls = [
  {
    id: "0",
    title: "index",
    description: "testing home-page",
    url: "/tests",
  },
  {
    id: "1",
    title: "Notable Scientists",
    description:
      "Two remarkable individuals that pushed the envelope of their time! This was the first page I made based on the exercises in the documentation. Making this helped establish the foundations of writing nested, reusable components and passing properties/data around.",
    url: "/tests/notable-scientists",
  },
  {
    id: "2",
    title: "George's List",
    description:
      "This is everything George is going to need on his big trip! This page was made to practice the various syntax options that enable conditional rendering (ternary operator, classical if-else, logical &&). In this case, the checkmark is only rendered under the condition that the list item's 'packed' property is true.",
    url: "/tests/packing-list",
  },
  {
    id: "3",
    title: "Drink Info",
    description:
      "This page contains valuable information on some of the world's most popular beverages. Creating this page solidified my understanding of components as templates and taught me more about javascript object manipulation.",
    url: "/tests/drink-info",
  },
  {
    id: "4",
    title: "Chemists and Friends",
    description:
      "Some basic information on various great minds of the past. To make this, I manipulated an array of people with the .filter and .map functions to render the chemists in a separate list than the rest.",
    url: "/tests/chemists",
  },
  {
    id: "5",
    title: "A Haiku",
    description:
      "A beautiful poem by Katsushika Hokusai, presumably sometime in the early-19th century. This page was another exercise in mapping data from arrays into components. The goal of this component was to take a poem of unknown length and insert a <hr /> tag between each stanza (but not before or after the poem as a whole). A trivial CS question, but a fun exercise to help become fluent in javascript.",
    url: "/tests/poem-list",
  },
  {
    id: "6",
    title: "Click Counter",
    description:
      "You can click your heart out! This is a bit of code I modified from an article (see source link) discussing React hooks and strategies for keeping such code organized effectively. I have been using it as reference and as a sandbox for my own play, and plan on reading further / experimenting with what they consider to be best practices.",
    url: "/tests/click-counter",
  },
  {
    id: "7",
    title: "Random Animal Images API",
    description:
      "Playing with a new public API I found. This one has a few categories of images that you can request at random (one time I found a photo of a wristwatch in the 'shiba inu' category, not sure what that was all about). So cute!",
    url: "/tests/animals",
  },
  {
    id: "8",
    title: "Basic Accuweather Interface",
    description:
      "An incredibly basic weather grabber that utilizes the Accuweather API. The animal photo API I used in the last test-page was fully unprotected, but this one requires you to register an API key. The free tier only permits a measly 50 calls a day! Due to this inconvenience I found another free API that permits up to a million calls per month, so I'm planning on making a new page with that API shortly.",
    url: "/tests/accuweather",
  },
  {
    id: "9",
    title: "Weather API Search",
    description:
      "A new and improved weather search page!! Leveraging the power of Weather API, this page can search the weather up to 1 million times per month. Much better than Accuweather. I've included verbose output to make better use out of the data each call pulls, I love the little icon!",
    url: "/tests/weatherAPI",
  },
];
