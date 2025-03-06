import React from "react";
import data from "../../Data/index.json"; // Caminho do JSON, ajuste conforme necessário

export default function Testimonial() {
  return (
    <section id="testimonial" className="testimonial--section">
      <h2>Experiência</h2>
      <div className="testimonial--cards">
        {data.testimonial.map((item) => (
          <div key={item.id} className="testimonial--card">
            <img className="testimonial--img" src={item.src} alt={item.author_name} />
            <p className="testimonial--description">{item.description}</p>
            <h3 className="testimonial--author">{item.author_name}</h3>
            <p className="testimonial--designation">{item.author_designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
