export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
          <div className="hero--section--content--box">
              <div className="hero-section-content">
                <p className="section-title">Olá, meu nome é Kaio</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack</span>{""}
                    <br />
                    Developer 
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum ad voluptas unde architecto asperiores? Quibusdam eos maxime sit, modi quisquam voluptatum debitis aliquid, similique laboriosam impedit, aspernatur qui culpa?
                    <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur ea sunt itaque recusandae inventore veritatis ratione minima enim architecto quidem atque magnam iste esse, totam id, voluptatem voluptatum tempore.
                </p>
              </div>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
          <div>
             <div className="hero--selection-hero">
                <img src="./img/foto1.JPEG" alt="Hero section" />
             </div>
          </div>
        </section>
    )
}
