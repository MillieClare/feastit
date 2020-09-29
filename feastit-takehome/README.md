# Feast It - take home task

## Usage

- Made using `create-react-app`
- Clone the repo, cd into the directory and run `npm install`
- Check the `package.json` file and ensure scrips are as below:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

- To run the application `npm start` to run the tests `npm test`

## Process, what went well, what I would do differently, what would I do if I had more time

### This task ended up being more challenging than I anticipated, and my final product is very different to what I first envisioned, but I had a lot of fun with it.

- Originally I wanted filter the endpoint by providing the user with 6 images representing the 6 options and then provide them with the first 10 results for their selection, but due to the time constraints I decided against this.
  - I am happy that I managed to create fixes for both the description sections and the images.
  - Descriptions had large amount of text & updating the state to expand them, expanded all item descriptions, the final product does not do this.
  - Images had a similar issue, but this is also resolved. However some of the smaller photos are stretched due to aspect ratio.
  - I am sure that React has a nicer way of doing the above, I just didn't work it out in the time I had.
- `ShowSuppliers`
  - I wanted to make smaller components e.g. <Name />, <ServiceType />, etc. to keep the file clean, readable, and easy to update. This would also make all the components resuable.
  - However, my biggest knowledge gap is passing data between components properly. This can also be seen in my tests. By not working this out meant that `ShowSuppliers` ended up being much messier and more difficult to read.
  - With more time I can easily create a file for the functions I created and import them in. That should make things cleaner.
- Tests
  - I was worried about time so I decided to demonstrate how I prefer to write tests, through isolating parts of the logic and testing that to check its behaviour, e.g. pulling out the conditional logic for some of the information.
  - I was unable to pass in the actual data, and unable to mock it appropriatley (I created a reduced version of the JSON and passed that in), which meant that I couldn't test whether or not the data renders properly on the page.
- Things that would make the project better:
  - Lots of small things to improve user experience:
    - a 1 to 5 star rating to be put under the name instead of a number
    - Creating card components and using these to display the suppliers side-by-side (could use `flex-wrap`?) using the space on the page more efficiently.
- Through this project I learned a lot about my own limitations with React, which will allow me to focus my learning as I become more experienced.
