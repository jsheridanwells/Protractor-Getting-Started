'use strict';

describe('Super Calculator', () => {

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let latestResult = element(by.binding('latest'));
    let history = element.all(by.repeater('result in memory'));
    beforeEach(() => browser.get('http://juliemr.github.io/protractor-demo/'));

    const add = (a,b) => {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    };

    it('should have a title', () => {        
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
    
    it('should add one and two', () => {
        add(1,2);
        expect(latestResult.getText()).toEqual('3');
    });

    it('should add 4 and 6', () => {
        add(4,6);
        expect(latestResult.getText()).toEqual('10');
    });

    it('should read the value from an input', () => {
        firstNumber.sendKeys(1);

        expect(firstNumber.getAttribute('value')).toEqual('1');
    });

    it('should have a history', () => {
        add(1,2);
        add(3,4);

        expect(history.count()).toEqual(2);

        add(5,6);

        expect(history.count()).toEqual(3);
        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('5 + 6');
    });
});