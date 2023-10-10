<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Nutrición en el sistema de producción de aves para carne y huevos

    p Las aves de corral deben alimentarse de acuerdo con su propósito, su edad y su etapa productiva, en donde se requiere cierto tipo de nutrientes específicos, tal como sucede en el caso de prepostura en las ponedoras, que necesitan más cantidad de calcio en esta fase. 
    p Además, se debe tener en cuenta la línea genética que, de acuerdo con sus características, maneja tablas de alimentación, conversión y crecimiento las cuales ya han sido determinadas a través de diversos estudios y que se encuentran dentro de sus manuales.
    p.mb-4 Para calcular el consumo alimento del lote de aves en los sistemas productivos se puede realizar mediante la siguiente fórmula, del consumo de alimento de ave por día, se expresa como: 

    .col-xl-8.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4
        p.mb-0.text-center Consumo gr / ave / día = (Total de alimento ofrecido (Kg) / 100) / (Existencia de aves) 
        //img.d-md-block(src="@/assets/curso/temas/tema6/img-1.svg" data-aos="fade-left")

    p El consumo de alimento representa entre el 60 % al 70 % de los costos fijos de producción, con esta expresión también permite despejarse, para obtener la cantidad de alimento que se ofertará conociendo la cantidad de aves alojadas.
    p Es importante que el resultado anterior se tome como el observado (RO) y deben compararse con los resultados esperados (RE), que son los que se ofrecen en las tablas propuestas de consumo que se encuentran dentro de los manuales específicos de cada línea genética.
    p.mb-4 De esta forma se evalúa sí la alimentación es la adecuada de acuerdo con los parámetros propuestos por etapa, edad y propósitos productivos.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | Los sistemas y técnicas de alimentación de las aves obedecen a la tecnología de los elementos de suministro, en ese orden de ideas pueden ser manuales o automáticos, siendo los automáticos los más utilizados por las producciones medianas a grandes, ya que permite establecer raciones e intervalos de tiempo más exactos para las parvadas, garantizando un mejor acceso al alimento por ave.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | Las características nutricionales, físicas y organolépticas del alimento para las aves son un elemento destacable dentro del proceso de producción de las aves de corral, puesto que gran parte de los costos se generan por esta, es así cómo se formulan raciones para hacer más eficiente la alimentación y suministrar los nutrientes requeridos en las diferentes etapas tales como aminoácidos, proteína, energía, ácidos grasos, vitaminas, minerales, entre otros. 

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#06D1D1")
            | En las producciones comerciales grandes, las aves se alimentan exclusivamente con piensos balanceados, concentrados y diseñados para suplir los requerimientos nutricionales según la línea genética, la edad y el tipo de producción, actualmente se encuentran en el mercado diferentes ofertas de fórmulas de distintas casas comerciales que afirman lograr resultados óptimos en el desarrollo productivo de las aves; también hay bases alimenticias nutricionales para que los productores que lo prefieren diseñen sus propias mezclas y concentrados.

    p Es de aclarar que las características físicas y organolépticas del alimento varían, si son pollos de engorde o gallinas ponedoras, esto debido a que sus necesidades son muy diferentes.
    p.mb-4 El alimento que se presenta en la siguiente imagen son migas, el del centro son #[em pellets] y a la derecha harinas o mezclas; los pollos de engorde eligen las partículas de alimento por su forma, color, tamaño y consistencia y prefieren el alimento que sea más fácil para tomar como lo son las migajas o #[em pellets]. 

    .col-xl-11.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 4.
        span <em>Diferentes formas de alimento con la misma composición de nutrientes</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema6/img-2.svg" data-aos="fade-left" alt="En la figura 4 se muestran tres tipos de formas de alimentos para aves, migas, pellets y harinas o mezclas.")

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cantidad de consumo de alimento balanceado está muy relacionada con el desempeño en el crecimiento de las aves de corral, la conversión y la producción eficiente de huevos. Los pollos de engorde y las gallinas ponedoras modernas no crecen a todo su potencial genético, a menos que consuman diariamente todos sus requerimientos nutricionales. Además de una formulación de la dieta adecuada, el mantenimiento de una máxima ingestión de alimento, es el factor más importante que determinará la tasa de crecimiento, rendimiento en canal o producción de huevo y la eficacia de utilización de los nutrientes.

    p Las dietas nutricionales deben ser de ingredientes de alta calidad y frescos que les permitan a las aves tener una mejor asimilación de los nutrientes requeridos en la ración diaria, siendo la alimentación con concentrados la alternativa más utilizada en las diferentes producciones avícolas para realizar un programa alimenticio, por lo general los ingredientes más usados en estas dietas balanceadas nutricionalmente son: proteína, carbohidratos y grasas, macrominerales, enzimas, minerales traza y vitaminas.






</template>

<script>
export default {
  name: 'Tema6',
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
