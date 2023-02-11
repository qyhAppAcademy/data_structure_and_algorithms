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