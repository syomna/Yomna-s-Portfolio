import whosapp from "../assets/whosapp.png";
import nannyFinder from "../assets/nannyFinder.png";
import ghanaFootball from "../assets/ghanaFootball.png";
import frontendDevelopment from "../assets/fontendDevelopment.jpeg";
import todo from "../assets/todo.jpeg";
import tindog from "../assets/tindog.jpeg";
import { FaBootstrap, FaReact } from "react-icons/fa";

const projects = [
  {
    image: whosapp,
    title: "Whosapp",
    description: "Mobile app for users to get the nearst services.",
    modalDescription:
      "In the project I did build two apps one for the users and the other for the admin Service providers can create their services and users can search by location and contact the service provider.",
    technologies:
      "Flutter\n - BloC - Clean Structure - Google Maps - Firebase (Authentication - Firestore - Storage - Push Notifications)",
    isApp: true,
    onUpwork: true,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.whos.whosapp",
    appStoreLink: "https://apps.apple.com/eg/app/whosapp-app/id1642543173",
  },

  {
    image: nannyFinder,
    title: "Nanny Finder",
    description: "Mobile app for contacting & hiring nannies.",
    modalDescription:
      "The app has 2 types of users to hire or get hired where users get to see filtered user depending on their preferences and contact each other via WhatsApp, email and phone number",
    technologies:
      "Flutter\n - BloC - Clean Structure - Firebase (Authentication - Firestore - Storage)",
    isApp: true,
    onUpwork: true,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
    appStoreLink: "https://apps.apple.com/app/id6443669769",
  },
  {
    image: ghanaFootball,
    title: "Ghana Football App",
    description: "Mobile app for streaming football matching.",
    modalDescription:
      "I did changes to this project migration the app to null safety improving the ui and the architecture setup.",
    technologies:
      "Flutter\n - BloC - Clean Structure - Firebase (Deep linking - Firebase analytics)",
    isApp: true,
    onUpwork: true,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
    appStoreLink:
      "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
  },

  {
    image: todo,
    title: "To-do React App",
    description: "React web app to add to-dos.",
    modalDescription:
      "To-do is a React Js app where user can save their to-dos offline in the browser.",
    technologies: "React - Redux toolkit - Tailwind - Papercss - vite",
    websiteLink: "https://syomna.github.io/Todo-React-App/",
    githubLink: "https://github.com/syomna/Todo-React-App",
  },
  {
    image: tindog,
    title: "Tindog",
    description: "Landing page for tindog app.",
    modalDescription: "Tindog is a landing page built using bootstrap.",
    technologies: "HTML - CSS - Bootstrap",
    websiteLink: "https://syomna.github.io/TinDog-Web-Design/",
    githubLink: "https://github.com/syomna/TinDog-Web-Design",
  },
  {
    image: frontendDevelopment,
    title: "Front-end Landing Page",
    description: "Landing page for front-end Development.",
    modalDescription:
      "Front-end Development is a landing page built using bootstrap.",
    technologies: "HTML - CSS - SCSS - Bootstrap",
    websiteLink: "https://syomna.github.io/Front-end-Web-Development-WebPage/",
    githubLink: "https://github.com/syomna/Front-end-Web-Development-WebPage",
  },
];

const skills = [
  {
    title: "HTML",
    percentage: "70",
  },
  {
    title: "CSS",
    percentage: "60",
  },
  {
    title: "JavaScript",
    percentage: "70",
  },
  {
    title: "Dart",
    percentage: "75",
  },
  {
    title: "SQL",
    percentage: "55",
  },
  {
    title: "API Integeration",
    percentage: "75",
  },
  {
    title: "Git & GitHub",
    percentage: "70",
  },
];

export { projects, skills };
