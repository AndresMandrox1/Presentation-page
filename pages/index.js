import Head from "next/head";
import BasicLayout from "../Layout/BasicLayout";
import { TbBrandJavascript } from "react-icons/tb";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiNextdotjs,
} from "react-icons/si";
export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Andres Mandrox</title>
        <meta
          name="description"
          content="Andrés Mandrox Porfolio full stack developer javascript react node"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1>Hola, mi nombre es Andrés Mandrox.</h1>
        <p>
          Soy un desarrollador web full stack con experiencia realizando
          proyectos dedicados a la experiencia del usuario buscando una linea de
          diseño atractiva, mi conocimiento es en el entorno de desarrollo de
          javascript empleando metodologias agiles
        </p>
        <article className="stack">
          <h2>Mi Stack tecnologico:</h2>
          <ul>
            <li>
              <FaHtml5 size={30} />
              Html5
            </li>
            <li>
              <FaCss3 size={30} />
              Css3
            </li>
            <li>
              <TbBrandJavascript size={30} />
              javascript
            </li>
            <li>
              <FaReact size={30} />
              React
            </li>
            <li>
              <SiRedux size={30} />
              Redux
            </li>
            <li>
              <SiNextdotjs size={30} />
              Next.js
            </li>
            <li>
              <FaGitAlt size={30} />
              Git
            </li>
            <li>
              <FaGithub size={30} />
              GitHub
            </li>
            <li>
              <FaNodeJs size={30} />
              Node.js
            </li>
            <li>
              <SiExpress size={30} />
              Express.js
            </li>
            <li>
              <SiPostgresql size={30} />
              Postgresql
            </li>
            <li>
              <SiSequelize size={30} />
              Sequelize
            </li>
          </ul>
        </article>
      </main>
    </BasicLayout>
  );
}
