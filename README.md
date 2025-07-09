# finance-term-finder

Finance Term Finder is a simple tool intended to help people make some decisions about loan financing before approaching a lender in order to make better informed decisions. What makes this site particularly useful is that the user starts with a preferred monthly payment for a finance amount then, based on the lenders annaul interest rate, it calculates the number of payments. The user can then use the controls to make adjustments to the monthly payment. This is the reverse of what banks do, where they start with a finance amount and number of payments and calculate your monthly payments. 

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Initial User Input Fields__

  - The amount you want to finance: number without currency symbol
  - The monthly payment not to exceed: number without currency symbol
  - Lender's annual interest rate (e.g. 3.00): number without % symbol

- __Calculate Number of Payments Button__

  - This calculates the monthly payment based on initial user inputs and displays in the text element above
  - After clicking, this button dissapears and an Adjust Terms button appears below to then focus the user on the adjustment controls below

- __Range slider bar__

  - This slider becomes enabled when the top radio button is selected 
  - Moving this slider automatically recalculates the user's monthly payment based on the number of payments selected. 

- __Make adjustments: (radio checks group)__

  - Adjust maximum payment with slider above: when selected, the adjust button recalculates payment based on slider value
  - Adjust max payment down to nearest 12 mon interval: when selected, the adjust button recalculates payment rounding payment intervals down to the nearest 12 months (e.g. 52 becomes 48)
  - Adjust max payment up to nearest 12 mon interval: when selected, the adjust button recalculates payment rounding payment intervals up to the nearest 12 months (e.g. 52 becomes 60)


- __Adjust Terms Button__ 

  - The footer section includes links to the relevant social media sites for Love Running. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media


## Testing 

In testing the Initial User Input Fields, I used breakpoints in my script.js code and followed execution and checked the values passed to each of my variables. It was an iterative process that I repeated until the functions were producing predicted results when clicking the Calculate Number of Payments button. 

In testing the Calculate Number of Payments button, the big challenge was checking the input fields to make sure there were no empty fields while inside the event called function. Since this is not a submit button I could not rely on 'required' attribute in html input element and devised a series if...then statements with element.focus and function return so function execution would only continue when all condtions were satisfied.

In testing the Range slider bar, in script.js I needed to connect the value it used to the monthly payment input field value and verified in an Excel sheet. This is also connect to the ouptut text element above and dependent on then top radio check below. I connected then min and max label on the slider. These min/max values change based on the value of the payment intervals being used. I traced execution of code with breakpoints to make sure they were calculated properly. 

In testing the (radio checks group), in script.js I had to see if they would toggle between radios on user selection. Each radio is tied to a separate function and verified variable value using breakpoints. 

In testing the Adjust Terms Button, in script.js I had to see if the correct function was called based on the selected radio. I followed using breakpoints and this appears to function properly. When clicked, this dissapears and the button above reappears. This is to guide the user from making incorrect input.


All in all, these features appear to be working properly in as many scenarios I could think of.

Appears to work in Edge and Chrome. This site was geared to mobile and tablets for best appearance. On larger screens there is more empty space.


### Validator Testing 

- HTML
  - No errors according to [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors according to [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs

Haven't noticed any bugs.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- Readme from Love Running was used as template
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 



