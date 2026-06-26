/* 
============================================
CAMPBELL BLAIR - CONTENT CREATOR
JavaScript Functionality
============================================
*/

// Hide loader when page loads
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Scroll reveal animation using Intersection Observer
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('active');
            }, delay);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Translations
const translations = {
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-work': 'Work',
        'nav-services': 'Services',
        'nav-coaching': '1:1 Strategy',
        'nav-contact': 'Contact',

        // Hero
        'hero-intro': 'Strategy. Style. Substance.',
        'hero-title': 'Get higher paying collaborations through the right strategy',
        'hero-subtitle': 'Stop settling for low-value brand deals. I partner with creators to refine their positioning and strategy, helping you secure premium, high-paying collaborations with top-tier brands.',
        'hero-body': 'As your Creative Strategist, I guide you step-by-step to upgrade your content quality, elevate your personal brand, and land high-paying clients. Through tailored consulting and proven negotiation frameworks, I\'ll help you build the authority needed to work with premium brands.',
        'hero-btn-work': 'View My Work',
        'scroll-down': 'Scroll Down',

        // About
        'about-tag': 'About Me',
        'about-title': 'Small Following. Big Brand Deals.',
        'about-subtitle': 'The gap between you and that deal isn’t your follower count. It’s knowing what brands actually want — and having the confidence to ask for it.',
        'about-p1': 'The creators winning right now aren’t the biggest. They’re the boldest. While others wait to feel "ready," they’re already in the room, negotiating rates and building partnerships that last.',
        'about-p2': 'That’s exactly what we build here.',
        'about-p3': 'Through content strategy, brand positioning, and the kind of confidence that makes brands say yes — you’ll stop chasing and start choosing.',
        'about-p4': 'Engaged community over passive audience. Personality over perfection. Strategy over luck.',
        'about-closing': '“I only work with women I believe in completely. If that’s you, you already know.”',
        'stat-followers': 'Followers',
        'stat-views': 'Views Monthly',
        'stat-collabs': 'Brand Collabs',

        // Showcase
        'showcase-tag': 'Portfolio',
        'showcase-title': 'Featured Work',
        'showcase-subtitle': 'A collection of my best content across different platforms and formats',
        'showcase-btn': 'View All Projects',

        // Services
        'services-tag': 'Services',
        'services-title': 'What We Can Build Together',
        'services-subtitle': "Most people stay stuck at potential. The ones who move fast have the right people in their corner too. You don't need millions of followers to work with great brands — you just need to know how to position yourself for it.",
        'service-1-title': 'Creative Strategy & Concepts',
        'service-1-desc': 'From initial ideation to full campaign execution, I develop creative concepts that align with your brand\'s unique identity. Stop blending in and start standing out with strategic content that drives engagement and captures attention.',
        'service-2-title': 'Brand Collaborations',
        'service-2-desc': 'Your product deserves to be seen by the right people, in the right way. Through authentic storytelling and a highly engaged audience, your brand gets more than visibility — it gets trust. And trust is what converts.',
        'service-3-title': 'Done-For-You UGC',
        'service-3-desc': 'Stop leaving conversions on the table. High-quality, scroll-stopping content created for your brand — ready to perform on social, built to drive results. You stay focused on your business. The content takes care of itself.',
        'service-btn': 'Book Now',

        // Contact
        'contact-tag': 'Get in Touch',
        'contact-title': "Let's Create Something Amazing Together",
        'contact-text': "Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and let's make magic happen!",
        'contact-email-label': 'Email',
        'contact-location-label': 'Location',
        'contact-location-value': 'Rotterdam, NL',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',

        // Footer
        'footer-tagline': 'Creating content that inspires, entertains, and connects people around the world.',
        'footer-links': 'Quick Links',
        'footer-services': 'Services',
        'footer-connect': 'Connect',
        'footer-copyright': '© 2026 Campbell Blair. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',

        // Portfolio Page (Hidden)
        'port-title': 'Portfolio Showcase',
        'port-tagline': 'A deep dive into my creative work and content strategies.',
        'port-h1': 'Fashion & Lifestyle UGC',
        'port-sub1': 'Elevating Brand Stories with Authentic Style',
        'port-body1': 'Authenticity is the bridge between a brand and its audience. For this collaboration, I focused on creating seamless transitions and relatable styling tips that showcased the product\'s versatility in real-world scenarios.',
        'port-h2': 'Travel & Adventure Storytelling',
        'port-sub2': 'Capturing the Essence of Wanderlust',
        'port-body2': 'Travel content isn\'t just about beautiful views; it\'s about the feeling of being there. I produced a series of cinematic shorts that blended atmospheric sound design with vibrant visuals, resulting in a 40% higher engagement rate.',
        'port-h3': 'Tech & Gadget Reviews',
        'port-sub3': 'Simplifying the Complex Through Creative Tech',
        'port-body3': 'Tech reviews should be informative yet accessible. By simplifying technical jargon and focusing on user experience, I created a series of gadget walkthroughs that help viewers make confident purchasing decisions.',
        'port-h4': 'Wellness & Self-Care Campaigns',
        'port-sub4': 'Mindful Content for a Modern Lifestyle',
        'port-body4': 'In the wellness space, trust is everything. I developed a content series focused on daily rituals and mental clarity, using soft lighting and intentional pacing to create a calming viewer experience.',
        'port-h5': 'Culinary & Foodie Content',
        'port-sub5': 'A Feast for the Eyes and the Soul',
        'port-body5': 'Food content should be sensorial. I leveraged macro-photography and rhythmic editing to create "tasty" visuals that highlight texture and color, making every dish the hero of its own story.',
        'port-h6': 'Fitness & Motivation Coaching',
        'port-sub6': 'Powering Progress Through Digital Inspiration',
        'port-body6': 'Motivation is the spark, but discipline is the fuel. This campaign focused on raw, high-energy workout sequences and mindset shifts, designed to push the audience beyond their limits.',
        'port-h7': 'Creative Strategy & Consulting',
        'port-sub7': 'The Blueprint for Digital Success',
        'port-body7': 'Behind every viral post is a strategic foundation. I work with brands to define their unique voice and visual identity, ensuring every piece of content serves a larger purpose in their digital growth journey.'
    },
    nl: {
        // Navigation
        'nav-about': 'Over Mij',
        'nav-work': 'Werk',
        'nav-services': 'Diensten',
        'nav-coaching': '1:1 Strategie',
        'nav-contact': 'Contact',

        // Hero
        'hero-intro': 'Strategie. Stijl. Inhoud.',
        'hero-title': 'Krijg beter betaalde samenwerkingen door de juiste strategie',
        'hero-subtitle': 'Stop met het accepteren van goedkope merkdeals. Ik help creators hun positionering en contentstrategie te verfijnen, zodat je premium, goedbetaalde samenwerkingen met topmerken kunt bemachtigen.',
        'hero-body': 'Als jouw Creatieve Strateeg begeleid ik je stap voor stap om je contentkwaliteit te verbeteren, je personal brand te versterken en high-paying klanten aan te trekken. Met persoonlijke consulting en bewezen onderhandelingstechnieken help ik je de autoriteit op te bouwen die nodig is om met premium merken te werken.',
        'hero-btn-work': 'Bekijk Mijn Werk',
        'scroll-down': 'Scroll Naar Beneden',

        // About
        'about-tag': 'Over Mij',
        'about-title': 'Kleine Following. Grote Merkdeals.',
        'about-subtitle': 'Het gat tussen jou en die deal is niet je aantal volgers. Het is weten wat merken echt willen — en het zelfvertrouwen hebben om erom te vragen.',
        'about-p1': 'De creators die nu winnen zijn niet de grootste. Ze zijn de brutaalste. Terwijl anderen wachten om zich "klaar" te voelen, staan zij al in de kamer, onderhandelen ze over tarieven en bouwen ze partnerschappen die blijven duren.',
        'about-p2': 'Dat is precies wat we hier bouwen.',
        'about-p3': 'Door contentstrategie, merkpositionering en het soort zelfvertrouwen dat merken ja doet zeggen — stop je met jagen en begin je met kiezen.',
        'about-p4': 'Betrokken community boven passief publiek. Persoonlijkheid boven perfectie. Strategie over geluk.',
        'about-closing': '“Ik werk alleen met vrouwen waar ik volledig in geloof. Als jij dat bent, dan weet je dat al.”',
        'stat-followers': 'Volgers',
        'stat-views': 'Weergaven per Maand',
        'stat-collabs': 'Merk Samenwerkingen',

        // Showcase
        'showcase-tag': 'Portfolio',
        'showcase-title': 'Uitgelicht Werk',
        'showcase-subtitle': 'Een collectie van mijn beste content op verschillende platforms en formaten',
        'showcase-btn': 'Bekijk Alle Projecten',

        // Services
        'services-tag': 'Diensten',
        'services-title': 'Wat We Samen Kunnen Bouwen',
        'services-subtitle': 'De meeste mensen blijven steken in potentie. Degenen die snel gaan, hebben ook de juiste mensen aan hun zijde. Je hebt geen miljoenen volgers nodig om met geweldige merken te werken — je moet alleen weten hoe je jezelf daarvoor positioneert.',
        'service-1-title': 'Creatieve Strategie & Concepten',
        'service-1-desc': 'Van initiële ideevorming tot volledige campagne-uitvoering, ik ontwikkel creatieve concepten die aansluiten bij de unieke identiteit van je merk. Stop met opgaan in de massa en begin op te vallen met strategische content die interactie stimuleert en de aandacht trekt.',
        'service-2-title': 'Merk Samenwerkingen',
        'service-2-desc': 'Jouw product verdient het om op de juiste manier door de juiste mensen gezien te worden. Door authentieke storytelling en een zeer betrokken publiek krijgt jouw merk meer dan alleen zichtbaarheid — het krijgt vertrouwen. En vertrouwen is wat converteert.',
        'service-3-title': 'Done-For-You UGC',
        'service-3-desc': 'Stop met het laten liggen van conversies. Hoogwaardige, scroll-stoppende content gemaakt voor jouw merk — klaar om te presteren op social media, gebouwd om resultaat te leveren. Jij blijft gefocust op je bedrijf. De content doet het werk.',
        'service-btn': 'Boek Nu',

        // Contact
        'contact-tag': 'Neem Contact Op',
        'contact-title': 'Laten We Samen Iets Geweldigs Creëren',
        'contact-text': 'Heb je een project in gedachten of wil je samenwerken? Ik hoor graag van je. Stuur me een bericht en laten we magie maken!',
        'contact-email-label': 'E-mail',
        'contact-location-label': 'Locatie',
        'contact-location-value': 'Rotterdam, NL',
        'form-name': 'Jouw Naam',
        'form-email': 'Jouw E-mail',
        'form-message': 'Jouw Bericht',
        'form-submit': 'Verstuur Bericht',

        // Footer
        'footer-tagline': 'Content creëren die inspireert, entertaint en mensen over de hele wereld verbindt.',
        'footer-links': 'Snelle Links',
        'footer-services': 'Diensten',
        'footer-connect': 'Verbinden',
        'footer-copyright': '© 2026 Campbell Blair. Alle rechten voorbehouden.',
        'footer-privacy': 'Privacybeleid',
        'footer-terms': 'Servicevoorwaarden',

        // Portfolio Page (Hidden)
        'port-title': 'Portfolio Showcase',
        'port-tagline': 'Een diepe duik in mijn creatieve werk en contentstrategieën.',
        'port-h1': 'Fashion & Lifestyle UGC',
        'port-sub1': 'Merkverhalen naar een hoger niveau tillen met authentieke stijl',
        'port-body1': 'Authenticiteit is de brug tussen een merk en zijn publiek. Voor deze samenwerking heb ik me gericht op het creëren van naadloze overgangen en herkenbare stylingtips die de veelzijdigheid van het product in de praktijk lieten zien.',
        'port-h2': 'Reis & Avontuur Storytelling',
        'port-sub2': 'De essentie van reislust vastleggen',
        'port-body2': 'Reiscontent gaat niet alleen over mooie uitzichten; het gaat over het gevoel er te zijn. Ik produceerde een serie cinematografische shorts die atmosferisch geluidsontwerp combineerden met levendige beelden, wat resulteerde in een 40% hogere interactie.',
        'port-h3': 'Tech & Gadget Reviews',
        'port-sub3': 'Het complexe vereenvoudigen door creatieve tech',
        'port-body3': 'Tech-reviews moeten informatief maar toegankelijk zijn. Door technisch jargon te vereenvoudigen en te focussen op de gebruikerservaring, heb ik een serie gadget-walkthroughs gemaakt die kijkers helpen vol vertrouwen aankoopbeslissingen te nemen.',
        'port-h4': 'Wellness & Zelfzorg Campagnes',
        'port-sub4': 'Mindful Content voor een moderne levensstijl',
        'port-body4': 'In de wellness-wereld is vertrouwen alles. Ik ontwikkelde een content-serie gericht op dagelijkse rituelen en mentale helderheid, waarbij ik zacht licht en een bewust tempo gebruikte om een kalmerende ervaring voor de kijker te creëren.',
        'port-h5': 'Culinaire & Foodie Content',
        'port-sub5': 'Een feest voor het oog en de ziel',
        'port-body5': 'Food-content moet zintuiglijk zijn. Ik maakte gebruik van macrofotografie en ritmische montage om "smakelijke" beelden te creëren die textuur en kleur benadrukken, waardoor elk gerecht de held van zijn eigen verhaal wordt.',
        'port-h6': 'Fitness & Motivatie Coaching',
        'port-sub6': 'Vooruitgang stimuleren door digitale inspiratie',
        'port-body6': 'Motivatie is de vonk, maar discipline is de brandstof. Deze campagne was gericht op rauwe, energieke workout-sequenties en mindset-shifts, ontworpen om het publiek voorbij hun grenzen te pushen.',
        'port-h7': 'Creatieve Strategie & Consulting',
        'port-sub7': 'De blauwdruk voor digitaal succes',
        'port-body7': 'Achter elke virale post ligt een strategisch fundament. Ik werk samen met merken om hun unieke stem en visuele identiteit te definiëren, zodat elk stukje content een groter doel dient in hun digitale groeitraject.'
    }
};

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language switcher
const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        langBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const lang = this.dataset.lang;
        // Store language preference
        localStorage.setItem('preferred-lang', lang);

        // Apply translations
        applyTranslations(lang);
    });
});

// Check for saved language preference on load and apply
document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    applyTranslations(savedLang);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Message Sent!</span>';
            submitBtn.style.background = '#4CAF50';

            // Reset form
            this.reset();

            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}



// Video Mute Toggle
document.querySelectorAll('.video-mute-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const wrapper = this.closest('.portfolio-image-wrapper');
        const video = wrapper.querySelector('video');
        const muteIcon = this.querySelector('.mute-icon');
        const unmuteIcon = this.querySelector('.unmute-icon');

        if (video.muted) {
            video.muted = false;
            // Ensure the video is playing when unmuted
            video.play().catch(error => {
                console.warn("Video playback was prevented:", error);
            });
            muteIcon.style.display = 'none';
            unmuteIcon.style.display = 'block';
            this.setAttribute('aria-label', 'Mute');
        } else {
            video.muted = true;
            muteIcon.style.display = 'block';
            unmuteIcon.style.display = 'none';
            this.setAttribute('aria-label', 'Unmute');
        }
    });
});
