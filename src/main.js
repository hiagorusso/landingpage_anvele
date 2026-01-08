import './style.css'
import heroBg from './assets/images/hero-bg.png'
import productSponge from './assets/images/product-sponge.png'
import productMascara from './assets/images/product-mascara.png'

const products = [
    {
        id: 1,
        name: 'Esponja Soft Blend',
        description: 'Acabamento perfeito e toque aveludado.',
        image: productSponge,
        link: 'https://mercadolivre.com.br',
        available: true,
        favorite: true
    },
    {
        id: 2,
        name: 'Máscara Luna Noir',
        description: 'Volume intenso e definição fio a fio.',
        image: productMascara,
        link: 'https://mercadolivre.com.br',
        available: true,
        favorite: true
    },
    {
        id: 3,
        name: 'Kit Pincéis Pro',
        description: 'Precisão para uma make profissional.',
        image: null,
        link: null,
        available: false,
        favorite: false
    }
];

function renderProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-img-wrapper">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-img">` : `<div class="placeholder-img"><span>Em Breve</span></div>`}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                ${product.available 
                    ? `<a href="${product.link}" target="_blank" class="btn btn-secondary">Comprar no ML</a>` 
                    : `<span class="btn btn-disabled">Esgotado</span>`}
            </div>
        </article>
    `;
}

function renderHeader() {
    return `
        <header class="header">
            <div class="container header-container">
                <a href="#home" class="logo">ANVELE BEAUTY</a>
                <button class="menu-toggle" id="menu-toggle"></button>
                <nav class="nav" id="nav">
                    <ul class="nav-list">
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre a Marca</a></li>
                        <li><a href="#products">Produtos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
}

function renderHome() {
    const favorites = products.filter(p => p.favorite);
    return `
        <section class="hero" style="background-image: url(${heroBg})">
            <div class="overlay"></div>
            <div class="container hero-content">
                <h1 class="hero-title">Revele sua <span class="highlight">Essência</span></h1>
                <p class="hero-subtitle">Produtos cosméticos premium com toque de sofisticação.</p>
                <div class="hero-buttons">
                    <a href="#products" class="btn btn-primary">Ver Coleção Completa</a>
                </div>
            </div>
        </section>
        
        <section id="about" class="about-section">
            <div class="container">
                <h2 class="section-title">A Essência da Anvele</h2>
                <p class="section-text">Nascida da paixão pela beleza real, a Anvele Beauty traz produtos que combinam tecnologia e cuidado. Somos <span class="highlight">cruelty-free</span> e obcecados por qualidade. Cada detalhe é pensado para você brilhar.</p>
            </div>
        </section>

        <section id="favorites" class="products-section">
            <div class="container">
                <h2 class="section-title">Nossos Favoritos</h2>
                <div class="products-grid">
                    ${favorites.map(p => renderProductCard(p)).join('')}
                </div>
                <div style="text-align: center; margin-top: 40px;">
                    <a href="#products" class="btn btn-primary">Ver Todos os Produtos</a>
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
    `;
}

function renderAllProducts() {
    return `
        <section class="products-section" style="padding-top: 120px; min-height: 80vh;">
            <div class="container">
                <h2 class="section-title">Nossa Coleção Completa</h2>
                <p class="section-text" style="margin-bottom: 40px;">Conheça todos os itens desenvolvidos para elevar sua rotina de beleza.</p>
                <div class="products-grid">
                    ${products.map(p => renderProductCard(p)).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderFooter() {
    return `
        <footer class="footer">
            <div class="container">
                <p>&copy; 2026 Anvele Beauty. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;
}

function initApp() {
    const app = document.querySelector('#app');
    
    function handleRoute() {
        const hash = window.location.hash || '#home';
        
        let content = renderHeader();
        
        if (hash === '#products') {
            content += renderAllProducts();
        } else {
            content += renderHome();
        }
        
        content += renderFooter();
        app.innerHTML = content;

        // Re-attach listeners
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
        }

        // Close menu on click
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });

        // Scroll top if route changes
        if (hash === '#products') {
            window.scrollTo(0, 0);
        }
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

initApp();
