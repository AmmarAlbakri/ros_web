import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiHelpCircle,BiRegistered,BiTask,BiAnalyse,BiError } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import {MdOutlineContactMail,MdOutlineDashboardCustomize,MdOutlineTouchApp, MdOutlineHealthAndSafety,MdSettingsBackupRestore,MdOutlineAltRoute } from "react-icons/md";
import { useState } from "react";
import { GiAutoRepair,GiBookshelf,GiDuration,GiPositionMarker } from "react-icons/gi";
import { AiOutlineSafety, AiOutlineDashboard } from "react-icons/ai";
import { AiTwotoneSound,AiFillDashboard, AiOutlineUsergroupDelete } from "react-icons/ai";
import {IoGameControllerOutline, IoMapSharp,IoInformationCircleOutline} from "react-icons/io5";
import { RiDashboardLine,RiPagesFill,RiSettings5Line,RiRemoteControlFill,RiGuideFill} from "react-icons/ri";
import { HiOutlineLogout,HiUserGroup,HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FiMonitor } from "react-icons/fi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BsListTask,BsBookHalf } from "react-icons/bs";
import { TbVersions,TbManualGearbox } from "react-icons/tb";
import { SiProbot } from "react-icons/si";
import { RiDashboard2Line,RiFolderSettingsLine } from "react-icons/ri";
import { VscDashboard,VscRemoteExplorer } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarmenu";
import "../App.css";

const routes = [
  {
    path: "/",
    name: "Dashboards",
    icon: <AiOutlineDashboard size={25}/>,
    subRoutes: [
      {
        path: "/Dashboards/DefaultDashboard",
        name: "Default Dashboard ",
        icon: <MdOutlineDashboardCustomize size={25}/>,
      },
    
      {
        path: "/Dashboards/Test",
        name: "Test ",
        icon: <VscDashboard size={25} />,
      },
      {
        path: "/Dashboards/Dashboards",
        name: " Dashboards ",
        icon: <RiDashboardLine size={25}/>,
      },
    ],
  },

  {
    path: "/setup",
    name: "Setup",
    icon: <GiAutoRepair size={25}/>,
    subRoutes: [
      {
        path: "/setup/PositionMarker",
        name: "Position Marker",
        icon: <GiPositionMarker size={25}/>,
        },
      {
        path: "/setup/Missions",
        name: "Missions",
        icon: <BiTask size={25}/>,
      },
      {
        path: "/setup/Maps",
        name: "Maps ",
        icon: <IoMapSharp size={25}/>,
      },
      {
        path: "/setup/sounds",
        name: " Sounds ",
        icon: <AiTwotoneSound size={25}/>,
      },
      {
        path: "/setup/Transitions",
        name: "Transitions",
        icon: <RiPagesFill size={25}/>,
      },
      {
        path: "/setup/Users",
        name: "Users ",
        icon: <ImUsers size={25}/>,
      },
      {
        path: "/setup/UserGroups",
        name: " User Groups ",
        icon: <HiUserGroup size={25}/>,
      },
      {
        path: "/setup/ShelfTypes",
        name: "Shelf Types",
        icon: <GiBookshelf size={25}/>,
      },
      {
        path: "/setup/iomodules",
        name: "I/O Modules ",
        icon: <RiRemoteControlFill size={25}/>,
      },
      {
        path: "/setup/paths",
        name: " Paths ",
        icon: <MdOutlineAltRoute size={25}/>,
      },
      {
        path: "/setup/PathGuides",
        name: "Path Guides",
        icon: <RiGuideFill size={25}/>,
      },
      {
        path:  "/setup/manualcontrol",
        name: "Manual Control",
         icon: <IoGameControllerOutline size={25}/>,
      },
    ],
  },
  {
    path: "/monitoring",
    name: "Monitoring",
    icon: <FiMonitor size={25}/>,
    subRoutes: [
      {
        path:  "/monitoring/analytics",
        name: "Analytics",
         icon: <BiAnalyse size={25}/>,
      },
      {
        path: "/monitoring/SystemLog",
        name: "System Log ",
        icon: <BsJournalBookmarkFill size={25}/>,
      },
      {
        path: "/monitoring/ErrorLogs",
        name: " Error Logs ",
        icon: <BiError size={25}/>,
      },
      {
        path:  "/monitoring/hardwarehealt",
        name: "Hardware Healt",
         icon: <MdOutlineHealthAndSafety size={25}/>,
      },
      {
        path: "/monitoring/safetysystem",
        name: "Safety System ",
        icon: <AiOutlineSafety size={25}/>,
      },
      {
        path: "/monitoring/missionLog",
        name: " Mission Log ",
        icon: <BsListTask size={25}/>,
      },
    ],
  },
 
  {
    path: "/System",
    name: "System",
    icon: <RiFolderSettingsLine size={25}/>,
    subRoutes: [
      {
        path:  "/system/settings",
        name: "Settings",
         icon: <RiSettings5Line size={25}/>,
      },
      {
        path: "/system/Processes",
        name: "Processes ",
        icon: <GiDuration size={25}/>,
      },
      {
        path: "/system/plcregister",
        name: " PLC register  ",
        icon: <BiRegistered size={25}/>,
      },
      {
        path:  "/system/SoftwareVersions",
        name: "Software Versions",
         icon: <TbVersions size={25}/>,
      },
      {
        path: "/system/backups",
        name: "Backups ",
        icon: <MdSettingsBackupRestore />,
      },
      {
        path: "/system/RobotSetup",
        name: " Robot Setup ",
        icon: <SiProbot size={25}/>,
      },
      {
        path: "/system/triggers",
        name: " Triggers ",
        icon: <MdOutlineTouchApp size={25}/>,
      },
    ],
  },
  
  {
    path: "/Help",
    name: "Help",
    icon: <BiHelpCircle size={25}/>,
    subRoutes: [
      {
        path:  "/Help/robotinformation",
        name: "Robot İnformation",
         icon: <IoInformationCircleOutline size={25}/>,
      },
      {
        path:  "/Help/apidocumantation",
        name: "API documantation",
         icon: <HiOutlineDocumentDuplicate size={25}/>,
      },
      {
        path:  "/Help/remoteaccess",
        name: "Remote Access",
         icon: <VscRemoteExplorer size={25}/>,
      },
      {
        path:  "/Help/servicebook",
        name: "Service Book",
         icon: <BsBookHalf size={25}/>,
      },
      {
        path:  "/Help/manual",
        name: "Manual",
         icon: <TbManualGearbox size={25}/>,
        },
        {
          path:  "/Help/ContactUs",
          name: "Contact Us",
          icon: <MdOutlineContactMail size={25}/>,
          },
      ],
    },
    {
      path: "/Logout",
      name: "Logout",
      icon: <HiOutlineLogout size={25}/>,}
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "18%" : "3%",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Epik Robotik
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
