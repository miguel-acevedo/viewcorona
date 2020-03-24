// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
    id: number
    name: string
  }

export type array_news = {
  [index: number]: News
}

export type array_twitter = {
  [index: number]: Twitter
}

export type Event = {
  title: string,
  date: string,
  text: string,
  cases_count: number,
  twitter: string[],
  range: string
}

export type News = {
  headline: string,
  url: string,
  image: string,
  date: string
}

export type Twitter = {
  username: string,
  profile_image: string,
  text: string,
  link_urk: string,
  link_img: string
}