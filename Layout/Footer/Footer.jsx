import React from "react";
import S from "./Footer.module.scss";
import Image from "next/image";
import perfil from "../../public/perfil.jpg";
import {
  BsGithub,
  BsLinkedin,
  BsFileEarmarkPersonFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <footer id="contacto">
      <div className={S.fo}>
        <div className={S.about}>
          <div className={S.img}>
            <Image src={perfil} />
          </div>
          <p className={S.text}>
            Soy Andrés Mandrox, Full Stack Developer enfocado en el desarrollo
            web (JavaScript, React.js, PostgreSQL, Node.js), con experiencia
            creando múltiples aplicaciones web con diseños atractivos y fáciles
            de usar, cuento con estudios de ingeniería en ciencias y sistemas,
            soy un apasionado de la tecnología en general y de la manera en que
            esta nos cambia la vida día a día
          </p>
        </div>
        <div className={S.box}>
          <div className={S.media}>
            <p>
              <a href="https://github.com/AndresMandrox1" target="_blank">
                <span>
                  <BsGithub size={30} />
                  GitHub
                </span>
                Sigueme en GitHub para observar en que proyecto me encuentro
                trabajando actualmente asi como para ver trabajos pasados
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/andres-mandrox-508b9a234/"
                target="_blank"
              >
                <span>
                  <BsLinkedin size={30} />
                  Linkedin
                </span>
                Puedes contactarme por Linkedin
              </a>
            </p>
          </div>
          <div className={`${S.media} ${S.dos}`}>
            <p>
              <span>
                <GrMail size={30} />
                andreslopez778@rockemail.com
              </span>
            </p>
            <p>
              <span>
                <BsFillPhoneFill size={30} />
                {"(+502) 56294194"}
              </span>
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/16nf6JkL6QucZlm9rqYZ54NN9e-HVPUQf/view?usp=sharing"
                target="_blank"
              >
                <span>
                  <BsFileEarmarkPersonFill size={30} />
                  Descarga Mi CV
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
