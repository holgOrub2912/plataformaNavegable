import React from 'react'

const Nosotros = () => {
  return (
    <div className="about-us-container">
    <h1 className="about-us-title">Acerca de Nosotros</h1>
    <div className="about-us-content">
      <p className="about-us-intro">
        En <strong>Mi Tiendita</strong>, creemos que la moda es una forma de expresión y autenticidad. Somos más que una marca de ropa, somos una comunidad de personas apasionadas por crear y compartir estilos que cuenten historias.
      </p>
      <div className="about-us-history">
        <h2 className="about-us-subtitle">Nuestra Historia:</h2>
        <p>
          Empezamos como un pequeño equipo de amigos con una visión: revolucionar la industria de la moda con diseños modernos, sostenibles y accesibles. Desde entonces, hemos crecido, pero seguimos siendo fieles a nuestros valores fundamentales:
        </p>
        <ul className="about-us-values">
          <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia de las últimas tendencias, sin perder de vista la calidad y la comodidad.</li>
          <li><strong>Sostenibilidad:</strong> Nos comprometemos a reducir nuestro impacto ambiental, utilizando materiales ecológicos y procesos éticos.</li>
          <li><strong>Inclusión:</strong> Creemos en la moda para todos. Nuestras colecciones están diseñadas para celebrar la diversidad y la individualidad.</li>
        </ul>
      </div>
      <div className="about-us-community">
        <h2 className="about-us-subtitle">Nuestra Comunidad:</h2>
        <p>
          En <strong>Mi Tiendita</strong>, no solo vendemos ropa, creamos experiencias. Nos encanta conectar con nuestros clientes, escuchar sus historias y aprender de sus estilos. Únete a nuestra comunidad y descubre un mundo de inspiración, exclusividad y sorpresas.
        </p>
        <p>
          Síguenos y descubre cómo puedes ser parte de nuestra historia. ¡Te esperamos!
        </p>
      </div>
    </div>
  </div>
  )
}

export default Nosotros
