import { Event, News } from '../interfaces'

const news_api: News[] = [
    {
        headline: 'test',
        date: 'Dec',
        url: 'google.com',
        image: 'urlhere'
    }
]

/** Dummy user data. */
export const timelineData: Event[] = [
{ 
    id: 0, title: 'Corona Discovered',
    date: 'Dec 21', 
    cases_count: 2,
    twitter: [
        "https://twitter.com/WSJ/status/1235692304624685056",
        "https://twitter.com/realDonaldTrump/status/1241779803344248835"
    ]
},
{ 
      id: 1, 
      title: 'Bob',
      date: 'Jan 9', 
      cases_count: 10,
      twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    id: 2, 
    title: 'Caroline', 
    date: 'Jan 15', 
    cases_count: 23,
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    id: 2,
    title: 'Dave',
    date: 'Jan 27',
    cases_count: 109,
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
]


// Create an array of objects here, the objects represent the different news sources APIs.

// Create another array of objects which are the saved tiwtter posts.