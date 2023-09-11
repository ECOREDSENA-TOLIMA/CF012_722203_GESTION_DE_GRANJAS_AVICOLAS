<template lang="pug">
.curso-main-container.pb-3.tema10
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Medicamentos y biológicos

    p Los medicamentos son sustancias utilizadas para curar a las aves y su administración puede ser interna o externa. Por otra parte, los biológicos son sustancias utilizadas para la prevención de enfermedades, como por ejemplo las vacunas. Los medicamentos veterinarios que se utilizan y comercializan en Colombia, deben estar registrados ante el Instituto Colombiano Agropecuario (ICA) y deberán emplearse aplicando las buenas prácticas para el uso de medicamentos veterinarios.
    p Los medicamentos utilizados en la producción avícola, pueden clasificarse de acuerdo con su naturaleza (farmacológica o inmunológica); su vía de administración (oral, inyectable, ocular, por nebulización), sus propiedades (analgésico, antiparasitario, anestésico), su forma farmacéutica (polvo oral, premezcla medicamentosa, aerosol, comprimido, entre otros).
    p.mb-5 Con base en la forma de elaboración, los medicamentos tienen varias formas de presentación: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/decorador-21.svg', alt='Texto que describa la imagen')

          h3.text-center(style="color:#000") Polvos o sólidos
          p.text-center(style="color:#000") Suelen estar en forma de comprimidos, tabletas o polvos. En esta forma de presentación se pueden encontrar algunos antibióticos, vitaminas, antiparasitarios y promotores del crecimiento, entre otros.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/decorador-22.svg', alt='Texto que describa la imagen')

          h3.text-center(style="color:#000") Liofilizados
          p.text-center(style="color:#000") Son preparaciones farmacéuticas que se disponen en únicas dosis y luego se liofilizan, pueden ser tabletas sólidas en las cuales se envasan al vacío las vacunas vivas o modificadas.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta.color-acento-botones.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema9/decorador-23.svg', alt='Texto que describa la imagen')

          h3.text-center(style="color:#000") Frecuencia respiratoria
          p.text-center(style="color:#000") En un ciclo normal 127,2 inspiraciones/minuto, con máximas de 277,7 inspiraciones/minuto.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_10_1 10.1 Vías de administración, precauciones y restricciones

    p.mb-5 En las aves, se pueden utilizar las siguientes vías de administración de medicamentos:

    .row.mb-5
      .col-md-6
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario.mb-5(data-aos="fade-down")
          .row(numero="1" titulo="Oral")
            .col-md-12.mb-4.mb-md-0
              p.text-small Esta es la principal vía de administración de medicamentos (sólidos o líquidos) en las aves y se administra a través del pico.

          .row(numero="2" titulo="Ocular")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se aplica el medicamento directamente sobre el ojo, este método es de manejo individual de los animales y se utiliza principalmente para realizar vacunaciones contra enfermedades como Newcastle, Gumboro, bronquitis, entre otras.

          .row(numero="3" titulo="Intranasal")
            .col-md-12.mb-4.mb-md-0
              p.text-small El medicamento se administra directamente en los orificios nasales, si la presentación del medicamento es en líquido, se puede emplear una jeringa para su administración. Y  si el medicamento es de forma pulverizada se debe administrar con nebulizadores.
          
          .row(numero="4" titulo="Subcutáneo")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los medicamentos se aplican en el tercio medio del cuello, específicamente, en el tejido conjuntivo laxo bajo la dermis. Esta vía se utiliza para la aplicación de la vacuna contra Marek, como también para prevención de enfermedades como Pasteurella, Coryza, micoplasma, Gumboro, entre otras.

      .col-md-6
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario.mb-5(data-aos="fade-down")
          .row(numero="5" titulo="Intramuscular")
            .col-md-12.mb-4.mb-md-0
              p.text-small Aplicación en el músculo de la pechuga o la pierna. Por poseer mayor vascularización, esta vía, ofrece una absorción más rápida que la subcutánea.

          .row(numero="6" titulo="Intraalar")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se realiza punzando la membrana del ala, específicamente, en medio del triángulo formado por el pliegue que aparece al abrir el ala. Este método es utilizado para las vacunaciones contra la viruela aviar y se realiza con aplicador de doble estilete, que previamente debe ser introducido en el frasco que contiene la vacuna.

          .row(numero="7" titulo="In-ovo")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se inyecta a los embriones en su último estado de incubación.

    p Las buenas prácticas y el uso racional de medicamentos comprenden la prescripción, aplicación, distribución, almacenamiento y disposición final de los medicamentos veterinarios utilizados para controlar o tratar las enfermedades de los animales, para modificar sus funciones orgánicas o mejorar su desempeño productivo.
    p.mb-5 En todo caso, el uso de medicamentos en el tratamiento de los animales debe hacerse de forma responsable y en ningún caso alterar la inocuidad de los productos o subproductos destinados para consumo humano y animal, o sea, no deben representar riesgo para la salud de los consumidores, causar problemas y convertirse en obstáculos en el comercio de dichos productos a nivel local, regional, nacional e internacional.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_10_2 10.2 Farmacodinámica
      
    p.mb-5 Comprende el estudio de los mecanismos de acción de los medicamentos y de los efectos bioquímicos, fisiológicos o directamente farmacológicos que desarrollan los mismos. El mecanismo de acción de los medicamentos se analiza a nivel molecular y la farmacodinamia comprende el estudio de cómo una molécula de un medicamento o sus metabolitos interactúan con otras moléculas originando una respuesta o acción farmacológica.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La resistencia antimicrobiana, y los agentes antimicrobianos son medicamentos que se utilizan para tratar las infecciones de origen bacteriano, estos son esenciales para preservar la salud humana y la sanidad y bienestar animal, el uso excesivo o inadecuado de los mismos puede generar la aparición de bacterias resistentes que no corresponde a la acción de estos fármacos, como se ha podido observar en el transcurso de las últimas décadas. Este fenómeno, que se denomina resistencia a los antimicrobianos (RAM) y que pone en riesgo el control de las enfermedades en todo el mundo, supone una preocupación de primer nivel tanto para la salud humana como para la sanidad animal. 

    h4.mb-4 Tiempo de retiro

    p Es el periodo designado entre la aplicación de cierto medicamento y el momento de sacrificio o donde se deben descartar sus producidos, en este caso el huevo, para ser autorizados para consumo humano, esto se hace con el fin de que haya la menor cantidad de residuos posibles y los alimentos preserven su inocuidad. En general hay una pauta para administrar medicamentos en aves de corral, pues si estos tienen un periodo de retiro mayor a 96 horas, se debe prescindir de su utilidad.
    p La gestión de residuos y recipientes de medicamentos y biológicos, así como los elementos utilizados para la aplicación de estos, hace parte del plan integral de residuos de las avícolas y debe estar por ende contemplado en el mismo.
    p Los medicamentos forman parte de los residuos químicos y las vacunas de los biológicos por lo que su disposición final puede variar un poco, aunque serán incinerados y como tal deben cumplir los criterios de disposición y almacenamiento, en ningún caso se permite la reutilización. 
    p.mb-5 Además, se puede hacer devolución de pos consumo de residuos o medicamentos vencidos a las casas comerciales si se ha hecho previamente un acuerdo. Se debe realizar la entrega a empresas autorizadas por la autoridad competente, disponiendo de remisiones de envío y las actas de destrucción e incineración y la evidencia escrita sobre la disposición final de los residuos peligrosos, acorde con la legislación vigente. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_10_3 10.3 Aspectos técnicos de la prescripción del médico veterinario

    p La persona encargada del manejo de los medicamentos debe demostrar su competencia, por lo cual se asigna de exclusividad al médico veterinario o el médico veterinario zootecnista, quien hará por escrito, en formato especial y de conformidad a las normas vigentes, los registros necesarios, cumpliendo con los criterios de las fórmulas o recetas médicas, de las cuales se deja copia en la granja, considerando especie, dosificación y vía de administración; además cuando no se administra o supervisa directamente la medicación, imparte instrucciones por escrito al personal debidamente formado y autorizado.
    p.mb-5 Los aspectos veterinarios importantes a considerar son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-24.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Asesoría
        p.text-center(style="color:#000") La granja debe demostrar que cuenta todo el tiempo con la asesoría directa de un médico veterinario o médico veterinario zootecnista.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-25.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Título académico
        p.text-center(style="color:#000") La granja debe tener copia del título académico del médico veterinario o médico veterinario zootecnista y matrícula profesional vigente. 

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-26.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Registro de actividades
        p.text-center(style="color:#000") Contar con todos los registros de las actividades correspondientes al manejo sanitario en responsabilidad de un médico veterinario o médico veterinario zootecnista.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-27.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Análisis efectuados
        p.text-center(style="color:#000") Se deben mantener los registros de los resultados de los análisis efectuados, cuando se presentan evidencias y signos clínicos de enfermedad inespecífica o exista mortalidad de etiología desconocida cuando se trate de enfermedades de control oficial.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-28.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Certificados 
        p.text-center(style="color:#000") Las aves reproductoras que hayan finalizado su ciclo de producción deben contar con un certificado de origen y destino, emitido por el médico veterinario responsable de la granja.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/decorador-29.svg' alt='AvatarTop')
        h3.text-center(style="color:#000") Plan veterinario de salud  
        p.text-center(style="color:#000") La granja debe contar con el plan veterinario de salud documentado, el cual debe ser desarrollado y estar a cargo de un médico veterinario o médico veterinario zootecnista, este debe ser evaluado por lo menos una vez al año. 

    p Además, se deben tener documentados los siguientes aspectos:
    
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Enfermedades de importancia epidemiológica en la región donde se encuentra la explotación.
      li 
        i.lista-ul__vineta
        | La guía general de toma de medidas y tratamientos como apoyo a la atención específica.
      li 
        i.lista-ul__vineta
        | Plan de acción para la prevención y control de enfermedades.
      li 
        i.lista-ul__vineta
        | Documentación de tratamientos, medicación y vacunación, incluyendo los tipos de tratamientos suministrados.
      li 
        i.lista-ul__vineta
        | Controles recomendados para parásitos.
      li 
        i.lista-ul__vineta
        | Requerimientos para cualquier medicación en los alimentos / el agua.
      li 
        i.lista-ul__vineta
        | Registros de problemas sanitarios asociados con agentes transmisibles que puedan afectar la inocuidad alimentaria.
      li 
        i.lista-ul__vineta
        | Registro de las condiciones del ambiente de los galpones.
      li 
        i.lista-ul__vineta
        | Procedimiento documentado para la recepción de aves de un día.
      li 
        i.lista-ul__vineta
        | Procedimientos y registros documentados de medidas de bioseguridad.
      li 
        i.lista-ul__vineta
        | Programa relativo a salud y manejo animal.
      li 
        i.lista-ul__vineta
        | Registros de análisis de pH y cloro efectuados al agua. 
      li 
        i.lista-ul__vineta
        | Procedimiento y registro de manejo de huevo fértil.
      li 
        i.lista-ul__vineta
        | Definición de los límites de tolerancia de la mortalidad.







</template>

<script>
export default {
  name: 'Tema10',
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
