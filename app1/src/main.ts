import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
});

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;

const { bootstrap: _bootstrap, mount: _mount, unmount: _unmount } = vueLifecycles;

export function comunication(msg: string): void {
  console.log(msg);
}

export async function bootstrap(props: any) {
  return Promise.resolve().then(() => {
    console.log(props.name, 'bootstraped');
    _bootstrap(props);
  });
}

export async function mount(props: any) {
  return Promise.resolve().then(() => {
    console.log(props.name, 'mounted');
    _mount(props);
  });
}

export async function unmount(props: any) {
  return Promise.resolve().then(() => {
    console.log(props.name, 'unmounted');
    _unmount(props);
  });
}