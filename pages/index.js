import Head from "next/head";
import BasicLayout from "../Layout/BasicLayout";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TbBrandJavascript } from "react-icons/tb";
import Image from "next/image";
import clima from "../public/demo proyectos/Demo clima short.png";
import peliculas from "../public/demo proyectos/demo peliculas.png";
import perros from "../public/demo proyectos/demo Dogs.png";
import Ecommerce from "../public/demo proyectos/demo Ecommerce.png";
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
        <p className="description">
          Soy un desarrollador web full stack con experiencia realizando
          proyectos dedicados a la experiencia del usuario buscando una línea de
          diseño atractiva, mi conocimiento es en el entorno de desarrollo de
          javascript empleando metodologías ágiles
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
        <article className="projects">
          <h2 id="proyectos">Proyectos: </h2>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
            <div className="project">
              <div className="text-project">
                <span>App Clima </span>
                <span className="date">abril 2022</span>
                <p>
                  Plataforma simple para visualización de datos climatológicos
                  obtenidos de openWeather API basada en búsquedas del usuario
                  con soporte para el seguimiento de múltiples regiones
                  meteorológicas a la vez
                </p>
                <a
                  href="https://app-clima-andresmandrox1.vercel.app/"
                  className="toDeploy"
                  target="_blank"
                >
                  Visitar
                </a>
                <a
                  href="https://github.com/AndresMandrox1/App_Clima"
                  target="_blank"
                  className="toRepo"
                >
                  Repositorio
                </a>
              </div>
              <div className="imgs">
                <Image src={clima} alt="Screen Shot Clima app " />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce="true"
          >
            <div className="project">
              <div className="text-project">
                <span>App Películas </span>
                <span className="date">abril 2022</span>
                <p>
                  Plataforma para visualización de un catálogo de 10 películas
                  con base en la búsqueda del usuario, con opción a ver más
                  detalles acerca de la película de elección del usuario, se
                  muestra información obtenida de OmdB API
                </p>
                <a
                  href="https://app-peliculas-andresmandrox1.vercel.app/"
                  className="toDeploy"
                  target="_blank"
                >
                  Visitar
                </a>
                <a
                  href="https://github.com/AndresMandrox1/App_peliculas"
                  target="_blank"
                  className="toRepo"
                >
                  Repositorio
                </a>
              </div>
              <div className="imgs">
                <Image src={peliculas} alt="ScreenShot App Peliculas " />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
            <div className="project">
              <div className="text-project">
                <span>The Dogs APP </span>
                <span className="date">mayo 2022</span>
                <p>
                  Single page aplication creada para mostrar un amplio catálogo
                  de razas de perros con la posibilidad de realizar búsquedas y
                  filtros atrevés de las categorías de las razas tanto por
                  comportamientos como por nombres, así como permite añadir
                  nuevas razas por medio de un formulario validado a la base de
                  datos, la información se obtiene de TheDogAPI
                </p>
                <a
                  href="https://pi-dogs-main-andresmandrox1.vercel.app/"
                  className="toDeploy"
                  target="_blank"
                >
                  Visitar
                </a>
                <a
                  href="https://github.com/AndresMandrox1/PI-Dogs"
                  target="_blank"
                  className="toRepo"
                >
                  Repositorio
                </a>
              </div>
              <div className="imgs">
                <Image src={perros} alt="ScreenShot Dogs app" />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOnce="true"
          >
            <div className="project">
              <div className="text-project">
                <span>Ecommerce </span>
                <span className="date">junio 2022</span>
                <p>
                  Tienda virtual totalmente funcional con productos tecnológicos
                  de varias categorías, capaz de filtrar productos, añadir
                  productos al listado de favoritos, realizar compras por medio
                  de MercadoPago, así como cuenta con panel de administración de
                  la página para poder ser editada sin ayuda del desarrollador
                </p>
                <a
                  href="https://e-commerce-pf.vercel.app/"
                  className="toDeploy"
                  target="_blank"
                >
                  Visitar
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ofcCBmkEEzU"
                  target="_blank"
                  className="toRepo"
                >
                  Video Muestra
                </a>
              </div>
              <div className="imgs">
                <Image src={Ecommerce} alt="ScreenShot Dogs app" />
              </div>
            </div>
          </AnimationOnScroll>
        </article>
      </main>
    </BasicLayout>
  );
}
