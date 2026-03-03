require('dotenv').config()
const express = require('express') // require module syntax
const app = express() // here all functionality of express() is stored in app
const port = 3000 // we use a port

const githubData = {
  "login": "Zabed05",
  "id": 197918153,
  "node_id": "U_kgDOC8v9yQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/197918153?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Zabed05",
  "html_url": "https://github.com/Zabed05",
  "followers_url": "https://api.github.com/users/Zabed05/followers",
  "following_url": "https://api.github.com/users/Zabed05/following{/other_user}",
  "gists_url": "https://api.github.com/users/Zabed05/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Zabed05/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Zabed05/subscriptions",
  "organizations_url": "https://api.github.com/users/Zabed05/orgs",
  "repos_url": "https://api.github.com/users/Zabed05/repos",
  "events_url": "https://api.github.com/users/Zabed05/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Zabed05/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Zabed Khan ",
  "company": null,
  "blog": "",
  "location": "Kolkata ",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2025-02-05T12:55:51Z",
  "updated_at": "2026-03-03T11:10:23Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login',(req, res) => {
    res.send('<h1> Hii I am Zabed </h1>')
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Backend</h2>')
})

app.get('/github',(req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

