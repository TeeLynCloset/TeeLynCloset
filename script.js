const scrollContainer = document.querySelector(".horizontal-scroll-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scrollAmount = 350; // Tùy chỉnh khoảng cách cuộn

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});
document.getElementById("exploreBtn").addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>

  const targetSection = document.getElementById("types");
  const headerHeight = 80; // Chiều cao của header, bạn có thể điều chỉnh

  const targetPosition = targetSection.offsetTop - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});