
# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is an interactive budgeting application built with HTML, CSS, and JavaScript. It helps users manage their budgets, record expenses, calculate their remaining balance, and monitor their spending.

## Improvements Made This Week

The following features were added to SpendWise:

- Users can set their total budget.
- Users can add multiple expense records.
- Users can view all recorded expenses.
- Users can delete individual expenses.
- The dashboard updates automatically.
- The application provides warnings when users exceed or nearly use their budget.
- The application validates user input.

## How Conditionals Are Used

Conditional statements (if, else if, and else) are used to make decisions based on the user's budget and expenses.

For example:
- If the budget is zero, the application asks the user to set a budget.
- If expenses exceed the budget, a warning is displayed.
- If the remaining balance is zero, the application informs the user.
- If the user has spent more than 80% of the budget, a spending warning is displayed.

## How Arrays Are Used

An array named `expenses` stores multiple expense records.

Each expense is stored as an object containing:
- Expense name
- Expense amount

The `push()` method adds new expenses, while `splice()` removes deleted expenses.

## How Loops Are Used

The `forEach()` loop processes all stored expense records.

It calculates the total expenses and displays each expense on the webpage.

## How the DOM Is Updated

JavaScript uses DOM manipulation to update the dashboard.

The application uses:
- `getElementById()` to select HTML elements.
- `textContent` to update budget, expenses, balance, and messages.
- `createElement()` to create expense list items.
- `appendChild()` to display expense records.
- `innerHTML` to clear the old expense list.

## How User Interactions Are Handled

Event listeners allow users to interact with the application.

The application uses:
- A submit event to set the budget.
- A submit event to add expenses.
- A click event to delete expenses.

The `preventDefault()` method prevents forms from refreshing the webpage.

## Challenges and Solutions

One challenge was managing multiple expense records and calculating the correct total.

This was solved by storing expenses in an array and using the `forEach()` loop to calculate the total.

Another challenge was updating the dashboard whenever users added or deleted expenses.

This was solved by creating an `updateDashboard()` function that refreshes the displayed information.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run the Project

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Set your budget.
4. Add expenses and manage your spending.

## Author

SpendWise Week 6 Project
