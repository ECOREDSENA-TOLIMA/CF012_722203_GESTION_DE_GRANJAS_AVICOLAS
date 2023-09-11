<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .col-xl-12.mx-auto.mb-5
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE9E9")
        .col-md-12.ps-lg-4
          p En este componente se abordan los conceptos claves para reconocer los aspectos relacionados con los procesos de bioseguridad y alimentación de las aves aplicados en la industria de productos avícolas, interpretando las normativas aplicables y las buenas prácticas. Como punto de partida, se invita a ver el siguiente video introductorio.
    
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5dUb0iZIR7E" title="Bioseguridad y nutrición" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
