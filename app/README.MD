# Manro & Lonergan Image Gallery

This Web application is made to allow users to view, link, and upload images to our image database. Allowing for users to display Albums of images on the site.

## Getting Started

We have a package.json with a list of dependencies that need to be installed.
simply navigate to the file directory in your terminal or command line tool, and type 

npm i 

to install all necessary node packages.

After you get those you are ready to add albums, so navigate to the Add images component and begin adding images by typing into our container form the title, image source link, and a description. 

### Installing

1. Have a Github account to fork our repo

2. fork the repo, and clone it down.

3. npm i all dependencies.

4. get the application ready to launch by opening two terminal windows and navigating to the app directory and server directory respectively.

5. get your mongodb up and running.

6. next in the server directory type node server.js to get the server connection to Mongo going.

7. in the app directory in your separate terminal window type npm start to begin the web server.

8. after both these shells are running, you can go to locolhost: 8080 and interact with our gallery page.





## Running the tests

We used Jest to test our React application, We built up our reducers and actions using Test Driven Development (TDD) and used a green-red refactoring each test to first fail and then eventually pass.

Check our tests using our script npm test- which will run eslint as well as jest.


### And coding style tests

For our CSS we used CSS-Grid to format our components, and used media queries to change the layout to fit different screen-sizes.


## Built With

* [React](https://reactjs.org/) - The web framework used
* [Jest](https://facebook.github.io/jest/) - Testing Code.

## Authors

* **Ryan Manro** - [Github](https://github.com/rmanro)

* **Jeffrey Lonergan** - [Github](https://github.com/J3ffcon1)




