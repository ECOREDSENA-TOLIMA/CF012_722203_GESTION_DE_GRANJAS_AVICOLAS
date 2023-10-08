<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Densidad de aves por unidad de proceso productivo

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p Conocer y calcular la densidad del número de aves por metro cuadrado es de gran importancia para la producción, puesto que determina qué tan grande debe ser el espacio que se debe acondicionar para los galpones y evitar que haya hacinamiento, aumento de temperatura y humedad. Además, interfiere con el apetito de las aves, la ganancia de peso, la calidad de la cama puede producir canibalismo y mortalidad, lo que se traduce en pérdidas para la producción.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-1.png" data-aos="fade-left" style="max-width: 400px")

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-left")

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | <strong>El cálculo de cantidad de aves por unidad de producción</strong> está determinado por el sistema productivo elegido, el cual puede ser intensivo, semi-intensivo o autosuficiente; también tiene que ver la línea de trabajo, que puede ser pesada, semi-pesada o liviana, el fin productivo, es decir, si es para producción de carne o huevo; además de las capacidades económicas del productor.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-3.png" data-aos="fade-right")

    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-4.png', alt='Texto que describa la imagen')
      .col-12.col-md-7.mt-5(data-aos="fade-left")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | <strong>El cálculo de tamaño espacio alojamiento de aves</strong> es la variable que, principalmente, se debe tener en cuenta en la producción, para determinar el área de las instalaciones, existe una constante aprobada por diversos grupos avícolas para la cual se garantiza el bienestar, calidad y los estándares productivos, y es de aproximadamente 5 aves / m2, también puede calcularse por el peso corporal de las aves, 30 kg de peso corporal / m2.

    p.mb-4 Estas variables deben tenerse en cuenta en relación a las disposiciones de los galpones y su cantidad en función de la producción total, con el fin de asegurar un rendimiento y rentabilidad óptimos, evitando la generación de riesgos innecesarios. Por otro lado, estas variables pueden ser ajustadas considerando factores como los sistemas de ventilación, iluminación, suministro de equipos, control de humedad y la edad de las parvadas.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | <strong> El cálculo de cantidad de equipos por unidad de producción</strong> y el número de equipos dentro del galpón, también está vinculado directamente con el número de aves dentro del mismo, es de gran importancia la ubicación de estos elementos, los cuales deben ceñirse a las especificaciones técnicas.

    p.mb-4 Las constantes para algunos equipos de importancia son las siguientes:

    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE9E9")
        .col-md-12.ps-lg-4
          p <strong>Bebederos:</strong> su diseño puede variar según el tipo de comedero utilizado y la edad de la parvada. En el siguiente recurso se proporcionan especificaciones detalladas según su tipo:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-5.png' alt='')
        h5.text-center Especificaciones bebedero de canal
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | 2,5 cm por pollito.
          li 
            i.lista-ul__vineta
            | 4,0 cm por ave de corral adulta.                  
       
      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-6.png' alt='')
        h5.text-center Especificaciones de bebedero de tolva o volteo
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | 5 a 8 litros.
          li 
            i.lista-ul__vineta
            | 1 por cada 50 pollitos.
          li 
            i.lista-ul__vineta
            | 1 por cada 15 aves de corral adultas.

      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5  
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-7.png' alt='')
        h5.text-center.texto-negro Especificaciones de bebedero de campana
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | Es de tipo automático.
          li 
            i.lista-ul__vineta
            | 1 por cada 167 pollitos.
          li 
            i.lista-ul__vineta
            | 1 por cada 50 a 75 aves adultas.                                         

      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-8.png' alt='')
        h5.text-center Especificaciones de bebedero de <em>nipple</em> (aguja)
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | 1 por cada 8 o 10 pollitos o aves adultas.

    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE9E9")
        .col-md-12.ps-lg-4
          p <strong>Comederos:</strong> su cantidad se determina en base al número de aves en el galpón y la elección de su tipo. A continuación, se detallan las especificaciones correspondientes a cada tipo:
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-9.png' alt='')
        h5.text-center Especificaciones de comederos lineales
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | 1 m por cada 100 pollitos.
          li 
            i.lista-ul__vineta
            | 2,5 m por cada 250 pollos.                 
       
      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-10.png' alt='')
        h5.text-center Especificaciones de comedero de bandeja
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | Se usa para recibir los pollitos de engorde.
          li 
            i.lista-ul__vineta
            | 1 por cada 100 pollitos.

      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5  
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-11.png' alt='')
        h5.text-center.texto-negro Especificaciones de comedero de tolva
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | Viene en presentación  para 4, 6, 8 y 10 kilos.
          li 
            i.lista-ul__vineta
            | 1 por cada 50 pollitos.
          li 
            i.lista-ul__vineta
            | 1 por cada 25 aves.                                        

      .tarjeta.color-acento-contenido.col-ipad
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema1/img-12-2.png' alt='' style="height:110%")
        h5.text-center Especificaciones de comederos automáticos
        ul.lista-ul.m-4
          li 
            i.lista-ul__vineta
            | 1 por cada 50 pollitos.
          li 
            i.lista-ul__vineta
            | 1 por cada 25 aves.
          li 
            i.lista-ul__vineta
            | Las raciones son programadas.

    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE9E9")
        .col-md-12.ps-lg-4
          p.mb-0 <strong>Nidales:</strong> el número de nidales está relacionado directamente con el número de aves en el galpón y obedece a la constante de:

    .col-xl-10.col-12.mx-auto.mb-5
      .tarjeta.color-primario--borde 
        .row.justify-content-center.align-items-center
          .col-md-3.col-12
            img.d-md-block(src="@/assets/curso/temas/tema1/img-13.png" data-aos="fade-left")
          .col 
            p.mb-md-0 #[b 1 nidal por cada 5 aves ubicado a 60 cm del suelo.]
    .col-xl-10.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE9E9")
        .col-md-12.ps-lg-4
          p.mb-0 <strong>Criadoras:</strong> el número depende de la capacidad de este elemento en sí y la edad de los pollitos, la más comúnmente encontrada en el mercado y por ende la más utilizada es la de capacidad de:

    .col-xl-10.col-12.mx-auto.mb-5
      .tarjeta.color-primario--borde 
        .row.justify-content-center.align-items-center
          .col-md-4.col-12
            img.d-md-block(src="@/assets/curso/temas/tema1/img-14.png" data-aos="fade-left")
          .col 
            p.mb-md-0 #[b 500 a 1.000 pollitos.]
    //- .col-xl-10.mx-auto.mb-5
    //-   img.d-md-block(src="@/assets/curso/temas/tema1/img-14.svg" data-aos="fade-left")




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
