import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiGit, DiGithubBadge } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiUnrealengine,
  SiVite,
  SiBlender,
} from "react-icons/si";

export default [
  { name: "HTML", icon: <AiOutlineHtml5 />, skillLvl: "Advanced" },
  { name: "CSS", icon: <DiCss3 />, skillLvl: "Advanced" },
  { name: "JavaScript", icon: <SiJavascript />, skillLvl: "Advanced" },
  { name: "React", icon: <SiReact />, skillLvl: "Advanced" },
  { name: "SCSS", icon: <DiSass />, skillLvl: "Intermediate" },
  { name: "Tailwind", icon: <SiTailwindcss />, skillLvl: "Advanced" },
  { name: "Git", icon: <DiGit />, skillLvl: "Advanced" },
  { name: "GitHub", icon: <DiGithubBadge />, skillLvl: "Advanced" },
  { name: "Figma", icon: <SiFigma />, skillLvl: "Advanced" },
  { name: "Vite", icon: <SiVite />, skillLvl: "Advanced" },
  {
    name: "Unreal Engine",
    icon: <SiUnrealengine />,
    skillLvl: "Intermediate",
  },
  { name: "Blender", icon: <SiBlender />, skillLvl: "Beginner" },
];
