import emdbThumb1 from "../../../public/assets/images/emdb-thumbnail-1.jpg";
import emdbThumb2 from "../../../public/assets/images/emdb-thumbnail-2.jpg";
import emdbThumb3 from "../../../public/assets/images/emdb-thumbnail-3.jpg";

import supataskThumb1 from "../../../public/assets/images/supatask-thumbnail-1.jpg";
import supataskThumb2 from "../../../public/assets/images/supatask-thumbnail-2.jpg";
import supataskThumb3 from "../../../public/assets/images/supatask-thumbnail-3.jpg";

import moongazerThumb1 from "../../../public/assets/images/moongazer-thumbnail-1.jpg";
import moongazerThumb2 from "../../../public/assets/images/moongazer-thumbnail-2.jpg";
import moongazerThumb3 from "../../../public/assets/images/moongazer-thumbnail-3.jpg";

export const projectsData = [
  {
    id: 0,
    title: "EMDB",
    description:
      "Movie database clone, allowing users to find information on a range of Movies and TV Shows.",
    links: {
      github: "https://github.com/eagrcode/EMDB",
      live: "https://emdb-eagrcode.netlify.app/",
    },
    tags: {
      1: "React",
      2: "TMDB api",
      3: "Tanstack Query",
      4: "ViteJS",
      5: "Netlify",
    },

    images: {
      1: emdbThumb1,
      2: emdbThumb2,
      3: emdbThumb3,
    },
    alt: "EMDB thumbnail",
  },

  {
    id: 1,
    title: "Supatask",
    description:
      "Full-stack task application featuring user authentication and CRUD functionality. ",
    links: {
      github: "https://github.com/eagrcode/supatask",
      live: "https://supatask.vercel.app/",
    },
    tags: {
      1: "React",
      2: "Supabase",
      3: "ViteJS",
      4: "Vercel",
      5: "Auth",
    },

    images: {
      1: supataskThumb1,
      2: supataskThumb2,
      3: supataskThumb3,
    },
    alt: "supatask thumbnail",
  },

  {
    id: 2,
    title: "MoonGazer Ceremonies",
    description: "Business page for Lincolnshire based Celebrant.",
    links: {
      github: "https://github.com/eagrcode/moongazer-ceremonies",
      live: "https://moongazerceremonies.co.uk/",
    },
    tags: {
      1: "React",
      2: "ViteJS",
      3: "Netlify",
    },

    images: {
      1: moongazerThumb1,
      2: moongazerThumb2,
      3: moongazerThumb3,
    },
    alt: "moongazer ceremonies thumbnail",
  },

  {
    id: 3,
    title: "Eagrcode",
    description: "Personal portfolio for Front-end Developer Elliot Robinson.",
    links: {
      github: "https://github.com/eagrcode/EMDB",
      live: "https://eagrcode.dev",
    },
    tags: {
      1: "Next.js",
      2: "Vercel",
      3: "TypeScript",
    },

    images: {
      1: emdbThumb1,
      2: emdbThumb2,
      3: emdbThumb3,
    },
    alt: "eagrcode.dev thumbnail",
  },
];
