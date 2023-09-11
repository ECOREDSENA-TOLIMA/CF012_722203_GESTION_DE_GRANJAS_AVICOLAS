<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contexto etológico para garantizar el bienestar animal

    .row
      .cajon-b.color-acento-botones.p-3.mb-5
        p.mb-0 La etología puede ser definida como el estudio del comportamiento de las especies animales, todas, incluido el hombre, en su medio natural.
    
    .col-xl-6.mx-auto(data-aos="fade-right")
      a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo 1_Contexto_etologico.docx')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-doc.svg")
        .anexo__texto
          p <strong>Anexo 1. Contexto etológico.</strong> Para comprender el contexto etológico, se debe partir del análisis del comportamiento animal, ya sea doméstico o de las aves de corral. 






</template>

<script>
export default {
  name: 'Tema2',
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
