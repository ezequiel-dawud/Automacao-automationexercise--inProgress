import { Page, Locator } from '@playwright/test';

export class Login {
    readonly page: Page;
    buttonLogin: Locator;
    inputRegistrationName: Locator;
    inputRegistrationEmail: Locator;
    checkedMr: Locator;
    imputRegisterPassword: Locator;
    imputRegisterDay: Locator;
    imputRegisterMonths: Locator;
    imputRegisterYears: Locator;
    imputRegisterNewsLettes: Locator;
    imputRegisterOffers: Locator;
    imputRegisterFirstName: Locator;
    imputRegisterLastName: Locator;
    imputRegisterCompany: Locator;
    imputRegisterAddress: Locator;
    imputRegisterAddressTwo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonLogin = page.getByRole('link', { name: 'Signup / Login' });
        this.inputRegistrationName = page.getByTestId('signup-name');
        this.inputRegistrationEmail = page.getByTestId('signup-email');
        this.checkedMr = page.getByTestId('id_gender1');
        this.imputRegisterPassword = page.getByTestId('password');
        this.imputRegisterDay = page.getByTestId('days');
        this.imputRegisterMonths = page.getByTestId('months');
        this.imputRegisterYears = page.getByTestId('years');
        this.imputRegisterNewsLettes = page.getByTestId('newsletter');
        this.imputRegisterOffers = page.getByTestId('optin');
        this.imputRegisterFirstName = page.getByTestId('first_name');
        this.imputRegisterLastName = page.getByTestId('last_name');
        this.imputRegisterCompany = page.getByTestId('company');
        this.imputRegisterAddress = page.getByTestId('address');
        this.imputRegisterAddressTwo = page.getByTestId('address2');
        this.imputRegisterCountry = page.getByTestId('country');
        this.imputRegisterState = page.getByTestId('state');
        this.imputRegisterCity = page.getByTestId('city');
        this.imputRegisterZipCode = page.getByTestId('zipcode');
        this.imputRegisterTelNumber = page.getByTestId('mobile_number');
        this.buttonRegisterUser =page.
    }


}
