<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Uniformidad aves

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La uniformidad en la producción avícola es usada como una herramienta de evaluación del proceso productivo, para hacer uso de esta técnica se deben tener en cuenta los factores internos y externos que intervienen en el comportamiento de la homogeneidad de las parvadas que se describen a continuación:

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/decorador-1.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color: #000") Factores internos
        p.text-center(style="color: #000") Se producen por causas biológicas y/o fisiológicas. Estas pueden ser de origen aleatorio (totalmente entregados al azar) y manipulados (debido a los cruces, manipulación y mejoramiento genético); en estos, el productor tiene escasa intervención o participación. 

      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/decorador-2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Factores externos
        p.text-center Se refieren a las condiciones de manejo tales como ventilación, densidad, iluminación, humedad, alimentación, nutrición, temperatura, sanidad, entre otros.

    .row
      .cajon-b.color-acento-contenido.p-3(data-aos="zoom-in")
        p.mb-0 En otras palabras, el estudio de la uniformidad se puede definir como el conocimiento y el análisis del estado de un lote de aves frente a la tendencia de cada individuo hacia la heterogeneidad, la cual, entre mayor sea, menor será la uniformidad, generando un impacto en el comportamiento (Moscoso, 2015).

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | Los parámetros zootécnicos de uniformidad de las aves de la unidad productiva hacen referencia a la uniformidad de los lotes, como parámetro que define la variación del peso corporal de las aves de un galpón, debido a que es una técnica práctica, fácil y metodológica que permite hacer una evaluación del avance productivo de la parvada. 

    p(data-aos="zoom-in") El promedio de peso y la homogeneidad de una parvada son parámetros importantes en la producción de aves de corral, además, los lotes que presentan mejor uniformidad tienen ventajas en el proceso productivo sobre todo en la parte de manejo y su rendimiento es cercano a los niveles referenciados para su potencial genético.
    p.mb-4(data-aos="zoom-in") El método y procedimientos para cálculos matemáticos del peso de las aves, es una medida de la homogeneidad de las aves dentro de la parvada, lo cual se puede estimar por varios métodos tales como:
    
    ul.lista-ul(data-aos="zoom-in")
      li 
        i.fas.fa-circle
        | De forma visual y subjetiva.
      li 
        i.fas.fa-circle
        | Por parámetros matemáticos.
      li 
        i.fas.fa-circle
        | Post sacrificio o por rendimiento de la canal.

    p.mb-4(data-aos="zoom-in") Las técnicas para pesaje de las aves permiten llevar un control del peso para conocer a profundidad la situación real de los animales y tomar decisiones correctivas referentes a condiciones de temperatura, humedad, ración de alimento, sanidad, entre otros, de igual manera, define el momento óptimo de salida de los animales para sacrificio o finalización de su etapa productiva. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si el pesaje en la granja se realiza de manera semanal, es recomendable realizarlo siempre el mismo día de la semana y a la misma hora para asegurar que no haya muchos cambios en el contenido intestinal de los animales y que puedan influir en los resultados.

    p(data-aos="zoom-in") Durante este proceso se debe contar muy bien el número de animales pesados para asegurar que los datos no sean erróneos, todos los resultados, se anotan en una hoja de control o registro para procesar los datos, analizarlos y tomar decisiones de acuerdo con la información obtenida. Los animales con bajo peso o enfermos se deben descartar.
    p(data-aos="zoom-in") El pesaje inicia desde el momento de la recepción de las aves en el galpón, este se realiza escogiendo al azar como mínimo el 10 % de las cajas que contienen los pollitos o pollitas, se pesan, se descuenta el peso de la caja (peso sin animales), se cuenta la cantidad de animales y se consignan los datos en la hoja de registro.
    p.mb-4(data-aos="zoom-in") Existen dos técnicas para el pesaje de aves:  

    .col-xl-8.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
        .col-md-12.ps-lg-4
          h3 Pesaje colectivo con básculas analógicas (con precisión de ± 20 gramos)

    .col-xl-8.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE9E9")
        .col-md-12.ps-lg-4
          h3 Pesaje colectivo con básculas electrónicas (con precisión de ± 1 gramo)

    p(data-aos="zoom-in") Se debe cuidar de utilizar la misma báscula en cada pesaje, realizar mantenimiento periódico y calibrar previo a cada pesaje.
    p.mb-4(data-aos="zoom-in") Esta técnica de pesaje sirve para hallar el peso promedio de la parvada y se realiza de la siguiente manera: utilizando un corral de captura, se seleccionan como mínimo 100 aves o el 1 % de la población del galpón (lo que sea mayor) para realizar el pesaje. Este procedimiento se realiza tomando población de aves de tres sitios diferentes del galpón, cuidando siempre de hacerlo de manera proporcional y que sea lejos de las puertas y paredes del galpón.

    .col-lg-8.col-md-10.col-12.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 1.
        span <em>Ejemplo de puntos de muestreo de aves para pesaje</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema4/img-3.svg" data-aos="fade-left" alt="La figura 1 indica los puntos para tomar las muestras de aves para pesaje.")
      figcaption Nota. Tomada de Ross an Avigen Brand (2018).

    p(data-aos="zoom-in") En la figura se pueden observar los círculos rojos que indican el ejemplo de dónde se deben tomar las muestras.
    p.mb-5(data-aos="zoom-in") Si las aves están en las primeras semanas se pueden pesar varias en un recipiente como un balde o bandeja, teniendo en cuenta que no deben apilarse (uno encima de otro) o maltratar los animales. La capacidad puede variar de 10 a 20 animales por balde o bandeja, dependiendo de su peso.

    .col-lg-8.col-md-10.col-12.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 2.
        span <em>Pesaje colectivo manual de pollitos con báscula electrónica</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema4/img-4.svg" data-aos="fade-left" alt="En la figura 2 se muestra un ejemplo de como pesar pollitos de manera colectiva con báscula electrónica.")
      figcaption Nota. Tomada de Ross an Avigen Brand (2018).
    p.mb-4(data-aos="zoom-in") Si las aves se encuentran en etapas adultas se pesan amarrando varios animales, de los miembros posteriores para colgarlas en la báscula y proceder a pesarlas. 

    .col-xl-8.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
        .col-md-12.ps-lg-4
          p Pesaje individual: este pesaje se realiza para determinar la uniformidad de la parvada. Se realiza con básculas analógicas (con precisión de ± 20 gramos) o básculas electrónicas (con precisión de ± 1 gramo)
            br
            br
            | Se debe cuidar de utilizar la misma báscula en cada pesaje, realizar mantenimiento periódico y calibrarse previo a cada pesaje. Utilizando un corral de captura, selecciones como mínimo 100 aves o el 1 % de la población del galpón (lo que sea mayor) para realizar el pesaje.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 3.
      span <em>Pesaje individual de un ave adulta</em>
    .col-md-4.col-10.mx-auto.mb-5(data-aos="fade-right")
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema4/img-5-a.svg" data-aos="fade-left" alt="En la figura 3 se muestra el pesaje individual de un ave adulta.")
      figcaption Nota. Tomada de Farré-Energía
    p(data-aos="zoom-in") Este procedimiento, se realiza tomando población de aves de tres sitios diferentes del galpón, cuidando siempre de hacerlo de manera proporcional y que sea lejos de las puertas y paredes del galpón, posteriormente, se debe tomar a cada ave de la muestra seleccionada, ubicar sus miembros posteriores en el grillete y cuando el ave se quede quieta, proceder a tomar los datos del peso.


          



</template>

<script>
export default {
  name: 'Tema4',
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
