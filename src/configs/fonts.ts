import { Montserrat, Nunito} from "next/font/google";

const monstserrat = Montserrat({ subsets: ["vietnamese", "latin-ext"], variable: "--monstserrat-font" });
const nunito = Nunito({ subsets: ["vietnamese", "latin-ext", "cyrillic-ext", "latin"], variable: "--nunito-font" });

const fontsClass = [monstserrat.variable, nunito.variable].join(" ");

export default fontsClass;
