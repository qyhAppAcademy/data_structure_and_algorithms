// Assignment Details
// 1. Start with PILYTIX - provided CodeSandbox template that represents a basic React project which is already set up to display a table of some sample sales opportunities.
// The project contains a package.json file with a few dependencies already added(namely React and Material UI), but feel free to add any additional dependencies that you would like(so long as you do not deviate from using React components for your main UI).
// The file opportunities.json includes an array of objects where each object represents a single sales opportunity with some AI info layered in.The first one is shown in the Appendix as an illustrative example, but your code should read only from the existing json file(which is essentially serving as a stand -in for a database).
// 2. Your primary goal is to build a UI such that upon clicking an opportunity row in the table, a pop - up card such as the Material UI Card will appear centered on the screen that will show ALL the available information about the selected opportunity.
// Some properties in each opportunity object(e.g., opp name, rep’s name, PILYTIX score, etc.) are already in the table and should still be prominently displayed in the card as well.
// There are also some nested properties in each object(e.g., a history of PILYTIX and rep probabilities, a list of factors increasing / decreasing win probability) that are not currently displayed in the table.
// These properties are the main reason for the card’s existence as they would be difficult to impossible to display adequately in the table.
// Note that the nested properties are variable length arrays and can sometimes be missing altogether.
// Your core challenge is to figure out the best way to display all of this nested data, and note that you need not display the raw text as is – you are encouraged to add charts or graphics for more visual storytelling.
// You must also build functionality that allows the user to close the card to return to the table to choose a new opportunity.
//     Bonus: Enable the user to swap to successive or previous opportunity cards with the keyboard arrow keys or by hitting “Next” / “Previous” buttons.
// 3. Your secondary goal is all about UI / UX design: make the entire page(both the card you build and the provided table) look aesthetically pleasing and be intuitive and responsive to end users.
// Consider adding new fonts and colors to the existing table as well as to the cards.
// Try for a cohesive vision between the way the table looks and the way your pop - up card looks.
// Consider what happens when nested data elements are different lengths.
//     Bonus: Check your UI at various(but reasonable) screen sizes and style it to adjust properly.

// This is a somewhat open - ended assignment – we are not going to tell you exactly what you must do because we want to evaluate whether you(A) have the development capabilities to build an intuitive UI for this type of nested data and(B) whether you have the design chops to find a way to make your work visually appealing.

// We are especially focused on design as it is extremely important for this role since your responsibilities will somewhat overlap with those of a UI / UX designer.Any submission that simply provides bare - bones functionality without styling will be insufficient to advance to the next round.

// This project is intended to take around 4 - 6 hours of time for a knowledgeable and skilled React developer, but you are free to spend more or less time on it based on your own abilities.We ask that you do keep track of how much time you spend on it, as it will help us to gauge the quality of your submission.

// Minimum Submission Requirements
// 1. You build your UI using React with a project built on our provided CodeSandbox template.
// 2. Your project contains a well - styled custom pop - up card component that is set to open on table click to show an enhanced view of the opportunity selected.
// 3. The pop - up card displays(through text, graphics or charts) ALL information in the opportunity object(i.e., those elements that were already in the table AND the nested elements not in the table - see the Appendix for an example opportunity).
// 4. The user can close the pop - up card to see the table again so they can click another row to bring up a new pop - up card.
// 5. You add some customization and superior formatting to the existing bare - bones MUI table and ensure that it is styled in a way consistent with your pop - up card.
// 6. You submit your assignment by emailing a link to your completed CodeSandbox project. (Note: Any save made to a file in the CodeSandbox template will create a new URL for you to send - but make sure that you save all files in your CodeSandbox before you submit as the changes you see locally only take effect in the URL upon save!)
// You attach a few screenshots of your finished solution in the email(as a backup in the rare event that there is an error with your CodeSandbox when we test it).
// You include the time you spent on the assignment in your email AND in a comment in your code.
// You comment your name and email in a block comment in your code and testify that the work done on this take - home assignment is your own(simply meaning you didn’t work with another person, but you are completely free to use whatever web resources you like).

// Bonus Points
// 1. You enable the user to change to the next or previous opportunity cards without having to close the card and select again from the table(either using arrow keys or a button for “Next” and “Previous”).
// 2. You consider the best visual way to show each element of nested data on the card – replacing text for visuals such as charts and graphics when feasible.
// 3. You allow the UI to still look visually appealing in the case that a property is null or undefined.
// 4. You consider the responsiveness of your solution to different screen sizes, and make sure that it still looks nice at small screen sizes even when a nested property has a large amount of elements.

// Tips
// 1. You are free to use whatever components you want and to style them however you like, but if you do stick to Material UI, we recommend reading how to customize Material UI for your design.At the very least, we encourage you to read about how you can enhance and style the existing MUI Table.
// 2. Some of the nested structures have data in them that could lend themselves well to charts.We encourage you to try to integrate one of the libraries below:
// Nivo
// Formidable
// ReactChart
// D3 is a powerful way to build fully - custom graphics for data, but unless you’re already familiar with it, it would not be recommended over the others that are easier to quickly implement out - of - the - box charts.

// Appendix
// Example Opportunity Object
// The following is an example opportunity object from opportunities.json that your UI card should be able to display:

// {
//     "oppId": 1,
//         "oppName": "B2B - 2023 - New Life Financial Inc.",
//             "salesRepName": "Frank Castle",
//                 "amount": 68989.0,
//                     "product": "Suite",
//                         "stage": "3. Initial Conversation",
//                             "repProbability": 0.2,
//                                 "pilytixTier": "4 Stars",
//                                     "pilytixProbability": 0.29,
//                                         "probabilityHistory": [
//                                             {
//                                                 "daysAgo": 28,
//                                                 "pilytixProb": 0.11,
//                                                 "repProb": 0.05
//                                             },
//                                             {
//                                                 "daysAgo": 21,
//                                                 "pilytixProb": 0.1,
//                                                 "repProb": 0.1
//                                             },
//                                             {
//                                                 "daysAgo": 14,
//                                                 "pilytixProb": 0.17,
//                                                 "repProb": 0.2
//                                             },
//                                             {
//                                                 "daysAgo": 7,
//                                                 "pilytixProb": 0.25,
//                                                 "repProb": 0.2
//                                             }
//                                         ],
//                                             "pilytixFactorsIncreasingWin": [
//                                                 {
//                                                     "name": "Product",
//                                                     "message": "Rep's history with \"Suite\" 
//       s",
//       "weight": {
//                                                     "value": 1,
//                                                     "description": "Weak Positive"
//                                                 }
//     },
// {
//     "name": "Age",
//         "message": "History of similar deals at 29 days old",
//             "weight": {
//         "value": 1,
//             "description": "Weak Positive"
//     }
// },
// {
//     "name": "Last Activity",
//         "message": "Rep last reached out to the customer 1 day ago",
//             "weight": {
//         "value": 3,
//             "description": "Strong Positive"
//     }
// },
// {
//     "name": "Distance to Stadium",
//         "message": "Customer's main address is 32 miles from stadium",
//             "weight": {
//         "value": 1,
//             "description": "Weak Positive"
//     }
// },
// {
//     "name": "Marketing Emails",
//         "message": "Customer has opened 3 emails sent in the last 6 months",
//             "weight": {
//         "value": 2,
//             "description": "Medium Positive"
//     }
// },
// {
//     "name": "Inbound Emails",
//         "message": "Customer has sent the sales team 2 emails",
//             "weight": {
//         "value": 3,
//             "description": "Strong Positive"
//     }
// },
// {
//     "name": "Calls Logged",
//         "message": "Rep's historical success with deals with 2 logged phone calls",
//             "weight": {
//         "value": 2,
//             "description": "Medium Positive"
//     }
// },
// {
//     "name": "Last Purchase Date",
//         "message": "Customer's last purchase was 191 days ago",
//             "weight": {
//         "value": 1,
//             "description": "Weak Positive"
//     }
// },
// {
//     "name": "Account Profile",
//         "message": "Rep's history with mid-sized B2B customers",
//             "weight": {
//         "value": 1,
//             "description": "Weak Positive"
//     }
// },
// {
//     "name": "Account Industry",
//         "message": "Rep's history with B2B customers in Services",
//             "weight": {
//         "value": 2,
//             "description": "Medium Positive"
//     }
// }
//   ],
// "pilytixFactorsDecreasingWin": [
//     {
//         "name": "Amount",
//         "message": "Rep's history working on deals similar in value to $68,989",
//         "weight": {
//             "value": -1,
//             "description": "Weak Negative"
//         }
//     },
//     {
//         "name": "Stage",
//         "message": "Rep's tendency to close similar deals in stage \"3. Initial Conversation\"",
//         "weight": {
//             "value": -2,
//             "description": "Medium Negative"
//         }
//     },
//     {
//         "name": "Lead Source",
//         "message": "Team's historical success with \"Single Game Buyer\" leads",
//         "weight": {
//             "value": -2,
//             "description": "Medium Negative"
//         }
//     },
//     {
//         "name": "Lifetime Ticket Spend",
//         "message": "Customer's total team spend is $161",
//         "weight": {
//             "value": -2,
//             "description": "Medium Negative"
//         }
//     },
//     {
//         "name": "Pushed Close",
//         "message": "Rep has pushed the expected close date 1 time",
//         "weight": {
//             "value": -3,
//             "description": "Strong Negative"
//         }
//     }
// ]
// }

//Started working on sunburst chart
//Studying d3.js in react
//Incorporated sunburst chart using d3.js but not react way
//Spent a lot of time trying to make tooltip work
//Made tooltip appear
//Made tooltip output d.data
//Made tooltip output position correctly

//02/17//2023
// 1. Fork the PILYTIX - provided CodeSandbox template
// 2. but feel free to add any additional dependencies that you would like (so long as you do not deviate from using React components for your main UI).
// 3. but your code should read only from the existing json file (which is essentially serving as a stand-in for a database).
// 4. Your primary goal is to build a UI such that upon clicking an opportunity row in the table, a pop-up card such as the Material UI Card will appear centered on the screen that will show ALL the available information about the selected opportunity.

// 6. There are also some nested properties in each object (e.g., a history of PILYTIX and rep probabilities, a list of factors increasing/decreasing win probability) that are not currently displayed in the table.
// 7. These properties are the main reason for the card’s existence as they would be difficult to impossible to display adequately in the table.
// 8. Note that the nested properties are variable length arrays and can sometimes be missing altogether.
// 9. You must also build functionality that allows the user to close the card to return to the table to choose a new opportunity.
// 10. Bonus: Enable the user to swap to successive or previous opportunity cards with the keyboard arrow keys or by hitting “Next” / “Previous” buttons.



// 14. Consider what happens when nested data elements are different lengths.

// (A) have the development capabilities to build an intuitive UI for this type of nested data
// This project is intended to take around 4-6 hours of time for a knowledgeable and skilled React developer, but you are free to spend more or less time on it based on your own abilities.
// We ask that you do keep track of how much time you spend on it, as it will help us to gauge the quality of your submission.

// Need to do
// 5. Some properties in each opportunity object(e.g., opp name, rep’s name, PILYTIX score, etc.) are already in the table and should still be prominently displayed in the card as well.
// 11. Your secondary goal is all about UI/UX design: make the entire page (both the card you build and the provided table) look aesthetically pleasing and be intuitive and responsive to end users.
// 12. Consider adding new fonts and colors to the existing table as well as to the cards.
// 13. Try for a cohesive vision between the way the table looks and the way your pop-up card looks.
// 15. Bonus: Check your UI at various (but reasonable) screen sizes and style it to adjust properly.

// (B) whether you have the design chops to find a way to make your work visually appealing.
// We are especially focused on design as it is extremely important for this role since your responsibilities will somewhat overlap with those of a UI/UX designer. 
// Any submission that simply provides bare-bones functionality without styling will be insufficient to advance to the next round.

// Minimum Submission Requirement (Done)
// 1. You build your UI using React with a project built on our provided CodeSandbox template.

// 3. The pop-up card displays (through text, graphics or charts) ALL information in the opportunity object (i.e., those elements that were already in the table AND the nested elements not in the table - see the Appendix for an example opportunity).
// 4. The user can close the pop-up card to see the table again so they can click another row to bring up a new pop-up card.

// Minimum Submission Requirement (Yet to be done)
// 2. Your project contains a well-styled custom pop-up card component that is set to open on table click to show an enhanced view of the opportunity selected.
// 5. You add some customization and superior formatting to the existing bare-bones MUI table and ensure that it is styled in a way consistent with your pop-up card.

// Bonus Points (Done)
// 1. You enable the user to change to the next or previous opportunity cards without having to close the card and select again from the table (either using arrow keys or a button for “Next” and “Previous”).
// 2. You consider the best visual way to show each element of nested data on the card – replacing text for visuals such as charts and graphics when feasible.

// Bonus Points (Yet to be done)
// 3. You allow the UI to still look visually appealing in the case that a property is null or undefined.
// 4. You consider the responsiveness of your solution to different screen sizes, and make sure that it still looks nice at small screen sizes even when a nested property has a large amount of elements.

// Submission Method
// 6.
// You submit your assignment by emailing a link to your completed CodeSandbox project. (Note: Any save made to a file in the CodeSandbox template will work the same as choosing the “Fork” button and creating a new URL for you to send - but make sure that you save all files in your CodeSandbox before you submit – the changes you see locally only take effect in the URL upon save!) Your URL should be of the format https://codesandbox.io/s/XXXX
// You attach a few screenshots of your finished solution in the email(as a backup in the rare event that there is an error with your CodeSandbox when we test it).
// You include the time you spent on the assignment in your email AND in a comment in your code.
// You comment your name and email in a block comment in your code and testify that the work done on this take - home assignment is your own(simply meaning you didn’t work with another person, but you are completely free to use whatever web resources you like).

// Tips
// You are free to use whatever components you want and to style them however you like, but if you do stick to Material UI, we recommend reading how to customize Material UI for your design.At the very least, we encourage you to read about how you can enhance and style the existing MUI Table.
// Some of the nested structures have data in them that could lend themselves well to charts.We encourage you to try to integrate one of the libraries below:
// Nivo
// Formidable
// ReactChart
// D3 is a powerful way to build fully - custom graphics for data, but unless you’re already familiar with it, it would not be recommended over the others that are easier to quickly implement out - of - the - box charts.

// Dear Hendrik,

// Thank you again for giving me a chance to showcase my skills.Here is my submission of the take home assignment.

// Example Screenshot:

// Project Link: Pilytix Take Home Assignment - Qiao Yang Han

// Total Work Time: 48 hrs (Timeline is included in the comments in App.js)

// More screenshots are attached to this email.

// A demo video is also attached to demonstrate the usage of a bar chart, a line chart, and sunburst chart.

// Looking forward to hearing from you and potentially discussing my work with you.

// Respectfully,

// Qiao

// Timeline
// 02/10/2023 2 hrs Reading assignment and planning I
// 02/11/2023 2 hrs Reading assignment and planning II
// 02/12/2023 8 hrs Displaying probability history using Sunburst Chart
// 02/13/2023 6 hrs Displaying Pilytix Prob and Rep Prob using Bar/Line Chart
// 02/14/2023 6 hrs Displaying other data using Material UI components
// 02/15/2023 6 hrs Implementing back/next feature
// 02/16/2023 6 hrs Improving display and refining code
// 02/17/2023 6 hrs Making Material UI components responsive
// 02/18/2023 6 hrs Making Bar/Line Chart and Sunburst Chart responsive

// Total Work Time:  48 hrs
// Name:        Qiao Yang Han
// Email:       qyhwork@gmail.com

// The work done on this take-home assignment is mine solely