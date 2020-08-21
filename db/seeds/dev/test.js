exports.seed = async (knex) => {
  await knex("contact").del();
  await knex("reviews").del();
  await knex("contact").insert(mockContacts);
  await knex("reviews").insert(mockReviews);
};

const mockContacts = [
  {
    name: "Arnold S",
    email: "illbeback@gmail.com",
    description: "I'd like to have my living room renovated",
    phone: 1112223333,
  },
  {
    name: "Jarold Newmann",
    email: "jarold@gmail.com",
    description:
      "I am interested in getting a quote in regards to my house's entryway.",
    phone: 4206966969,
  },
  {
    name: "Chuck Norris",
    email: "karatechop2heaven@hotmail.com",
    description:
      "I round housed my entire house apart, I need repairs. Call ASAP!",
    phone: 3301112222,
  },
];

const mockReviews = [
  {
    name: "John Smith",
    email: "johnsmith@gmail.com",
    review: "Mr. Gibson turned my asbestos infested kitchen into a work of art",
    phone: 1112223333,
    verified: true,
  },
  {
    name: "Randy Johnson",
    email: "imrandybit@yahoo.com",
    review:
      "My living room was remodeled within the week. Definitely recommend to anyone looking to have work done on their house.",
    phone: 2223334444,
    verified: true,
  },
  {
    name: "Dr. Cutzurbubzoff",
    email: "iamarealdoctor@gmail.com",
    review:
      "With my incredibly large salary I could easily afford having Timberline remodel my entire house. It turned out great!",
    phone: 6667777777,
    verified: true,
  },
];
