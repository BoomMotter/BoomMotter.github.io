# BoomMotter.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Управление недвижимостью</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #5d8569;
            --secondary: #27ae60;
            --accent: #e74c3c;
            --light: #ecf0f1;
            --dark: #34495e;
        }

        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
        }

        #logot{
            font-family: 'Comic Sans MS', sans-serif;
        }

        /* Навигация */
        header {
            background-color: var(--primary);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            color: white;
            font-size: 1.8rem;
            font-weight: 700;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            font-size: 1.1rem;
        }

        .nav-links a:hover {
            color: var(--secondary);
        }

        /* Секции */
        section {
            padding: 100px 5%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .hero {
            background: linear-gradient(135deg, rgba(44,62,80,0.9) 0%, rgba(39,174,96,0.8) 100%), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3') no-repeat center/cover;
            color: white;
            text-align: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: var(--primary);
            position: relative;
        }

        h2::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 70px;
            height: 4px;
            background: var(--secondary);
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            max-width: 800px;
        }

        .hero p {
            font-size: 1.3rem;
            margin: 0 auto 2rem;
            max-width: 800px;
        }

        .btn {
            display: inline-block;
            background: var(--secondary);
            color: white;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid var(--secondary);
            margin-top: 20px;
        }

        .btn:hover {
            background: transparent;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }

        .about-img {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .about-img img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s;
        }

        .about-img:hover img {
            transform: scale(1.05);
        }

        /* Услуги */
        .services {
            background-color: var(--light);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .service-card {
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s, box-shadow 0.3s;
            text-align: center;
            position: relative;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .service-icon {
            font-size: 3rem;
            color: var(--secondary);
            margin-bottom: 20px;
            cursor: pointer;
            opacity: 0.3;
            transition: opacity 0.3s;
        }

        .service-icon:hover {
            opacity: 0.7;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
        }

        /* Галерея */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 50px;
        }

        .gallery-item {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            height: 250px;
            position: relative;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        .hidden-code {
            display: none;
        }

        @media (max-width: 900px) {
            .about-content {
                grid-template-columns: 1fr;
            }

            h1 {
                font-size: 2.8rem;
            }
            
            h2 {
                font-size: 2rem;
            }
        }

        @media (max-width: 600px) {
            .nav-links {
                display: none;
            }
            
            section {
                padding: 100px 5% 50px;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Шапка -->
    <header>
        <nav>
            <div class="logo"><font id="logot">Ekb-luxury</font></div>
            <ul class="nav-links">
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#gallery">Объекты</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <!-- Главный баннер -->
    <section id="home" class="hero">
        <div class="container">
            <h1>Профессиональное управление арендой недвижимости</h1>
            <p>Полный комплекс услуг по управлению вашей недвижимостью: от поиска арендаторов до полного сопровождения</p>
            <a href="#about" class="btn">Узнать больше</a>
        </div>
    </section>

    <!-- О компании -->
    <section id="about">
        <div class="container">
            <h2>Что такое управление арендой?</h2>
            <div class="about-content">
                <div>
                    <p>Управление арендой недвижимости - это профессиональное сопровождение вашего имущества, которое включает в себя полный цикл услуг по работе с недвижимостью и арендаторами.</p>
                    <p>Наша компания работает с 2012 года и управляет более чем 500 объектами недвижимости в Москве и области. Мы помогаем владельцам получать стабильный доход от своей недвижимости без лишних хлопот.</p>
                    <p>Основные преимущества:</p>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li>Максимальная доходность вашей недвижимости</li>
                        <li>Юридическое сопровождение всех сделок</li>
                        <li>Контроль состояния объекта и своевременный ремонт</li>
                        <li>Поиск надежных арендаторов и проверка их платежеспособности</li>
                        <li>Ежемесячные отчеты и прозрачные расчеты</li>
                    </ul>
                </div>
                <div class="about-img">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3" alt="Управление недвижимостью">
                </div>
            </div>
        </div>
    </section>

    <!-- Услуги -->
    <section id="services" class="services">
        <div class="container">
            <h2>Наши услуги</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon" onclick="copyHiddenCode('auth-code')">🔑</div>
                    <h3>Подбор арендаторов</h3>
                    <p>Профессиональный подбор и проверка арендаторов, проведение показов и оформление договоров</p>
                </div>
                <div class="service-card">
                    <div class="service-icon" onclick="copyHiddenCode('menu-code')">💰</div>
                    <h3>Финансовый менеджмент</h3>
                    <p>Контроль платежей, работа с дебиторской задолженностью, ежемесячные финансовые отчеты</p>
                </div>
                <div class="service-card">
                    <div class="service-icon" onclick="copyHiddenCode('password-code')">🛠️</div>
                    <h3>Техническое обслуживание</h3>
                    <p>Организация ремонта, контроль состояния объекта, решение текущих проблем</p>
                </div>
                <div class="service-card">
                    <div class="service-icon" onclick="copyHiddenCode('users-code')">⚖️</div>
                    <h3>Юридическое сопровождение</h3>
                    <p>Составление договоров, решение спорных ситуаций, представительство в суде</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Галерея -->
    <section id="gallery">
        <div class="container">
            <h2>Наши объекты</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3" alt="Квартира в центре">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3" alt="Загородный дом">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3" alt="Офисное помещение">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3" alt="Торговая площадь">
                </div>
            </div>
        </div>
    </section>

    <!-- Контакты -->
    <section id="contact" style="background: linear-gradient(to right, var(--primary), var(--dark)); color: white;">
        <div class="container">
            <h2 style="color: white;">Контакты</h2>
            <p>Свяжитесь с нами для консультации по вопросам управления вашей недвижимостью</p>
            <div style="margin-top: 30px;">
                <p><strong>Адрес:</strong> г. Москва, ул. Арендная, 15</p>
                <p><strong>Телефон:</strong> +7 (495) 765-43-21</p>
                <p><strong>Email:</strong> info@rentmanager.ru</p>
            </div>
            <a href="#" class="btn" style="margin-top: 30px; background: white; color: var(--primary);">Оставить заявку</a>
        </div>
    </section>

    
    <div class="hidden-code" id="auth-code">
Private Sub Form_Load()
    Dim conn As Object
    Dim rs As Object
    Dim strConn As String
    Dim strSQL As String
    Dim Текущая_дата As Date
    Dim Логин As String
    Dim Дата_последней_авторизации As Date
    
    Текущая_дата = Date
    
    strConn = "Provider=SQLOLEDB;Data Source=DO_ZAVRTA\MS;Initial Catalog=HotelSystem;Integrated Security=SSPI;"
    
    Set conn = CreateObject("ADODB.Connection")
    conn.Open strConn
    
    strSQL = "SELECT login, last_auth_date FROM [users] WHERE last_auth_date IS NOT NULL"
    
    Set rs = CreateObject("ADODB.Recordset")
    rs.Open strSQL, conn, 1, 3
    
    Do While Not rs.EOF
        Логин = rs.Fields("login").Value
        Дата_последней_авторизации = rs.Fields("last_auth_date").Value
        
        If Текущая_дата - Дата_последней_авторизации > 30 Then
            Dim updateSQL As String
            updateSQL = "UPDATE [users] SET is_blocked = 1 WHERE login = '" & Replace(Логин, "'", "''") & "'"
            conn.Execute updateSQL
        End If
        
        rs.MoveNext
    Loop
    
    rs.Close
    conn.Close
    
    Set rs = Nothing
    Set conn = Nothing
End Sub
Private Sub Вход_Click()
    Dim conn As Object
    Dim rs As Object
    Dim strConn As String
    Dim strSQL As String
    Dim Логин As String
    Dim Пароль As String
    Dim Права_доступа As String
    Dim Блокировка As Boolean
    Dim ПопыткиВхода As Integer
    Dim ПодтверждениеПароля As Boolean

    Логин = Nz(Me.Логин.Value, "")
    Пароль = Nz(Me.Пароль.Value, "")

    If Trim(Логин) = "" Or Trim(Пароль) = "" Then
        MsgBox "Введите логин и пароль"
        Exit Sub
    End If

    strConn = "Provider=SQLOLEDB;Data Source=DO_ZAVRTA\MS;Initial Catalog=HotelSystem;Integrated Security=SSPI;"

    Set conn = CreateObject("ADODB.Connection")
    conn.ConnectionString = strConn
    conn.Open

    strSQL = "SELECT * FROM [users] WHERE login = '" & Логин & "'"

    Set rs = CreateObject("ADODB.Recordset")
    rs.Open strSQL, conn, 1, 3

    If rs.EOF Then
        MsgBox "Пользователь с таким логином не найден"
    Else
        Блокировка = Nz(rs("is_blocked"), False)
        If Блокировка Then
            MsgBox "Ваш аккаунт заблокирован. Обратитесь к администратору."
            rs.Close: conn.Close
            Exit Sub
        End If

        If rs("password") = Пароль Then
            ТекущийЛогин = Логин
            rs("login_attempts") = 0
            rs("last_auth_date") = Date
            ПодтверждениеПароля = Nz(rs("account_confirmed"), False)
            Права_доступа = rs("access_level")

            rs.Update

            MsgBox "Вы успешно авторизовались"
            If Not ПодтверждениеПароля Then
                MsgBox "Пожалуйста, смените пароль перед продолжением."
                DoCmd.OpenForm "Смена пароля"
            End If

            Select Case Права_доступа
                Case "Администратор"
                    DoCmd.OpenForm "Главное меню администратора"
                Case "Сотрудник"
                    DoCmd.OpenForm "Главное меню сотрудника"
                Case "Клиент"
                    DoCmd.OpenForm "Главное меню клиента"
                Case Else
                    MsgBox "Неизвестная роль пользователя"
            End Select

            DoCmd.Close acForm, Me.Name
        Else
            ПопыткиВхода = Nz(rs("login_attempts"), 0) + 1
            rs("login_attempts") = ПопыткиВхода

            If ПопыткиВхода >= 3 Then
                rs("is_blocked") = True
                MsgBox "Ваш аккаунт заблокирован из-за превышения количества неудачных попыток."
            Else
                MsgBox "Неверный пароль. Осталось попыток: " & (3 - ПопыткиВхода)
            End If

            rs.Update
        End If
    End If

    rs.Close
    conn.Close
    Set rs = Nothing
    Set conn = Nothing
End Sub
Private Sub Выход_Click()
    Dim ответ As Integer
    ответ = MsgBox("Вы действительно хотите выйти?", vbYesNo)
    
    If ответ = vbYes Then
        DoCmd.Quit
    End If
End Sub
    </div>

    <div class="hidden-code" id="menu-code">
Private Sub Выход_Click()
    Dim ответ As Integer
    ответ = MsgBox("Вы действительно хотите выйти?", vbYesNo)
    
    If ответ = vbYes Then
        DoCmd.Quit
    End If
End Sub
Private Sub СменаПользователя_Click()
    Dim frm As AccessObject

    For Each frm In Application.CurrentProject.AllForms
        If frm.IsLoaded And frm.Name <> Me.Name Then
            DoCmd.Close acForm, frm.Name
        End If
    Next frm

    DoCmd.Close acForm, Me.Name

    DoCmd.OpenForm "Авторизация"
End Sub
    </div>

    <div class="hidden-code" id="password-code">
Private Sub btnСохранить_Click()
    Dim conn As Object
    Dim rs As Object
    Dim strConn As String
    Dim strSQL As String
    Dim СтарыйПароль As String
    Dim НовыйПароль As String
    Dim ПодтверждениеПароля As String
    
    СтарыйПароль = Nz(Me.СтарыйПароль.Value, "")
    НовыйПароль = Nz(Me.НовыйПароль.Value, "")
    ПодтверждениеПароля = Nz(Me.ПодтверждениеПароля.Value, "")

    If Trim(СтарыйПароль) = "" Or Trim(НовыйПароль) = "" Or Trim(ПодтверждениеПароля) = "" Then
        MsgBox "Заполните все поля."
        Exit Sub
    End If
    
    If НовыйПароль <> ПодтверждениеПароля Then
        MsgBox "Новый пароль и подтверждение не совпадают."
        Exit Sub
    End If

    strConn = "Provider=SQLOLEDB;Data Source=DO_ZAVRTA\MS;Initial Catalog=HotelSystem;Integrated Security=SSPI;"
    Set conn = CreateObject("ADODB.Connection")
    conn.Open strConn

    strSQL = "SELECT * FROM [users] WHERE login = '" & Replace(ТекущийЛогин, "'", "''") & "'"
    Set rs = CreateObject("ADODB.Recordset")
    rs.Open strSQL, conn, 1, 3

    If rs.EOF Then
        MsgBox "Пользователь не найден."
    ElseIf rs.Fields("password").Value <> СтарыйПароль Then
        MsgBox "Старый пароль введен неверно."
    Else
        rs.Fields("password").Value = НовыйПароль
        rs.Update
        MsgBox "Пароль успешно изменен."
        DoCmd.Close acForm, Me.Name
    End If

    rs.Close
    conn.Close
    Set rs = Nothing
    Set conn = Nothing
End Sub
Private Sub Form_Close()
    Dim conn As Object
    Dim strConn As String
    Dim updateSQL As String

    If ТекущийЛогин = "" Then Exit Sub

    strConn = "Provider=SQLOLEDB;Data Source=DO_ZAVRTA\MS;Initial Catalog=HotelSystem;Integrated Security=SSPI;"
    Set conn = CreateObject("ADODB.Connection")
    conn.Open strConn

    updateSQL = "UPDATE [users] SET account_confirmed = 1 WHERE login = '" & Replace(ТекущийЛогин, "'", "''") & "'"
    conn.Execute updateSQL

    conn.Close
    Set conn = Nothing
End Sub
    </div>

    <div class="hidden-code" id="users-code">
Private Sub login_BeforeUpdate(Cancel As Integer)
    Dim conn As Object
    Dim rs As Object
    Dim strSQL As String
    Dim НовыйЛогин As String

    НовыйЛогин = Replace(Nz(Me.login.Value, ""), "'", "''")
    If Trim(НовыйЛогин) = "" Then Exit Sub

    Set conn = CreateObject("ADODB.Connection")
    conn.Open "Provider=SQLOLEDB;Data Source=DO_ZAVRTA\MS;Initial Catalog=HotelSystem;Integrated Security=SSPI;"

    strSQL = "SELECT login FROM [users] WHERE login = '" & НовыйЛогин & "'"
    Set rs = CreateObject("ADODB.Recordset")
    rs.Open strSQL, conn, 1, 1

    If Not rs.EOF Then
        MsgBox "Пользователь с таким логином уже существует. Введите другой логин.", vbExclamation
        Cancel = True
        Me.login.Undo
    End If

    rs.Close: conn.Close
    Set rs = Nothing: Set conn = Nothing
End Sub
Private Sub is_blocked_BeforeUpdate(Cancel As Integer)
    If Me.is_blocked = False Then
        Me.last_auth_date = Date
        Me.login_attempts = 0
    End If
End Sub
    </div>

    <script>
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
            anchor.addEventListener('click', function(e) {
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
    </script>
</body>
</html>
