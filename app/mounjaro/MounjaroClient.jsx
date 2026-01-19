"use client"

import Image from "next/image"

export default function MounjaroClient() {
  return (
    <>
      {/* HEADER CON VIDEO */}
      <section className="relative h-screen overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/mounjaro-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-semibold text-white md:text-6xl">
              Tratamiento médico con Mounjaro
            </h1>

            <p className="mt-6 max-w-2xl text-slate-300">
              Información médica clara y completa sobre el uso de Mounjaro como
              parte de un tratamiento supervisado para el control del peso y la
              salud metabólica.
            </p>
          </div>
        </div>
      </section>

      {/* QUE ES MOUNJARO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white-900">
              Qué es Mounjaro
            </h2>

            <p className="mt-6 text-white-700">
              Mounjaro es un medicamento inyectable cuyo principio activo es
              tirzepatida. Pertenece a una nueva clase de medicamentos que actúan
              sobre mecanismos hormonales involucrados en el control del apetito,
              la glucosa y el metabolismo energético.
            </p>

            <p className="mt-4 text-white-600">
              Fue desarrollado inicialmente para pacientes con diabetes tipo 2.
              Actualmente puede utilizarse bajo supervisión médica en pacientes
              seleccionados como parte de un abordaje integral del sobrepeso y
              la obesidad.
            </p>
          </div>

          <Image
            src="/images/mounjaro/mounjaro-pen.png"
            alt="Mounjaro medicamento inyectable"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Cómo funciona Mounjaro en el organismo
          </h2>

          <p className="mt-6 text-slate-800">
            Mounjaro actúa sobre receptores hormonales relacionados con el
            control del hambre y la regulación metabólica. Estos mecanismos
            influyen en el sistema digestivo y en el sistema nervioso central,
            ayudando a reducir la ingesta de alimentos de forma progresiva.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Image
              src="/images/mounjaro/mounjaro-injection.png"
              alt="Aplicación de Mounjaro"
              width={500}
              height={350}
              className="rounded-lg object-cover"
            />

            <Image
              src="/images/mounjaro/obesity-consultation.png"
              alt="Consulta médica para control de peso"
              width={500}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* PARA QUIEN */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-white-900">
            Para quién está indicado el tratamiento
          </h2>

          <p className="mt-6 text-white-600">
            El tratamiento con Mounjaro puede considerarse en pacientes con
            sobrepeso u obesidad, con o sin alteraciones metabólicas, siempre
            luego de una evaluación médica completa.
          </p>

          <p className="mt-4 text-white-600">
            No se trata de un medicamento estético ni de una solución rápida.
            La indicación debe basarse en criterios clínicos claros y objetivos
            terapéuticos realistas.
          </p>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Seguridad y supervisión médica
          </h2>

          <p className="mt-6 text-slate-600">
            Mounjaro es un medicamento de prescripción que requiere seguimiento
            médico. Durante el tratamiento se realizan controles periódicos para
            evaluar tolerancia, eficacia y posibles efectos secundarios.
          </p>

          <p className="mt-4 text-slate-600">
            El uso sin supervisión profesional puede representar riesgos para
            la salud.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold text-white-900">
            Preguntas frecuentes sobre Mounjaro
          </h2>

          <div className="mt-10 space-y-8 text-white-600">
            <div>
              <h3 className="font-medium text-white-900">
                Mounjaro es un medicamento para bajar de peso
              </h3>
              <p className="mt-2">
                Es un tratamiento médico que puede contribuir al control del
                peso como parte de un enfoque integral y supervisado.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-white-900">
                Cuánto peso se puede perder
              </h3>
              <p className="mt-2">
                Los resultados varían según el paciente, el metabolismo y la
                adherencia al tratamiento.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-white-900">
                Tiene efectos secundarios
              </h3>
              <p className="mt-2">
                Puede presentar efectos secundarios, principalmente
                gastrointestinales, que suelen ser transitorios.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-white-900">
                Reemplaza dieta y ejercicio
              </h3>
              <p className="mt-2">
                No. El tratamiento debe acompañarse de cambios en el estilo
                de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-5xl px-6 text-sm text-slate-500">
          La información presentada es educativa y no sustituye la consulta
          médica. El tratamiento con Mounjaro debe ser indicado y supervisado
          por un profesional de la salud.
        </div>
      </section>
    </>
  )
}
