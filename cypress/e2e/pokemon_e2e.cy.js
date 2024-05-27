describe('Проверка авторизации', function () {

   it('е2е тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); //зашла на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');//Ввела верный логин
        cy.get('#password').type('USER_PASSWORD');//Ввела верный пароль
        cy.get('.auth__button').click();//нажала кнопку войти
        cy.get('.header__btns > [href="/shop"]').click();//зашла в магазин
        cy.get('.available > .shop__button').first().click();//нажала купить аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');//ввела данные карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//ввела данные карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');//ввела срок действия карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ксюша Ксюша');//ввела имя карты
        cy.get('.pay-btn').click();//нажала оплатить
        cy.get('#cardnumber').type('56456');// ввела код из смс
        cy.get('.payment__submit-button').click();//нажала отправить
        cy.contains('Покупка прошла успешно').should('be.visible');//проверяю успешность покупки и видимость для покупателей
      
        

    })

})



