import {
  faTicket,
  faFolderOpen,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
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

export default cardsData;