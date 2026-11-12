
let budget = 0;

let expenses = [];

const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");

const budgetDisplay = document.getElementById("budget");
const expensesDisplay = document.getElementById("expenses");
const balanceDisplay = document.getElementById("balance");

const expenseList = document.getElementById("expenseList");
const message = document.getElementById("message");

function updateDashboard() {
    let totalExpenses = 0;

    // Loop through all expense records
    expenses.forEach(function(expense) {
        totalExpenses += expense.amount;
    });

    let balance = budget - totalExpenses;

    // Update dashboard using DOM
    budgetDisplay.textContent = `KES ${budget.toFixed(2)}`;
    expensesDisplay.textContent = `KES ${totalExpenses.toFixed(2)}`;
    balanceDisplay.textContent = `KES ${balance.toFixed(2)}`;

    // Make decisions using conditionals
    if (budget === 0) {
        message.textContent = "Please set your budget first.";
    } else if (balance < 0) {
        message.textContent = "Warning! You have exceeded your budget.";
    } else if (balance === 0) {
        message.textContent = "You have used your entire budget.";
    } else if (totalExpenses > budget * 0.8) {
        message.textContent = "Careful! You have used most of your budget.";
    } else {
        message.textContent = "Great! Your budget is under control.";
    }

    displayExpenses();
}

function displayExpenses() {
    expenseList.innerHTML = "";

    // Loop through expenses and display each record
    expenses.forEach(function(expense, index) {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <span>${expense.name} - KES ${expense.amount.toFixed(2)}</span>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;

        expenseList.appendChild(listItem);
    });
}

// Handle budget form submission
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const budgetInput = Number(
        document.getElementById("budgetInput").value
    );

    if (budgetInput <= 0 || !Number.isFinite(budgetInput)) {
        message.textContent = "Please enter a valid budget.";
        return;
    }

    budget = budgetInput;

    budgetForm.reset();
    updateDashboard();
});

// Handle adding new expenses
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const expenseName = document.getElementById("expenseName").value.trim();
    const expenseAmount = Number(
        document.getElementById("expenseAmount").value
    );

    if (budget === 0) {
        message.textContent = "Please set your budget first.";
        return;
    }

    if (expenseName === "" || expenseAmount <= 0 ||
        !Number.isFinite(expenseAmount)) {
        message.textContent = "Please enter valid expense details.";
        return;
    }

    // Store expense as an object inside an array
    expenses.push({
        name: expenseName,
        amount: expenseAmount
    });

    expenseForm.reset();
    updateDashboard();
});

// Handle deleting expenses
expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const index = Number(event.target.dataset.index);

        expenses.splice(index, 1);

        updateDashboard();
    }
});

// Initial dashboard display
updateDashboard();
