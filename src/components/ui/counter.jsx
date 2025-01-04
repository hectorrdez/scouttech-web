import { useState, useEffect, useRef } from "react";

export default function Counter({
  start = 0,
  step = 1,
  end = 100,
  duration = 10000, // Duración total en milisegundos
}) {
  const [count, setCount] = useState(start);
  const [startCounting, setStartCounting] = useState(false); // Para activar el contador
  const counterRef = useRef(null); // Referencia al elemento del contador

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Activa el contador si es visible
        }
      },
      { threshold: 0.1 } // Activar cuando al menos el 10% del elemento es visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Limpieza del observer
      }
    };
  }, []);

  useEffect(() => {
    if (!startCounting) return; // No iniciar si aún no es visible

    const totalSteps = Math.ceil((end - start) / step); // Número total de pasos
    const startTime = Date.now(); // Tiempo inicial

    const easeOut = (t) => 1 - Math.pow(1 - t, 3); // Función de ease-out cúbica

    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Progreso (de 0 a 1)

      const easedProgress = easeOut(progress); // Aplicar ease-out al progreso
      const nextCount = Math.round(start + easedProgress * (end - start)); // Calcular el valor siguiente

      setCount(nextCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    // Iniciar la animación
    requestAnimationFrame(updateCounter);

    // No necesitamos limpiar requestAnimationFrame porque solo se ejecuta mientras está activo
  }, [startCounting, start, step, end, duration]);

  return <span ref={counterRef}>{count}</span>;
}
