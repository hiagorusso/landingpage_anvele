(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const r="/assets/hero-bg-mDKDgYDH.png",i="/assets/product-sponge-BOBQPBAi.png",n="/assets/product-mascara-DBJc2sqE.png";document.querySelector("#app").innerHTML=`
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo">ANVELE BEAUTY</a>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="#about">Sobre a Marca</a></li>
          <li><a href="#products">Nossos Produtos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero" style="background-image: url(${r})">
      <div class="overlay"></div>
      <div class="container hero-content">
        <h1 class="hero-title">Revele sua <span class="highlight">Essência</span></h1>
        <p class="hero-subtitle">Produtos cosméticos premium com toque de sofisticação.</p>
        <div class="hero-buttons">
            <a href="#products" class="btn btn-primary">Ver Coleção</a>
        </div>
      </div>
    </section>
    
    <section id="about" class="about-section">
        <div class="container">
            <h2 class="section-title">A Essência da Anvele</h2>
            <p class="section-text">Nascida da paixão pela beleza real, a Anvele Beauty traz produtos que combinam tecnologia e cuidado. Somos <span class="highlight">cruelty-free</span> e obcecados por qualidade. Cada detalhe é pensado para você brilhar.</p>
        </div>
    </section>

    <section id="products" class="products-section">
        <div class="container">
            <h2 class="section-title">Nossos Favoritos</h2>
            <div class="products-grid">
                <article class="product-card">
                    <div class="product-img-wrapper">
                        <img src="${i}" alt="Esponja de Maquiagem Anvele" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3>Esponja Soft Blend</h3>
                        <p>Acabamento perfeito e toque aveludado.</p>
                        <a href="https://mercadolivre.com.br" target="_blank" class="btn btn-secondary">Comprar no ML</a>
                    </div>
                </article>
                <article class="product-card">
                    <div class="product-img-wrapper">
                        <img src="${n}" alt="Rímel Volume Intenso Anvele" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3>Máscara Luna Noir</h3>
                        <p>Volume intenso e definição fio a fio.</p>
                        <a href="https://mercadolivre.com.br" target="_blank" class="btn btn-secondary">Comprar no ML</a>
                    </div>
                </article>
                <article class="product-card">
                   <div class="placeholder-img">
                        <span>Em Breve</span>
                   </div>
                    <div class="product-info">
                        <h3>Kit Pincéis Pro</h3>
                        <p>Precisão para uma make profissional.</p>
                        <span class="btn btn-disabled">Esgotado</span>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title">Fale Conosco</h2>
            <div class="contact-info">
                <p>Tem alguma dúvida? Estamos aqui para ajudar.</p>
                <a href="mailto:contato@anvele.com" class="contact-link">contato@anvele.com</a>
            </div>
        </div>
    </section>
  </main> 
  
  <footer class="footer">
    <div class="container">
        <p>&copy; 2026 Anvele Beauty. Todos os direitos reservados.</p>
    </div>
  </footer>
`;
