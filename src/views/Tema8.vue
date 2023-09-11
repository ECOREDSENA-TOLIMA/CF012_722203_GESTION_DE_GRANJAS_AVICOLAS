<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Contextualización y métodos de control de temperatura e iluminación en sistemas de producción de aves para carne y huevo

    p La temperatura ideal dentro del galpón oscila entre los 15°C a 20°C, en donde las aves se sienten confortables y se desarrollan las mejores condiciones productivas. 
    p.mb-4 En el control de la temperatura, además, se debe tener en cuenta que las aves son poiquilotermas (animales que carecen de mecanismos internos reguladores de la temperatura del cuerpo, por lo que esta varía más o menos con la temperatura ambiental) cuando son pequeñas, y su temperatura es de alrededor de 37,5°C hasta más o menos la tercera semana, que se estabiliza, al ser un ave adulta alcanza una temperatura normal del cuerpo alrededor de 41°C, de ahí la importancia de proporcionar una temperatura adecuada a los pollitos para no afectar el rendimiento y el crecimiento que puede producir inclusive una alta tasa de mortalidad. A continuación, se dan recomendaciones para el manejo de la temperatura:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema8/decorador-1.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color: #000") Temperaturas bajas
        p.text-center(style="color: #000") Debe hacerse un buen uso de las cortinas, así como de la construcción de paredes altas en el galpón y, en caso de ser necesario, utilizar calefactores que propicien temperaturas adecuadas para la producción de las parvadas.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema8/decorador-2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Temperaturas altas
        p.text-center El diseño del galpón debe ser de muros bajos y ventanas, o sin muro; el manejo de las cortinas es importante y, de ser necesario, se debe contar con extractores que permitan bajar la temperatura y liberar el calor.

    p.mb-5 La iluminación desempeña un papel fundamental en la crianza de aves de corral. El manejo adecuado de las horas de exposición a la luz y la intensidad lumínica influyen de manera significativa en la actividad y la salud de estas aves.  

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante los primeros 10 días de los pollitos, la intensidad lumínica debe ser elevada, así como el tiempo de exposición, pero al cumplir esta etapa debe reducirse periódicamente. Los pollos de engorde normalmente son criados a 10 lux, mientras que las gallinas ponedoras lo hacen con intensidades lumínicas entre 5 y 10 lux. 

    p El ciclo de luz y oscuridad al que se someten las aves es un factor crucial para regular su comportamiento y sus funciones biológicas. Controlar la iluminación de manera efectiva permite influir en aspectos como la alimentación, la reproducción, el crecimiento y el comportamiento en general de las aves.
    p En la industria avícola, se implementan sistemas de iluminación controlada para optimizar la producción. Por ejemplo, en la cría de pollos de engorde, se establece un programa de iluminación que consiste en ciclos de luz y oscuridad de cierta duración. Esta duración puede variar en función de la etapa de crecimiento de las aves. Durante la fase inicial, se pueden proporcionar períodos de luz más prolongados para estimular la ingesta de alimento y el crecimiento. Luego, se ajusta la duración de la luz para promover patrones saludables de descanso y actividad.
    p La intensidad de la luz también es un factor crítico. Una iluminación adecuada puede reducir el estrés y la agresividad entre las aves, mejorar la calidad del plumaje y prevenir problemas de visión.
    p En resumen, el manejo apropiado de la iluminación en la crianza de aves de corral es esencial para mantener su salud, bienestar y rendimiento óptimo. Se debe desarrollar un plan de iluminación adecuado basado en la etapa de crecimiento de las aves y en las necesidades específicas de la explotación avícola.


</template>

<script>
export default {
  name: 'Tema8',
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
