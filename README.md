# Conference Agenda - Create Your Own Itinerary

This is a project of my own idea and design. 
This is a React project that displays the agenda for a conference in chronological order (data stored in separate file), then allows the user to add activities from the agenda to their own personal itinerary. This is something I wish I had when attending conferences in the past! I'd be circling my preferred talks on a paper printout. This is especially helpful when there are multiple talks occurring at the same time. When adding talks to their itinerary, they sort automatically in chornological order.

Finally, there is the option to print your itinerary, which is formatted for ease of use.


### How to Access

Visit [https://danielle254.github.io/conference-agenda-simple/](https://danielle254.github.io/conference-agenda-simple/)


### Key Features

* Talks display in chronological order automatically, regardless of order added to itinerary
* User's itinerary stays put, even if they navigate away or refresh the screen. This makes it easy to come back and make changes as needed without having the build their itinerary from scatch each time.
* Option to clear the itinerary and start over
* Ability to print a nicely formatted version of your personal itinerary


### Skills Showcased

* React components
* Use of state, props, hooks, and event handlers
* Utilizing local storage
* Sort function that uses the Date object
* Passing information from parent to child and reverse
* Responsive website
* Flex and Grid


### Lessons Learned

This project really required me to be organized with my file structure, which in turn kept me organized in the execution.
I liked learning about local storage and the print function. I can see these being useful in many other applications. 
I appreciated that my understanding of how to pass functions and attributes to children components really came together through this project. I stepped away from this project for a few months, and when I returned, I was able to read through and understand the code base and how it was functioning. I think this is largely due to having clean, readable code that is well-labeled. 


### Future Enhancement Ideas

I'm actually planning another project like this where I create the conference agenda with some sort of library to display it visually in a more calendar-like format. This will make it easier to tell which talks happen at the same time, and even visually distinguish the locations of the talks. 
I'd also like to add a "share" button in addition to printing.
Another idea would be to add "add to calendar" options so users could put the talks directly onto their own personal calendar (google, etc). 


---

React boilerplate below

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
