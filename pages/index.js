import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

/*
  Página principal da aplicação Next.js para a AURION.
  Este componente recria a landing page com uma estética mais moderna
  utilizando fontes contemporâneas e animações suaves. As seções ganham
  um efeito de fade‑in conforme entram na viewport graças a um observer
  implementado em useEffect.
*/

export default function Home() {
  useEffect(() => {
    // Intersection Observer para animações ao rolar a página.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>AURION — Genômica Padrão‑Ouro</title>
        <meta name="description" content="Transformamos o seu DNA em conhecimento clínico de excelência." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* Importa fontes modernas: Inter para textos e Playfair Display para títulos */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="hero animate-on-scroll">
          <div className="overlay" />
          <div className="hero-content">
            <div className="logo-wrapper">
              <Image src="/logo.png" alt="Logotipo AURION" width={240} height={240} />
            </div>
            <h1 className="hero-title">Genômica Padrão‑Ouro</h1>
            <p className="hero-subtitle">
              Transformamos o seu DNA em conhecimento clínico de excelência.
            </p>
            <a href="#contact" className="cta-button">
              Entre em Contato
            </a>
          </div>
        </section>
        {/* About Section */}
        <section className="about animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Sobre a AURION</h2>
            <p className="section-text">
              A AURION é uma iniciativa inovadora de medicina de precisão que utiliza tecnologia de
              ponta em genômica para transformar a informação do seu DNA em insights clínicos que
              melhoram a sua vida. Nossa abordagem combina conhecimento científico de vanguarda com
              um toque humano, garantindo resultados confiáveis e personalizados.
            </p>
            <div className="features">
              <div className="feature-card">
                <h3>Padrão Ouro</h3>
                <p>
                  Somos referência em qualidade e rigor científico, oferecendo exames genéticos com
                  o mais alto padrão de confiabilidade.
                </p>
              </div>
              <div className="feature-card">
                <h3>Equipe Especializada</h3>
                <p>
                  Nosso time é formado por médicos, bioinformatas e geneticistas apaixonados por
                  traduzir dados em cuidados de saúde.
                </p>
              </div>
              <div className="feature-card">
                <h3>Relatórios Claros</h3>
                <p>
                  Entregamos laudos compreensíveis que ajudam profissionais e pacientes a tomar
                  decisões embasadas.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="contact animate-on-scroll">
          <div className="container">
            <h2 className="section-title contact-title">Fale Conosco</h2>
            <p className="section-text contact-text">
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
            </p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Seu nome" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Seu email" required />

              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Como podemos ajudar?" rows="5" required />

              <button type="submit" className="submit-button">Enviar</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
