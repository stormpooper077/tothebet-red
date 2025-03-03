"use strict";

const categories = {
  Слоты: [
    { img: "/assets/svg/Modal/Cashback.svg", title: "Кешбэк" },
    { img: "/assets/svg/Modal/New.svg", title: "Новые" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Горячие" },
    { img: "/assets/svg/Modal/BuyBonus.svg", title: "Купи Бонус" },
    { img: "/assets/svg/Modal/AGT.svg", title: "AGT" },
    { img: "/assets/svg/Modal/DropsWins.svg", title: "Drops & Wins" },
    { img: "/assets/svg/Modal/MegaWays.svg", title: "Megaways" },
    { img: "/assets/svg/Modal/Fruits.svg", title: "Фрукты" },
    { img: "/assets/svg/Modal/Jackpot.svg", title: "Джекпот" },
    { img: "/assets/svg/Modal/Tournaments.svg", title: "Турнирные" },
    { img: "/assets/svg/Modal/Lotomatic.svg", title: "Lotomatic" },
    { img: "/assets/svg/Modal/Book.svg", title: "Книги" },
  ],
  "Live казино": [
    { img: "/assets/svg/Modal/New.svg", title: "Новые" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Горячие" },
    { img: "/assets/svg/Modal/Gameshow.svg", title: "Игровые шоу" },
    { img: "/assets/svg/Modal/BlackJack.svg", title: "Блекджек" },
    { img: "/assets/svg/Modal/Roulette.svg", title: "Рулетка" },
    { img: "/assets/svg/Modal/TVGames.svg", title: "TV Игры" },
    { img: "/assets/svg/Modal/Poker.svg", title: "Покер" },
    { img: "/assets/svg/Modal/Lottery.svg", title: "Лотерея" },
    { img: "/assets/svg/Modal/Bakkarat.svg", title: "Баккарат" },
    { img: "/assets/svg/Modal/Dice.svg", title: "Кости" },
    { img: "/assets/svg/Modal/TeenPatti.svg", title: "Teen Patti" },
    { img: "/assets/svg/Modal/AndarBahar.svg", title: "Андар Бахар" },
  ],
  Быстрые: [
    { img: "/assets/svg/Modal/New.svg", title: "Новые" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Горячие" },
    { img: "/assets/svg/Modal/Crash.svg", title: "Крэш" },
    { img: "/assets/svg/Modal/Mine.svg", title: "Мины" },
    { img: "/assets/svg/Modal/Fish.svg", title: "Рыбалка" },
    { img: "/assets/svg/Modal/Plinko.svg", title: "Плинко" },
    { img: "/assets/svg/Modal/HiLo.svg", title: "Hi-Lo" },
    { img: "/assets/svg/Modal/SportGame.svg", title: "Спортивные" },
    { img: "/assets/svg/Modal/GameNast.svg", title: "Настольные" },
    { img: "/assets/svg/Modal/Arcade.svg", title: "Аркадные" },
    { img: "/assets/svg/Modal/Criket.svg", title: "Крикет" },
  ],
  Настольные: [
    { img: "/assets/svg/Modal/New.svg", title: "Новые" },
    { img: "/assets/svg/Modal/BlackJack.svg", title: "Блекджек" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Быстрые" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Горячие" },
    { img: "/assets/svg/Modal/Roulette.svg", title: "Рулетка" },
    { img: "/assets/svg/Modal/Poker.svg", title: "Покер" },
    { img: "/assets/svg/Modal/VideoPoker.svg", title: "Видео покер" },
    { img: "/assets/svg/Modal/Bakkarat.svg", title: "Баккарат" },
    { img: "/assets/svg/Modal/HiLo.svg", title: "Hi-Lo" },
    { img: "/assets/svg/Modal/Dice.svg", title: "Кости" },
  ],
  Лотерея: [
    { img: "/assets/svg/Modal/New.svg", title: "Новые" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Горячие" },
    { img: "/assets/svg/Modal/Circle.svg", title: "Колесо" },
    { img: "/assets/svg/Modal/Keno.svg", title: "Кено" },
    { img: "/assets/svg/Modal/Bingo.svg", title: "Бинго" },
    { img: "/assets/svg/Modal/ScretchCard.svg", title: "Скретч карты" },
    { img: "/assets/svg/Modal/Lotomatic.svg", title: "Lotomatic" },
  ],
  "B-спорт": [
    { img: "/assets/svg/Modal/New.svg", title: "Новые" },
    { img: "/assets/svg/Modal/HotGames.svg", title: "Горячие" },
    { img: "/assets/svg/Modal/Football.svg", title: "Футбол" },
    { img: "/assets/svg/Modal/DogsRun.svg", title: "Собачьи бега" },
    { img: "/assets/svg/Modal/HobyHorsing.svg", title: "Скачки" },
    { img: "/assets/svg/Modal/Motosport.svg", title: "Мотоспорт" },
    { img: "/assets/svg/Modal/More.svg", title: "Другие" },
  ],
};

function toggleDropdown(menuId, button) {
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  const buttons = document.querySelectorAll(".nav-button");
  const currentDropdown = document.getElementById(menuId);

  if (!currentDropdown) return;

  const isVisible = currentDropdown.style.display === "block";

  dropdowns.forEach((dropdown) => {
    if (dropdown !== currentDropdown) {
      dropdown.style.display = "none";
    }
  });

  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });

  currentDropdown.style.display = isVisible ? "none" : "block";
  button.classList.toggle("active", !isVisible);
}

function initializeEventListeners() {
  document.addEventListener("click", (event) => {
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    const buttons = document.querySelectorAll(".nav-button");

    const isClickInsideMenu = [...dropdowns, ...buttons].some(
      (el) => el && el.contains(event.target)
    );

    if (!isClickInsideMenu) {
      dropdowns.forEach((dropdown) => {
        if (dropdown) dropdown.style.display = "none";
      });
      buttons.forEach((button) => {
        if (button) button.classList.remove("active");
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    initializeNavBar();
    initializeDropdowns();
    initializeModals();
    initializeProvidersTabs();
    initializeProviderButton();
    initializeCashierInfo();
    initializeAuthModal();
    initializeBurgerMenu();
  });
}

function initializeNavBar() {
  const navBar = document.getElementById("nav-bar");
  const toggleMenuBtn = document.getElementById("toggle-menu-btn");
  const burgerIcon = "/assets/svg/burger-menu.svg";
  const closeIcon = "/assets/svg/close-burger-menu.svg";

  if (!navBar || !toggleMenuBtn) return;

  navBar.classList.add("collapsed");
  const img = toggleMenuBtn.querySelector("img");

  toggleMenuBtn.addEventListener("click", () => {
    const isExpanded = navBar.classList.contains("expanded");

    if (isExpanded) {
      navBar.classList.remove("expanded");
      navBar.classList.add("collapsed");
    } else {
      navBar.classList.remove("collapsed");
      navBar.classList.add("expanded");

    }
  });
}

function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector(".dropdown-drop");
    if (!dropdownMenu) return;

    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle("dropdown-drop--active");
      dropdown.classList.toggle("dropdown--active");
    });
  });

  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.querySelector(".dropdown-drop");
      if (!dropdownMenu) return;

      if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove("dropdown-drop--active");
        dropdown.classList.remove("dropdown--active");
      }
    });
  });
}

function initializeModals() {
  const modalOpenButtons = document.querySelectorAll("[data-modal-open]");
  const modals = document.querySelectorAll(".modal");

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("modal--active");
      document.body.classList.add("modal-open");
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("modal--active");
      document.body.classList.remove("modal-open");
    }
  }

  modalOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-open");
      openModal(modalId);
    });
  });

  modals.forEach((modal) => {
    const closeModalButtons = modal.querySelectorAll(".modal-content__close");
    const backdropModal = modal.querySelector(".modal-overlay");

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        closeModal(modal.id);
      });
    });

    if (backdropModal) {
      backdropModal.addEventListener("click", () => {
        closeModal(modal.id);
      });
    }
  });
}

function initializeProvidersTabs() {
  const leftTabs = document.querySelectorAll(".providers__content-tab");
  const rightTabContainer = document.querySelector(
    ".providers__content-right-tabs"
  );

  if (!rightTabContainer || leftTabs.length === 0) return;

  function updateRightTabs(category) {
    if (!categories[category]) return;

    rightTabContainer.innerHTML = "";

    categories[category].forEach((item) => {
      const button = document.createElement("button");
      button.classList.add("providers__content-right-tab");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.title;

      button.appendChild(img);
      button.appendChild(document.createTextNode(item.title));

      rightTabContainer.appendChild(button);
    });

    const rightTabs = document.querySelectorAll(
      ".providers__content-right-tab"
    );
    rightTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tab.classList.toggle("providers__content-right-tab--active");
      });
    });
  }

  leftTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      leftTabs.forEach((t) =>
        t.classList.remove("providers__content-tab--active")
      );
      tab.classList.add("providers__content-tab--active");
      const category = tab.textContent.trim();
      updateRightTabs(category);
    });
  });

  updateRightTabs("Слоты");
}

function initializeProviderButton() {
  const providerButton = document.getElementById("providerButton");

  if (providerButton) {
    providerButton.addEventListener("click", function () {
      providerButton.classList.toggle("providers__content-right--active");
    });
  }
}

function initializeCashierInfo() {
  const infoButton = document.querySelector(".modal-cashier__info-btn");
  const paymentsSection = document.querySelector(".modal-cashier__payments");

  if (infoButton && paymentsSection) {
    infoButton.addEventListener("mouseenter", () => {
      paymentsSection.classList.add("modal-cashier__payments--active");
    });

    infoButton.addEventListener("mouseleave", () => {
      paymentsSection.classList.remove("modal-cashier__payments--active");
    });
  }
}

function initializeAuthModal() {
  const modal = document.getElementById("modal3");
  const openRegModalButton = document.getElementById("openRegModal");
  const openAuthModalButton = document.getElementById("openAuthModal");

  if (!modal || !openRegModalButton || !openAuthModalButton) return;

  function openModal(tabToActivate) {
    modal.style.display = "flex";
    if (tabToActivate === "register") {
      document.getElementById("registerTab")?.click();
    } else {
      document.getElementById("loginTab")?.click();
    }
  }

  openRegModalButton.addEventListener("click", () => openModal("register"));
  openAuthModalButton.addEventListener("click", () => openModal("login"));

  const modalClose = document.getElementById("modalClose1");
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  const registerTab = document.getElementById("registerTab");
  const loginTab = document.getElementById("loginTab");
  const registrationForm = document.getElementById("registrationForm");
  const loginForm = document.getElementById("loginForm");

  if (registerTab && loginTab && registrationForm && loginForm) {
    registerTab.addEventListener("click", function () {
      registrationForm.style.display = "flex";
      loginForm.style.display = "none";
      this.classList.add("form-container__tab--active");
      loginTab.classList.remove("form-container__tab--active");
    });

    loginTab.addEventListener("click", function () {
      registrationForm.style.display = "none";
      loginForm.style.display = "flex";
      this.classList.add("form-container__tab--active");
      registerTab.classList.remove("form-container__tab--active");
    });
  }

  const modalOverlay = modal.querySelector(".modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

function initializeBurgerMenu() {
  const toggleMenuBtn = document.getElementById("burger-menu-btn");
  const closeMenuBtn = document.getElementById("close-burger-menu-btn");
  const overlay = document.getElementById("overlay");
  const navBar = document.getElementById("nav-bar");

  if (!toggleMenuBtn || !closeMenuBtn || !overlay || !navBar) return;

  function openMenu() {
    navBar.classList.add("active", "open");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    navBar.classList.remove("active", "open");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  toggleMenuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  document.addEventListener("click", function (event) {
    if (
      !navBar.contains(event.target) &&
      !toggleMenuBtn.contains(event.target)
    ) {
      if (navBar.classList.contains("active")) {
        closeMenu();
      }
    }
  });
}

function loadCashierModal() {
  fetch("modal.html")
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка загрузки модального окна");
      return response.text();
    })
    .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);
      setupCashierModal();
    })
    .catch((error) => console.error("Ошибка:", error));
}

function setupCashierModal() {
  const modal = document.getElementById("modalCachier");
  const closeBtn = document.getElementById("modalClose1");
  const backdrop = document.getElementById("modalBackdrop1");
  const openButton = document.getElementById("openCashierModalBtn");

  if (!modal) return;

  function openModal() {
    modal.classList.add("modal--active");
  }

  function closeModal() {
    modal.classList.remove("modal--active");
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (backdrop) backdrop.onclick = closeModal;
  if (openButton) openButton.onclick = openModal;

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("modal--active")) {
      closeModal();
    }
  });
}

initializeEventListeners();
