<template lang="pug">
.curso-main-container.pb-3.tema11
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Vacunación en aves de corral

    p Controlar las enfermedades infecciosas es muy importante en la avicultura y sobre todo prevenirlas, ya que esto hace que se ahorren costos, recursos, esfuerzos y preocupaciones en la producción, por lo cual se debe tener en cuenta las medidas de higiene y bioseguridad como la base dentro de los principios básicos en cuanto a prevención y control. 
    p.mb-5 Aunque debido a las prácticas industriales lo anterior suele no ser suficiente para garantizar la protección de las parvadas contra las diferentes enfermedades infecciosas, debido a las altas concentraciones de animales en un mismo galpón, por lo cual debe hacerse un uso razonable de los espacios y las condiciones tanto biosanitarias como de bienestar animal, que permitan una producción más biosegura.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema11/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por su parte, la mayoría de las enfermedades infecciosas que afectan a las aves de corral son cosmopolitas y de amplia distribución, pudiendo afectar aves domésticas y silvestres al mismo tiempo. Por ello, el proceso de vacunación es el mejor método de hacer un efectivo control y prevención, teniendo en cuenta que la vacunación es simplemente el proceso por el cual se exponen individuos sanos a un antígeno de un agente causante de una enfermedad, ya sea vivo o inactivado, para inmunizar contra el mismo, cuando se logra este propósito los individuos se benefician de su inmunidad activa mientras que su progenie podrá beneficiarse a través de inmunidad maternal, conocida también como inmunidad pasiva.

    p.mb-5 En la industria avícola, se pueden encontrar dos tipos de vacunas, a saber:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema11/decorador-1.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color: #000") Vacunas vivas
        p.text-center(style="color: #000") Las principales técnicas de vacunación para este tipo de vacunas son la  vacunación por inyección, “in-ovo”, por aspersión, en el agua de bebida, óculo-nasal, membrana del ala o intraalar, por medio del folículo de la pluma y oral.

      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema11/decorador-2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Vacunas inactivadas
        p.text-center Tienen una fase antigénica que puede contener organismos inactivados completos o parte de sus estructuras antigénicas, y un coadyuvante. Se administran por inyección teniendo algunas ventajas como el generar menos reacciones sistémicas que las vacunas vivas, inducen inmunidad alta, prolongada y uniforme, reduciendo la necesidad de realizar revacunación.

    p.mb-5 De acuerdo con el tipo de producción que se esté llevando a cabo con las aves de corral, se tienen diseñados esquemas vacunales que permiten asegurar las condiciones sanitarias de las aves de corral, garantizando el control y prevención de enfermedades infecciosas en las diferentes etapas de los procesos productivos, los cuales en términos generales son:

    .col-12.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Esquema de vacunación para ponedoras</em>
      .tabla-b.color-acento-botones(data-aos="fade-left")
        table
          thead.text-center(style="background-color:#06D1D1")
            tr
              th Edad
              th Enfermedad
              th Cepa
              th Método
          tbody
            tr
              th.p-2.text-center 1 día
              td.p-2 #[em Marek.]
              td.p-2 #[em Rispens]/HVT + SB1 c.a.
              td.p-2 s.c./i.m. (1). 
            tr
              th.p-2.text-center 1 - 7 días
              td.p-2 
                p Bronquitis Infecciosa.
                p Enfermedad de #[em Newcastle].
              td.p-2 
                p Tipo #[em Massachusetts].
                p Tipo #[em Hitchner] B1 o LaSota clonada.
              td.p-2 Ocular / aspersión gota gruesa (2). 
            tr
              th.p-2.text-center Opcional
              td.p-2 Enfermedad de #[em Newcastle].
              td.p-2 Vacuna inactivada.
              td.p-2 s.c./i.m. (1,2). 
            tr
              th.p-2.text-center 25 - 28 días
              td.p-2 Enfermedad de #[em Newcastle].
              td.p-2 Tipo Lasota.
              td.p-2 Agua de bebida / ocular / aspersión gota gruesa. 
            tr
              th.p-2.text-center 25 - 28 días
              td.p-2 Gumboro.
              td.p-2 Tipo intermedio.
              td.p-2 Agua de bebida / ocular / aspersión gota gruesa (3). 
            tr
              th.p-2.text-center 35 - 38 días
              td.p-2 Gumboro.
              td.p-2 Tipo intermedio.
              td.p-2 Agua de bebida / ocular/ aspersión gota gruesa. 
            tr
              th.p-2.text-center 8 semanas
              td.p-2 
                p Bronquitis Infecciosa.
                p Enfermedad de #[em Newcastle].
              td.p-2 
                p Tipo #[em Massachusetts].
                p Tipo Lasota.
              td.p-2 Agua de bebida / ocular / aspersión gota gruesa. 
            tr
              th.p-2.text-center Opcional
              td.p-2 Enfermedad de #[em Newcastle].
              td.p-2 Vacuna inactivada.
              td.p-2 s.c./i.m. (1). 
            tr
              th.p-2.text-center 6 - 12 semanas
              td.p-2 Encefalomielitis / Viruela Aviar.
              td.p-2 
              td.p-2 Punción alar. 
            tr
              th.p-2.text-center 6 - 12 semanas
              td.p-2 #[em Micoplasma gallisepticum].
              td.p-2 Vacuna viva.
              td.p-2 Aspersión gota fina (5). 
            tr
              th.p-2.text-center 18 semanas
              td.p-2 Inactivada: #[em Newcastle] bronquitis. Síndrome de caída de postura.
              td.p-2 
              td.p-2 s.c. / i.m. 
      //- img.d-md-block.mb-3(src="@/assets/curso/temas/tema11/img-2.svg" data-aos="fade-left")
   
    .col-xl-12.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 2.
        span <em>Esquema vacunal para pollos de engorde</em>
      .tabla-b.color-acento-botones(data-aos="fade-left")
        table
          thead.text-center(style="background-color:#06D1D1")
            tr
              th Edad
              th Enfermedad
              th Cepa
              th Método
          tbody
            tr
              th.p-2.text-center 1 día
              td.p-2 #[em Marek]
              td.p-2 HVT c.a.
              td.p-2 s.c./i.m. (1).
            tr
              th.p-2.text-center 1 - 7 días
              td.p-2 
                p Bronquitis Infecciosa.
                p Enfermedad de #[em Newcastle].
              td.p-2 
                p Tipo #[em Massachusetts].
                p Tipo #[em Hitchner] B1 o LaSota clonada.
              td.p-2 Ocular / aspersión gota gruesa (2).
            tr
              th.p-2.text-center 7 - 10 días
              td.p-2 #[em Gumboro].
              td.p-2 Tipo intermedio.
              td.p-2 Agua de bebida / ocular / aspersión gota gruesa (3).
            tr
              th.p-2.text-center 18 - 21 días
              td.p-2 #[em Gumboro].
              td.p-2 Tipo intermedio.
              td.p-2 Agua de bebida / ocular / aspersión gota gruesa.
            tr
              th.p-2.text-center 25 - 28 días
              td.p-2 Enfermedad de #[em Newcastle].
              td.p-2 Tipo LaSota.
              td.p-2 Agua de bebida / ocular / aspersión gota gruesa.
      //- img.d-md-block.mb-3(src="@/assets/curso/temas/tema11/img-3.svg" data-aos="fade-left")

</template>

<script>
export default {
  name: 'Tema11',
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
