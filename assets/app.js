import { LoginComponent } from './components/loginComponent.js';
import { RegisterComponent } from './components/registerComponent.js';

// create custom element
customElements.define('login-component', LoginComponent);
customElements.define('register-component', RegisterComponent);

class MainApplication extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(name, _, component) {
        if (name === 'name') {
            this.runComponent(component);
        }
    }

    runComponent(component) {
        let content = null;
        if (component === 'register-component') {
            content = document.createElement('register-component');
        } else {
            content = document.createElement('login-component');
        }
        this.innerHTML = content.outerHTML;
    }
}

function handleRoute(handler) {
    if (typeof handler === 'function') {
        window.addEventListener('popstate', PopStateEvent => {
            const target = PopStateEvent.currentTarget;
            handler(target.location);
        });
    }
}

customElements.define('main-application', MainApplication);

window.onload = () => {
    const mainApp = document.querySelector('main-application');
    handleRoute(function (route) {
        const target = route.hash.replace('#/', '');
        mainApp.setAttribute('name', `${target}-component`);
    });
};
