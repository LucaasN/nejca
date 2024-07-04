import styles from "./page.module.css";
import { Header, About, Interests, ContactForm, Footer } from "./components";

export default function Home() {
  const user = {
    name: "Guillermo Rauch",
    profileImage: "/rauch.jpg",
    description:
      "Soy ingeniero de software y director ejecutivo de Vercel. Soy originario de Lanús, Buenos Aires, Argentina. Debo gran parte de mi carrera a la Web y al Código Abierto. Pasé mi adolescencia defendiendo y enseñando a la gente cómo usar Linux y luego desarrollé una pasión por JavaScript y el desarrollo web. Después de unirme al equipo central de MooTools, conseguí mi primer trabajo de tiempo completo como ingeniero frontend a los 18 años y me mudé a San Francisco, CA. Fundé mi primera empresa, Cloudup, en SF, que luego fue adquirida por Automattic, la empresa detrás de WordPress, para impulsar su tecnología de edición y creación de sitios. Después de participar en la creación de numerosos proyectos influyentes de código abierto como Socket.IO y Mongoose, vi la oportunidad de crear herramientas e infraestructura en la nube para hacer que la Web sea más rápida, con un enfoque en la experiencia del desarrollador (DX). Nacieron Next.js y Vercel. Nuestra plataforma ahora ayuda a impulsar la presencia en línea de empresas como Washington Post, Porsche, Under Armour y Nintendo.",
    interests: [
      "Web development",
      "Open Source",
      "Linux",
      "Technology",
      "JavaScript",
      "Vercel",
      "React",
      "Next.js",
      "Node.js",
      "Cloud Infrastructure",
    ],
  };

  return (
    <section>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header name={user.name} profileImage={user.profileImage} />
          <div className={styles.row}>
            <About description={user.description} />
            <Interests interests={user.interests} />
          </div>
          <ContactForm />
        </main>
      </div>
      <Footer />
    </section>
  );
}
