document.addEventListener("DOMContentLoaded", () => {
	const countryData = [
		{ country_code: "RU", country_en: "Russia", phone_code: 7 },
		{ country_code: "KZ", country_en: "Kazahstan", phone_code: 7 },
		{ country_code: "AZ", country_en: "Azerbaijan", phone_code: 994 },
	];

	const countrySelected = document.getElementById("country-selected");
	const countryDropdown = document.getElementById("country-dropdown");
	const countryList = document.getElementById("country-list");
	const searchInput = document.getElementById("search-input");
	const clearSearch = document.getElementById("clear-search");
	const flagImg = document.getElementById("country-flag");
	const countryName = document.getElementById("country-name");
	const countryCode = document.getElementById("country-code");

	countrySelected.addEventListener("click", () => {
		countryDropdown.classList.toggle("open");
		countryDropdown.classList.toggle("closed");
	});

	function renderCountries(filter = "") {
		countryList.innerHTML = "";

		countryData.forEach((country) => {
			if (
				country.country_en.toLowerCase().includes(filter.toLowerCase()) ||
				country.phone_code.toString().includes(filter)
			) {
				const li = document.createElement("li");
				li.innerHTML = `
                <img class="phone-country-select-list-flag" src="/assets/flags/${country.country_code}.svg" alt="${country.country_code}">
                <span>${country.country_en}</span>
                <span>+${country.phone_code}</span>
            `;
				li.addEventListener("click", () => {
					flagImg.src = `/assets/flags/${country.country_code}.svg`;
					countryCode.textContent = `+${country.phone_code}`;
					countryDropdown.classList.add("closed");
					countryDropdown.classList.remove("open");
				});
				countryList.appendChild(li);
			}
		});
	}
	renderCountries();
});