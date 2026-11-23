const palettes = {
  gold: ["#fff2ad", "#f6cf65", "#d89a26"],
  silver: ["#ffffff", "#dfe6ec", "#8e9aa6"],
  rose: ["#ffe1d6", "#f3aa98", "#bd6758"]
};

document.querySelectorAll("[data-color]").forEach((button) => {
  button.addEventListener("click", () => {
    const palette = palettes[button.dataset.color];

    document.documentElement.style.setProperty("--top", palette[0]);
    document.documentElement.style.setProperty("--middle", palette[1]);
    document.documentElement.style.setProperty("--bottom", palette[2]);

    document.querySelectorAll("[data-color]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
  });
});
