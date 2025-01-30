export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Conformación de brigadas de emergencia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Conformación de brigadas de emergencias y Comité operativo de emergencia empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Funciones y responsabilidades de la brigada de emergencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Perfil del brigadista de emergencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recursos básicos requeridos en una brigada de emergencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Personal capacitado',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Equipamiento o elementos de protección personal (EPP)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Herramientas y equipos de rescate',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Botiquín de primeros auxilios',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Planificación y protocolos de emergencia',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto Ley 1295 de 1994 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2629',
    },
    {
      referencia:
        'Ley 1523 de 2012 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019: Estándares mínimos del sistema de la seguridad y salud en el trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Conesa Bernal, J. A. (2017). Emergencias y evacuación: ( ed.). Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicodeloriente/59621?page=130',
    },
    {
      referencia: '(S/f-d). Com.co. Recuperado el 10 de diciembre de 2024, de',
      link:
        'https://osipedia.com.co/wp-content/uploads/2024/03/05.-PRESENTACION-SESION-1-BIENVENIDO-A-CONFORMAR-UNA-BRIGADA-DE-EMERGENCIA.pdf',
    },
    {
      referencia:
        'Resolución 705 de 2007 Secretaría Distrital de Salud. (s. f.).',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=31885',
    },
    {
      referencia:
        'Torres Nieto, H. (2012). Manual de primeros auxilios y brigadas de emergencia: ( ed.). Fundación Universitaria del Área Andina.',
      link:
        'https://elibro.net/es/ereader/tecnologicodeloriente/70932?page=168',
    },
  ],
  glosario: [
    {
      termino: 'Botiquín de Primeros Auxilios',
      significado:
        'conjunto de materiales básicos usados para brindar atención médica inmediata en situaciones de emergencia.',
    },
    {
      termino: 'Brigada de Emergencias',
      significado:
        'grupo organizado de empleados capacitados para responder a emergencias en el entorno laboral, protegiendo a personas, bienes y el medio ambiente.',
    },
    {
      termino: 'Comité Operativo Empresarial de Emergencias (COEE)',
      significado:
        'equipo especializado que coordina y gestiona las acciones operativas de respuesta durante una emergencia en una organización.',
    },
    {
      termino: 'Comunicación en Emergencias',
      significado:
        'proceso clave para garantizar el flujo adecuado de información entre brigadistas, empleados y servicios externos durante una crisis.',
    },
    {
      termino: 'Cultura de Prevención',
      significado:
        'prácticas y actitudes dentro de una organización que promueven la preparación y reducción de riesgos ante emergencias.',
    },
    {
      termino: 'Equipos de Protección Personal (EPP)',
      significado:
        'herramientas y vestimenta especial diseñada para proteger a los individuos de riesgos en entornos peligrosos durante una emergencia.',
    },
    {
      termino: 'Evaluación de Riesgos',
      significado:
        'proceso de identificación y análisis de peligros potenciales en el entorno laboral para prevenir emergencias.',
    },
    {
      termino: 'Extintores',
      significado:
        'equipos portátiles diseñados para apagar incendios pequeños en sus etapas iniciales.',
    },
    {
      termino: 'Mapa de Riesgo',
      significado:
        'representación gráfica que identifica las áreas vulnerables y recursos claves en el lugar de trabajo para la gestión de emergencias.',
    },
    {
      termino: 'Plan de Emergencia',
      significado:
        'documento que establece los procedimientos a seguir en caso de una emergencia, detallando roles, recursos y acciones necesarias',
    },
    {
      termino: 'Primeros Auxilios',
      significado:
        'atención inmediata proporcionada a personas lesionadas antes de la llegada de servicios médicos profesionales.',
    },
    {
      termino: 'Simulacro de Emergencia',
      significado:
        'ejercicio práctico que permite entrenar al personal en procedimientos de evacuación y respuesta ante situaciones críticas.',
    },
  ],
}
