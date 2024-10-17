Feature('Login Test');

// Data untuk login invalid
const loginData = [
  { username: '', password: '', expectedResult: 'Epic sadface: Username is required', isValid: false }, //empty username, empty password
  { username: 'standard_user', password: '', expectedResult: 'Epic sadface: Password is required', isValid: false }, //valid username, empty password
  { username: '', password: 'secret_sauce', expectedResult: 'Epic sadface: Username is required', isValid: false }, //empty username, valid password
  { username: 'standard_user', password: 'coba2', expectedResult: 'Epic sadface: Username and password do not match any user in this service', isValid: false }, //valid username, wrong password
  { username: 'standard_', password: 'secret_sauce', expectedResult: 'Epic sadface: Username and password do not match any user in this service', isValid: false },// wrong username, valid password
  { username: 'standard_', password: 'coba2', expectedResult: 'Epic sadface: Username and password do not match any user in this service', isValid: false }, //wrong username, wrong password
  
];

Data(loginData).Scenario('Test invalid login', ({ I, current }) => {
    
    I.amOnPage('https://www.saucedemo.com/')
    I.fillField('user-name', current.username);
    I.fillField('password', current.password);
    I.click('#login-button');
    
    // Verifikasi hasil
    I.see(current.expectedResult);
});

