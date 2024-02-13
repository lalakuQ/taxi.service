<div class="auth-inner-section signup-section auth-inner-section-hidden">
            <h1>Создать аккаунт</h1>
            <div class="auth-input">
                <input type="text" name="username" placeholder="Логин"></input>
            </div>
            <div class="auth-input">
                <input type="email" name="email" placeholder="Почта"></input>
            </div>
            <div class="auth-input">
                <input type="password" name="password" placeholder="Пароль"></input>
            </div>
            <div class="auth-wrap-btn">
                <button class="continue" type="submit" value="signup" name="signup">Продолжить</button>
            </div>
        </div>


<div class="auth-section">
            <div class="auth-inner-section">
                <h1>Вход</h1>
                <div class="auth-option">
                    <button id="auth-email" class="auth-option-active" value="clicked">Почта</button>
                    <button id="auth-phone">Телефон</button>
                </div>
                <div class="auth-input">
                    <input type="text" name="user_login" value="{{current_user_login}}" placeholder="Логин или email"></input>
                </div>
                <div class="auth-wrap-btn">
                    <button class="signin-btn" type="submit">Войти</button>
                    <button class="signup-btn">Создать аккаунт</button>
                </div>
            </div>
        </div> 