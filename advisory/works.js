const worksData = [
  [
    "Michael Kennedy Costa",
    "",
    ""
  ],
  [
    "Amber Toplisek",
    "Surface Glint, 2025",
    "UV print on glass, copper, solder, lead, resin, zinc hardware,\n46 x 41 cm"
  ],
  [
    "Mads Bryld",
    "I Dwelled into a Thousand Sunsets, 2026",
    "Oil, rabbit skin glue on linen in stained oak frame\n65 x 59 in\n165 x 150 cm (unframed)"
  ],
  [
    "Nat Ware",
    "Cyanotype Study I, 2024",
    "framed cyanotype\n7 x 12 x 1 inches\n17.8 x 30.5 x 2.5 cm"
  ],
  [
    "m. gloxinia lyra",
    "Leapfrog, 2025",
    "oil on linen\n32 x 48 x 1 inches\n81.3 x 121.9 x 2.5 cm"
  ],
  [
    "hailey scheff",
    "A Cover Over, 2026",
    "Alchemical process on found wood panel\n20 x 1 x 14 inches\n50.8 x 2.5 x 35.6 cm"
  ],
  [
    "noah a schmitz",
    "Somatic Veil, 2025",
    "oil and acrylic on canvas\n36 x 36 x 1 inches\n91.4 x 91.4 x 2.5 cm"
  ],
  [
    "omar abreu",
    "obsolescence (hofmann 1), 2026",
    "Nike Air Max Sneaker, Adidas Sneaker, White Tee, Steel, Found Frame and Print, Adhesive\n17 x 4 x 27 inches\n43.2 x 10.2 x 68.6 cm"
  ],
  [
    "Tatiana Kronberg",
    "The Mirror, 2025",
    "unique chromogenic photogram on silver-halide paper\n57 x 34 x 2 3/4 inches"
  ],
  [
    "elliot dickinson wright",
    "downtown event for a mayoral candidate, 2025",
    "graphite\n12 × 10 × 0 inches\n30.5 × 25.4 × 0 cm"
  ],
  [
    "eduardo joaquin",
    "Subway Study 1, 2026",
    "Oil on canvas\n13 x 13 x 1 1/2 inches\n33.0 x 33.0 x 3.8 cm"
  ],
  [
    "Anna de Castro Barbosa",
    "Un bleu dans l’oeil, 2023",
    "Stainless steel, glass, Omega 3\n1 x 1 x 1 in, 2.5 x 2.5 x 2.5 cm"
  ]
];
const workDialog = document.querySelector("#work-view");
const workImage = workDialog.querySelector(".work-view-image");
const workArtist = workDialog.querySelector("#work-view-artist");
const workTitle = workDialog.querySelector(".work-view-title");
const workDetails = workDialog.querySelector(".work-view-details");
let workTrigger;
document.querySelectorAll("[data-work-index]").forEach((button) => {
  button.addEventListener("click", () => {
    const [artist, title, details] = worksData[Number(button.dataset.workIndex)];
    const thumbnail = button.querySelector("img");
    workTrigger = button;
    workImage.src = thumbnail.src;
    workImage.alt = thumbnail.alt;
    workArtist.textContent = artist;
    workTitle.textContent = title;
    workTitle.hidden = !title;
    workDetails.textContent = details;
    workDetails.hidden = !details;
    workDialog.showModal();
    workDialog.scrollTop = 0;
    document.body.classList.add("work-view-open");
  });
});
workDialog.querySelector(".work-view-close").addEventListener("click", () => workDialog.close());
workDialog.addEventListener("close", () => {
  document.body.classList.remove("work-view-open");
  workTrigger?.focus();
});
