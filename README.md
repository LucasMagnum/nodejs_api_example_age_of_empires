Age of Empires - Proxy API
==========================
![Continuos Integration](https://github.com/LucasMagnum/nodejs_api_example_age_of_empires/workflows/Node.js%20CI/badge.svg)

This is an example of application using NodeJS and proxying an existing API.

In this case we are proxying the [Age of Empires](https://age-of-empires-2-api.herokuapp.com/docs/#/) API.


API
====

The documentation is available [here](./docs/api.md).


Quick Start
===========

    * Clone this project
    * Run `npm install`
    * Run `npm start`
    * Access `http://localhost:3000/`


Testing
=======

This project uses `Dredd` as a testing tool, it reads the documentation in `docs/api.md` and run it against the project.

    npm test
