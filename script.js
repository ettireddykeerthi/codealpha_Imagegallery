const cards = document.querySelectorAll(".image-card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open image
cards.forEach((card, index) => {
    card.addEventListener("click", function () {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.style.display = "flex";
    });
});

// Show image
function showImage(index) {
    const image = cards[index].querySelector("img");
    lightboxImg.src = image.src;
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Next image
function nextImage() {
    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
}

// Previous image
function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    showImage(currentIndex);
}

// Filter images
function filterImages(category) {

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}

// Keyboard navigation
document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }

        if (event.key === "Escape") {
            closeLightbox();
        }
    }

});