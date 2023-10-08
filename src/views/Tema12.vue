<template lang="pug">
.curso-main-container.pb-3.tema12
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Parámetros de producción en las unidades avícolas

    p Estos parámetros son de gran importancia en las producciones avícolas, pues facilitan la toma de decisiones, garantizando una producción eficiente. Para poder realizar el cálculo y análisis de los parámetros, es necesario tener ordenada y al día, la información contenida en los registros de producción.
    p.mb-5 Los parámetros de producción tienen la finalidad de presentar un panorama general del desempeño productivo de la parvada, los cuales se pueden dividir en tres aspectos importantes, a saber:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema12/decorador-1.svg', alt='Texto que describa la imagen')

          h3.text-center(style="color:#000") Relacionado al desarrollo corporal
          p.text-center(style="color:#000") Peso corporal, uniformidad, longitud del tarso y longitud del pico.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema12/decorador-2.svg', alt='Texto que describa la imagen')

          h3.text-center(style="color:#000") Relacionado a la producción
          p.text-center(style="color:#000") Mortalidad, consumo de alimento, conversión alimenticia, postura, peso del huevo, masa del huevo, número de huevos por ave, entre otros. 

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta.color-acento-botones.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema12/decorador-3.svg', alt='Texto que describa la imagen')

          h3.text-center(style="color:#000") Relacionado al producto final
          p.text-center(style="color:#000") Clasificación del huevo, número total de cajas producidas, mermas (rotos o picados), pigmentación del pollo, alimento almacenado en silo, inventario de empaques (cajas de cartón, divisiones, separadores de huevo), entre otros.
    
    Separador
    #t_12_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 12.1 Producción de carne

    p Los parámetros necesarios para determinar el comportamiento de los pollos de engorde en su periodo productivo son la línea, fecha de nacimiento, total de animales recibidos, peso promedio inicial, duración del periodo, promedio ave día, muertes, porcentaje de mortalidad, descartes eliminados, porcentaje de descartes eliminados, consumo total del lote, consumo promedio ave periodo, peso final promedio de pollo en pie, total de aves procesadas, conversión pollo en pie, conversión de pollo procesado, índice de eficiencia, índice de productividad, factor europeo de eficiencia en la producción, eficiencia alimenticia y el porcentaje de rendimiento en canal.
    p.mb-5 Fórmulas importantes a considerar antes del sacrificio:  

    .col-xl-10.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
        .col-md-12.ps-lg-4
          p Conversión de alimento = Consumo promedio por ave ÷ peso promedio corporal.
          p Factor europeo de eficiencia productiva = [(peso corporal promedio ÷ # de días) ÷ índice de conversión] x viabilidad *100.
          p Índice de productividad = Ganancia diaria x viabilidad ÷ eficiencia alimenticia x 100. 

    p.mb-4 Una vez las aves son sacrificadas se debe considerar los siguientes aspectos y cálculos:

    ul.lista-ul.mb-5
      li 
        i.fas.fa-circle
        | <strong>Fecha de sacrificio:</strong> un lote de pollo puede ser enviado a la planta de faenado en días consecutivos en diferentes números de lotes y diferentes números de animales. Al momento de llegar un lote a la planta de sacrificio se pesan y se determina el peso promedio, se deben de descontar los pollos ahogados, estos también deben ser pesados para determinar el peso promedio de los pollos ahogados.
      li 
        i.fas.fa-circle
        | <strong>Peso total sacrificio =</strong> (# aves enviadas a sacrificio - aves ahogadas) x peso promedio.
      li 
        i.fas.fa-circle
        | <strong>Peso promedio =</strong> peso total ÷ (aves sacrificadas - aves ahogadas).
      li 
        i.fas.fa-circle
        | <strong>Ganancia diaria =</strong> (peso total ÷ edad al sacrificio) x 100.
      li 
        i.fas.fa-circle
        | <strong>Edad al sacrificio:</strong> es la duración del periodo productivo desde el primer día hasta el día en que llegan a la planta de faenado.
      li 
        i.fas.fa-circle
        | <strong>Edad promedio al sacrificio =</strong> (sumatoria del # pollos sacrificados x la edad de cada lote al sacrificio) ÷ total de pollos al sacrificio.
      li 
        i.fas.fa-circle
        | <strong>Consumo promedio =</strong> (total de alimento en el periodo ÷ # de pollos enviados al sacrificio - los pollos ahogados).
      li 
        i.fas.fa-circle
        | <strong>Conversión alimenticia =</strong> total de alimento consumido ÷ peso total
      li 
        i.fas.fa-circle
        | <strong>Índice de eficiencia =</strong> (peso promedio ÷ conversión) x 100..
      li 
        i.fas.fa-circle
        | <strong>Eficiencia alimenticia =</strong> (peso promedio ÷ consumo promedio) x 100.
      li 
        i.fas.fa-circle
        | <strong>Capacidad de carga =</strong> densidad x # de ciclos anuales x peso promedio x viabilidad.
      li 
        i.fas.fa-circle
        | <strong>Densidad =</strong> # aves por metro cuadrado.
      li 
        i.fas.fa-circle
        | <strong>Ciclos:</strong> involucra la duración del periodo productivo + la duración de la profilaxis.
      li 
        i.fas.fa-circle
        | <strong>Peso corporal promedio:</strong> el peso promedio final de las aves que sobreviven.
      li 
        i.fas.fa-circle
        | <strong>Viabilidad =</strong> (número de aves vivas ÷ número de aves encasetadas) x 100.

    Separador
    #t_12_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 12.2 Producción de huevo

    p.mb-5 Los huevos comerciales son generados en las granjas de explotación avícola dedicada a la producción de huevos para consumo humano, en estas se implementan procesos donde se garantiza la protección de la inocuidad del huevo o su vida útil, ofreciendo buenas condiciones sanitarias, protocolos y buenas prácticas para que permanezcan en condiciones higiénicas; para esto deben cumplir con los siguientes aspectos:  

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="La recolección de huevo")
        .col-lg-2.col-md-4.col-8.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema12/decorador-4.svg', alt='La recolección de huevo')
        .col-md-8.col-12
          p Se puede realizar de forma manual o mediante un sistema automático de recolección (en cinta), todos los operarios que participan en la recolección de huevos deben seguir estrictamente las instrucciones de lavado y desinfección de manos.
          
      .row.justify-content-center.align-items-center(titulo="Registros")
        .col-lg-2.col-md-4.col-8.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema12/decorador-5.svg', alt='Registros')
        .col-md-8.col-12
          p En las granjas se deben mantener registros de las actividades relacionadas con la recolección y almacenamiento de los huevos, donde se clasifican y consideran los siguientes aspectos: lote, fecha, procedimiento de rotación de producto, cantidades recolectadas y las cantidades de producto no conforme.
      
      .row.justify-content-center.align-items-center(titulo="Clasificación y medidas")
        .col-lg-2.col-md-4.col-8.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema12/decorador-6.svg', alt='Clasificación y medidas')
        .col-md-8.col-12
          p Se deben tomar las medidas necesarias cuando se detecte en los huevos <em>salmonella gallinarum, pullorum, enteritidis y typhimurium</em> de acuerdo con la legislación vigente, dejando registro del procedimiento en recuperación, destrucción y eliminación de los huevos.

      .row.justify-content-center.align-items-center(titulo="Almacenamiento")
        .col-lg-2.col-md-4.col-8.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema12/decorador-7.svg', alt='Almacenamiento')
        .col-md-8.col-12
          p Debe ser adecuado, donde los techos, pisos y paredes permanezcan limpios y en buen estado. Además de cumplir con buenas prácticas de manipulación de alimentos tales como limpieza, protección de lámparas, control de plagas, separación de producto de las paredes y pisos.

      .row.justify-content-center.align-items-center(titulo="Transporte")
        .col-lg-2.col-md-4.col-8.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema12/decorador-8.svg', alt='Transporte')
        .col-md-8.col-12
          p Se deben garantizar las condiciones del transporte del huevo, protegiéndolo de temperaturas y evitando toda posibilidad de contaminación.
      












</template>

<script>
export default {
  name: 'Tema12',
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
