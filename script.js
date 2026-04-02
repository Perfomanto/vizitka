// --- 1. ЛОГИКА СМЕНЫ ФОНА ---
const themeBtn = document.getElementById('theme-btn');
let isDark = false;

themeBtn.addEventListener('click', () => {
    if (!isDark) {
        document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
        themeBtn.innerText = 'Светлый фон';
        isDark = true;
    } else {
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        themeBtn.innerText = 'Темный фон';
        isDark = false;
    }
});

// --- 2. ЛОГИКА СЧЕТЧИКА И ПРОГРЕССА ---

// Читаем сохраненное число из памяти (или 0, если там пусто)
let count = Number(localStorage.getItem('angryLikes')) || 0;

// Находим все элементы на странице
const likeBtn = document.getElementById('like-btn');
const likeDisplay = document.getElementById('like-count');
const resetBtn = document.getElementById('reset-btn');
const progress_bar = document.getElementById('progress-bar');
const card = document.querySelector('.card');

// Функция для обновления прогресс-бара
function updateProgressBar() {
    let currentNumber = Number(count); // Превращаем в число для математики
    let percentage = Math.min(currentNumber, 100); // Ограничиваем максимумом 100 для наглядности
    
    progress_bar.style.width = percentage + '%'; // Меняем ширину полоски
}

// Функция для проверки "достижений" (смайлик и свечение)
function checkAchievements() {
    let currentNumber = Number(count);

    if (currentNumber >= 100) {
        likeBtn.innerText = '👿'; // Меняем смайлик
        card.style.boxShadow = '0 0 30px #ff4b2b'; // Добавляем свечение
        progress_bar.style.background = 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)'; // Красивый цвет полоски
    } else {
        likeBtn.innerText = '😡'; // Возвращаем исходный смайлик
        card.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)'; // Обычная тень
        progress_bar.style.background = 'linear-gradient(90deg, #ff416c, #ff4b2b)'; // Обычный цвет полоски
    }
}
// Выводим данные сразу, как только пользователь зашел на сайт
likeDisplay.innerText = count;
updateProgressBar();
checkAchievements();

// --- 4. ОБРАБОТЧИКИ СОБЫТИЙ (КЛИКИ) ---

// Клик по злому смайлу
likeBtn.addEventListener('click', () => {
    // 1. Увеличиваем число
    count = Number(count) + 1; 
    
    // 2. Сохраняем и выводим на экран
    likeDisplay.innerText = count;
    localStorage.setItem('angryLikes', count);
    
    // 3. Обновляем визуал (полоску и ачивки)
    updateProgressBar();
    checkAchievements();

    // 4. Эффект "прыжка" кнопки
    likeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        likeBtn.style.transform = 'scale(1)';
    }, 100);
});

// Клик по кнопке сброса
resetBtn.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите сбросить счетчик?')) {
        count = 0;
        localStorage.setItem('angryLikes', 0);
        likeDisplay.innerText = 0;
        
        // Обнуляем визуал
        updateProgressBar();
        checkAchievements();
    }
});