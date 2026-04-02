// Логика смены фона
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


// Логика счетчика лайков
let count = localStorage.getItem('angryLikes') || 0; //Читаем из памяти

const LikeBtn = document.getElementById('like-btn');
const LikeDisplay = document.getElementById('like-count');
const ResetBtn = document.getElementById('reset-btn');
LikeDisplay.innerText = count; //Вывод числа при загрузке страницы

// Функция для проверки "достижений"
function checkAchievements() {
    const card = document.querySelector('.card');

    if (count >= 10) {
        LikeBtn.innerText = '👿'; // Меняем смайлик
        document.querySelector('.card').style.boxShadow = '0 0 30px #ff4b2b'; // Добавляем эффект свечения
    } else {
        LikeBtn.innerText = '😡'; // Возвращаем исходный смайлик
        card.style.boxShadow = '0 8px 32px 0 rgba(255, 255, 255, 0.3)'; // Стандартная тень
        card.style.border = '1px solid rgba(255, 255, 255, 0.2)'; // Стандартная рамка
    }
};

// Проверяем достижения при загрузке страницы
checkAchievements();
LikeDisplay.innerText = count; //Вывод числа при загрузке страницы

// Клик по смайлу
LikeBtn.addEventListener('click', () => {
    count = Number(count) + 1; //Увеличиваем счетик на единицу
    LikeDisplay.innerText = count; 
    localStorage.setItem('angryLikes', count); //Записываем в память
    checkAchievements(); // Проверяем достижения

    //Эффект нажатия нашей кнопки
    LikeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        LikeBtn.style.transform = 'scale(1)';
    }, 100);
});

// Клик по кнопке сброса
ResetBtn.addEventListener('click', () => {
    if (confirm('Точно хочешь обнулить весь свой гнев?')) {
        count = 0; //Сбрасываем счетчик
        localStorage.setItem('angryLikes', 0);
        LikeDisplay.innerText = 0;
        checkAchievements(); // Проверяем достижения
    }
});