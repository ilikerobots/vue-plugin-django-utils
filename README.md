# Welcome to @ilikerobots/vue-plugin-django-utils 👋
[![Version](https://img.shields.io/npm/v/@ilikerobots/vue-plugin-django-utils.svg)](https://www.npmjs.com/package/@ilikerobots/vue-plugin-django-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Vue plugin and helpers useful for integrating with Django, based on the techbniques described at [Django Vue Cookiecutter](https://github.com/ilikerobots/cookiecutter-vue-django)

##### 🏠 [Homepage](https://github.com/ilikerobots/vue-plugin-django-utils)



## Install

Add as a dependency to your Vue project, e.g.  
```shell
npm install @ilikerobots/vue-plugin-django-utils
````

## Usage

In your Vue entrypoint(s), 

```javascript

import DjangoUtilsPlugin from '@ilikerobots/vue-plugin-django-utils'
import {convertDatasetToProps} from '@ilikerobots/vue-plugin-django-utils'

const rootEl = document.getElementById('my-root')
if (rootEl) {
    // Create app, passing the root element dataset as rootProp values
    const app = createApp(MyRootComponent, convertDatasetToProps({
        dataset: {...rootEl.dataset},
        component: MyRootComponent
    }))
  
    // Use additional plugin capabilities, including
    // 1) Django CSRF token provided as as 'csrfToken'
    // 2) Provide any key-value pairs in window.vueProvided
    // 3) Attached outerHTML of child elements w/ attribute data-django-slot=slotName in globalProperties.$djangoSlots
    app.use(DjangoUtilsPlugin, {rootElement: rootEl})
    app.mount(statusEl)
}
```

## Author

👤 **Mike Hoolehan**

* Website: https://ilikerobots.github.io/
* Github: [@ilikerobots](https://github.com/ilikerobots)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
