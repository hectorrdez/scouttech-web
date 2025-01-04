import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BagDraw from "../../assets/bag-draw.png";
import BentoCenter from "../../assets/bento-center.png";
import Compass from "../../assets/compass.svg";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import { Button } from "../../components/ui/button";
import Counter from "../../components/ui/counter";
import { Bento, BentoCell } from "../../layouts/bento";
import { Column } from "../../layouts/column";
import Main from "../../layouts/main";
import Section from "../../layouts/section";
import ArrowUp from "../../assets/symbols/arrow-up.svg";
import logo from "../../assets/logo.svg";

export default function Landing() {
  return (
    <Main>
      <HeroSection />
      <IntroSection />
      <BentoSection />
      <ForVolunteers />
      <ForParents />
    </Main>
  );
}

function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const phrases = [
    "Tecnología para que disfrutes más y gestiones menos",
    "Simplifica tu gestión, maximiza tu impacto",
    "Conecta padres y voluntarios fácilmente",
  ];

  const generateRandomBubbles = () => {
    const bubbles = [];
    const colors = [
      "from-red-400 to-yellow-500", // Rojos y amarillos cálidos
      "from-indigo-400 to-blue-500", // Tonos índigo y azul fresco
      "from-teal-300 to-lime-400", // Verdes y lima vibrantes
      "from-pink-500 to-purple-400", // Rosas y púrpuras suaves
      "from-orange-300 to-red-500", // Naranjas y rojos intensos
      "from-cyan-400 to-blue-300", // Cian y azul claro
    ];

    for (let i = 0; i < 20; i++) {
      bubbles.push({
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        size: `${Math.random() * 100 + 100}px`,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.6, // Más visible
        animation: `animate-floating-${i % 2 === 0 ? "delay" : "reverse"}`,
        blur: `${Math.random() * 40 + 20}px`, // Desenfoque mayor
      });
    }
    return bubbles;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Cambia cada 3 segundos
    setBubbles(generateRandomBubbles());
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.querySelector("#bento-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-black z-0">
      <div className="absolute w-full h-full z-0">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={`absolute rounded-full ${bubble.animation} bg-gradient-to-br ${bubble.color}`}
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              opacity: bubble.opacity,
              filter: `blur(${bubble.blur})`, // Aplicación de desenfoque
            }}
          ></div>
        ))}
      </div>
      <div className="z-10 text-center max-w-3xl p-6 relative flex flex-col items-center justify-center gap-4">
        <img src={logo} alt="Logo" className="w-200 h-20 drop-shadow-lg" />
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl h-28 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
          <span
            className="animate-slide-fade line-clamp-2 h-full"
            key={currentPhrase}
          >
            {phrases[currentPhrase]}
          </span>
        </h1>
        <Button
          onClick={handleScroll}
          variant="default"
          size="lg"
          className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
        >
          Ver más
        </Button>
      </div>
    </section>
  );
}

function IntroSection() {
  const rowVariants = {
    hidden: { opacity: 0, y: 50 }, // Comienza con opacidad 0 y desplazado hacia abajo
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // Aparece al desplazarse
  };

  return (
    <Section id="intro-section" containerClassName="py-10 px-10">
      <h2 className="text-3xl font-bold mb-8">¿Qué es ScoutTech?</h2>
      <motion.div
        className="w-full flex justify-between items-center flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={rowVariants}
      >
        <div className="w-full md:w-1/2 py-4">
          <img
            src={img1}
            className="w-full h-auto rounded-xl"
            alt="Herramientas para voluntarios"
          />
        </div>
        <Column className="w-full md:w-1/2 py-4 px-10 gap-3">
          <h3 className="text-2xl text-muted-foreground">
            Para los voluntarios es...
          </h3>
          <p className="text-lg leading-relaxed">
            Nuestro ecosistema de herramientas está diseñado específicamente
            para empoderar a los voluntarios. Simplifica la gestión de eventos,
            crea presupuestos automatizados, centraliza la comunicación y
            documentación, y optimiza el tiempo invertido en actividades
            administrativas. Así, los voluntarios pueden enfocarse más en su
            misión: brindar experiencias significativas a los niños y jóvenes.
          </p>
        </Column>
      </motion.div>
      <motion.div
        className="w-full flex justify-between items-center flex-wrap-reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={rowVariants}
      >
        <Column className="w-full md:w-1/2 py-4 px-10 gap-3">
          <h3 className="text-2xl text-muted-foreground">
            Para los padres es...
          </h3>
          <p className="text-lg leading-relaxed">
            Como padre, podrás liberar tiempo valioso gracias a nuestra app.
            Desde inscribir a tu hijo en actividades hasta recibir información
            actualizada y contactar directamente con los voluntarios, todo está
            al alcance de tu mano. Esta herramienta conecta rápidamente a las
            familias con los grupos juveniles, facilitando el acceso a
            oportunidades únicas para tus hijos.
          </p>
        </Column>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={img2}
            className="w-full h-auto rounded-xl"
            alt="App para padres"
          />
        </div>
      </motion.div>
    </Section>
  );
}

function BentoSection() {
  const list1 = ["Optimización", "Colaboración", "Gestión eficiente"];
  const generateListItem1 = (text) => (
    <li className="flex gap-2 items-center">
      <img src={ArrowUp} alt="" />
      {text}
    </li>
  );

  const list2 = [
    "Gestión de eventos y actividades",
    "Comunicación directa con los socios",
    "Seguimiento de asistencia y actividades",
    "Inscripciones fáciles y rápidas",
  ];
  const generateListItem2 = (text) => (
    <li className="flex gap-2 items-center font-semibold italic text-lg">
      <img src={ArrowUp} alt="" />
      {text}
    </li>
  );

  return (
    <Section
      id="bento-section"
      containerClassName="py-10 justify-center items-center"
      contentClassName="flex justify-center items-center text-black px-4"
    >
      <Bento rows={3} cols={4} className="w-fit gap-4">
        <BentoCell
          cols={2}
          className="w-full h-full overflow-hidden rounded-xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 rounded-xl -z-10"></div>
          <Column className="w-full h-full items-center justify-center p-10 gap-6">
            <h2 className="text-5xl font-semibold text-center">
              Organiza y Vive tus Aventuras
            </h2>
            <Link to="/access/register" target="_self">
              <Button>Empezar ahora</Button>
            </Link>
          </Column>
        </BentoCell>
        <BentoCell
          rows={1}
          className="p-4 w-full h-full flex justify-center items-center rounded-xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-100 rounded-xl -z-10"></div>
          <img src={Compass} alt="imagen de una brújula" />
        </BentoCell>
        <BentoCell className="w-full h-full p-4 rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-100 rounded-xl -z-10"></div>
          <p className="font-semibold">Características principales:</p>
          <ul className="list-inside">
            {list1.map((text) => generateListItem1(text))}
          </ul>
        </BentoCell>
        <BentoCell className="w-full h-full p-4 rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-300 via-purple-200 to-purple-100 rounded-xl -z-10"></div>
          <ul className="list-none list-inside flex flex-col items-center justify-center gap-1 h-full">
            {list2.map((text) => generateListItem2(text))}
          </ul>
        </BentoCell>
        <BentoCell
          cols={2}
          className="w-full h-full overflow-hidden rounded-xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-green-300 to-green-100 rounded-xl -z-10"></div>
          <img
            src={BentoCenter}
            alt="Imagen centrada"
            className="w-full h-full object-cover"
          />
        </BentoCell>
        <BentoCell className="w-full h-full p-4 flex items-center justify-center rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-100 rounded-xl -z-10"></div>
          <h3 className="text-center font-bold text-2xl italic">
            Gestionar los eventos nunca fue tan rápido y sencillo
          </h3>
        </BentoCell>
        <BentoCell className="w-full h-full flex items-center justify-center rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-teal-100 rounded-xl -z-10"></div>
          <img
            src={BagDraw}
            alt="Bolsa de exploración"
            className="w-2/3 h-auto"
          />
        </BentoCell>
        <BentoCell
          cols={3}
          className="w-full h-full p-4 flex items-center justify-around rounded-xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-indigo-100 rounded-xl -z-10"></div>
          <Column className="items-center gap-2">
            <span className="text-8xl font-semibold italic">
              <Counter end={50} duration={2000} />%
            </span>
            <span className="font-medium text-xl line-clamp-2 text-center">
              Horas de gestión reducidas
            </span>
          </Column>
          <Column className="items-center gap-2">
            <span className="text-8xl font-semibold italic">
              <Counter end={99} duration={2000} />%
            </span>
            <span className="font-medium text-xl line-clamp-2 text-center">
              Gestiones asistidas
            </span>
          </Column>
          <Column className="items-center gap-2">
            <span className="text-8xl font-semibold italic">
              <Counter end={95} duration={2000} />%
            </span>
            <span className="font-medium text-xl line-clamp-2 text-center">
              Procesos simplificados
            </span>
          </Column>
          <span className="absolute bottom-5 italic text-sm">
            (Estadísticas calculadas en base a un grupo modelo)
          </span>
        </BentoCell>
      </Bento>
    </Section>
  );
}

function ForVolunteers() {
  return <Section></Section>;
}

function ForParents() {
  return <Section></Section>;
}
