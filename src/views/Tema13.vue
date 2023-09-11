<template lang="pug">
.curso-main-container.pb-3.tema13
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Despique

    p El despique, que se conoce también como corte de picos, se da principalmente para evitar el canibalismo, que se desperdicie el alimento y que las gallinas piquen los huevos dañando sus cáscaras. Generalmente se realiza en dos fases, la primera entre los 8 a 12 días, porque se dice hay afluencia de vitamina k, lo que mejora la cicatrización y evita el sangrado continuo, y la segunda entre las 10 y 12 semanas en el periodo de prepostura cuando aún no han alcanzado la madurez sexual, se les debe aplicar 48 horas previas vitamina k para evitar hemorragias.
    p Sin embargo, según las normas para obtener el sello Certified Humane de bienestar animal, no se permite esta práctica en absoluto, pues se considera que la técnica que se realiza con el uso de una cuchilla caliente, causa dolor y sufrimiento a los animales por el exceso de cortes y heridas ocasionadas, al igual que los despuntes, los que les causan un dolor crónico a las aves cuando se efectúan después de los 10 primeros días de vida, por lo que se permite el despunte solo en los 10 primeros días como una forma de reducir al máximo el impacto de los picotazos en los animales. 
    p.mb-5 Además, se recomienda tener en cuenta las siguientes pautas:

    .col-xl-9.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
        .col-md-12.ps-lg-4
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Este procedimiento solo puede ser realizado por personal capacitado y competente para el uso de herramientas y equipo aprobado para esta actividad.
            li 
              i.fas.fa-circle
              | Únicamente se puede retirar la punta del pico de la parte superior para limitar que las aves piquen a otras profundamente y las dañen (no dejar “pico de águila”), para que no interfiera con comportamientos etológicos normales de las aves como alimentarse, picotear el suelo o acicalarse.
            li 
              i.fas.fa-circle
              | La parte inferior del pico solo se puede recortar, sin amputar o mutilar ninguna parte, esto para que no se deforme el pico al ir envejeciendo el ave.

    p.mb-4 Así mismo, se ha demostrado que los hábitos de picoteo entre las aves se reduce visiblemente en producciones en donde hay un ambiente enriquecido con perchas, nidales, pastoreo, además de un buen manejo ambiental con cuidado y calidad de la cama, la temperatura y humedad; junto con una adecuada alimentación y nutrición, pero también una relación positiva entre el personal que maneja la producción y el lote de aves, lo que en conclusión quiere decir que el comportamiento de las aves responde positivamente a unas mejores condiciones en el entorno en el que viven.











</template>

<script>
export default {
  name: 'Tema13',
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
