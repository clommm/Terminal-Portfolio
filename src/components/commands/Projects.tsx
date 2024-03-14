import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Currently in the process of learning <br />
        Most of these codes are improvised or rewritten codes that I forked from others
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Basic Keylogger",
    desc: "A simple keylogger that I made",
    url: "https://github.com/clommm/basic-keylogger",
  },
  {
    id: 2,
    title: "Keylogger+",
    desc: "A more advanced keylogger that I made, this time with backspace and special keys support. Log file is also made to look cleaner",
    url: "https://github.com/clommm/upgraded-keylogger",
  },
  {
    id: 3,
    title: "Lyxnity AIO",
    desc: "An all in account checker made in python, with proxy support and more. This was not coded by me, credits to Mickey758. I just improved the code a little",
    url: "https://github.com/clommm/Lyxnity-AIO",
  },
  {
    id: 4,
    title: "Discord Account Generator bot",
    desc: "A discord bot with moderation, account storing and distributing capabilities. A little broken, feel free to fix or improvise it.",
    url: "https://github.com/clommm/Account-Gen-Bot",
  },
];

export default Projects;
