const responsibilitiesChip = {
  PROJECT_MANAGEMENT: "Project Management",
  CREATIVE_DIRECTION: "Creative Direction",
  NARRATIVE_DESIGN: "Narrative Design",
  LEVEL_DESIGN: "Level Design",
  GAMEPLAY_DESIGN: "Gameplay Design"
};

const projectInfo = [
  {
    title: "Down at the Docks",
    img: "../assets/game_logos/czero-icon.png",
    show: false,
    imgWidth: 720,
    imgHeight: 540
  },
  {
    title: "ToyMaker",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  },
  {
    title: "Zen Garden",
    img: "../assets/game_logos/czero-icon.png",
    show: false
  },
  {
    title: "TF Mind",
    img: "../assets/game_logos/czero-icon.png",
    show: false
  },
  {
    title: "Revista Copel AR",
    img: "../assets/game_logos/czero-icon.png",
    show: true,
    imgWidth: 300,
    imgAR: 9 / 21,
    carouselContent: [
      {
        content:
          "https://drive.google.com/uc?id=1G_zqi3-sSqve0Go9rFGjjDxZvTV6tIGE"
      },
      {
        content:
          "https://drive.google.com/uc?id=11yaa9D8jYfzMxET3_Nf-XtyqyBSe39GP"
      },
      {
        content:
          "https://drive.google.com/uc?id=1mzKfq9aE26MnQ5-oEyG0T1gRzrD75TF7"
      },
      {
        content:
          "https://drive.google.com/uc?id=1kCNTbsCsSvIcA6DacuNiLepaxwKwpDeY"
      },
      {
        content:
          "https://drive.google.com/uc?id=1WpiBstxjBRQ_DK3xeG0Bh-3DbwbdypKH"
      }
    ],
    responsibilites: [
      responsibilitiesChip.PROJECT_MANAGEMENT,
      responsibilitiesChip.CREATIVE_DIRECTION
    ]
  },
  {
    title: "Pac-Magique",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  },
  {
    title: "Magique Runner",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  },
  {
    title: "Unmixing",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  },
  {
    title: "Paint Magique",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  },
  {
    title: "Carnival Zero",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  },
  {
    title: "Canyon Fly By",
    img: "../assets/game_logos/czero-icon.png",
    show: true
  }
];

export default projectInfo;
