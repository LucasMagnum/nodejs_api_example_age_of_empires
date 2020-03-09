Age of Empires - Proxy API
==========================

This is a example of application using NodeJS and proxying an existing API.

In this case we are proxying the [Age of Empires](https://age-of-empires-2-api.herokuapp.com/docs/#/) API.


Endpoints
=========

    # Return all civilizations
    GET /civilizations
    Response: {id, name}

    # Return civilization details
    GET /civilizations/<id>
    Response: {id, name, expansion, army_type, team_bonus}


Testing
=======

Run `npm test` to get the tests working.
