Carparison
=========

## Project Details

Carparison is a full stack web application that was built for our final project at Lighthouse Labs in a collaborative environment. 

This project was designed by [Cindy Chen](https://github.com/cindyc0106), [Omid Ghahramani](https://github.com/Omid-G12) and [Kevin Ly](https://github.com/originallykevin).

  - Front-end was built using [React](https://create-react-app.dev/), CSS and [Chakra UI](https://chakra-ui.com/).
  - Back-end was built using Node.js, PostgreSQL and Express.
  - [Stripe](https://stripe.com/en-ca), [API Ninja Key](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/), [Kommunicate](https://www.kommunicate.io/), [Imagin Studio](https://www.imagin.studio/) and [EmailJs](https://www.emailjs.com/) were all incorporated within our application.


## Final Product

Searching for a vehicle through API
!['Searching'](https://github.com/cindyc0106/carparison/blob/feature/README/frontend/src/pages/image/car-search.gif)

Adding a rating to vehicle
!['Rating'](https://github.com/cindyc0106/carparison/blob/feature/README/frontend/src/pages/image/car-rating.gif)

Subscribing to email and chat using [Kommunicate](https://www.kommunicate.io/)
!['Email&Chat'](https://github.com/cindyc0106/carparison/blob/feature/README/frontend/src/pages/image/email-and-chat.gif)

Buying use a coffee using [Stripe](https://stripe.com/en-ca)!
!['Coffee'](https://github.com/cindyc0106/carparison/blob/feature/README/frontend/src/pages/image/stripe.gif)

Tablet view
!['Tablet](https://github.com/cindyc0106/carparison/blob/feature/README/frontend/src/pages/image/tablet-view.gif)


## Getting Started

1. Create the `.env` in `backend-carparison` by using `.env_development` as a reference.
2. Update the .env file with your correct local information 
  - DB_HOST = `localhost` 
  - DB_USER = `labber` 
  - DB_PASS = `labber`
  - DB_NAME = `carparison`
  - DB_PORT = `5432`
  - API_KEY = [API Ninja Key](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/)
  - STRIPE_PRIVATE_KEY= [Stripe](https://stripe.com/en-ca)
3. Install dependencies in both frontend and backend-carparison: `npm i`
4. Run `psql \i db/schema/00_script.sql` as `\u carparison` to seed initial local database
5. Run the server in backend-carparison: `npm start`
  - Note: nodemon is used, so you should not have to restart your server
6. Run the client in frontend: `npm start`
7. Visit `http://localhost:3002/` 


## Dependencies

#### Front-End
``` 
  "@chakra-ui/react": "^2.3.6",
  "@emailjs/browser": "^3.9.0",
  "@emotion/react": "^11.10.5",
  "@emotion/styled": "^11.10.5",
  "@testing-library/jest-dom": "^5.16.5",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "framer-motion": "^7.6.2",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^4.6.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
```

#### Back-End
```
  "axios": "^1.1.3",
  "cookie-parser": "~1.4.4",
  "cors": "^2.8.5",
  "debug": "~2.6.9",
  "express": "~4.16.1",
  "morgan": "~1.9.1",
  "pg": "^8.8.0",
  "stripe": "^10.15.0"
```
