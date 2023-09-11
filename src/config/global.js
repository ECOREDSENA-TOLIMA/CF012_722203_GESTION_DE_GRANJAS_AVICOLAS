export default {
  global: {
    componenteFormativo: 'Bioseguridad y nutrición',
    descripcionCurso:
      'La producción avícola requiere de varios procesos sistemáticos para que sea eficiente y rentable, entre estos están parámetros etológicos, de bienestar, bioseguridad, buenas prácticas, la alimentación y nutrición, la uniformidad, densidad y otros parámetros productivos que permiten sondear la producción a través de cada periodo, por lo que ponerlos en práctica y conocerlos es de gran importancia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Densidad de aves por unidad de proceso productivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contexto etológico para garantizar el bienestar animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Contexto, características y tipos de las líneas comerciales de aves producción de carne y huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Uniformidad de las aves',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Calidad del agua potable',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Nutrición en el sistema de producción de aves para carne y huevos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Métodos y protocolos para la recepción de aves',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Contextualización y métodos de control de temperatura e iluminación en sistemas de producción de aves para carne y huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo:
          'Contextualización del comportamiento y estado sanitario de las aves',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Medicamentos y biológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Vías de administración, precauciones y restricciones',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Farmacodinámica',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo:
              'Aspectos técnicos de la prescripción del médico veterinario',
            hash: 't_10_3',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Vacunación en aves de corral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Parámetros de producción en las unidades avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Producción de carne',
            hash: 't_12_1',
          },
          {
            numero: '12.2',
            titulo: 'Producción de huevo',
            hash: 't_12_2',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Despique',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Densidad de aves unidad de proceso productivo',
      referencia:
        'Aviagen. (2020) ¿Por qué es importante pesar de manera individual pollos de engorde desde los 21 a 28 días en adelante?',
      tipo: 'Documento',
      link:
        'https://en.aviagen.com/assets/Tech_Center/BB_Foreign_Language_Docs/Spanish_TechDocs/Hot-Tos-ES/AVBR-Howto6-IndividuallyWeighBBFemales-ES-18.pdf',
    },
    {
      tema: '4. Uniformidad aves',
      referencia:
        'Aviagen. (2020). ¿Por qué es importante pesar reproductoras de pollos de engorde de manera colectiva durante la etapa de levante?',
      tipo: 'Documento',
      link:
        'https://en.aviagen.com/assets/Tech_Center/BB_Foreign_Language_Docs/Spanish_TechDocs/Hot-Tos-ES/AVIA-How-to-4-Bulk-Weigh-Broiler-Breeders-Fill-ES-16.pdf',
    },
    {
      tema: '5. Calidad del agua potable',
      referencia:
        'Carbajal, A., A. y González, F., M. (2013). Propiedades y funciones biológicas del agua. UCM.',
      tipo: 'Documento',
      link:
        'https://www.ucm.es/data/cont/docs/458-2013-07-24-Carbajal-Gonzalez-2012-ISBN-978-84-00-09572-7.pdf',
    },
    {
      tema: '5. Calidad del agua potable',
      referencia:
        'Aqualia. (2018). Tratamientos para la potabilización del agua. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MyYLLVG8Wkc',
    },
    {
      tema: '6. Nutrición sistema de producción aves carne y huevo',
      referencia:
        'Canal Solla. (2018). Recomendaciones Solla de manejo para la primera semana del pollo de engorde. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PzPE8lKzx5o',
    },
    {
      tema:
        '9. Contextualización del comportamiento y estado sanitario de las aves',
      referencia:
        'Pronavicola S.A. (2015). Levante ponedoras. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kBh7SZLjw8E',
    },
    {
      tema:
        '9. Contextualización del comportamiento y estado sanitario de las aves',
      referencia:
        'Avicultores Colombia. (2016). Compostaje de mortalidad. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fd5mo5Pr1pQ',
    },
    {
      tema:
        '9. Contextualización del comportamiento y estado sanitario de las aves',
      referencia: 'Fenavi. (2018). Guía ambiental para el subsector avícola.',
      tipo: 'Documento',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf',
    },
    {
      tema: '10. Medicamentos y biológicos',
      referencia:
        'Fenavi. (2019). Conceptos importantes a tener en cuenta para el control y diagnóstico de la enfermedad de Newcastle.',
      tipo: 'Documento',
      link:
        'https://fenavi.org/wp-content/uploads/2019/04/CONCEPTOS-IMPORTANTES-NEWCASTLE.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Compost',
      significado: 'resultado del proceso de compostaje.',
    },
    {
      termino: 'Compostaje',
      significado:
        'técnica de estabilización y de tratamiento aerobio de los residuos orgánicos biodegradables, resultado de una actividad microbiológica compleja desarrollada en condiciones controladas.',
    },
    {
      termino: 'Conversión Alimenticia',
      significado:
        'índice o relación entre dos números, nos indica cuánto de un número corresponde a otro. La conversión alimenticia nos dice cuántos kilogramos de alimento consume un animal para ganar un kilogramo de peso.',
    },
    {
      termino: 'Covarianza',
      significado:
        'valor que refleja en qué cuantía dos variables aleatorias varían de forma conjunta respecto a sus medias.',
    },
    {
      termino: 'Criadoras',
      significado:
        'lámparas usadas en la cría de las aves para contribuir a la regulación del calor corporal del animal.',
    },
    {
      termino: 'Etiología',
      significado: 'conjunto de causas de una enfermedad.',
    },
    {
      termino: 'Microorganismos',
      significado:
        'organismos que, por su tamaño reducido, son imperceptibles a la vista. También denominados “microbios”, estos organismos cuentan con una organización biológica muy básica: una proporción importante de ellos cuentan con apenas una única célula.',
    },
    {
      termino: 'Monogástrico',
      significado:
        'mono (un), gástrico (digestión); son los animales que presentan un estómago simple, con una capacidad de almacenamiento media, así pues, como la del ser humano.',
    },
    {
      termino: 'Mortalidad',
      significado:
        'en biología y particularmente en genética, se denomina parental al progenitor o a los progenitores de una progenie, esto es, al individuo o a los individuos cuya reproducción, ya sea sexual o asexual, provoca la transmisión de una herencia genética.',
    },
    {
      termino: 'Oscilación',
      significado:
        'cuando hay una zona de moléculas más comprimidas estas empujan a las siguientes, de manera que, al realizar las oscilaciones, aparecen zonas de aire más agrupadas y otras más alejadas entre sí.',
    },
    {
      termino: 'Parámetro',
      significado:
        'término usado para medir cualquier variante que intervenga en un proceso, dentro de ciertos rangos preestablecidos. Hay que contar con una norma o patrón para poder comparar y calificar el comportamiento de un proceso.',
    },
    {
      termino: 'Patógenos',
      significado:
        'agentes infecciosos que pueden provocar enfermedades a su huésped. Este término se emplea normalmente para describir microorganismos como los virus, bacterias y hongos, entre otros.',
    },
    {
      termino: 'Parental',
      significado:
        'en biología y particularmente en genética, se denomina parental al progenitor o a los progenitores de una progenie, esto es, al individuo o a los individuos cuya reproducción, ya sea sexual o asexual, provoca la transmisión de una herencia genética.',
    },
    {
      termino: 'Parvada',
      significado:
        'grupo de aves que vuelan en grupo mientras se encuentran en la búsqueda de comida. El término es similar a la manada entre los mamíferos.',
    },
    {
      termino: 'Residuo',
      significado:
        'material o subproducto industrial considerado, por su cantidad, composición o particular naturaleza, para ser reintegrado a los ciclos, flujos y procesos de esta u otras cadenas productivas.',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'son todos aquellos que por su composición general y específica son derivados del carbono y tienen la propiedad biodegradable.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fenavi. (2016). Propuesta para un programa de monitoreo de salmonella en granjas avícolas colombianas, basado en autocontrol. Fenavi.',
      link:
        'https://fenavi.org/wp-content/uploads/2019/04/PROPUESTA-DE-PROGRAMA-DE-MONITOREO-DE-SALMONELLA.pdf',
    },
    {
      referencia:
        'Kreis, A. (2020). El tamaño de partícula en la nutrición de pollos de engorda. Engormix.',
      link:
        'https://www.engormix.com/avicultura/articulos/tamano-particula-nutricion-pollos-t45588.htm',
    },
    {
      referencia:
        'Moscoso, D. (2015). Estrategias de manejo para la mejora de la uniformidad y su efecto en el desempeño de pollos de engorde hasta los 42 días de edad. Universidad de la Salle.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1211&context=zootecnia',
    },
    {
      referencia:
        'Reina, E. (2015). Formulación en la nutrición de ponedoras y el concepto de costo: Una visión práctica - 2. El sitio Avícola.',
      link:
        'https://www.elsitioavicola.com/articles/2759/formulacian-en-la-nutrician-de-ponedoras-y-el-concepto-de-costo-una-visian-practica-a-2/',
    },
    {
      referencia:
        'Ross an Avigen Brand. (2018). Manual de manejo - Pollo de engorde. Avigen.',
      link:
        'https://es.aviagen.com/assets/Tech_Center/BB_Foreign_Language_Docs/Spanish_TechDocs/Ross-BroilerHandbook2018-ES.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
