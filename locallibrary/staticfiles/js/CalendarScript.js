// Object to store dish options for each cuisine
const cuisineDishes = {
    chinese: ['台灣牛肉麵', '滷肉飯', '鹹水雞', '擔仔麵', '蚵仔煎'],
    korean: ['泡菜', '韓式炸雞', '韓式烤肉', '韓國冷麵', '韓式石鍋拌飯'],
    american: ['漢堡', '烤肉排', '美式炸雞', '沙拉', '燻肉'],
    vietnamese: ['春卷', '越南河粉', '越南春卷', '越南咖啡', '炸春卷'],
    japanese: ['壽司', '拉麵', '涮涮鍋', '烤鰻魚飯', '揚豆腐']
};

// Function to apply survey and append dishes to cells
function applySurvey() {
    const timesPerWeek = parseInt(document.getElementById('times-per-week').value);
    const cuisineTag = document.getElementById('recipe-tag').value;

    const cells = document.querySelectorAll('.calendar td');

    // Reset table cells
    cells.forEach(cell => {
        cell.textContent = '';
        cell.dataset.tags = '';
        cell.onclick = () => showPopup(cell); // Assign onclick handler to each cell
    });

    // Shuffle dish options for the selected cuisine
    const dishes = shuffle(cuisineDishes[cuisineTag]);

    // Append dishes to cells while ensuring no repetition
    let dishIndex = 0;
    for (let i = 0; i < timesPerWeek; i++) {
        const randomCell = getRandomAvailableCell(cells, cuisineTag);
        if (randomCell && dishIndex < dishes.length) {
            const dish = dishes[dishIndex];
            randomCell.textContent = dish;
            randomCell.dataset.tags = cuisineTag;
            dishIndex++;
        }
    }
}

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get a random available cell for the specified cuisine
function getRandomAvailableCell(cells, cuisineTag) {
    const availableCells = Array.from(cells).filter(cell => cell.textContent === '' || cell.dataset.tags === cuisineTag);
    return availableCells.length > 0 ? availableCells[Math.floor(Math.random() * availableCells.length)] : null;
}

// Function to display the dish selection popup
function showPopup(cell) {
    const cuisineTag = cell.dataset.tags;
    const dishes = cuisineDishes[cuisineTag];

    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    
    // Create a list of dish options in the popup content
    popupContent.innerHTML = '';
    dishes.forEach(dish => {
        const dishButton = document.createElement('button');
        dishButton.textContent = dish;
        dishButton.onclick = () => {
            changeDish(cell, dish);
            popup.classList.add('hidden'); // Hide the popup after selecting a dish
        };
        popupContent.appendChild(dishButton);
    });

    // Display the popup next to the clicked cell
    popup.style.top = `${cell.offsetTop + cell.offsetHeight}px`;
    popup.style.left = `${cell.offsetLeft + cell.offsetWidth}px`;
    popup.classList.remove('hidden');
}

// Function to change the dish displayed in a cell
function changeDish(cell, newDish) {
    cell.textContent = newDish;
}
