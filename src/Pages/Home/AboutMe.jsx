export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/aboutme.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title"></p>
            <h1 className="skills-section--heading">Sobre mim</h1>
            <p className="hero--section-description">
            Sou um aluno de graduação no curso de Sistemas de Informação na Universidade Federal de Santa Maria. Meu entusiasmo pela tecnologia despertou ainda no fundamental, quando tive meu primeiro contato com um computador. Ao jogar Final Fantasy VII, fiquei fascinado não apenas pelo jogo em si, mas principalmente por querer entender o que acontecia por trás das cenas. Eu estava determinado a descobrir como aquilo foi criado. Essa experiência foi como uma revelação, uma luz que se acendeu em minha mente, clareando um caminho que até então estava obscuro. 
            </p>
            <p className="hero--section-description">
            Desde aquele momento, dedico-me aos estudos com o objetivo de satisfazer a curiosidade daquele jovem Kaio e explorar esse mundo incrivel que é a tecnologia.
            </p>
          </div>
        </div>
      </section>
    );
  }