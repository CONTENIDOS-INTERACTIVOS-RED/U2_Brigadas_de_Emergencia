<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conformación de brigadas de emergencias y Comité operativo de emergencia empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p(data-aos="fade-left").mb-4 Para comenzar con el estudio de la temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/D0kpLuSQjUg?si=OLXtjTdp-cHDeHVl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p(data-aos="fade-left").mb-4 Ahora, la estructura del Comité Operativo Empresarial de Emergencias varía, según el tamaño y la naturaleza de la empresa, pero en general, está compuesto por los responsables de áreas claves dentro de la organización. A continuación, estudiaremos los roles típicos dentro de este comité:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Director del Comité
              p Generalmente, el CEO o el director general de la empresa. Su responsabilidad es supervisar y coordinar las acciones del COEE, asegurando que se sigan los procedimientos establecidos y se tomen decisiones rápidas y adecuadas.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              h5 Responsable de operaciones
              p Se encarga de asegurar que las operaciones críticas continúen funcionando durante la emergencia, gestionando recursos y asignando personal, según sea necesario.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7
              h5 Responsable de finanzas
              p En situaciones de crisis, este miembro evalúa el impacto económico y gestiona los recursos financieros disponibles para la respuesta a la emergencia.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7
              h5 Responsable de seguridad y salud
              p Garantiza la seguridad física de los empleados y coordina las acciones para proteger su salud, especialmente en casos de emergencias sanitarias o accidentes industriales.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-5.png")
            .col-lg-7
              h5 Responsable de tecnología y comunicaciones
              p Gestiona las plataformas tecnológicas y de comunicación para asegurar que la información fluya correctamente entre los miembros del comité y entre la empresa y las partes interesadas externas.


    p(data-aos="fade-left").mb-4 Cada miembro tiene un rol claramente definido, pero la colaboración y la toma de decisiones conjunta son esenciales para garantizar la eficacia de la respuesta ante una emergencia.

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/icon-1.svg"
                alt="Desarrollar políticas de emergencia"
                style="width: 90px"
              )
              h5.mb-2.text-center Desarrollar políticas de emergencia
              p.mb-0.text-center Crear un marco que guíe la respuesta de la organización ante emergencias.

          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/icon-2.svg"
                alt="Establecer protocolos de comunicación"
                style="width: 90px"
              )
              h5.mb-2.text-center Establecer protocolos de comunicación
              p.mb-0.text-center Asegurar que haya un flujo de información claro durante la crisis.

          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/icon-3.svg"
                alt="Recursos humanos y materiales"
                style="width: 90px"
              )
              h5.mb-2.text-center Recursos humanos y materiales
              p.mb-0.text-center Asegurar que se disponga de los recursos necesarios para la respuesta.

          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/icon-3.svg"
                alt="Relaciones externas"
                style="width: 90px"
              )
              h5.mb-2.text-center Relaciones externas
              p.mb-0.text-center Mantener contacto con servicios de emergencia y otras organizaciones relevantes.


    p(data-aos="fade-left").mb-4 Después de una emergencia, el Comité debe llevar a cabo:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3
        .card.bg-color-3.px-4.py-3.h-100
          .card-number
            span 1
          .card-body.ps-4
            h6 Análisis post-emergencia 
            p.mb-0.text-small Evaluar la efectividad de la respuesta.

      .col-lg-3
        .card.bg-color-3.px-4.py-3.h-100
          .card-number
            span 2
          .card-body.ps-4
            h6 Actualización de protocolos.
            p.mb-0.text-small Modificar los planes de emergencia basándose en las lecciones aprendidas.

      
      .col-lg-3
        .card.bg-color-3.px-4.py-3.h-100
          .card-number
            span 3
          .card-body.ps-4
            h6 Mantener la preparación.
            p.mb-0.text-small Asegurar que todos los miembros de la Brigada y del Comité estén preparados para actuar.
      
      .col-lg-3
        .card.bg-color-3.px-4.py-3.h-100
          .card-number
            span 4
          .card-body.ps-4
            h6 Fomentar la confianza.
            p.mb-0.text-small Aumentar la confianza de los empleados en la capacidad de la organización para manejar emergencias.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-6.p-4
          p(data-aos="fade-left").mb-3 La comunicación clara y efectiva entre la brigada de emergencia y el Comité, es crucial. Esto incluye:
          ul.lista-ul
            li.mb-2
              i.fas.fa-check-circle
              | #[b Informar sobre riesgos inminentes.] Mantener a todos informados sobre la situación actual.
            li.mb-2
              i.fas.fa-check-circle
              | #[b Proporcionar instrucciones claras.] Dar directrices sobre qué hacer durante una emergencia.

          p(data-aos="fade-up").mb-3 Mencionado lo anterior, también debemos tener en cuenta algunos desafíos y consideraciones que deben enfrentar las brigadas de emergencia y los comités operativos de emergencias, entre los cuales mencionaremos algunos:
          ul.lista-ul
            li.mb-2
              i.fas.fa-check-circle
              | #[b Resistencia a cambios.] Algunos empleados pueden ser reacios a participar en capacitaciones o simulacros.
            li.mb-2
              i.fas.fa-check-circle
              | #[b Falta de recursos.] Puede haber limitaciones en términos de tiempo, personal o dinero.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")


    p(data-aos="fade-left").mb-4 Después de haber dado un repaso sobre las funciones del Comité de emergencias operativo, es necesario tratar las funciones y responsabilidades de las brigadas de emergencia, dado que estos dos se relacionan entre sí y deben ir actuando de la mano en caso de un eventual suceso de emergencia.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Zaragoza, G. E. (2013). Brigada de Evacuación. Brigada de Evacuación, 12-22.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=MYNqaZHHyQU" target="_blank" rel="noopener noreferrer") Contra Todo Riesgo. (2020, 13 noviembre). Gestión de Riesgos, emergencias y desastres

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
