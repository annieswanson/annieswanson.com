const slides = [
  {
    src: "assets/carousel-01.webp",
    alt: "Quiet Appreciation, Amber by Baseera Khan",
    caption: `
      <p>Baseera Khan</p>
      <p><i class="artwork-title">Quiet Appreciation, Amber</i></p>
      <p>oil on marouflaged wood<br>panel, Lucite artist frame</p>
      <p>14 x 11 x 1.5 inches</p>
    `,
  },
  {
    src: "assets/carousel-02.webp",
    alt: "Feuiller 2 by Frédérique Lucien",
    caption: `
      <p>Frédérique Lucien</p>
      <p><i>Feuiller 2</i>, 2018</p>
      <p>Acrylic on paper, collage</p>
      <p>187 x 141 cm<br>73.62 x 55.51 in.</p>
    `,
  },
  {
    src: "assets/carousel-03.webp",
    alt: "motherhood, and a drawn scythe: chapter five by Umico Niwa",
    caption: `
      <p>Umico Niwa</p>
      <p><i>motherhood, and a drawn scythe:<br>chapter five</i>, 2026</p>
      <p>maple, matboard, graphite, charcoal, colored pencil on paper with acrylic</p>
      <p>21 x 83 x 1 1/2 inches</p>
    `,
  },
];

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const image = carousel.querySelector("[data-carousel-image]");
  const caption = carousel.querySelector("[data-carousel-caption]");
  const previous = carousel.querySelector("[data-carousel-previous]");
  const next = carousel.querySelector("[data-carousel-next]");
  let index = 0;
  let touchStartX = null;

  const render = () => {
    const slide = slides[index];
    image.src = slide.src;
    image.alt = slide.alt;
    caption.innerHTML = slide.caption;
  };

  const move = (direction) => {
    index = (index + direction + slides.length) % slides.length;
    render();
  };

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  });

  carousel.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  carousel.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;

      if (Math.abs(distance) < 42) return;
      move(distance > 0 ? -1 : 1);
    },
    { passive: true },
  );
}
