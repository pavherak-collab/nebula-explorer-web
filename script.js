const planets = {
  earth: {
    title: "EARTH",
    image: "earth.png",
    description:
      "Our home world. A unique planet filled with oceans, continents and life.",
    glow: "rgba(0,140,255,.45)"
  },

  mars: {
    title: "MARS",
    image: "mars.png",
    description:
      "A cold desert world covered in dust, canyons and ancient mysteries.",
    glow: "rgba(255,80,40,.45)"
  },

  jupiter: {
    title: "JUPITER",
    image: "jupiter.png",
    description:
      "The giant of our solar system, surrounded by storms larger than Earth.",
    glow: "rgba(255,180,80,.45)"
  },

  saturn: {
    title: "SATURN",
    image: "saturn.png",
    description:
      "A majestic gas giant known for its breathtaking ring system.",
    glow: "rgba(255,230,140,.45)"
  }
};

const buttons = document.querySelectorAll(".planet-btn");
const image = document.getElementById("planet-image");
const title = document.getElementById("planet-title");
const description = document.getElementById("planet-description");
const glow = document.querySelector(".planet-glow");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const planet = planets[button.dataset.planet];

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    image.style.opacity = "0";
    image.style.transform = "scale(.88)";

    setTimeout(() => {

      image.src = planet.image;
      title.textContent = planet.title;
      description.textContent = planet.description;

      glow.style.background =
        `radial-gradient(circle,
        ${planet.glow},
        transparent 70%)`;

      image.style.opacity = "1";
      image.style.transform = "scale(1)";

    }, 350);

  });

});

/* PARALLAX */

const planetWrapper = document.querySelector(".planet-wrapper");

document.addEventListener("mousemove", (e) => {

  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  planetWrapper.style.transform =
    `translate(${x}px, ${y}px)`;

});
