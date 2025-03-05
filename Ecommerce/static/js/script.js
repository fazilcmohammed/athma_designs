function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function showDropdown(menuType) {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
    dropdown.style.visibility = "visible";

    const content = {
        "collection": {
            categories: ["Shop All", "Blouses & Top", "Pants", "Dresses & Jumpsuits", "Outerwear & Jackets", "Pullovers", "Tees", "Shorts & Skirts"],
            images: ["blouses.jpg", "plus-size.jpg"],
            labels: ["Blouses", "Plus Size"]
        },
        "new-in": {
            categories: ["New Arrivals", "Best Seller", "Limited Edition"],
            images: ["new-arrivals.jpg", "best-seller.jpg"],
            labels: ["New Arrivals", "Best Seller"]
        },
        "plus-size": {
            categories: ["Dresses", "Tops", "Bottoms", "Outerwear"],
            images: ["plus-size1.jpg", "plus-size2.jpg"],
            labels: ["Plus Size Dress", "Plus Size Jacket"]
        },
        "sustainability": {
            categories: ["Eco-Friendly", "Recycled Materials", "Sustainable Cotton"],
            images: ["eco-friendly.jpg", "recycled.jpg"],
            labels: ["Eco-Friendly", "Recycled"]
        }
    };

    let html = `<div class="dropdown-content">`;

    if (content[menuType]) {
        html += `<div class="column"><h4>Category</h4>`;
        content[menuType].categories.forEach(item => {
            html += `<a href="#">${item}</a>`;
        });
        html += `</div>`;

        html += `<div class="column images"><img src="${content[menuType].images[0]}" alt="${content[menuType].labels[0]}"><p>${content[menuType].labels[0]}</p></div>`;
        html += `<div class="column images"><img src="${content[menuType].images[1]}" alt="${content[menuType].labels[1]}"><p>${content[menuType].labels[1]}</p></div>`;
    }

    html += `</div>`;
    dropdown.innerHTML = html;
}

function hideDropdown() {
    const dropdown = document.getElementById("dropdown-content");
    setTimeout(() => {
        dropdown.style.opacity = "0";
        dropdown.style.visibility = "hidden";
    }, 300);
}
