const express = require("express")
const axios = require("axios")

const config = require("./config")
const app = express()


app.get("/", (request, response) => {
  const url = buildBaseURL(request)

  response.json({
    "project": "Age of Empires - Proxy API",
    "description": "A proxy API to https://age-of-empires-2-api.herokuapp.com",
    "endpoints": {
        "civilizations": `${url}/civilizations`,
    },
    "author": "Lucas Magnum",
    "repository": "https://github.com/lucasmagnum/age_of_empires_api_nodejs"
  })

})


app.get("/civilizations", (request, response) => {
  axios.get(`${config.externalAPI}/civilizations`)
    .then(res => {
      const civilizations = res.data.civilizations.map(civilization => {
        return {
          id: civilization.id,
          name: civilization.name,
          url: buildBaseURL(request) + `/civilizations/${civilization.id}`
        }
      });

      response.json(civilizations)
    })
    .catch(error => {
      response.send(error)
    })

})

app.get("/civilizations/:id", (request, response) => {
  axios.get(`${config.externalAPI}/civilization/${request.params.id}`)
    .then(res => {
      response.json({
        id: res.data.id,
        name: res.data.name,
        expansion: res.data.expansion,
        army_type: res.data.army_type,
        team_bonus: res.data.team_bonus
      })
    })
    .catch(error => {
      response.send(error)
    })
})


function buildBaseURL(request) {
  return `${request.protocol}://${request.headers.host}`
}


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})