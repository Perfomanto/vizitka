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


// Логика счетчика (моя новая кнопка 😡)
let count = localStorage.getItem('angryLikes') || 0; //Читаем из памяти

const LikeBtn = document.getElementById('like-btn');
const LikeDisplay = document.getElementById('like-count');

LikeDisplay.innerText = count; //Вывод числа при загрузке страницы

LikeBtn.addEventListener('click', () => {
    count = Number(count) + 1; //Увеличиваем счетик на единицу
    LikeDisplay.innerText = count; 
    localStorage.setItem('angryLikes', count); //Записываем в память

    //Эффект нажатия нашей кнопки
    LikeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        LikeBtn.style.transform = 'scale(1)';
    }, 100);
});