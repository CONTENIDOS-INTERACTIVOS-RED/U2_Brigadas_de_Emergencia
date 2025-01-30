<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Funciones y responsabilidades de la brigada de emergencias'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-left").mb-4 Como lo estudiamos en la unidad anterior, la brigada de emergencia está compuesta por un grupo diverso de empleados de diferentes departamentos, que tienen diferentes funciones dentro de las cuales se destacan las siguientes:


      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Prevención y preparación")
              p La brigada debe realizar exhaustivas evaluaciones de riesgos y peligros en el entorno, identificando potenciales amenazas que puedan poner en peligro la seguridad de los individuos.
              p Desarrollar y actualizar de manera continua planes de emergencia y evacuación, asegurando que estén alineados con las mejores prácticas y normativas vigentes.
              p Organizar y participar en simulacros de emergencia, proporcionando una experiencia práctica para la evacuación y respuesta ante crisis, fomentando la familiarización del personal con los procedimientos a seguir.

            .div(titulo="Comunicación")
              p La brigada tiene la responsabilidad de actuar como un puente comunicativo entre los empleados, la dirección y los servicios de emergencia externos, asegurando que la información fluya de manera precisa y oportuna.
              p Informar sobre situaciones de riesgo potencial y las medidas preventivas que deben ser adoptadas, fomentando una cultura de seguridad proactiva dentro de la organización.

            .div(titulo="Respuesta inmediata")
              p Responder de forma rápida y eficiente ante emergencias, que pueden incluir incendios, desastres naturales, accidentes laborales, entre otros, minimizando así los daños y las lesiones.
              p Coordinar la evacuación del personal, garantizando que se sigan meticulosamente los procedimientos establecidos y que todas las personas estén a salvo.

            .div(titulo="Primera ayuda")
              p Proporcionar primeros auxilios a las personas heridas o afectadas hasta que puedan ser atendidas por servicios médicos profesionales, actuando con rapidez y conocimiento.
              p Mantener un botiquín de primeros auxilios, asegurando que esté completo y accesible en todo momento, lo que es crucial para una respuesta efectiva.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", alt="").mb-4.mb-lg-0



      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0

        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Evaluación de situaciones")
              p Evaluar la situación de emergencia para determinar su gravedad y las acciones adecuadas que deben ser implementadas, actuando con un alto grado de juicio y atención al detalle.
              p Monitorear el desarrollo de la emergencia y ajustar la respuesta, según sea necesario, adaptándose a las circunstancias cambiantes de la crisis.

            .div(titulo="Capacitación y entrenamiento")
              p Capacitar a otros empleados sobre procedimientos de emergencia y el uso correcto de equipos de seguridad, asegurando que la preparación sea un esfuerzo colectivo.
              p Mantener actualizados sobre las últimas técnicas de rescate, primeros auxilios y manejo de crisis, lo que les permite responder de manera informada y efectiva.


            .div(titulo="Documentación y reporte")
              p Registrar minuciosamente los incidentes y las acciones tomadas durante la emergencia, lo que permite un análisis posterior que es fundamental para la mejora continua.
              p Informan a la dirección sobre las lecciones aprendidas y proponen mejoras para los planes de emergencia existentes, contribuyendo a la evolución de las políticas de seguridad de la organización.



            .div(titulo="Colaboración con autoridades")
              p Trabajar en estrecha colaboración con autoridades locales y servicios de emergencia (como bomberos, policía y ambulancias) tanto durante como después de la emergencia, facilitando una respuesta integral y coordinada.

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas responsabilidades son cruciales para no solo garantizar la seguridad y el bienestar de las personas en situaciones críticas, sino también para mitigar los impactos negativos de las emergencias en la organización o comunidad, creando un entorno más seguro y resiliente. La efectividad de la brigada de emergencia radica en su capacidad para actuar con rapidez, conocimiento y un enfoque colaborativo, lo que permite enfrentar con éxito los desafíos que surgen en momentos de crisis. 

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://gaia.gobiernobogota.gov.co/sites/default/files/documentos/sig/documentos/rol-brigadista.pdf" target="_blank" rel="noopener noreferrer") Gómez, E. P. G. (s/f). Rol del brigadista de emergencia y su certificación en la Secretaría Distrital de Gobierno.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=fv8aB0iqz6w" target="_blank" rel="noopener noreferrer") Johanita Meneses. (2017, 7 marzo). BRIGADA DE EMERGENCIA

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
