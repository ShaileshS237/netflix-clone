#Dependencies:

Angular 2+
Express
Node.js
MongoDB
Google Cloud


#Instructions for running the code:

Make sure you have Angular 2+ and Node.js installed on your machine
Clone the repository and navigate to the root directory
Run "npm install" to install the necessary dependencies
Start the MongoDB server on your machine
Run "ng serve" to start the Angular development server
Run "node server.js" to start the Express server
Open your browser and navigate to "http://localhost:4200" to access the application

#Thought process:

I first started by researching the requirements for the project and determining the main components that needed to be built
I then began designing the overall structure of the application and the different components that would be needed
I considered using a pre-built movie database API, such as the MovieDB API, to easily populate the application with movie data
I decided to use MongoDB to store the movie data and Azure Cloud Storage to store the poster and trailer links
I chose to use Angular for the frontend and Express with Node.js for the backend to take advantage of their ease of use and popularity in web development

#Design choices:

I chose to use a single-page application design with Angular to provide a seamless user experience
I chose to use MongoDB to store the movie data because of its flexibility and ability to easily handle large amounts of data
I chose to use Azure Cloud Storage to store the poster and trailer links in order to easily handle the large amount of data and allow for scalability

#In a production environment, the solution can be optimized by:

Caching the movie data in a local memory store to reduce the number of database queries needed
Implementing pagination to reduce the amount of data being loaded at once
Optimizing the image sizes to reduce the loading time

#Potential design issues:

Without proper testing, there may be bugs in the code that could cause the application to crash
The current design may not be scalable to handle large amounts of traffic
The application may not be optimized for mobile devices
The current design may not be secure enough to protect user data

#To improve the design:

Implementing proper testing to catch and fix bugs before deployment
Implementing load balancing and horizontal scaling to handle large amounts of traffic
Optimizing the design for mobile devices
Implementing security measures such as encryption and authentication to protect user data.
