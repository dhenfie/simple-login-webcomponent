export class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.template = null;
        document.title = 'Login Page';
    }

    connectedCallback() {
        this.template = document.querySelector('#login');
        this.innerHTML = this.template.innerHTML;
        this.runApp();
    }

    runApp() {
        const button = this.querySelector('button');
        button.addEventListener('click', () =>
            alert('ini adalah halaman register')
        );
    }
}
