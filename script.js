function filterCards(category) {
    // Get all cards
    var cards = document.querySelectorAll('.p-card');

    // Show or hide cards based on selected category
    cards.forEach(function (card) {
        var cardCategories = card.querySelector('.card-content h2').innerText + card.querySelector('.card-content p').innerText;

        if (category === 'all' || cardCategories.toLowerCase().includes(category.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};