export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Olá, meu nome é Kaio Fernandes</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
             Eu sou o Kaio, um entusiasta da tecnologia e desenvolvedor web especializado em React e .NET Web API. Com habilidades afiadas em criar experiências de usuário cativantes e soluções back-end eficientes, estou sempre na vanguarda da inovação tecnológica.
              <br />  Minha paixão? Transformar ideias complexas em realidades digitais elegantes. Vamos inovar juntos!
            </p>
          </div>
          
        </div>
        <div className="hero--section--img">
          <img src="./img/foto1.PNG" alt="Hero Section" />
        </div>
      </section>
    )
}
