/**
 * PROJECT: Landing Page - Thiago Miranda
 * DESCRIPTION: Scripts para interatividade, navegação e formulário.
 * AUTHOR: Antigravity AI
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. MENU MOBILE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        const isActive = navLinksContainer.classList.toggle('is-active');
        menuToggle.setAttribute('aria-expanded', isActive);

        // Bloqueia o scroll do corpo quando o menu está aberto
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });

    // --- 2. HEADER SCROLL EFFECT ---
    const header = document.querySelector('.header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    // --- 3. SCROLL SUAVE (Fallback para navegadores antigos) ---
    // A maioria dos navegadores modernos já usa scroll-behavior: smooth via CSS.
    // Este bloco garante que o offset do header seja respeitado.
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Atualiza a URL sem recarregar a página
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // --- 3. HIGHLIGHT DE SEÇÃO ATIVA (Intersection Observer) ---
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Ativará o link quando a seção estiver no meio da tela
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // --- 4. FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const action = this.getAttribute('action');
            let isValid = true;

            // Validação simples de campos obrigatórios
            this.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Checa se o action ainda é o placeholder
            if (action === 'SUBSTITUIR_ACTION_DO_FORM' || !action) {
                alert('Obrigado pelo contato! (Aviso: O formulário ainda está em modo de teste. Para o funcionamento real, configure o endpoint de envio no código).');

                // Fallback: Tenta abrir o WhatsApp ou Email (Opcional conforme o copy final)
                console.log('Dados capturados:', Object.fromEntries(formData));
                this.reset();
                return;
            }

            // Se houver um endpoint real, aqui ficaria o fetch()
            console.log('Enviando para:', action);
            alert('Mensagem enviada com sucesso!');
            this.reset();
        });
    }
});
