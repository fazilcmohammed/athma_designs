// Mobile Navigation Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    // If the click is outside the mobile menu and the menu button, close the menu
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(event.target) && 
        event.target !== mobileMenuBtn) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector('.nav-links').classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sample Job Listings Data
const jobListings = [
    {
        id: 1,
        title: "Program Coordinator",
        type: "Full-time",
        location: "Main Office",
        description: "We're seeking a passionate Program Coordinator to oversee our Food Distribution program. The ideal candidate will have excellent organizational skills, experience in project management, and a commitment to community service.",
        requirements: "Bachelor's degree in related field, 2+ years of experience in program management, strong communication skills.",
        salary: "$45,000 - $55,000 per year"
    },
    {
        id: 2,
        title: "Volunteer Coordinator",
        type: "Part-time",
        location: "Remote",
        description: "The Volunteer Coordinator will be responsible for recruiting, training, and managing our volunteer network. This role is crucial in ensuring that our programs are adequately staffed with qualified volunteers.",
        requirements: "Previous volunteer management experience, excellent interpersonal skills, ability to work flexible hours including some weekends.",
        salary: "$20 - $25 per hour"
    },
    {
        id: 3,
        title: "Grant Writer",
        type: "Contract",
        location: "Hybrid",
        description: "We're looking for an experienced Grant Writer to help secure funding for our expanding programs. The successful candidate will research grant opportunities, prepare compelling proposals, and maintain relationships with funders.",
        requirements: "Proven track record of successful grant applications, excellent writing skills, knowledge of nonprofit funding landscape.",
        salary: "Contract-based, competitive rates"
    }
];

// Display Job Listings
function displayJobs() {
    const jobListingsContainer = document.getElementById('jobListingsContainer');
    
    jobListings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        jobCard.innerHTML = `
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <span class="job-type">${job.type}</span>
            </div>
            <div class="job-details">
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Description:</strong> ${job.description}</p>
                <p><strong>Requirements:</strong> ${job.requirements}</p>
                <p><strong>Compensation:</strong> ${job.salary}</p>
            </div>
            <div class="job-actions">
                <button class="btn apply-btn" data-id="${job.id}" data-title="${job.title}">Apply Now</button>
            </div>
        `;
        
        jobListingsContainer.appendChild(jobCard);
    });

    // Add event listeners to apply buttons
    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', function() {
            const jobId = this.getAttribute('data-id');
            const jobTitle = this.getAttribute('data-title');
            openJobModal(jobId, jobTitle);
        });
    });
}

// Initialize job listings
window.addEventListener('DOMContentLoaded', function() {
    displayJobs();
});

// Job Application Modal Functions
const modal = document.getElementById('jobModal');
const closeBtn = document.querySelector('.close-btn');

function openJobModal(jobId, jobTitle) {
    document.getElementById('modalJobTitle').textContent = `Apply for ${jobTitle}`;
    document.getElementById('jobId').value = jobId;
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.getElementById('application-success').style.display = 'none';
    document.getElementById('jobApplicationForm').reset();
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.getElementById('application-success').style.display = 'none';
        document.getElementById('jobApplicationForm').reset();
    }
});

// Membership Form Submission
document.getElementById('membership-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would send form data to a server here
    
    // Show success message
    document.getElementById('membership-success').style.display = 'block';
    
    // Reset form after successful submission
    this.reset();
    
    // Scroll to success message
    document.getElementById('membership-success').scrollIntoView({ behavior: 'smooth' });
    
    // Hide success message after a few seconds
    setTimeout(function() {
        document.getElementById('membership-success').style.display = 'none';
    }, 5000);
});

// Job Application Form Submission
document.getElementById('jobApplicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real application, you would send form data to a server here
    
    // Show success message
    document.getElementById('application-success').style.display = 'block';
    
    // Reset form after successful submission
    this.reset();
    
    // Hide form fields
    const formGroups = this.querySelectorAll('.form-group, button');
    formGroups.forEach(group => {
        group.style.display = 'none';
    });
    
    // Show form fields and close modal after a few seconds
    setTimeout(function() {
        document.getElementById('application-success').style.display = 'none';
        formGroups.forEach(group => {
            group.style.display = '';
        });
        modal.style.display = 'none';
    }, 3000);
    });


