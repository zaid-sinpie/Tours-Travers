const path = require("path");

// Resolve image paths correctly
// const bg1 = path.resolve(__dirname, "./assets/bg1.jpg");
// const bg2 = path.resolve(__dirname, "./assets/bg2.jpg");
// const bg3 = path.resolve(__dirname, "./assets/bg3.jpg");
// const bg4 = path.resolve(__dirname, "./assets/bg4.jpg");

const toursDataInternational = [
  {
    id: 1,
    name: "Inazuma",
    description:
      "Inazuma is a city in Japan, known for its beautiful scenery and rich culture.",
    price: 10000,
    // image: bg1,
    image:
      "https://yt3.ggpht.com/9GBlohHLVeF60pGyGVMjg9csLuRhM9SdkfXri7O9S-bCUtC9_G3CagO2gbnRt7iWYAZDANzkQ-KIig=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
  {
    id: 2,
    name: "Tokyo",
    description:
      "Tokyo is a city in Japan, known for its vibrant culture and rich history.",
    price: 20000,
    // image: bg2,
    image:
      "https://yt3.ggpht.com/yfdgSRHE4WUVfOwDSJMDXlq-r21dOtwtMxBROAhN2cKYwVt2FAtaIvPEA8gfBG-tVVb9Sn6jr2cPg80=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
  {
    id: 3,
    name: "Kyoto",
    description:
      "Kyoto is a city in Japan, known for its beautiful temples and gardens.",
    price: 30000,
    // image: bg3,
    image:
      "https://yt3.ggpht.com/stz4evlKd1XVPpkqesFe5onVaz7e_r6ZCGTeI9Ue3pzziOlIO98iibVFnJF6pwCGSDkIFW8Z4s-p=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
  {
    id: 4,
    name: "Osaka",
    description:
      "Osaka is a city in Japan, known for its delicious food and vibrant nightlife.",
    price: 40000,
    // image: bg4,
    image:
      "https://yt3.ggpht.com/F8DE4BauG_D2W9UcDJclWB3uVYP1LCXlojRlS5t8myzzDhL-3l6Hu_0bA8bIwN3C_SBWyuHOabhVfOU=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
];

const toursDataIndian = [
  {
    id: 1,
    name: "Goa",
    description:
      "Goa is a state in India, known for its beautiful beaches and vibrant culture.",
    price: 10000,
    // image: bg1,
    image:
      "https://yt3.ggpht.com/qc1pN-KqxQNYI7XhDIc7zxBV5f4VPKll8p5Qw_GgjQm-9PWIdM5z6Vm8Ik-qrdy0K6s_zonGZHLuhg=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
  {
    id: 2,
    name: "Mumbai",
    description:
      "Mumbai is a city in India, known for its fast-paced lifestyle and rich history.",
    price: 20000,
    // image: bg2,
    image:
      "https://yt3.ggpht.com/3ler5LOqgxHh5PWtnmHuYaq9lyX_D-ztHDCw9qxdWRnMDzep_5tVOEQbhivBF7B-xsmd4o9gdFAPpA=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
  {
    id: 3,
    name: "Delhi",
    description:
      "Delhi is a city in India, known for its rich history and cultural landmarks.",
    price: 30000,
    // image: bg3,
    image:
      "https://yt3.ggpht.com/Z_po5qSpq1uylT_9NoNURYQn38BFmJjK6d1NfHXKETwboDi2EpPTe2Ae6PWagNb1aE__OvgJ3FhwLA=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
  {
    id: 4,
    name: "Kerala",
    description:
      "Kerala is a state in India, known for its beautiful backwaters and rich cultural heritage.",
    price: 40000,
    // image: bg4,
    image:
      "https://yt3.ggpht.com/vjFVRwHTPDZqkbC6sVYiusAQA2SH0iLh4W2OmIjI-Qmh7ZreXZK50SZrhaKqNFR2JJ2gQCyIZfso=s640-rw-nd-v1",
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  },
];

module.exports = { toursDataInternational, toursDataIndian };
