document.addEventListener("DOMContentLoaded", function() {
    const analysisLinks = document.querySelectorAll('.new-navbar .nav-link');
    const contextSections = document.querySelectorAll('.content-container .context-section');

    function handleAnalysisLinkClick(event) {
        event.preventDefault();

        const index = Array.from(analysisLinks).indexOf(event.target);

        contextSections.forEach((section, idx) => {
            section.style.display = (idx === index) ? 'block' : 'none';
        });
    }

    analysisLinks.forEach(link => {
        link.addEventListener('click', handleAnalysisLinkClick);
    });

    // Function to populate the list of favorite dishes
    function populateFavoriteDishes() {
        const favoriteDishesBody = document.getElementById("favoriteDishesBody");

        // Sample data for dishes
        const dishesData = [
            { name: "菜名 1", nutrition: "營養 1", calories: "熱量 1", sodium: "鈉含量 1", frequency: "購買頻率 1" },
            { name: "菜名 2", nutrition: "營養 2", calories: "熱量 2", sodium: "鈉含量 2", frequency: "購買頻率 2" },
            { name: "菜名 3", nutrition: "營養 3", calories: "熱量 3", sodium: "鈉含量 3", frequency: "購買頻率 3" },
            { name: "菜名 4", nutrition: "營養 4", calories: "熱量 4", sodium: "鈉含量 4", frequency: "購買頻率 4" },
            { name: "菜名 5", nutrition: "營養 5", calories: "熱量 5", sodium: "鈉含量 5", frequency: "購買頻率 5" },
            { name: "菜名 6", nutrition: "營養 6", calories: "熱量 6", sodium: "鈉含量 6", frequency: "購買頻率 6" },
            { name: "菜名 7", nutrition: "營養 7", calories: "熱量 7", sodium: "鈉含量 7", frequency: "購買頻率 7" },
            { name: "菜名 8", nutrition: "營養 8", calories: "熱量 8", sodium: "鈉含量 8", frequency: "購買頻率 8" },
            { name: "菜名 9", nutrition: "營養 9", calories: "熱量 9", sodium: "鈉含量 9", frequency: "購買頻率 9" },
            { name: "菜名 10", nutrition: "營養 10", calories: "熱量 10", sodium: "鈉含量 10", frequency: "購買頻率 10" }
        ];

        // Loop through each dish data and create table rows
        dishesData.forEach((dish, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${dish.name}</td>
                <td>${dish.nutrition}</td>
                <td>${dish.calories}</td>
                <td>${dish.sodium}</td>
                <td>${dish.frequency}</td>
                <td><button class="remove-button" onclick="removeFavoriteDish(${index})">移除</button></td>
            `;
            favoriteDishesBody.appendChild(row);
        });
    }

    // Function to remove a dish from favorites
    window.removeFavoriteDish = function(index) {
        const rowToRemove = document.querySelector(`#favoriteDishesBody tr:nth-child(${index + 1})`);
        if (rowToRemove) {
            rowToRemove.remove();
        }
    }

    // Call the function to populate favorite dishes on page load
    populateFavoriteDishes();
});
