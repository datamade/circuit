import React from "react"

import "./styles.css"

const AboutES = ({ siteTitle }) => (
    <section className="about">
        <div className="about-text">
<h1>Declaración de Misión</h1>

<p>The Circuit es una investigación de periodismo colaborativo sin precedentes que explora y expone décadas de datos previamente descuidados y que sus patrones de conexión han sido enterrados en los archivos del Circuito de Cortes del condado de Cook.</p>

<p>El proyecto está dirigido por dos organizaciones de periodismo no partidistas y sin fines de lucro: Better Government Association e Injustice Watch, en asociación con los consultores de tecnología cívica DataMade. Las organizaciones están trabajando juntas para recopilar, organizar y analizar más de 30 años de datos de cada división del circuito de cortes del condado de Cook. Nuestro objetivo es exponer cómo se trata a los diferentes acusados ​​de delitos similares, analizar las tendencias en la forma en que los fiscales han acusado a las personas y estudiar qué tan bien los acusados ​​han sido representados por abogados. Examinaremos las desigualdades sistémicas y revelaremos sesgos en la estructura del sistema legal, que se han sospechado durante generaciones, pero nunca se han probado definitivamente.</p>

<p>El Circuito de Cortes del condado de Cook es el segundo sistema judicial unificado más grande del mundo y durante mucho tiempo ha servido como indicador nacional en cuestiones de justicia y equidad. El proyecto del The Circuit también llega en un momento en que las cuestiones de justicia y equidad ocupan un lugar central en el discurso nacional tras años de críticas sobre el trato sesgado por parte de las fuerzas del orden y el sistema judicial. Obtener acceso y analizar millones de registros habría sido imposible sin esta colaboración inédita en la que las organizaciones de noticias, los expertos en tecnología cívica y los investigadores combinaron sus pericias y misiones distintivas para lograr un objetivo colectivo.</p>

<p>Este trabajo no ha sido fácil. Gran parte de los datos que extrajimos del sistema judicial eran complicados y desorganizados, pero pudimos organizarlos para responder preguntas sobre un sistema judicial que atiende a 5.2 millones de residentes.</p>

<p>En un momento en que los medios de comunicación locales se están reduciendo en todo el país, incluso en Chicago y el condado de Cook, esperamos que nuestra colaboración sirva como una declaración de que, a pesar de las variadas misiones de nuestras organizaciones, compartimos valores fundamentales y objetivos similares para lograr un bien mayor: exponer fallas institucionales que obstruyen la justicia, confrontando la inequidad racial y económica, y brindando mayor transparencia para llamar a responsabilidad al circuito de cortes.</p>

<h3>¿Quiénes somos?</h3>
<p>Además de BGA, Injustice Watch y DataMade, otros socios del proyecto han sido el Centro de Metodología de Encuestas de la Escuela de Políticas Públicas Harris de la Universidad de Chicago; el Colaborativo de Datos de Chicago; el Chicago Reader y The Chicago Reporter. Este trabajo fue financiado con una subvención de la Fundación Robert R. McCormick.</p>

<p><span className="bold">Reporteros:</span> Jared Rutecki, Casey Toner, Emily Hoerner, Josh McGhee, Abby Blachman, Alejandro Fernández Sanabria</p>

<p><span className="bold">Análisis de datos:</span> Jean Cochrane, Hannah Cushman, Forest Gregg, Bea Malsky, Jasmine Mithani, Seiya Kawashima, Trina Reynolds-Tyler, Lea Washington, David Eads</p>

<p><span className="bold">Enlace comunitario:</span> Charles Preston, Olivia Obineme, Alexia Diamond, Starlyn Matheny, Mia Sato, Toni Shears, Asraa Mustafa</p>

<p><span className="bold">Diseñador:</span> Chris Courtney</p>

<p><span className="bold">Ilustrador:</span> Verónica Martínez</p>

<p><span className="bold">Traductores:</span> Gisela Orozco, Jorge Mederos</p>

<p><span className="bold">Editores:</span> John Chase, David Kidwell, Adeshina Emmanuel, Jonah Newman, Rick Tulsky, Matt O’Connor, Fernando Diaz, Matt Kiefer</p>

<p><span className="bold">Desarrollo/Coordinadores del Proyecto:</span> Kate Walsh, Amanda Miley</p>


<h3>¿Cómo hicimos este trabajo?</h3>
<p>Los datos del The Circuit se recopilaron mediante el acceso al sistema de información almacenado en la computadora central (mainframe) del Circuito de Cortes del condado de Cook.</p>

<p>Hasta 2019, los registros electrónicos de los casos judiciales eran guardados en la computadora principal. Los miembros del público y los periodistas podían acceder a este sistema a través de terminales públicas basadas ​​en texto y ubicadas en los juzgados del condado de Cook. En el verano de 2018, Injustice Watch solicitó y se le concedió acceso remoto al sistema de información.</p>

<p>Utilizando un software que emulaba una terminal de mainframe, Injustice Watch podía acceder a gran parte de la misma información disponible a través de las terminales públicas, pero desde una computadora personal.</p>

<p>Injustice Watch contrató a la empresa de tecnología cívica, DataMade de Chicago, para que escribiera un programa informático para acceder y registrar automáticamente los expedientes y la información de gestión de casos penales. El expediente de un caso consta del registro de las mociones, fallos y eventos similares. La información sobre el manejo del caso incluye detalles sobre el acusado, la agencia que realizó el arresto y el estado del caso.</p>

<p>El programa se desarrolló entre abril y agosto de 2019, por las noches y fines de semana, para garantizar que este trabajo no interfiriera con otras personas del público que buscaban casos. Este extracto inicial fue pagado por Chicago Data Collaborative e Injustice Watch.</p>

<p>Después de obtener estos datos iniciales, formamos la colaboración The Circuit en 2019, la cual consistía de Injustice Watch, BGA, DataMade, The Chicago Reporter y el Centro de Metodología de Encuestas de la Escuela de Políticas Públicas Harris de la Universidad de Chicago. El colaborativo recibió fondos adicionales para organizar y estandarizar los datos y escribir programas de extracción similares para las otras divisiones de la corte.</p>

<p>Para cada caso penal, el programa de DataMade produjo dos archivos de texto: uno para el expediente del caso y el segundo para la información de gestión del caso. DataMade escribió programas adicionales para extraer la información de esos archivos de texto en tablas de datos. Estas tablas se cargaron en PostgreSQL, una base de datos de código abierto en la que los periodistas podían consultar los datos.</p>

<p>Una vez en un formato organizado, periodistas de BGA, The Chicago Reporter e Injustice Watch, personal de DataMade y estudiantes de Harris School of Public Policy documentaron lo que significaban los datos y cómo usarlos.</p>

<p>Los datos contenían problemas que necesitaban una solución. La información sobre los cargos no estaba estandarizada; los eventos en los expedientes judiciales no siempre se registraron en el orden correcto; a veces faltaban mociones y fallos; y los errores tipográficos eran comunes. Uno de los mayores problemas fue que faltaba a menudo información sobre raza, origen étnico y género de los acusados, o era inexacta. Resolvimos esto comparando los datos de la corte con otros datos del condado que registraron esa información con mayor precisión. Pero queda trabajo adicional para limpiar los datos.</p>

    </div>
    <div className="rail"></div>
</section>

)

export default AboutES
