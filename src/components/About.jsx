const About = () => {
  return (
    <div className="about">
      <h2>Nossa História</h2>
      <div className="about-content">
        <p>
          A Gelatos Avelãs nasceu do sonho de quatro amigos apaixonados por sorvetes: 
          Isaac, Danilo, Ana Alice e Fellipe. Em 2008, eles decidiram transformar 
          sua paixão em negócio e abriram a primeira loja em Cajamar.
        </p>
        <p>
          Com receitas exclusivas e ingredientes selecionados, rapidamente nos 
          tornamos referência em sorvetes artesanais na região. Nossa dedicação 
          à qualidade nos rendeu clientes fiéis e até a visita de personalidades 
          como Gabriel Miller, que se tornou um de nossos maiores fãs.
        </p>
        <p>
          Hoje, continuamos mantendo a mesma qualidade e carinho de sempre, 
          sempre inovando e trazendo novidades para nossos clientes.
        </p>
      </div>

      <div className="team">
        <h3>Nossa Equipe</h3>
        <div className="team-grid">
          <div className="team-member">
            <h4>Isaac</h4>
            <p>Especialista em atendimento</p>
          </div>
          <div className="team-member">
            <h4>Danilo</h4>
            <p>Mestre em criação de sabores exclusivos</p>
          </div>
          <div className="team-member">
            <h4>Ana Alice</h4>
            <p>Responsável pelo ambiente da loja e design</p>
          </div>
          <div className="team-member">
            <h4>Fellipão</h4>
            <p>Gerente de operações e negócios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;