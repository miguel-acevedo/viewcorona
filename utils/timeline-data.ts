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
    id: 0, title: 'Chinese authorities treated dozens of cases of pneumonia of unknown cause.',
    date: 'Dec 31', 
    cases_count: 2,
    text: "On Dec. 31, the government in Wuhan, China, confirmed that health authorities were treating dozens of cases. Days later, researchers in China identified a new virus that had infected dozens of people in Asia. At the time, there was no evidence that the virus was readily spread by humans. Health officials in China said they were monitoring it to prevent the outbreak from developing into something more severe.",
    twitter: [
        "https://twitter.com/WSJ/status/1235692304624685056",
        "https://twitter.com/realDonaldTrump/status/1241779803344248835"
    ]
},
{ 
      id: 1, 
      title: 'China reported its first death.',
      date: 'Jan 11', 
      cases_count: 10,
      text: "On Jan. 11, Chinese state media reported the first known death from an illness caused by the virus, which had infected dozens of people. The 61-year-old man who died was a regular customer at the market in Wuhan, where the illness is believed to have originated, and he had previously been found to have abdominal tumors and chronic liver disease. The report of his death came just before one of China’s biggest holidays, when hundreds of millions of people travel across the country.",
      twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    id: 2, 
    title: 'Other countries, including the United States, confirmed cases.', 
    date: 'Jan 20', 
    cases_count: 23,
    text: "The first confirmed cases outside mainland China occurred in Japan, South Korea and Thailand, according to the World Health Organization’s first situation report. The first confirmed case in the United States came the next day in Washington State, where a man in his 30s developed symptoms after returning from a trip to Wuhan.",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
}
]


// Create an array of objects here, the objects represent the different news sources APIs.

// Create another array of objects which are the saved tiwtter posts.