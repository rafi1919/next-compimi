const EventData = [
  {
    id: 1,
    location: "KOTA YOGYAKARTA",
    name: "Moeru",
  },
  {
    id: 2,
    location: "Surabaya",
    name: "Surabaya Matsuri 5",
  },
  {
    id: 3,
    location: "KOTA YOGYAKARTA",
    name: "Chibion Festival",
  },
  {
    id: 4,
    location: "KOTA JAKARTA PUSAT",
    name: "Anime Festival Asia 2024",
  },
];

const DayListData = [
  {
    id: 1,
    eventId: 1,
    dayOne: [
      {
        anime: "Jujutsu kaisen",
        ListCosplay: [
          {
            char: "Gojo Satoru",
            user: "ralfiantz",
          },
          {
            char: "Mechamaru",
            user: "kimizz",
          },
        ],
      },
      {
        anime: "Kimetsu no yaiba",
        ListCosplay: [
          {
            char: "Tanjiro",
            user: "Farhan",
          },
          {
            char: "Inosuke",
            user: "Fandisxx",
          },
        ],
      },
    ],
    dayTwo: [
      {
        anime: "Fairy tail",
        ListCosplay: [
          {
            char: "Natsu dragnel",
            user: "zuck",
          },
          {
            char: "Happy",
            user: "mrbeast",
          },
        ],
      },
    ],
  },
];
export { EventData, DayListData };
