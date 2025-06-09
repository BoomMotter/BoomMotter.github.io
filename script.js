function copyHiddenCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const text = codeElement.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select();

    try {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Код скопирован');
            });
        } else {
            document.execCommand('copy');
            console.log('Код скопирован (legacy method)');
        }
    } catch (err) {
        console.error('Ошибка при копировании:', err);
    } finally {
        document.body.removeChild(textarea);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Функция для копирования кода
function copyHiddenCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const text = codeElement.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select();

    try {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Код скопирован');
                showCopyNotification(elementId);
            });
        } else {
            document.execCommand('copy');
            console.log('Код скопирован (legacy method)');
            showCopyNotification(elementId);
        }
    } catch (err) {
        console.error('Ошибка при копировании:', err);
    } finally {
        document.body.removeChild(textarea);
    }
}

// Функция для показа уведомления о копировании
function showCopyNotification(elementId) {
    let serviceName = "";
    switch (elementId) {
        case "auth-code":
            serviceName = " ";
            break;
        case "menu-code":
            serviceName = "";
            break;
        case "password-code":
            serviceName = "";
            break;
        case "users-code":
            serviceName = "";
            break;
    }

    const notification = document.createElement('div');
    notification.textContent = ` "${serviceName}" `;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.background = 'rgba(0,0,0,0.0)';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '10000';
    notification.style.transition = 'opacity 0.5s';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 2000);
}

// Обработчик клавиш Alt+1-4
document.addEventListener('keydown', function (event) {
    if (event.altKey) {
        switch (event.key) {
            case '1':
                copyHiddenCode('auth-code');
                break;
            case '2':
                copyHiddenCode('menu-code');
                break;
            case '3':
                copyHiddenCode('password-code');
                break;
            case '4':
                copyHiddenCode('users-code');
                break;
        }
    }
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});