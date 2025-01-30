<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Perfil del brigadista de emergencias'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El rol del brigadista es fundamental en el contexto de la gestión de emergencias, puesto que las acciones rápidas y efectivas pueden marcar la diferencia entre la vida y la muerte en situaciones críticas. Por ello, es esencial establecer un perfil claro que contemple no solo las habilidades y conocimientos necesarios, sino también las características personales y físicas que hacen a un brigadista efectivo. 


      .row.align-items-start.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 A continuación, se desarrollan en profundidad las distintas condiciones y características que deben ser consideradas en el perfil de un brigadista.

          AcordionA(tipo="b")
            .div(titulo="Voluntariedad y compromiso")
              p Uno de los aspectos más importantes para un brigadista es la voluntariedad. Este compromiso personal no solo asegura que el brigadista esté motivado, sino que también fomenta un sentido de responsabilidad hacia la comunidad y sus compañeros. La voluntad de servir en situaciones difíciles es un rasgo que debe ser cultivado, debido a los brigadistas a menudo enfrentan condiciones estresantes y demandantes que requieren una fuerte determinación y compromiso.

            .div(titulo="Creatividad y proactividad")
              p La creatividad y la proactividad son habilidades esenciales para un brigadista. En situaciones de emergencia, los planes pueden fallar o no ser aplicables debido a circunstancias imprevistas. Así, un brigadista debe ser capaz de pensar de manera crítica y desarrollar soluciones innovadoras para resolver problemas sobre la marcha. Esto requiere no sólo una mentalidad abierta, sino también la habilidad de evaluar rápidamente la situación y actuar de manera efectiva.

            .div(titulo="Condiciones físicas")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Exámenes de salud.] Es crucial que los brigadistas mantengan un buen estado físico que sea evaluado mediante un examen médico laboral. Este examen debe incluir una serie de pruebas que verifiquen la resistencia cardiovascular, la fuerza muscular y la flexibilidad. Además, es esencial que el brigadista no presente limitaciones que puedan comprometer su capacidad de respuesta durante una emergencia.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Índice de masa corporal.] La relación entre peso y estatura es una medida importante que puede impactar directamente en la efectividad del brigadista. Un índice de masa corporal (IMC) saludable no solo es indicativo de un buen estado físico, sino que también reduce el riesgo de lesiones durante operaciones de rescate.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Salud general.] Los brigadistas no deben padecer afecciones que limiten su movilidad o capacidad física, tales como problemas cardiovasculares, respiratorios o lesiones osteomusculares. Esto garantiza que puedan realizar tareas que involucren esfuerzo físico, como el levantamiento de objetos pesados o la realización de maniobras de rescate.

            .div(titulo="Condiciones psíquicas")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Estabilidad emocional.] La estabilidad emocional es crucial para un brigadista, porque enfrentará situaciones de alta presión y estrés. Debe ser capaz de mantener la calma y tomar decisiones racionales, incluso en medio del caos. Esto implica una buena gestión del estrés y la capacidad para lidiar con situaciones traumáticas.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Competencias de liderazgo y trabajo en equipo.] Un brigadista efectivo debe poseer habilidades de liderazgo y la capacidad de colaborar eficientemente en equipo. Esto no solo incluye la habilidad para comunicar de manera efectiva, sino también la capacidad para motivar y guiar a otros en situaciones de emergencia. La disposición para trabajar en conjunto y apoyar a los demás es vital para el éxito de cualquier operación de rescate.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Iniciativa y toma de decisiones.] La iniciativa es otra característica fundamental. Los brigadistas deben ser capaces de evaluar rápidamente una situación y tomar decisiones informadas sin esperar instrucciones. Esto es especialmente importante en emergencias donde el tiempo es un factor crítico.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", alt="").mb-4.mb-lg-0
        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Ética y responsabilidad")
              p La ética y la responsabilidad son pilares fundamentales en el perfil de un brigadista. Debe actuar siempre con integridad, priorizando el bienestar de las personas a su cargo y respetando los principios de justicia y equidad. Un brigadista ético es consciente de su impacto en la comunidad y toma decisiones que reflejan un compromiso genuino con la seguridad y el bienestar de todos.
            .div(titulo="Conocimientos básicos")
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Formación Académica.] Un brigadista debe tener al menos una formación básica secundaria que le permita leer e interpretar manuales y planes de emergencia. Esta formación es esencial para comprender las señales de alerta y las instrucciones de evacuación. La capacidad de leer y seguir instrucciones es vital para garantizar la seguridad tanto del brigadista como de las personas a su cargo.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Capacitación continua.] Además de la formación inicial, un brigadista debe estar dispuesto a participar en un aprendizaje continuo. Esto incluye la asistencia a talleres, simulacros y cursos de actualización en temas como primeros auxilios, control de incendios, y técnicas de rescate. La capacitación continua asegura que el brigadista esté siempre preparado para enfrentar nuevos desafíos y situaciones.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Inclusión de la tecnología.] En la actualidad, la tecnología juega un papel crucial en la gestión de emergencias. Un brigadista debe estar familiarizado con el uso de herramientas tecnológicas que pueden facilitar la comunicación y la gestión de recursos. Esto incluye el uso de aplicaciones móviles para la gestión de emergencias, sistemas de comunicación de emergencia y software de mapeo y seguimiento.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Sensibilización y conciencia social.] Un brigadista debe poseer una alta sensibilidad y conciencia social. Esto implica entender las necesidades de la comunidad a la que sirve y reconocer las particularidades culturales y sociales que pueden influir en la respuesta ante emergencias. La empatía y la capacidad para interactuar con personas en situaciones vulnerables son habilidades esenciales que permiten al brigadista comunicarse de manera efectiva y brindar el apoyo necesario durante momentos críticos.

            .div(titulo="Resiliencia y adaptabilidad")
              p El entorno de las emergencias puede ser impredecible y cambiante. Por lo tanto, la resiliencia y la adaptabilidad, son características que todo brigadista debe cultivar. La capacidad de recuperarse de situaciones adversas, aprender de las experiencias y ajustar las estrategias, según sea necesario, es crucial para mantener la eficacia en su labor. Un brigadista resiliente es capaz de enfrentar la adversidad con optimismo y determinación, inspirando a otros para hacer lo mismo.


      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La selección y formación de los brigadistas, debe ser un proceso cuidadoso que tenga en cuenta no solo sus capacidades físicas y psicológicas, sino también sus actitudes y conocimientos específicos en áreas claves como la evacuación, primeros auxilios, control de incendios y rescate. Además, es fundamental que estos miembros de la brigada sean personas comprometidas, dispuestas a trabajar en equipo y con un alto nivel de responsabilidad.  

          p(data-aos="fade-left").mb-4 La empresa debe ofrecer el apoyo necesario, no solo en términos de capacitación, sino también asegurando que los brigadistas cuenten con los recursos adecuados y que estén sujetos a una evaluación continua de su estado físico y psicológico, para asegurar que puedan actuar con eficacia en el momento de una emergencia.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://salvavidas.com/blog/el-botiquin-de-primeros-auxilios/" target="_blank" rel="noopener noreferrer") Diculescu, A. M. (2024, 27 junio). El botiquín de primeros auxilios. Salvavidas. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=APUbH9HXO5M" target="_blank" rel="noopener noreferrer") Servicios Latam. (2022, 19 febrero). Inspección botiquín de primeros auxilios

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>
