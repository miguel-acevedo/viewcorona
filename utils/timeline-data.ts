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
    title: 'Chinese authorities treated dozens of cases of pneumonia of unknown cause.',
    date: 'Dec. 31', 
    cases_count: 27,
    text: "On Dec. 31, the government in Wuhan, China, confirmed that health authorities were treating dozens of cases. Days later, researchers in China identified a new virus that had infected dozens of people in Asia. At the time, there was no evidence that the virus was readily spread by humans. Health officials in China said they were monitoring it to prevent the outbreak from developing into something more severe.",
    range: "Dec 31 - Jan 10",
    twitter: [
        "https://twitter.com/WSJ/status/1235692304624685056",
        "https://twitter.com/realDonaldTrump/status/1241779803344248835",
        "https://twitter.com/Interior/status/463440424141459456"
    ]
},
{ 
      title: 'China reported its first death.',
      date: 'Jan. 11', 
      cases_count: 41,
      text: "On Jan. 11, Chinese state media reported the first known death from an illness caused by the virus, which had infected dozens of people. The 61-year-old man who died was a regular customer at the market in Wuhan, where the illness is believed to have originated, and he had previously been found to have abdominal tumors and chronic liver disease. The report of his death came just before one of China’s biggest holidays, when hundreds of millions of people travel across the country.",
      range: "Jan 11 - 19",
      twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'Other countries, including the United States, confirmed cases.', 
    date: 'Jan. 20', 
    cases_count: 291,
    text: "The first confirmed cases outside mainland China occurred in Japan, South Korea and Thailand, according to the World Health Organization’s first situation report. The first confirmed case in the United States came the next day in Washington State, where a man in his 30s developed symptoms after returning from a trip to Wuhan.",
    range: "Jan 20 - 23",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'Wuhan, a city of more than 11 million, was cut off by the Chinese authorities.', 
    date: 'Jan. 23', 
    cases_count: 830,
    text: "The first confirmed cases outside mainland China occurred in Japan, South Korea and Thailand, according to the World Health Organization’s first situation report. The first confirmed case in the United States came the next day in Washington State, where a man in his 30s developed symptoms after returning from a trip to Wuhan.",
    range: "Jan 23 - 30",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'The W.H.O. declared a global health emergency.', 
    date: 'Jan. 30', 
    cases_count: 9692,
    text: "Amid thousands of new cases in China, a “public health emergency of international concern” was officially declared by the W.H.O. China’s Foreign Ministry spokeswoman said that it would continue to work with the W.H.O. and other countries to protect public health, and the U.S. State Department warned travelers to avoid China.",
    range: "Jan 30",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'The Trump administration restricted travel from China',
    date: 'Jan. 31', 
    cases_count: 11791,
    text: "The Trump administration  suspended entry into the United States by any foreign nationals who had traveled to China in the past 14 days, excluding the immediate family members of American citizens or permanent residents. By this date, 213 people had died and nearly 9,800 had been infected worldwide.",
    range: "Jan 31",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'The Trump administration restricted travel from China', 
    date: 'Jan. 31', 
    cases_count: 23,
    text: "The Trump administration  suspended entry into the United States by any foreign nationals who had traveled to China in the past 14 days, excluding the immediate family members of American citizens or permanent residents. By this date, 213 people had died and nearly 9,800 had been infected worldwide.",
    range: "Jan 31 - Feb 1",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'The first coronavirus death was reported outside China.', 
    date: 'Feb. 2', 
    cases_count: 17205,
    text: "A 44-year-old man in the Philippines died after being infected, officials said, the first death reported outside China. By this point, more than 360 people had died.",
    range: "Feb 2 - 5",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'A cruise ship in Japan quarantined thousands.', 
    date: 'Feb. 5', 
    cases_count: 28018,
    text: "After a two-week trip to Southeast Asia, more than 3,600 passengers began a quarantine aboard the Diamond Princess cruise ship in Yokohama, Japan. Officials started screening passengers, and the number of people who tested positive became the largest number of coronavirus cases outside China. By Feb. 13, the number stood at 218.",
    range: "Feb 5 - 7",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'A Chinese doctor who tried to raise the alarm died.', 
    date: 'Feb. 7', 
    cases_count: 34546,
    text: "When Dr. Li Wenliang, a Chinese doctor, died on Feb. 7 after contracting the coronavirus, he was hailed as a hero by many for trying to ring early alarms that a cluster of infections could spin out of control. In early January, the authorities reprimanded him, and he was forced to sign a statement denouncing his warning as an unfounded and illegal rumor. ",
    range: "Feb 7",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'A Chinese doctor who tried to raise the alarm died.', 
    date: 'Feb. 7', 
    cases_count: 34546,
    text: "When Dr. Li Wenliang, a Chinese doctor, died on Feb. 7 after contracting the coronavirus, he was hailed as a hero by many for trying to ring early alarms that a cluster of infections could spin out of control. In early January, the authorities reprimanded him, and he was forced to sign a statement denouncing his warning as an unfounded and illegal rumor. ",
    range: "Feb 7 - 10",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'The disease the virus causes got a new name.', 
    date: 'Feb. 11', 
    cases_count: 44653,
    text: "The World Health Organization on Feb. 11 proposed an official name for the disease the virus coronavirus causes: Covid-19, an acronym that stands for coronavirus disease 2019. The name makes no reference to any of the people, places, or animals associated with the coronavirus, given the goal to avoid stigma.",
    range: "Feb 11 - 12",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'There were more than 14,000 new cases in Hubei Province.', 
    date: 'Feb. 13', 
    cases_count: 23,
    text: "Officials added more than 14,840 new cases to the total number of infected in Hubei Province, and the ruling Communist Party ousted top officials there. The new cases set a daily record, coming after officials in Hubei seemed to be including infections that were diagnosed by using lung scans of symptomatic patients.",
    range: "Feb 13",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'France announces the first coronavirus death in Europe.', 
    date: 'Feb. 14', 
    cases_count: 23,
    text: "An 80-year-old Chinese tourist died on Feb. 14 at a hospital in Paris, in what was the first coronavirus death outside Asia, the authorities said. It was the fourth death from the virus outside mainland China, where about 1,500 people had died, most of them in Hubei Province.",
    range: "Feb 14 - 16",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'Chinese officials draft legislation to curb the practice of eating wildlife.', 
    date: 'Feb. 17', 
    cases_count: 23,
    text: "China said it was reviewing its trade and consumption of wildlife, which has been identified as a probable source of the outbreak. Officials drafted legislation that aims to end “the pernicious habit of eating wildlife,” a statement from the Standing Committee of the Congress said.",
    range: "Feb 17 - 18",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'Hundreds leave the quarantined cruise ship.', 
    date: 'Feb. 19', 
    cases_count: 23,
    text: "After a two-week quarantine, 443 passengers began leaving the Diamond Princess cruise ship. It was the first day of a three-day operation to offload people who tested negative for the virus and did not have symptoms. Passengers who shared cabins with infected patients remained on the ship. A total of 621 people aboard the ship were infected.",
    range: "Feb 19 - 20",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'A secretive church is linked to the outbreak in South Korea.', 
    date: 'Feb. 21', 
    cases_count: 23,
    text: "Shincheonji Church of Jesus, a secretive church in South Korea was linked to a surge of infections in the country. The number of confirmed cases in the country rose above 200, and more than 400 other church members reported potential symptoms, health officials said. As a result, the government shut down thousands of kindergartens, nursing homes and community centers, and put a stop to political rallies in the capital, Seoul.",
    range: "Feb 21",
    twitter: ["https://twitter.com/WSJ/status/1235692304624685056"]
},
{ 
    title: 'The virus appears in Iran from an unknown source.', 
    date: 'Feb. 21', 
    cases_count: 23,
    text: "On Feb. 19, Iran announced two coronavirus cases in the country, then hours later said that both patients had died. Two days later, Iran announced two additional deaths. The source of the virus in Iran is unknown. By Feb. 20, the number of global cases had risen to nearly 76,000, according to the W.H.O.",
    range: "Feb 21 - 22",
    twitter: [

    ]
},
{ 
    title: 'Italy sees major surge in coronavirus cases and officials lock down towns.', 
    date: 'Feb. 23', 
    cases_count: 23,
    text: "Europe faced its first major outbreak as the number of reported cases in Italy grew from fewer than five to more than 150. In the Lombardy region, officials locked down 10 towns after a cluster of cases suddenly emerged in Codogno, southeast of Milan. As a result, schools closed and sporting and cultural events were canceled.",
    range: "Feb 23",
    twitter: [
        
    ]
},
{ 
    title: 'The Trump administration asks Congress for $1.25 billion for coronavirus response.', 
    date: 'Feb. 24', 
    cases_count: 23,
    text: "As the number of coronavirus cases around the globe continued to climb, the Trump administration began preparing for the virus to arrive in the United States. The White House asked Congress to allocate $1.25 billion in new emergency funds to bolster its preparedness — a significant escalation in the administration’s response. At this point the United States, where Centers for Disease Control and Prevention officials warned of an almost certain outbreak, had 35 confirmed cases and no deaths.",
    range: "Feb 24",
    twitter: [
        
    ]
},
{ 
    title: 'Iran emerges as a second focus point of the virus.', 
    date: 'Feb. 24', 
    cases_count: 23,
    text: "Iran said it had 61 coronavirus cases and 12 deaths, more than any other country but China, and public health experts warned that Iran was a cause for worry — its borders are crossed each year by millions of religious pilgrims, migrant workers and others. Cases in Iraq, Afghanistan, Bahrain, Kuwait, Oman, Lebanon, the United Arab Emirates and one in Canada, have been traced back to Iran.",
    range: "Feb 24 - 25",
    twitter: [
        
    ]
},
{ 
    title: 'Latin America reports its first coronavirus case.', 
    date: 'Feb. 26', 
    cases_count: 23,
    text: "Brazilian health officials said that a 61-year-old São Paulo man, who had returned recently from a business trip to Italy, tested positive for the coronavirus. It was the first known case in Latin America. Officials also began tracking down other passengers on the flight the man took to Brazil and others who had contact with him in recent days.",
    range: "Feb 26 - 27",
    twitter: [
        
    ]
},
{ 
    title: 'The number of infections in Europe spikes.', 
    date: 'Feb. 28', 
    cases_count: 23,
    text: "Italy, where 800 people had been infected by Feb. 28, remained an area of concern. Cases in 14 other countries, including Northern Ireland and Wales, could be traced back to Italy. Germany had nearly 60 cases by Feb. 27, and France reported 57, more than triple the number from two days earlier. Both England and Switzerland reported additional cases, while Belarus, Estonia and Lithuania all reported their first infections.",
    range: "Feb 28",
    twitter: [
        
    ]
},
{ 
    title: 'Sub-Saharan Africa records its first infection.', 
    date: 'Feb. 28', 
    cases_count: 23,
    text: "Nigeria, Africa’s most populous nation, confirmed its first case of coronavirus on Feb. 28. The patient was an Italian citizen who had returned to Lagos from Milan.",
    range: "Feb 28",
    twitter: [
        
    ]
},
{ 
    title: 'The United States records its first coronavirus death and announces travel restrictions.', 
    date: 'Feb. 29', 
    cases_count: 23,
    text: "A patient near Seattle became the first coronavirus patient to die in the United States on Feb. 28. As the number of global cases rose to nearly 87,000, the Trump administration issued its highest-level warning, known as a “do not travel” warning, for areas in Italy and South Korea most affected by the virus. The government also banned all travel to Iran and barred entry to any foreign citizen who had visited Iran in the previous 14 days.",
    range: "Feb 29 - March 3",
    twitter: [
        
    ]
},
{ 
    title: 'U.S. officials approve widespread coronavirus testing.', 
    date: 'March 3', 
    cases_count: 23,
    text: "The C.D.C. lifted all federal restrictions on testing for the coronavirus on March 3, according to Vice President Mike Pence. The news came after the C.D.C.’s first attempt to produce a diagnostic test kit fell flat. By this point, the coronavirus had infected more than 90,000 around the globe and killed about 3,000, according to the W.H.O.",
    range: "March 3 - 11",
    twitter: [
        
    ]
},
{ 
    title: 'President Trump blocks most visitors from continental Europe.', 
    date: 'March 11', 
    cases_count: 23,
    text: "In a prime-time address from the Oval Office, Mr. Trump said he would halt travelers from European countries other than Britain for 30 days, as the World Health Organization declared the coronavirus a pandemic and stock markets plunged further.",
    range: "March 11 - 12",
    twitter: [
        
    ]
},
{ 
    title: 'President Trump declares a national emergency.', 
    date: 'March 13', 
    cases_count: 23,
    text: "Mr. Trump officially declared a national emergency, and said he was making $50 billion in federal funds available to states and territories to combat the coronavirus. He also said he would give hospitals and doctors more flexibility to respond to the virus, including making it easier to treat people remotely.",
    range: "March 13 - 14",
    twitter: [
        
    ]
},
{ 
    title: 'The C.D.C. recommends no gatherings of 50 or more people in the U.S.', 
    date: 'March 15', 
    cases_count: 23,
    text: "On March 15, the C.D.C. advised no gatherings of 50 or more people in the United States over the next eight weeks. The recommendation included weddings, festivals, parades, concerts, sporting events and conferences. The following day, Mr. Trump advised citizens to avoid groups of more than 10. New York City’s public schools system, the nation’s largest with 1.1 million students, also announced that it would close.",
    range: "March 15",
    twitter: [
        
    ]
},
{ 
    title: 'Latin America begins to feel the affects of the virus.', 
    date: 'March 16', 
    cases_count: 23,
    text: "On March 15, the C.D.C. advised no gatherings of 50 or more people in the United States over the next eight weeks. The recommendation included weddings, festivals, parades, concerts, sporting events and conferences. The following day, Mr. Trump advised citizens to avoid groups of more than 10. New York City’s public schools system, the nation’s largest with 1.1 million students, also announced that it would close.",
    range: "March 16",
    twitter: [
        
    ]
},
{ 
    title: 'France imposes a nationwide lockdown.', 
    date: 'March 17', 
    cases_count: 23,
    text: "On March 17, France imposed a nationwide lockdown, prohibiting gatherings of any size and postponing the second round its municipal elections. The lockdown was one of Europe’s most stringent. While residents were told to stay home, officials allowed people to go out for fresh air but warned that meeting a friend on the street or in a park would be punishable with a fine. By this time, France had more than 6,500 infections with more than 140 deaths, according to the W.H.O.",
    range: "March 17",
    twitter: [
        
    ]
},
{
    title: 'The E.U. bars most travelers from outside the bloc for 30 days.', 
    date: 'March 17', 
    cases_count: 23,
    text: "European leaders voted to close off at least 26 countries to nearly all visitors from the rest of the world for at least 30 days. The ban on nonessential travel from outside the bloc was the first coordinated response to the epidemic by the European Union.",
    range: "March 17",
    twitter: [
        
    ]
},
{
    title: 'For the first time, China reports zero local infections.', 
    date: 'March 19', 
    cases_count: 23,
    text: "China on March 19 reported no new local infections for the previous day, a milestone in the ongoing fight against the pandemic. The news signaled that an end to China’s epidemic could be in sight.",
    range: "March 19 - 20",
    twitter: [
        
    ]
},
{
    title: 'Companies move to produce medical supplies.', 
    date: 'March 21', 
    cases_count: 23,
    text: "On March 21, the White House said that American companies were increasing efforts to restock hospitals with important supplies. Hanes and General Motors agreed to make masks and ventilators. Christian Siriano, a fashion designer, Dov Charney, the founder of Los Angeles Apparel, and Karla Colletto, a swimwear company, all agreed to repurpose their operations to create masks and hospital garments.",
    range: "March 21",
    twitter: [
        
    ]
},
{
    title: 'Hawaii’s governor orders a mandatory 14-day quarantine to arriving visitors and residents.', 
    date: 'March 21', 
    cases_count: 23,
    text: "Gov. David Ige of Hawaii ordered a mandatory 14-day quarantine for everyone arriving in Hawaii, including tourists and returning residents. Mr. Ige called his order the first of its kind in the nation.",
    range: "March 21 - 22",
    twitter: [
        
    ]
},
{
    title: 'Prime Minister Boris Johnson locks Britain down.', 
    date: 'March 23', 
    cases_count: 23,
    text: "The lockdown closed all nonessential shops, barred meetings of more than two people, and required all people to stay in their homes except for trips for food or medicine. Those who disobey risked being fined by the police.",
    range: "March 23",
    twitter: [
        
    ]
},
{
    title: 'The Tokyo Olympics delayed until 2021.', 
    date: 'March 24', 
    cases_count: 23,
    text: "Officials announced that the Summer Olympics in Tokyo would be postponed for one year.  Only three previous Games had been canceled, all because of war: The 1916 Summer Olympics were canceled because of World War I, and the Summer and Winter Games were canceled in 1940 and 1944 because of World War II.",
    range: "March 24",
    twitter: [
        
    ]
},
{
    title: 'India, a country of 1.3 billion, announces a 21-day lockdown.', 
    date: 'March 24', 
    cases_count: 23,
    text: "One day after the authorities halted all domestic flights, Narendra Modi, India’s prime minister, declared a 21-day lockdown. While the number of reported cases in India was about 500, the prime minister pledged to spend about $2 billion on medical supplies, isolation rooms, ventilators and training for medical professionals.",
    range: "March 24",
    twitter: [
        
    ]
}
]


// Create an array of objects here, the objects represent the different news sources APIs.

// Create another array of objects which are the saved tiwtter posts.