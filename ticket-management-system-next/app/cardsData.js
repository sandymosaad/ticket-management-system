import {
  faTicket,
  faFolderOpen,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
  faChartBar,
  faUsers 
} from "@fortawesome/free-solid-svg-icons";

const cardsData = [
  {
    title: "Total Tickets",
    icon: faTicket,
  },
  {
    title: "Open",
    icon: faFolderOpen,
  },
  {
    title: "In Progress",
    icon: faSpinner,
  },
  {
    title: "Resolved",
    icon: faCheckCircle,
  },
  {
    title: "Closed",
    icon: faTimesCircle,
  },
];

const staticCardsDataForLandingPage = [
  {
    icon: faTicket,
    title: "Ticket Tracking",
    body: "Create, update, and track tickets with ease. Keep your team aligned on every task.",
  },
  {
    icon: faCheckCircle,
    title: "Status Management",
    body: "Monitor ticket status from Open to Closed. Stay informed at every stage of resolution.",
  },
  {
    icon: faChartBar,
    title: "Analytics Dashboard",
    body: "Get instant insights with summary statistics and visual reports on your tickets.",
  },
  {
    icon: faUsers,
    title: "Team Collaboration",
    body: "Empower your team with admin tools to add, edit, and delete tickets efficiently.",
  },
];

export { cardsData, staticCardsDataForLandingPage };
