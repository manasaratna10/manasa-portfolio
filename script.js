// Simple typing effect
const text = "Forensic Science Student";
const typingElement = document.getElementById('typing-text');
typingElement.innerHTML = ''; // Clear text initially
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML = text.substring(0, index + 1) + '<span style="border-right: 2px solid var(--accent-primary)"></span>';
        index++;
        setTimeout(typeWriter, 100);
    } else {
        typingElement.innerHTML = text; // Remove cursor at end
    }
}

// Start typing when home section is active
window.addEventListener('load', typeWriter);

function showSection(sectionId, event) {
    // Prevent default anchor behavior (jumping to top)
    if (event) {
        event.preventDefault();
    }

    // Hide all sections
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navbar active state
    document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active-link'));
    
    // Highlight the correct link based on data-section attribute
    const navLink = document.querySelector(`.navbar a[data-section="${sectionId}"]`);
    if (navLink) navLink.classList.add('active-link');
}

// Escape key to go back home
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('resume-modal');
    if (e.key === 'Escape') {
        if (modal.classList.contains('open')) {
            closeResumeModal();
        } else {
            showSection('home');
        }
    }
});

function openResumeModal(e) {
    if(e) e.preventDefault();
    const modal = document.getElementById('resume-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
}

function closeResumeModal(event) {
    const modal = document.getElementById('resume-modal');
    if (event && event.target !== modal && !event.target.closest('.modal-close-btn')) return;
    
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}