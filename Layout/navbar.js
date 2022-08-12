import * as layout from "./layout.module.scss";
import Image from "next/image";
import logo from "../public/logo v3.png";

export default function Navbar() {
  return (
    <nav>
      <div className={layout.Navbar}>
        <div className={layout.img}>
          <Image src={logo} alt="Logo" width={75} height={56} />
        </div>
        <div className={layout.list}>
          <ul>
            <li>
              <a href="#proyectos">Mis Proyectos</a>
            </li>
            <li>
              <a href="#contacto">
                <button className={layout.button}>Contactame</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
