<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contexto, características y tipos de las líneas comerciales de aves producción de carne y huevo

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p En las aves de postura, al igual que en los pollos de engorde, se comercializan líneas genéticas híbridas con el nombre de la empresa que las produce y se enfocan en características que mejoren la producción y reduzcan los costos de esta. Luego las líneas en producción de huevos: mueven gran cantidad de huevos, tienen menor peso y consumen menos alimentos; y las líneas en producción de pollos de engorde: muestran superioridad en ganancia de peso y mayor conversión de alimento.
              br
              br
              | A continuación, se describen las líneas más utilizadas en Colombia en postura junto con sus características más destacables: 
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-1.png" data-aos="fade-left" style="max-width: 400px")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10.mx-auto
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso//temas/tema3/img-2-1.svg" data-aos="zoom-in-up" alt="")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img(src="@/assets/curso/temas/tema3/img-2-2.svg" data-aos="zoom-in-up" alt="")
    
    .row
      .cajon-b.color-acento-botones.p-3.mb-5
        p.mb-0 En cuanto a las líneas de engorde más utilizadas en Colombia y sus principales características son:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10.mx-auto
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso//temas/tema3/img-8-1.svg" data-aos="zoom-in-up" alt="")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img(src="@/assets/curso/temas/tema3/img-8-2.svg" data-aos="zoom-in-up" alt="")







</template>

<script>
export default {
  name: 'Tema3',
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
