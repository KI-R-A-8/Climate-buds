// Climate Facts for the random fact generator
const climateFacts = [
    "One mature tree can absorb up to 48 lbs of CO2 per year!",
    "Our oceans absorb about 90% of the heat from climate change.",
    "Transportation accounts for about 27% of greenhouse gas emissions.",
    "LED bulbs use 75% less energy than traditional incandescent bulbs!",
    "Agriculture produces about 10% of global greenhouse gases.",
    "Recycling one aluminum can saves enough energy to power a laptop for 3 hours!",
    "Earth's average temperature has risen by about 1.1°C since pre-industrial times.",
    "Climate change threatens pollinators like bees, which are crucial for 75% of global food production.",
    "Solar energy has become 90% cheaper in the last decade!",
    "Industry produces about 25% of global emissions.",
    "The average person produces 4-8 tons of CO2 annually.",
    "CO2 levels are now higher than any point in the last 800,000 years.",
    "One person switching to renewable energy could save 1,500+ lbs of CO2 per year!",
    "Planting trees is one of the most effective ways to fight climate change.",
    "Eating less meat, especially beef, is one of the most impactful personal changes.",
    "A single plastic bag can take 1,000 years to decompose in the ocean.",
    "If everyone biked instead of driving short trips, we could reduce emissions significantly!",
    "Renewable energy now accounts for over 29% of global electricity generation.",
    "Food waste produces about 8% of global greenhouse gases.",
    "Switching to LED lighting could reduce global energy demand by 15%!"
];

// Function to load a new random fact
function loadNewFact() {
    const randomIndex = Math.floor(Math.random() * climateFacts.length);
    const factElement = document.getElementById('dailyFact');
    if (factElement) {
        factElement.textContent = climateFacts[randomIndex];
        factElement.style.animation = 'none';
        setTimeout(() => {
            factElement.style.animation = 'fadeInUp 0.5s ease';
        }, 10);
    }
}

// Function to generate a random fact
function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * climateFacts.length);
    const text = climateFacts[randomIndex];
    const display = document.getElementById('randomFactDisplay');
    const textElement = document.getElementById('randomFactText');
    
    if (textElement) {
        textElement.textContent = text;
        if (display) {
            display.style.display = 'block';
            display.style.animation = 'fadeInUp 0.5s ease';
        }
    }
}

// Initialize random fact on page load
document.addEventListener('DOMContentLoaded', () => {
    const dailyFactElement = document.getElementById('dailyFact');
    if (dailyFactElement) {
        const randomIndex = Math.floor(Math.random() * climateFacts.length);
        dailyFactElement.textContent = climateFacts[randomIndex];
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Observe cards for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fact-card, .tip-card, .featured-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Track user actions
function saveUserPreference(key, value) {
    localStorage.setItem(`climateBuds_${key}`, value);
}

function getUserPreference(key) {
    return localStorage.getItem(`climateBuds_${key}`);
}

function trackAction(action) {
    const userActions = JSON.parse(getUserPreference('actions') || '[]');
    userActions.push({
        action: action,
        timestamp: new Date().toISOString()
    });
    saveUserPreference('actions', JSON.stringify(userActions));
}