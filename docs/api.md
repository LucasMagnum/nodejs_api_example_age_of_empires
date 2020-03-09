FORMAT: 1A

# Age of Empires - Proxy API

This is a proxy API used as example of how to use Dredd and NodeJS.


# Civilizations [/civilizations]

## GET
Return list of civilizations.

+ Response 200 (application/json; charset=utf-8)

    + Body

            [
                {
                    "id": 1,
                    "name": "Aztecs",
                    "url": "http://localhost:3000/civilizations/1"
                }
            ]

    + Schema

            {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": { "type": "number" },
                        "name": { "type": "string" },
                        "url": { "type":  "string" }
                    },
                    "additionalProperties": false
                }
            }


# Civilizations Detail [/civilizations/{id}]

+ Parameters
    + id: 1 (required) - Unique identifier for a civilization


## Get civilization [GET]

Get civilization detailed information.

+ Response 200 (application/json; charset=utf-8)

    + Body

            {
                "id": 1,
                "name": "Aztecs",
                "expansion": "The Conquerors",
                "army_type": "Infantry and Monk",
                "team_bonus": "Relics generate +33% gold"
            }

    + Schema

            {
                "type": "object",
                "properties": {
                    "id": { "type": "number" },
                    "name": { "type": "string" },
                    "expansion": { "type": "string" },
                    "army_type": { "type": "string" },
                    "team_bonus": { "type": "string" }
                },
                "additionalProperties": false
            }