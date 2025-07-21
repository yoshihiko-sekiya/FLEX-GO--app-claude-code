// FLEX GO JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScroll();
    initSectionAnimations();
    initPricingToggle();
    initContactForm();
    initLazyLoading();
    initParallax();
    
    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close mobile menu when clicking on nav links
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                });
            });
            
            // Close mobile menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    // Smooth scrolling with offset for fixed nav
    function initSmoothScroll() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        const navHeight = document.querySelector('header').offsetHeight;
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Section animations with Intersection Observer
    function initSectionAnimations() {
        const sections = document.querySelectorAll('.section-container');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate cards within the section
                    const cards = entry.target.querySelectorAll('.service-card, .pricing-card, .workflow-step');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            sectionObserver.observe(section);
            
            // Initialize cards for animation
            const cards = section.querySelectorAll('.service-card, .pricing-card, .workflow-step');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        });
    }
    
    // Pricing toggle functionality
    function initPricingToggle() {
        const pricingToggle = document.getElementById('pricing-toggle');
        const pricingAmount = document.querySelector('[data-monthly]');
        
        if (pricingToggle && pricingAmount) {
            pricingToggle.addEventListener('change', function() {
                const isYearly = this.checked;
                const monthlyPrice = parseInt(pricingAmount.getAttribute('data-monthly'));
                const yearlyPrice = parseInt(pricingAmount.getAttribute('data-yearly'));
                
                if (isYearly && yearlyPrice) {
                    pricingAmount.textContent = `¥${yearlyPrice.toLocaleString()}`;
                    const periodText = pricingAmount.nextElementSibling;
                    if (periodText) {
                        periodText.textContent = '/年';
                    }
                } else {
                    pricingAmount.textContent = `¥${monthlyPrice.toLocaleString()}`;
                    const periodText = pricingAmount.nextElementSibling;
                    if (periodText) {
                        periodText.textContent = '/月';
                    }
                }
            });
        }
    }
    
    // Contact form handling
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const name = formData.get('name').trim();
                const email = formData.get('email').trim();
                const message = formData.get('message').trim();
                
                // Validation
                if (!name || !email || !message) {
                    showNotification('すべての必須項目を入力してください。', 'error');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showNotification('有効なメールアドレスを入力してください。', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = '送信中...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    showNotification('お問い合わせありがとうございます。担当者よりご連絡いたします。', 'success');
                    this.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 1500);
            });
        }
    }
    
    // Notification system
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-xl shadow-lg z-50 transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('.lazy-load');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Parallax effect for hero section
    function initParallax() {
        const heroSection = document.querySelector('#hero');
        const animatedBlob = document.querySelector('.animated-blob');
        
        if (heroSection && animatedBlob) {
            const updateParallax = () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                
                if (scrolled < heroSection.offsetHeight) {
                    animatedBlob.style.transform = `translateY(${rate}px)`;
                }
            };
            
            // Throttle scroll events for performance
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        updateParallax();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }
    }
    
    // Navigation background change on scroll
    const navbar = document.querySelector('header');
    if (navbar) {
        const updateNavbar = () => {
            if (window.scrollY > 50) {
                navbar.querySelector('.nav-glass').style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.querySelector('.nav-glass').style.background = 'rgba(255, 255, 255, 0.95)';
            }
        };
        
        let navTicking = false;
        window.addEventListener('scroll', () => {
            if (!navTicking) {
                requestAnimationFrame(() => {
                    updateNavbar();
                    navTicking = false;
                });
                navTicking = true;
            }
        });
    }
    
    // Handle resize events
    window.addEventListener('resize', function() {
        // Close mobile menu on resize to desktop
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && mobileMenuButton && window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Button click handlers for CTAs
    const ctaButtons = document.querySelectorAll('button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.type === 'submit') return; // Skip form submit buttons
            
            const buttonText = this.textContent.trim();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different button actions
            switch (buttonText) {
                case '今すぐ試す':
                    console.log('Redirecting to trial signup...');
                    showNotification('無料トライアルページに移動します...', 'success');
                    break;
                case 'デモを見る':
                    console.log('Opening demo...');
                    showNotification('デモ動画を準備中です...', 'success');
                    break;
                case '選択する':
                    console.log('Selecting Pro plan...');
                    showNotification('プロプランの詳細についてお問い合わせください。', 'success');
                    break;
                default:
                    console.log(`Button clicked: ${buttonText}`);
            }
        });
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Debounced resize handler
        console.log('Window resized');
    }, 250);
});