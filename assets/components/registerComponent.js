export class RegisterComponent extends HTMLElement {
    constructor() {
        super();
        this.template = null;
        document.title = 'Register Page';
    }

    connectedCallback() {
        this.template = document.querySelector('#register');
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
