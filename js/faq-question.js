document.querySelectorAll(".faq-question").forEach((item) => {
    item.addEventListener("click", function () {
      const faqItem = this.parentElement;
      faqItem.classList.toggle("active");
    });
  });
  const tabs = document.querySelectorAll(".bonuses__tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("bonuses__tab--active"));
      tab.classList.add("bonuses__tab--active");
    });
  });