import { AiFillDashboard } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";

const categories = [
  {
    title: "Dashboards",
    icon: AiFillDashboard,
    items: [
      {
        title: "Dashboard 1",
        icon: BsFillFileBarGraphFill,
        path: "/dashboard",
      },
      {
        title: "Dashboard 2",
        icon: GoGraph,
        path: "/settings",
        // items: [
        //   {
        //     title: "Dashboard 1",
        //     icon: BsFillFileBarGraphFill,
        //     path: "/dashboard",
        //   },
        // ],
      },
    ],
  },
];

export default categories;
