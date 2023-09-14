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
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 Contexto etológico 
      
    p.mb-5 El comportamiento animal es el producto de la interacción de las expresiones genéticas más el ambiente. 

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p Algunos comportamientos están determinados más innatamente que otros que han sido condicionados o aprendidos debido al entorno, el primer tipo de comportamiento que está dictaminado por la genética se le llama instintivo y un ejemplo de este podría ser el de las crías de mamíferos y la succión del pezón para alimentarse; el segundo que es un comportamiento aprendido y que se adquiere gracias al desarrollarse en determinado medio, por ejemplo, la habilidad de algunos primates de romper cascarones de frutos secos con herramientas como piedras.
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-1.png" data-aos="fade-left" style="max-width: 400px")

    p Los comportamientos de los animales domésticos se adquieren a través de procesos de troquelado o impronta, los cuales consisten en la instauración de lazos sociales determinados, en parte por la herencia (factores genéticos) y en parte por los procesos aprendidos en el ambiente, especialmente por el comportamiento parental.
    p En general los animales que conocemos como domésticos tales como bovinos, equinos, ovinos, caprinos, porcinos y aves como gallinas, patos, pavos, gansos, entre otros, son considerados en el mundo animal como especies de presa, lo cual influye en su comportamiento instintivo que es estar vigilantes y listas para darse a la fuga. 
    p Factores que incitan a expresar este comportamiento instintivo son la introducción de elementos nuevos, animales o personas ajenas a los habituales, ruidos distintos, agudos y altos volúmenes, suelos, objetos o paredes brillantes, con desniveles o que generen cierto tipo de movimiento extraño, corrientes fuertes de aire, golpes directos o indirectos, lugares oscuros y estrechos.
    p Además, estos animales viven en rodeos, rebaños o parvadas y tienen una jerarquía regida por la dominancia, no se mantienen parejas exclusivas macho -hembra, por lo que hay competencias entre los machos para reproducirse.
    p.mb-5 Por todo lo anterior, lo que debe priorizar es reducir en todo caso la generación de estrés para conservar el bienestar animal, razón por la cual deben ser planeadas las actividades productivas como la alimentación, la limpieza y desinfección, el abastecimiento de agua, los controles sanitarios, los pesajes y todas las labores de manejo de los animales.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En cuanto a la especie G. Gallus hay factores etológicos o comportamentales que debemos considerar, pues son aves que presentan capacidad cognitiva espacial, percepción del tiempo y del contexto y de aprendizaje, de comportamiento gregario, que han limitado su capacidad de vuelo por selección artificial, poseen un orden jerárquico especial en el que hay un macho que domina sobre los demás y un macho que está sometido a todos los demás machos, mientras las gallinas no entran en dominancia de los machos; cuando hay un solo macho en el grupo, este ocupa el primer lugar y las gallinas estarán en un puesto inferior naturalmente, sin embargo, si no hay presencia de machos, las gallinas determinan su rango jerárquico a través de peleas que pueden ser violentas, alargándose y complicándose proporcionalmente al número de animales, es decir a mayor número mayores peleas, más violentas, complicadas y largas.

    p Habitualmente pueden ser caníbales, si un ave está lastimada y se visualiza sangrado, las demás no dejan de picotearla. El punto de equilibrio y zona de fuga están relacionadas con el campo visual, lo cual se debe tener en cuenta para el manejo en grupo en donde la oscilación del operador marca la línea de movimiento de las aves.
    p Respecto a la parte de alimentación, debido a que son monogástricas y que su tracto gastrointestinal es relativamente corto y afecta su tránsito alimenticio, el cual se lleva a cabo en un tiempo inferior a 4 horas, debe suministrarse diferentes raciones al día, esto es de importancia para la ingesta ya que tienen deficiente sentido del gusto y el olfato.
    p Otro factor que debe ser tomado en cuenta es la influencia del fotoperiodo en las aves de corral tanto en su ciclo de reproducción, como de descanso y crecimiento, por eso es importante conocer los requerimientos fisiológicos y técnicos para poder hacer un buen manejo en beneficio de la producción y garantizar el bienestar animal.



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
