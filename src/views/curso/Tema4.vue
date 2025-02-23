<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Recursos básicos requeridos en una brigada de emergencias'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-lg-8
          .bg-color-7.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0  Recordemos que las brigadas de emergencia son grupos organizados de personas que se preparan para responder, de manera efectiva, a situaciones de crisis, como incendios, desastres naturales, accidentes industriales, entre otros. Para que estas brigadas operen de forma eficiente y segura, es fundamental contar con una serie de recursos básicos que les permitan llevar a cabo sus funciones de manera adecuada. 

          p(data-aos="fade-left").mb-4 A continuación, se describen los recursos esenciales que deben estar disponibles para una brigada de emergencias.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")


      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Personal capacitado

      p(data-aos="fade-left").mb-4 El recurso más valioso en una brigada de emergencias es, sin duda, el capital humano. La eficacia y el éxito de la respuesta ante una emergencia dependen en gran medida de la preparación y habilidades del personal involucrado. Por ello, es crucial contar con personal debidamente capacitado en diversas áreas que abarcan tanto la atención inmediata como la gestión de situaciones críticas.


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Primeros auxilios" :icon="require('@/assets/bullets/icon-tab-c-1-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Primeros auxilios
              p La formación en atención básica y avanzada de primeros auxilios es fundamental. Todos los miembros de la brigada deben ser competentes en técnicas esenciales, como la RCP (reanimación cardiopulmonar), que puede ser determinante en la supervivencia de una persona en estado crítico. Además, el conocimiento sobre el manejo de heridas, fracturas y otras lesiones comunes es vital. La capacitación debe incluir prácticas regulares y simulacros para asegurar que cada miembro se sienta seguro y capaz de actuar con rapidez y eficacia ante una emergencia real.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-1.png', alt='')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Liderazgo y gestión de crisis" :icon="require('@/assets/bullets/icon-tab-c-2-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Liderazgo y gestión de crisis
              p La dinámica de un equipo de emergencia requiere de líderes que posean habilidades excepcionales en la coordinación de acciones. Estos líderes no solo deben ser capaces de tomar decisiones rápidas y efectivas bajo presión, sino que también deben saber comunicar claramente las instrucciones al equipo. La gestión de recursos es igualmente crucial; los líderes deben ser capaces de evaluar la situación, priorizar tareas y asignar roles específicos a cada miembro del equipo, garantizando así una respuesta organizada y eficiente. La formación en liderazgo, debe incluir el desarrollo de habilidades interpersonales, dado que la cohesión del equipo es un factor determinante en el éxito de la operación.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-2.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Formación técnica" :icon="require('@/assets/bullets/icon-tab-c-3-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Formación técnica
              p La capacitación técnica es esencial y debe ser adaptada al tipo de emergencias que se pueden presentar. Por ejemplo, en el caso de incendios, el personal debe recibir formación en el manejo de fuego, incluyendo el uso de extintores y técnicas de evacuación. Para situaciones que involucren rescates en alturas, es imprescindible que los miembros de la brigada estén entrenados en técnicas de escalada y en el uso de equipos de seguridad específicos. Asimismo, en el caso de derrames químicos, el personal debe estar familiarizado con los protocolos de respuesta, incluyendo la identificación de sustancias peligrosas y el uso de las mismas.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-3.png', alt='', style="width: 100%;")

 
      #t_4_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.2] Equipamiento o elementos de protección personal (EPP)

      p(data-aos="fade-left").mb-4 La seguridad del personal es primordial en cualquier operación, especialmente en contextos de riesgo como aquellos que involucran brigadas de emergencia o trabajos en entornos peligrosos. Por ello, cada miembro de la brigada debe contar con el equipo de protección personal (EPP) adecuado, que no solo cumple una función de resguardo físico, sino que también es fundamental para garantizar la eficacia en la ejecución de sus labores. A continuación, se profundiza en los diversos elementos que componen este equipo y su importancia.

      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src="@/assets/curso/tema4/info1.png", alt="", style="max-width: 1182px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="7%" y="93.5%" numero="+")
                    h5 Casco
                    p Este elemento es vital para la protección de la cabeza, puesto que puede prevenir lesiones severas causadas por golpes o caídas de objetos, que son comunes en situaciones de emergencia. Además, muchos cascos modernos están diseñados con características adicionales, como viseras o sistemas de ventilación, que aumentan la comodidad y la funcionalidad en el campo.

                  .bg-color-white.box-shadow.p-3(x="28.5%" y="5.5%" numero="+")
                    h5 Guantes
                    p La elección de guantes adecuados es crucial, pues las manos son unas de las partes más expuestas y vulnerables del cuerpo. Los guantes no solo protegen contra cortes y abrasiones, sino que también evitan quemaduras y el contacto con sustancias químicas peligrosas. Es fundamental seleccionar guantes específicos para cada tipo de tarea, considerando factores como la resistencia a productos químicos, la abrasividad y la temperatura.

                  .bg-color-white.box-shadow.p-3(x="45%" y="93.5%" numero="+")
                    h5 Botas de seguridad
                    p Las botas son un componente esencial que proporciona soporte y protección a los pies. Deben ser resistentes a objetos punzantes o pesados, además de ofrecer características como suelas antideslizantes y propiedades impermeables. La comodidad y el ajuste adecuado son igualmente importantes, porque el personal puede estar en pie durante largos períodos o moverse en terrenos irregulares.

                  .bg-color-white.box-shadow.p-3(x="62.5%" y="7.5%" numero="+")
                    h5 Ropa ignífuga
                    p Para las brigadas que intervienen en incendios, la ropa ignífuga es indispensable. Este tipo de vestimenta está diseñada para resistir altas temperaturas y minimizar el riesgo de quemaduras. Además, debe ser ligera y permitir libertad de movimiento, debido a que, en situaciones de emergencia, la agilidad puede ser un factor determinante para la seguridad y el éxito de la intervención.

                  .bg-color-white.box-shadow.p-3(x="79.5%" y="93.5%" numero="+")
                    h5 Mascarillas y respiradores
                    p En entornos donde hay riesgo de inhalar humo, gases tóxicos o partículas en el aire, el uso de mascarillas y respiradores se convierte en una necesidad. Estos dispositivos no solo protegen la salud respiratoria del personal, sino que también son esenciales para mantener la concentración y la eficacia en situaciones críticas. Es importante que el equipo de respiración se ajuste correctamente y sea adecuado para el tipo específico de contaminantes presentes en el ambiente.


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Equipamiento de Protección Personal (EPP), no es simplemente un conjunto de herramientas; es una inversión en la seguridad y el bienestar de los miembros de la brigada. La correcta selección, uso y mantenimiento del EPP son responsabilidades que deben ser asumidas con seriedad, dado que pueden marcar la diferencia entre la vida y la muerte en situaciones de riesgo. Además, la capacitación sobre el uso adecuado del EPP, es esencial para maximizar su efectividad y garantizar que el personal esté preparado para enfrentar cualquier desafío que se presente en su labor.

      #t_4_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.3] Herramientas y equipos de rescate

      p(data-aos="fade-left").mb-4 Los equipos y herramientas de rescate, son muy importantes dentro de las empresas, puesto que estas permiten contrarrestar cualquier situación de emergencia que se presente, dentro de estas herramientas y equipos se pueden destacar:
      

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-1.png")
              .col-lg-7
                h5 Mangueras y extintores
                p Son herramientas indispensables en la lucha contra incendios. Las mangueras deben ser de alta presión y longitud suficiente, para llegar a los puntos críticos, mientras que los extintores deben estar clasificados, según el tipo de fuego que se puede presentar, ya sean incendios de materiales sólidos, líquidos o eléctricos. La capacitación sobre su uso adecuado es igualmente importante para maximizar su efectividad en situaciones de emergencia.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-2.png")
              .col-lg-7
                h5 Cuerdas y arneses
                p Son esenciales no solo para rescates en alturas, como en el caso de edificios colapsados o en operaciones en acantilados, sino también para asegurar a los rescatistas en situaciones peligrosas. La elección de cuerdas de alta resistencia y la correcta colocación de arneses son vitales para prevenir caídas y accidentes, lo que puede marcar la diferencia entre la vida y la muerte durante una operación de rescate.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-3.png")
              .col-lg-7
                h5 Palas y picos
                p Son herramientas manuales que, aunque simples, son cruciales en situaciones de derrumbes o deslizamientos de tierra. Permiten a los rescatistas remover escombros y acceder a las víctimas atrapadas. La ergonomía y la calidad de estas herramientas no deben subestimarse, porque, en situaciones de alta presión, la eficiencia en el uso de estas herramientas puede acelerar el rescate.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-4.png")
              .col-lg-7
                h5 Camillas y sillas
                p Sillas de ruedas y camillas, son elementos fundamentales para el transporte seguro de los heridos. Las camillas deben ser livianas, pero robustas, y contar con características que faciliten la inmovilización de la víctima. Además, las sillas de ruedas adaptarse para terrenos difíciles, permitiendo que los rescatistas trasladan a las personas heridas de manera rápida y segura hasta un lugar donde puedan recibir atención médica.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-5.png")
              .col-lg-7
                h5 Equipos de comunicación
                p Son la columna vertebral de cualquier operación de rescate. La capacidad de mantener una comunicación constante y clara entre los miembros de la brigada es esencial para coordinar esfuerzos y garantizar la seguridad del equipo. La implementación de sistemas de comunicación redundantes, como radios de dos vías, teléfonos satelitales o aplicaciones móviles, puede ser crucial en áreas donde la cobertura de red es limitada o inexistente.

      #t_4_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.4] Botiquín de primeros auxilios

      p(data-aos="fade-left").mb-4 El botiquín de primeros auxilios es una herramienta esencial para garantizar una atención oportuna en situaciones de emergencia, ya que permite brindar asistencia inmediata a personas lesionadas hasta que lleguen los servicios médicos especializados.
      
      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/4.png', alt='')
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Botiquín de primeros auxilios
              p.mb-4(data-aos="fade-right") En el PDF Botiquín de primeros auxilios, se detallan los tipos de botiquines que deben estar disponibles según las normativas vigentes en Colombia, así como los elementos necesarios para atender incidentes de manera efectiva en diferentes tipos de establecimientos comerciales.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Botiquín de primeros auxilios

      #t_4_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.5] Planificación y protocolos de emergencia

      p(data-aos="fade-left").mb-4 La planificación y los protocolos de emergencia, son pilares fundamentales en la gestión de crisis dentro de cualquier organización. No solo se trata de contar con recursos físicos, sino de establecer un marco de acción que permita una respuesta efectiva ante situaciones adversas. Un plan bien definido no solo facilita la coordinación de la brigada de emergencia, sino que también minimiza el riesgo de lesiones y daños materiales.

      .row.align-items-start.mb-5
        .col-lg-8


          AcordionA(tipo="b")
            .div(titulo="Protocolos de actuación")
              p Estos son procedimientos específicos que deben ser adoptados en caso de diferentes tipos de emergencias, como incendios, terremotos, inundaciones o situaciones de violencia. Cada protocolo debe detallar las responsabilidades de cada miembro de la brigada, y las acciones a seguir en cada escenario. Es crucial que estos protocolos sean revisados y actualizados regularmente, para ver cambios en el entorno operativo o en la normativa legal vigente. La claridad y la accesibilidad de estos protocolos, son esenciales para asegurar que cada miembro del equipo sepa qué hacer en el momento crítico.

            .div(titulo="Mapas de riesgo")
              p La identificación de áreas de riesgo es esencial para una respuesta eficaz. Estos mapas permiten visualizar las zonas más vulnerables y los caminos de evacuación más seguros. Además, deben incluir información sobre los recursos disponibles, como extintores, salidas de emergencia y puntos de reunión. La elaboración de estos mapas debe ser un proceso participativo, involucrando a todos los niveles de la organización, para asegurar considerar diferentes perspectivas y conocimientos locales.

            .div(titulo="Simulacros y entrenamientos regulares")
              p La preparación es clave en la gestión de emergencias. Realizar simulacros y entrenamientos periódicos, ayuda a mantener al personal alerta y familiarizado con los procedimientos establecidos. Estos ejercicios prácticos no solo refuerzan la confianza del equipo, sino que también permiten identificar áreas de mejora en los protocolos existentes. Durante los simulacros, es importante evaluar el tiempo de respuesta, la efectividad de la comunicación y la coordinación entre los miembros del equipo. Además, se deben documentar los resultados de cada ejercicio para realizar ajustes necesarios y así optimizar la planificación.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/5.png", alt="").mb-4.mb-lg-0



      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La implementación de una planificación rigurosa y protocolos de emergencia, no solo protege a las personas y los bienes materiales, sino que también contribuye a crear una cultura organizacional de prevención y seguridad. 



      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in").mt-4.mt-lg-0

        .col-lg-8
          p(data-aos="fade-left").mb-4 Al fomentar la conciencia sobre la importancia de la preparación ante emergencias, se establece un entorno en el que todos los miembros de la organización se sienten empoderados y responsables de su propia seguridad y la de sus compañeros. En este sentido, la educación y la formación continua son herramientas claves que deben ser integradas en la rutina del personal, asegurando que la brigada esté siempre lista para actuar de manera efectiva cuando sea necesario.

          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 Contar con los recursos básicos adecuados, es fundamental para el éxito de una brigada de emergencias. La combinación de personal capacitado, equipamiento de protección personal, herramientas de rescate, materiales de primeros auxilios, planificación adecuada y apoyo logístico permite que una brigada responda de manera efectiva ante situaciones críticas, minimizando riesgos y salvando vidas. La preparación y la capacitación continua son elementos claves que deben ser fomentados para garantizar que estas brigadas estén siempre listas para enfrentar cualquier desafío que se les presente. 

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Conceptos básicos de las brigadas de emergencia',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es uno de los elementos que debe tener un botiquín tipo A?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tensiómetro',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Camilla',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Gasas limpias',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Linterna',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué se debe hacer para fomentar una cultura de seguridad en la organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ignorar los problemas de seguridad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Realizar capacitaciones y simulacros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'No involucrar a los empleados',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir los recursos destinados a seguridad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué tipo de botiquín es obligado para un establecimiento menor a 2,000 m²?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tipo B',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tipo C',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Tipo A',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Tipo D',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es la función de las cuerda y arneses en situaciones de rescate?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Seguridad para el rescatado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Seguridad de rescatistas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Protección contra el sol',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Cumplir procedimiento',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué papel desempeñan las camillas y sillas de ruedas en emergencias?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Transporte de heridos',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Estabilización de los afectados',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Equipos de comunicación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Traslados de rescatistas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
