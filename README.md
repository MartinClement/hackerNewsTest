# React + TypeScript + Vite
In order to setup this little project as fast as possible, I've been using vite and its `react-ts` template
```sh
npm create vite@latest hacker-news-test -- --template react-ts
```

# Run the application
Nothing special!
```sh
npm install
npm run dev
```

### Additional libraries
| Name   | Description                                       | Doc                               |
|--------|---------------------------------------------------|-----------------------------------|
| dayjs | Lightweight library to ease Js Date manipulation  | https://day.js.org/               |
| axios  | Ajax library to easy Ajax call                    | https://axios-http.com/docs/intro |


# Context
This project aimed to use the [hackernew API](https://hackernews.api-docs.io/v0/overview/introduction) to gather the most populars posts.

# Requirements
- [x] Use ReactJS
- [x] Use Typescript
- [x] Use Hackernew API

# Required Functionalities
- [x] Show 20 last posts at load
- [x] Show next 20 posts on demand
- [x] Refresh the list each 20 sec
- [x] Refresh the list on demand
