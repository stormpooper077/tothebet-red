"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const transactions = {
        1: {
            id: 1,
            date: "2024-10-27 06:21",
            numberTransaction: "110", 
            type: "withdraw",
            amount: "-2500$",
            status: "0",
        },
        2: {
            id: 2,
            date: "2024-10-27 09:21",
            numberTransaction: "111",
            type: "deposit", 
            amount: "+2500$",
            status: "0",
        },
    };

    const tbody = document.getElementById("transaction-body");

    for (const key in transactions) {
        const transaction = transactions[key];
        const row = document.createElement("div");
        row.classList.add("transaction-row");

        const amountClass = transaction.type !== "deposit" ? "withdraw" : "debit";

        row.innerHTML = `
                    <div>${transaction.id}</div>
                    <div>${transaction.date}</div>
                    <div>${transaction.numberTransaction}</div>
                    <div class="transactions-${amountClass}">${transaction.amount}</div>
        `;

        tbody.appendChild(row);
    }

    const tabButtons = document.querySelectorAll(".transactions-history__tabs button");
    const transactionList = document.querySelector(".transaction-list");
    const betList = document.querySelector(".bet-history-list");
    
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.classList.remove("transactions-history__tabs--active"));
            button.classList.add("transactions-history__tabs--active");
            const tab = button.getAttribute("data-tab");
            if (tab === "transactions") {
                transactionList.classList.add("active");
                betList.classList.remove("active");
            } else if (tab === "bets") {
                betList.classList.add("active");
                transactionList.classList.remove("active");
            }
        });
    });

    const tabs = document.querySelectorAll(".personal__top-tab");
    const contentBlocks = document.querySelectorAll(".personal__bottom");
    const bonusesBlock = document.querySelector(".personal__bottom-bonuses");
    
    tabs.forEach((tab) => {
        tab.addEventListener("click", function() {
            if (this.classList.contains("personal__top-tab--active")) {
                return;
            }
            tabs.forEach((t) => t.classList.remove("personal__top-tab--active"));
            this.classList.add("personal__top-tab--active");
            contentBlocks.forEach((block) => {
                block.style.display = "none";
            });
            if (bonusesBlock) {
                bonusesBlock.style.display = "none";
            }
            const tabName = this.getAttribute("data-tab");
            const activeBlock = document.querySelector(`.personal__bottom-${tabName}`);
            if (activeBlock) {
                if (tabName === "bonuses") {
                    activeBlock.style.display = "block";
                } else {
                    activeBlock.style.display = "flex";
                }
            } else {
                console.warn(`Element .personal__bottom-${tabName} not found`);
            }
        });
    });

    document.querySelectorAll(".date-input").forEach(function(input) {
        input.addEventListener("input", function() {
            let value = input.value.replace(/\D/g, "");
            if (value.length > 2 && value.length <= 4) {
                input.value = value.slice(0, 2) + "." + value.slice(2);
            } else if (value.length > 4) {
                input.value = value.slice(0, 2) + "." + value.slice(2, 4) + "." + value.slice(4, 8);
            } else {
                input.value = value;
            }
        });
    });

    const inputs = document.querySelectorAll(".code-input");
    const button = document.querySelector("button");

    const handleInput = (currentInput) => {
        const nextInput = currentInput.nextElementSibling;
        const prevInput = currentInput.previousElementSibling;

        if (currentInput.value.length > 1) {
            currentInput.value = currentInput.value.slice(0, 1);
        }

        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value) {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        const allFilled = [...inputs].every(input => input.value);
        button.classList.toggle("active", allFilled);
    };

    const handleBackspace = (currentInput) => {
        const prevInput = currentInput.previousElementSibling;
        
        currentInput.value = "";
        
        if (prevInput) {
            prevInput.focus();
            prevInput.removeAttribute("disabled");
            currentInput.setAttribute("disabled", true);
        }
    };

    inputs.forEach(input => {
        input.addEventListener("input", () => handleInput(input));
        
        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                handleBackspace(input);
            }
        });
    });

    inputs[0].focus();

    const dropdown = document.querySelector(".profile__confirmation-dropdown");
    const dropdownButton = document.querySelector(".profile__confirmation-secret");
    const dropdownItems = document.querySelectorAll(".profile__confirmation-drop__item");
    const selectedQuestion = document.getElementById("selected-question");

    dropdownButton.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });

    dropdownItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            selectedQuestion.textContent = e.target.textContent;
            dropdown.classList.remove("active");
        });
    });

    window.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});
