<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Con la finalidad de prevenir, controlar y erradicar la presencia de enfermedades aviares, la autoridad sanitaria oficial, el Instituto Colombiano Agropecuario, ICA, ha establecido medidas básicas de bioseguridad y demás requisitos sanitarios que son de cumplimiento obligatorio para todas las granjas avícolas del país, pues estas requieren de una serie de procesos sistemáticos para garantizar su eficiencia y rentabilidad. Entre ellos, se encuentran los parámetros etológicos, el bienestar animal, la bioseguridad, las buenas prácticas, la alimentación y nutrición, así como la uniformidad y densidad en la crianza. Estos aspectos son fundamentales para evaluar la producción en cada período, por lo que su implementación y conocimiento resultan de gran importancia. En el siguiente mapa conceptual, encontrará la ruta del contenido visto.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
