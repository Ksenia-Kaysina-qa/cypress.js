describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти

        cy.wait(5000);

        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден пользователю
     

    })
it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio7');//ввели неверный пароль
        cy.get('#loginButton').click();//нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден пользователю
     

    })
it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('germandolnikov.ru'); //ввели  логин без @
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден пользователю
     

    })
it('Проверка функционала по восстановлению пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки забыли пароль

      
        cy.get('#forgotEmailButton').click();//нажимаю восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru');//ввела почту для восстановления
        cy.get('#restoreEmailButton').click();//нажала отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден пользователю
     

    })
 it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dollnikov.ru'); //ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден пользователю
     

    })
 it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин строчными и заглавными буквами
        cy.get('#pass').type('iLoveqastudio1');//ввели верный пароль
        cy.get('#loginButton').click();//нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текс виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден пользователю
     

    })

})








//+Найти поле логин и ввсети верный логин
//Найти поле пароль и ввести правильный пароль
//Найти кнопку Войти и нажать войти
//Проверить что авторизация прошла успешно