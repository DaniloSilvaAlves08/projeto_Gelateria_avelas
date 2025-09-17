const Contact = () => {
  return (
    <div className="contact">
      <h2>Entre em Contato</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Informações de Contato</h3>
          <p><strong>Endereço:</strong> Rua das Avelãs, 123 - Centro, Cajamar - SP</p>
          <p><strong>Telefone:</strong> (11) 4002-8922</p>
          <p><strong>Email:</strong> contato@gelatosavelas.com.br</p>
          <p><strong>Horário de Funcionamento:</strong></p>
          <p>Segunda a Sexta: 13h às 22h</p>
          <p>Sábado e Domingo: 12h às 23h</p>
        </div>

        <div className="contact-form">
          <h3>Envie uma Mensagem</h3>
          <form>
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu email" />
            <textarea placeholder="Sua mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;