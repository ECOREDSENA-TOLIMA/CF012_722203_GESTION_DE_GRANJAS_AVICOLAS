<template lang="pug">
.curso-main-container.pb-3.tema9
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Contextualización del comportamiento y estado sanitario de las aves

    p Los patógenos afectan a las aves de corral y producen enfermedades, que a su vez producen repercusiones en la producción, en el rendimiento productivo, en la comercialización de los productos (carne y huevo) y otros subproductos.
    p.mb-4 Los agentes etiológicos de las aves de corral pueden ser zoonóticos y transmitirse, afectando la salud de los humanos, algunas nuevas enfermedades y la reemergencia de otras pudieron estar presentes, pero no fueron reconocidas desde sus inicios debido a su baja incidencia, signos clínicos y hallazgos de lesiones discretas, la carencia de las técnicas, equipos, y antígenos necesarios para el diagnóstico oportuno de las enfermedades presentes en el medio ambiente productivo.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las enfermedades aviares no reconocen fronteras entre los países, solo las avícolas y sus procedimientos sanitarios para la prevención y control de patologías. Por lo tanto, las avícolas deben instaurar los programas y protocolos de bioseguridad para defender la producción de la inclusión de patógenos.

    p.mb-4 Prevenir las enfermedades necesita de buen manejo, buena nutrición, bioseguridad, diagnóstico oportuno y un calendario de vacunación que se adapte a las condiciones infecciosas presentes en el medio ambiente.
    
    //- ul.lista-ul.mb-4
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Las aves de corral sanas, como todos los seres biológicos, mostrarán sus características físicas y fisiológicas de que se encuentran en buen estado, además de que lo demostraran etológicamente.
    p.mb-4 Las aves de corral sanas, como todos los seres biológicos, mostrarán sus características físicas y fisiológicas de que se encuentran en buen estado, además de que lo demostraran etológicamente.
    
    h4.mb-4 Características saludables
    p.mb-5 Algunas de las variables que se tienen en cuenta al hablar del estado saludable de las aves de corral sin dunda son las constantes fisiológicas, los sentidos de la visión, el oído y la libertad de movilización, por eso es importante tener presente los siguientes aspectos saludables:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-1.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Temperatura corporal
        p.text-center(style="color:#000") Normalmente oscila entre los 40°C a 42°C.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-2.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Frecuencia cardíaca
        p.text-center(style="color:#000") Latidos por minuto en intervalos de 180 a 340.

      .tarjeta.color-acento-botones.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-3.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Frecuencia respiratoria
        p.text-center(style="color:#000") En un ciclo normal 127,2 inspiraciones/minuto, con máximas de 277,7 inspiraciones/minuto.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-4.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Visión
        p.text-center(style="color:#000") Son muy sensibles a los movimientos bruscos y a las luces parpadeantes, esto permite identificar posibles depredadores y escapar, son asustadizas a cualquier movimiento repentino o brusco, se debe evitar causar estrés y manipular con precaución y lentamente, para que las aves puedan asociar y ver adecuadamente al personal.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-5.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Oído
        p.text-center(style="color:#000") Poseen una sensible audición que les permite escuchar e identificar depredadores o peligros. Tienen una serie de vocalizaciones o llamados que son usados para comunicarse, manifestar urgencia o estrés, y reaccionan inmediatamente en respuesta al llamado.
    
    h4.mb-4 Características de comportamiento
    p Las aves de corral son animales sociales e inquisitivos con un fuerte instinto territorial, se acuestan en el mismo lugar todas las noches y disfrutan de estar con otras aves, tienen un orden jerárquico claro dentro de la parvada, por lo que las aves nuevas deben ser introducidas agregando dos o tres a la vez para evitar ataques.
    p Las aves de corral sometidas al manejo tienden a acostumbrarse al mismo, sintiéndose cómodas con la presencia de los operarios, debido a que se alojan más comúnmente en corrales, la necesidad de criarlas es mínima, lo que hace que su zona de fuga no sea tan influyente como otros animales de granja Esta es influyente cuando las aves de corral necesitan ser capturadas para los diferentes procedimientos, mostrándolas, moviéndolas y encerrándolas en corrales o jaulas más pequeñas.

    h4.mb-4 Métodos de manejo y disposición final de la mortalidad en las unidades productivas de aves

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La mortalidad en la producción avícola es un componente normal, del cual se debe hacer una disposición adecuada, su manejo debe iniciarse entre las 24 y 48 horas de la defunción de las aves para impedir que los microorganismos patógenos contaminen y se diseminen rápidamente entre la población de aves sanas, así como la aparición de otro tipo de animales nocivos para las parvadas.

    p La alternativa más utilizada y aceptada por la comunidad avícola es el compostaje, ya que permite transformar de manera segura y hacer uso de este producto orgánico en otras áreas de las granjas o sacar provecho de él cómo subproducto, convirtiéndolo en algo rentable.
    p Este es un proceso simple en el que la materia orgánica se transforma en componentes sencillos en presencia de microorganismos como bacterias y hongos aerobios que se encuentran normalmente en el ambiente.
    h4.mb-4 Enfermedades de notificación oficial en explotaciones avícolas
    p Las principales enfermedades aviares de control oficial en Colombia son Newcastle, influenza aviar y salmonelosis, que se describen a continuación:

    .tarjeta.tarjeta.color-acento-contenido2.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 El <em>Newcastle</em> 
            p Es una enfermedad que se contagia fácilmente y puede afectar aves domésticas y silvestres, es de rápida propagación. Su control se realiza mediante la implementación de las prácticas de bioseguridad y vacunación en las producciones avícolas, causa alto impacto económico por las pérdidas que ocasiona al productor y las restricciones al comercio, es considerada una enfermedad endémica en el territorio nacional, incluida dentro de las enfermedades de notificación a la Organización Mundial de Sanidad Animal (OIE).

          .col-md-6.px-3
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 5.
              span <em>Pollo con la enfermedad de Newcastle</em>
            figure
              img.mb-3(src='@/assets/curso/temas/tema9/img-3.svg', alt='En la figura 5 se muestra un pollo padeciendo la enfermedad de Newcastle.')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 La gripe o influenza aviar 
            p Es una enfermedad viral muy contagiosa, de rápida propagación, diseminándose indiscriminadamente, con una alta morbimortalidad de hasta el 100 %. Para hacer el control se requiere de medidas y acciones de vigilancia epidemiológica y bioseguridad.

          .col-md-6.px-3
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 6.
              span <em>Pollo con la gripe o influenza aviar</em>
            figure
              img.mb-3(src='@/assets/curso/temas/tema9/img-4.svg', alt='En la figura 6 se muestra la cabeza y las patas de un pollo con la gripe o influenza aviar.')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 La salmonelosis aviar  
            p Es una infección producida por una bacteria llamada Salmolla sp. que se disemina rápidamente contaminando la parvada, causando cuadros gastroentéricos, con alta morbilidad y mortalidad en pollitos.

          .col-md-6.px-3
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 7.
              span <em>Pollo con salmonelosis aviar</em>
            figure
              img.mb-3(src='@/assets/curso/temas/tema9/img-5.svg', alt='En la figura 7 se muestra un pollito padeciendo salmonelosis aviar.')

    h4.mb-4 Signos de reconocimiento de las enfermedades de notificación oficial
    p Reconocer los signos de las enfermedades de control oficial es de vital importancia, puesto que permite a las unidades productivas actuar oportunamente ante un brote en la producción que pueda afectar visiblemente todos los procesos y que pueda propagarse rápidamente interviniendo con la sanidad, bioseguridad, buenas prácticas, trazabilidad, inocuidad y calidad del producto. 
    p Los procedimientos de notificación oficial de la enfermedad, serán aplicados frente a la presentación de uno o más casos de enfermedades de notificación oficial en aves.
    p Notificación o denuncia de casos de enfermedad: una vez que se identifique la enfermedad en aves domésticas o silvestre con sintomatología compatible o atribuible a enfermedades de notificación oficial según Resolución ICA 3714 del 2015, debe realizarse en las oficinas del Instituto Colombiano Agropecuario – ICA, y quienes están obligados a realizar esta acción son:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Personas responsables, encargados o propietarios de las aves afectadas, ya sea en grandes, medianas o pequeñas producciones.
      li 
        i.lista-ul__vineta
        | Los médicos veterinarios, médicos veterinarios zootecnistas o profesionales en el área que atiendan producciones o presten asistencia técnica ya sea pública o privada.
      li 
        i.lista-ul__vineta
        | Cualquier autoridad local, regional o nacional.
      li 
        i.lista-ul__vineta
        | Responsables o encargados de los laboratorios de diagnóstico veterinario públicos o privados.
      li 
        i.lista-ul__vineta
        | Cualquier persona con conocimiento de aves enfermas o aparentemente afectadas por enfermedades de notificación.

    h4.mb-4 Acciones y medidas a tomar ante casos sospechosos: 

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="Visita de inspección")
        .col-md-12.col-12
          p Se realizará visita de inspección a los predios sospechosos por parte de los profesionales médicos veterinarios o médicos veterinarios zootecnistas para revisar las aves presuntamente afectadas por la enfermedad y se levantará acta de visita.

      .row.justify-content-center.align-items-center(titulo="Hacer censo o inventario")
        .col-md-12.col-12
          p Hacer censo o inventario de la morbilidad, mortalidad y las aves que no muestran síntomas.

      .row.justify-content-center.align-items-center(titulo="Toma de muestras")
        .col-md-12.col-12
          p De ser necesario se practicará toma de muestras y se hará envío al laboratorio para diagnóstico oficial de acuerdo con los protocolos establecidos por el ICA para cada enfermedad.

      .row.justify-content-center.align-items-center(titulo="Cuarentena preventiva")
        .col-md-12.col-12
          p Se pondrá en cuarentena preventiva el predio y las producciones vecinas, estableciendo círculo perimetral de foco.

      .row.justify-content-center.align-items-center(titulo="Restricción de actividades")
        .col-md-12.col-12
          p Restricción de actividades, por lo que no se permitirá la movilización de aves ni el ingreso de otras hasta confirmar el diagnóstico por laboratorio, así como de las personas, vehículos, alimentos, residuos o cualquier otro elemento capaz de transmitir la enfermedad, los cuales deben estar bajo supervisión y se solicitará autorización para su movilización a la autoridad sanitaria.

      .row.justify-content-center.align-items-center(titulo="Protocolo de bioseguridad y sanidad")
        .col-md-12.col-12
          p Se iniciará el protocolo de bioseguridad y sanidad establecido por la producción y autorizado por la competencia sanitaria para este tipo de casos, de manera preventiva.

      .row.justify-content-center.align-items-center(titulo="Alerta de notificación de caso a la autoridad competente")
        .col-md-12.col-12
          p Se dará alerta de notificación de caso a la autoridad competente en sanidad animal local ICA, quien comunicará la alerta a la dirección nacional para que se extremen las medidas de vigilancia en las zonas que se requiera a nivel local, regional o nacional, y verificará que se implementen las medidas sanitarias a través de la correspondiente resolución administrativa.

    h4.mb-5 Procedimientos ante la confirmación del foco
    p.mb-5 De diagnosticarse a través de examen y prueba de laboratorio una enfermedad de reporte obligatorio, la oficina local del ICA y sus profesionales médicos veterinarios o médicos veterinarios zootecnistas realizarán las siguientes acciones:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-6.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Notificación oficial al predio involucrado, oficina regional y nacional.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-7.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Convocatoria comité de emergencia sanitaria público-privado, ya sea específicamente para el gremio o en general, dependiendo de la enfermedad.

      .tarjeta.color-acento-botones.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-8.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Aplicación plan de contingencia para tratamiento de focos, perifocos y zonas de alto riesgo.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-9.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Delimitación de zonas así: zona de foco de un radio de 5 km a la redonda, dejando una zona de perifoco de aproximadamente de 10 km de radio.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-10.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Se realizará fusil sanitario in situ del total de la población de aves afectadas en el predio y se hará incineración de cadáveres, huevos y residuos como gallinaza o pollinaza, cama de galpón, etc., de acuerdo con las normas dictaminadas por la Resolución 17753 de 2019.

      .tarjeta.color-acento-botones.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-11.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Establecimiento de zona de cuarentena de, por lo menos, 21 días antes de autorizar cualquier tipo de movimiento como salida o introducción de nuevas aves.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-12.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Seguimiento y monitoreo de los predios afectados por la enfermedad.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-13.svg' alt='AvatarTop')
        p.text-center(style="color:#000") Desnaturalización y destrucción de canales de aves y huevos y otros productos destinados a consumo humano o para incubación, provenientes de las zonas de foco y perifoco, que salieron de las producciones en las fechas que se consideran de incubación de la enfermedad de notificación.

    p Para la zona de foco y peri foco deberá aplicarse el siguiente protocolo:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-14.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Localización de todas las producciones avícolas
        p.text-center(style="color:#000") Es necesario identificar los focos en las producciones sean grandes, medianas o pequeñas, o predios en donde se encuentre cualquier tipo de aves de traspatio, gallos de pelea, patos o pavos, ornamentales, entre otras, y practicar visitas de inspección sanitaria y pruebas de laboratorio.

      .tarjeta.color-acento-botones.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-15.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Extremar medidas de bioseguridad
        p.text-center(style="color:#000") En las producciones se debe realizar limpieza y  desinfecciones de las zonas afectadas, control de tránsito en la zona, de aves, de las personas que trabajen con las mismas, vehículos, cadáveres, huevos, entre otros.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-16.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Movimientos
        p.text-center(style="color:#000") De aves para beneficio, huevos para incubar o para consumo y aves de un día, se realizarán únicamente bajo la autorización del ICA, el veterinario oficial de la planta de beneficio deberá estar advertido de la llegada de esas aves para proceder a un sacrificio apartado de otras aves y para la identificación de la carne, procedente de las mismas.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-17.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Transporte
        p.text-center(style="color:#000") Las aves de un (1) día o huevos para incubación podrán ser transportados de preferencia a establecimientos dentro de la zona del foco o de vigilancia o a un establecimiento con control oficial, los huevos para consumo podrán ser transportados preferiblemente a un establecimiento elaborador de ovoproductos, o deberán ser identificados para su comercialización dentro de la zona de foco o de vigilancia, o en otra zona previa desinfección de los mismos.

      .tarjeta.color-acento-botones.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-18.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Cuarentena
        p.text-center(style="color:#000") Las medidas de la zona foco se mantendrán durante 21 días como mínimo a partir del día en que se realizó la desinfección del establecimiento, a partir de ese momento, la zona de foco pasará a formar parte de la zona de vigilancia, se mantendrán durante un período de 30 días como mínimo, a partir de la implementación de las medidas sanitarias y de bioseguridad para controlar el predio afectado.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-19.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Novedades
        p.text-center(style="color:#000") De no registrarse novedades, las medidas adoptadas en la zona de vigilancia se mantendrán durante un periodo de 30 días como mínimo, a partir de la última fecha de aplicación de las medidas sanitarias y de bioseguridad diseñadas para el control tanto en la zona de foco como en la zona de vigilancia, y en los periodos durante los cuales se mantengan las medidas antes descritas.

      .tarjeta.color-acento-contenido.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-20.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Prohibido
        p.text-center(style="color:#000") No está permitido realizar ferias, exposiciones o mercados en los cuales se concentren aves de corral u otras.

    h4.mb-4 Investigación epidemiológica
    p.mb-4 El ICA, como autoridad sanitaria en la línea primaria de producción avícola, garantizará que se realice la investigación epidemiológica correspondiente para establecer, en lo posible, el origen primer brote, el tiempo transcurrido desde el ingreso del agente etiológico hasta la aparición de los síntomas, los posibles contactos establecidos entre las aves afectadas y otras y/o personas, a fin de extremar las medidas de control y evitar la difusión de la enfermedad.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 También estará encargado de realizar el respectivo seguimiento a los casos presentados y la resolución de los mismos, ofreciendo datos confiables, estableciendo base de datos, estadísticas e indicadores que sean de ayuda y se encuentren disponibles para los predios y las instituciones, así como para el gobierno nacional.

    h4.mb-4 Vacunación
    p El ICA con su equipo de profesionales decidirá los casos en los que se deba aplicar vacunas para coadyuvar en el control de la enfermedad, se deberá aunar esfuerzos con todos los actores del gremio para hacer la aplicación de estos en las zonas de foco, perifoco y vigilancia.
    p.mb-4 Comunicación a la OIE y a los países de la región: el ICA y el Ministerio de Salud realizarán las respectivas comunicaciones dentro de los plazos determinados a la Oficina Internacional de Epizootias, a los Estados miembros del Mercosur y Comunidad Andina de Naciones las novedades registradas para las enfermedades de notificación obligatoria de acuerdo con los protocolos establecidos para estas.





</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
