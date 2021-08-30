const ResumeComponents = {
  applications: [
    {
      name: "First Responder System",
      repoLink: "Due to a NDA, this repository is unavailable",
      description:
        "A crisis response application to inform responders and request aid",
      bulletPoints: [
        " Created secure, encrypted postgreSQL database for users and administrators information",
        " Architectured login, registration, and session cookie modules for user authentication",
        " Implemented geolocation API to pinpoint all user locations by client organization",
      ],
    },
    {
      name: "Help-Me-Out",
      repoLink: "https://github.com/BlueOceanAtlantic/help-me-out",
      description:
        "DIY social network for connecting with builders in your community",
      bulletPoints: [
        " Constructed and modularized user profile with React for navigability and UX",
        " Optimized storage/transformation of application images applying the Cloudinary API in local uploads and database retrieval",
        "Refactored application for component reusability reducing latency by 30%",
      ],
    },
    {
      name: "Hopper",
      repoLink: "https://github.com/thehackslayingslashers/hopper",
      description: "Concept eCommerce website for clothing retail",
      bulletPoints: [
        "Designed Q&A section and search algorithm for application using React/CSS",
        "Architectured page state inheritance to save memory and implemented a parsing algorithm for server response to format incoming product data accurately and accessibility",
        "Coordinated front-end implementation from scratch with agile engineering team of 3",
      ],
    },
    {
      name: "Python",
      repoLink: "https://github.com/Python-rfp51/Python",
      description: "API for eCommerce application",
      bulletPoints: [
        "Created customer review database to store 20 million records of customer product reviews",
        "Automated legacy data parsing by writing data-transformation algorithm for ease of data transfer",
        "Optimized site for average query speed under 20 milliseconds with Loader.io upon deployment",
      ],
    },
  ],

  professionalExperience: [
    {
      company: "U.S. Army",
      position: "Captain(91A)",
      yearsActive: "2012-2017",
      bulletPoints: [
        "Received Army Commendation Medal and Army Achievement Medal",
        "Led platoon of 53 Soldiers to achieve an average fleet combat readiness score of 94%, by meticulously tracking property and effectively managing resources to maintain equipment",
        "Supervised $2M+ of government equipment, ensuring inventory accuracy and readiness",
      ],
    },
    {
      company: "Accurus Aerospace",
      position: "Machinist",
      yearsActive: "2017",
      bulletPoints: [
        " Machined $10M+ of aircraft components for Boeing, Gulfstream, DoD",
        " Certified aircraft safety by cleaning, filing, and inspecting parts for regulation compliance",
      ],
    },
  ],
  education: [
    {
      school: "Hack Reactor",
      major: "Software Engineering Immersive",
      year: 2021,
    },
    {
      school: "Army Logistics University",
      major: "Basic Officer Leader Course",
      year: 2013,
    },
    {
      school: "Georgia State University",
      major: "B. A. Linguistics",
      year: 2012,
    },
  ],
};

module.exports = ResumeComponents;
