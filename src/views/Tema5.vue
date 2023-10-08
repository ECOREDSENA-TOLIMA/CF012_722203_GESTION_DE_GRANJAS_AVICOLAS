<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Calidad del agua potable

    p.mb-5 El agua es el recurso básico para garantizar la vida de todos los seres vivos del planeta, solo superado por el oxígeno. Se necesita el agua para cualquier actividad metabólica o fisiológica en el cuerpo o función de las hormonas y enzimas, ayuda a transportar los nutrientes y los desechos en el cuerpo y significativamente reduce la temperatura corporal. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por su parte, las aves de corral deben tener disposición de este líquido durante toda la producción, cualquier variación afectará directamente el proceso, causando pérdidas de rendimiento y bajas de peso, estrés, problemas sanitarios y etológicos de los lotes.

    p Esta labor puede verse afectada por diversos factores, tales como la temperatura tanto del ambiente como de la misma agua, el tipo de bebedero y almacenamiento, la edad, el sexo, la humedad, entre otros, por eso, debe realizarse con frecuencia supervisión de la calidad física, química y bacterianas del agua y tomar las medidas correctivas pertinentes.
    p De otra parte, la Resolución 2115 de 2007, busca establecer el sistema para la protección y control de la calidad del agua, con el fin de monitorear, prevenir y controlar los riesgos para la salud humana, ya sean físicos, químicos o microbiológicos, causados por su consumo, exceptuando el agua envasada.
    p.mb-4 Respecto a las propiedades fisicoquímicas y microbiológicas del agua potable, estas se caracterizan por su densidad que es de 1 g/cm3, amplio margen de temperaturas en fase líquida (0 - 100ºC) ya que su punto de ebullición es a 100°C a nivel del mar y el de congelamiento es a 0°C, constante dieléctrica elevada que permite que las disoluciones puedan conducir la electricidad y permite la disociación de la mayoría de las sales inorgánicas; elevado calor específico y calor de vaporización lo que causa que el calor liberado en reacciones bioquímicas exotérmicas sea fácilmente absorbido y/o eliminado con pequeña variación de la temperatura del individuo; y tensión superficial muy elevada que la hace pegajosa y elástica.   

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En cuanto a las propiedades químicas del agua, las principales son: un átomo de oxígeno ligado a dos de hidrógeno que es su fórmula química es H₂O, la molécula del agua tiene carga eléctrica positiva en un lado y negativa en el otro, propiedad que ocasiona que sus moléculas se unan entre sí; es dipolar, o sea, las moléculas de agua se orientan en torno a las partículas polares o iónicas, formando una envoltura de solvatación lo que se traduce en una modificación de las propiedades de estas partículas; contiene minerales y nutrientes de gran valor; en su estado puro es de pH neutro (7) esto significa que no es ácida ni básica; reacciona con los óxidos ácidos, los óxidos básicos y el metal; forma hidratos al unirse con las sales.



</template>

<script>
export default {
  name: 'Tema5',
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
