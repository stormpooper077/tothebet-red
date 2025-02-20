document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".modal-cashier__amount-btn").forEach((btn) => {
		btn.addEventListener("click", function() {
			document.querySelectorAll(".modal-cashier__amount-btn")
				.forEach(b => b.classList.remove("modal-cashier__amount-btn--selected"));
			this.classList.add("modal-cashier__amount-btn--selected");
			document.querySelector(".input__field-amount").value = this.textContent.trim();
		});
	});

	document.getElementById("modalClose1").addEventListener("click", function() {
		document.getElementById("modalCachier").style.display = "none";
	});

	const depositMethodTitle = document.getElementById("depositMethodName");
	const withdrawMethodTitle = document.getElementById("withdrawMethodName");

	const methodParameters = {
		"VISA/Mastercard": {
			limits: "Мин: 500 Р; Макс: 500 000 Р",
			timing: "Мгновенно", 
			commission: "1.5%",
			minAmount: "500 ₽",
			maxAmount: "200 000 ₽"
		},
		Kvitum: {
			limits: "Мин: 100 Р; Макс: 150 000 Р",
			timing: "До 10 минут",
			commission: "0%", 
			minAmount: "100 ₽",
			maxAmount: "100 000 ₽"
		},
		"Tether TRC-20": {
			limits: "Мин: 100 USDT; Макс: 3000 USDT",
			timing: "Мгновенно",
			commission: "0.5%",
			minAmount: "100 USDT",
			maxAmount: "2000 USDT"
		},
		"Tether ERC-20": {
			limits: "Мин: 50 USDT; Макс: 1500 USDT", 
			timing: "До 30 минут",
			commission: "0.2%",
			minAmount: "50 USDT",
			maxAmount: "1000 USDT"
		},
		"Tether BEP-20": {
			limits: "Мин: 100 USDT; Макс: 5000 USDT",
			timing: "Мгновенно",
			commission: "0.3%",
			minAmount: "100 USDT",
			maxAmount: "3000 USDT"
		},
		Bitcoin: {
			limits: "Мин: 0.01 BTC; Макс: 5 BTC",
			timing: "До 1 часа",
			commission: "0.1%",
			minAmount: "0.01 BTC",
			maxAmount: "2 BTC"
		}
	};

	function selectMethod(methodName, isDeposit) {
		const methodTitle = isDeposit ? depositMethodTitle : withdrawMethodTitle;
		if (!methodTitle) return;
		
		const selectors = ["limits", "timing", "commission", "minAmount", "maxAmount"];
		const elements = selectors.map(selector => 
			document.querySelector(`${isDeposit ? "#deposit" : "#withdraw"} .${selector === "limits" ? "modal-cashier__limits" : `payments-tooltip__info-${selector}`}`)
		);
	
		methodTitle.textContent = methodName;
		const parameters = methodParameters[methodName];
		if (parameters) {
			elements.forEach((element, index) => {
				if (element) {
					element.textContent = parameters[selectors[index]];
				}
			});
		}
	} 

	document.querySelectorAll(".modal-cashier__method").forEach(button => {
		button.addEventListener("click", function() {
			const isDeposit = this.closest("#deposit") !== null;
			const selector = `${isDeposit ? "#deposit" : "#withdraw"} .modal-cashier__method`;

			document.querySelectorAll(selector)
				.forEach(b => b.classList.remove("modal-cashier__method--active"));
			this.classList.add("modal-cashier__method--active");

			selectMethod(this.getAttribute("data-method"), isDeposit);
		});
	});

	function handleTabSwitch(tab) {
		document.querySelectorAll(".cashier-content-tab")
			.forEach(t => t.classList.remove("cashier-content-tab--active"));
		tab.classList.add("cashier-content-tab--active");

		document.querySelectorAll(".modal-cashier__body")
			.forEach(content => content.style.display = "none");
			
		const activeTabContent = document.getElementById(tab.getAttribute("data-tab"));
		if (activeTabContent) {
			activeTabContent.style.display = "flex";
		}
	}

	document.querySelectorAll(".cashier-content-tab").forEach(tab => {
		tab.addEventListener("click", function() {
			handleTabSwitch(this);
		});
	});

	document.querySelectorAll(".modal-cashier__info-btn").forEach(infoBtn => {
		const tooltip = infoBtn.nextElementSibling;
		infoBtn.addEventListener("mouseover", () => tooltip.classList.add("modal-cashier__payments--active"));
		infoBtn.addEventListener("mouseout", () => tooltip.classList.remove("modal-cashier__payments--active"));
	});

	const firstAmountButton = document.querySelector(".modal-cashier__amount-btn");
	if (firstAmountButton) {
		firstAmountButton.classList.add("modal-cashier__amount-btn--selected");
		document.querySelector(".input__field-amount").value = firstAmountButton.textContent.trim();
	}

	const firstDepositMethod = document.querySelector("#deposit .modal-cashier__method");
	if (firstDepositMethod) {
		selectMethod(firstDepositMethod.getAttribute("data-method"), true);
		firstDepositMethod.classList.add("modal-cashier__method--active");
	}

	const firstWithdrawMethod = document.querySelector("#withdraw .modal-cashier__method");
	if (firstWithdrawMethod) {
		selectMethod(firstWithdrawMethod.getAttribute("data-method"), false);
		firstWithdrawMethod.classList.add("modal-cashier__method--active");
	}
});

const bonusBtn = document.getElementById("bonus-btn");
