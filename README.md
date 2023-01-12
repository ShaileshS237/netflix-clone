## Dependencies
Angular(Ionic for Mobile).<br />
Express.<br />
Node.js.<br />
MongoDB.<br />
Google Cloud.<br />



## Instructions for running the code:

Make sure you have Angular 2+ and Node.js installed on your machine<br />
Clone the repository and navigate to the /frontend and /backend directory seprately<br />
Run `npm install` to install the necessary dependencies<br />
Start the MongoDB server on your machine<br />
Run `ionic serve` to start the Angular/Ionic development server<br />
Run  `nodemon server.js` to start the Express server<br />
Open your browser and navigate to "http://localhost:4200" to access the application<br />


## Thought process:

I first started by researching the requirements for the project and determining the main components that needed to be built<br />
I then began designing the overall structure of the application and the different components that would be needed<br />
I decided to use MongoDB to store the movie data and Google cloud(Google drive) to store the poster and trailer links because azure was asking for credit card.<br />
I chose to use Angular for the frontend and Express with Node.js for the backend to take advantage of their ease of use and popularity in web development<br />

## Design choices:

I chose to use a single-page application design with Angular to provide a seamless user experience<br />
I chose to use MongoDB to store the movie data because of its flexibility and ability to easily handle large amounts of data<br />
I chose to use Google cloud(Google drive) to store the poster and trailer links in order to easily handle the large amount of data and allow for scalability<br />

## In a production environment, the solution can be optimized by:

Caching the movie data in a local memory store to reduce the number of database queries needed<br />
Implementing pagination to reduce the amount of data being loaded at once<br />
Optimizing the image sizes to reduce the loading time<br />

## Potential design issues:

Without proper testing, there may be bugs in the code that could cause the application to crash<br />
The current design may not be scalable to handle large amounts of traffic<br />
The application may not be optimized for mobile devices<br />
The current design may not be secure enough to protect user data<br />

## To improve the design:

Implementing proper testing to catch and fix bugs before deployment<br />
Implementing load balancing and horizontal scaling to handle large amounts of traffic<br />
Optimizing the design for mobile devices<br />
Implementing security measures such as encryption and authentication to protect user data.<br />
