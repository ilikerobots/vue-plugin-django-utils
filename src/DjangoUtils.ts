import {App, Plugin} from 'vue';
import {DjangoUtilsOptions} from './types/DjangoUtilsOptions';

export const CSRF_TOKEN_KEY: string = 'csrfToken'
export const DJANGO_SLOT_ATTRIBUTE: string = 'djangoSlot'

export const DjangoUtilsPlugin: Plugin = {
    install(app: App, options: DjangoUtilsOptions) {

        // attach html content of children of root element w/ a data-django-slot=<slot_name> attribute
        // the content will be accessible as $djangoSlots.slotName
        app.config.globalProperties.$djangoSlots = {};
        for (const c of options.rootElement.children) {
            if (c instanceof HTMLElement) {
                if (DJANGO_SLOT_ATTRIBUTE in c.dataset) {
                    app.config.globalProperties.$djangoSlots[c.dataset[DJANGO_SLOT_ATTRIBUTE] as string] = c.outerHTML;
                }
            }
        }

        // attach the application root element
        app.config.globalProperties.$rootElement = options.rootElement;

        // provide any key/value pairs on the window.vueProvided object
        const vueProvided = (window as any).vueProvided || {};
        Object.keys(vueProvided).forEach(k => {
            app.provide(k, vueProvided[k]);
        });

        // provide the CSRF token to all components, in case they need to post
        app.provide(CSRF_TOKEN_KEY, (window.document.querySelector('[name=csrfmiddlewaretoken]') as HTMLInputElement)?.value);
    }
}

export const convertDatasetToProps = ({dataset, component}: { dataset: any, component: any }): {} => {

    const keys = Object.keys(dataset);
    keys.forEach(function (key) {
        if (key in component.props) {
            const datatype = component.props[key].type;
            dataset[key] = datatype === Date ? new datatype(dataset[key]) : datatype(dataset[key]);
        }
    });
    return dataset;
}
