import { Montserrat, Nunito } from "next/font/google";

const monstserrat = Montserrat({ subsets: ["vietnamese"], variable: "--monstserrat-font" });
const nunito = Nunito({ subsets: ["vietnamese"], variable: "--nunito-font" });

const fontsClass = [monstserrat.variable, nunito.variable].join(" ");

export default fontsClass;
