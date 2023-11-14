# Web Component Vanilla Modal

![NPM License](https://img.shields.io/npm/l/web-component-vanilla-modal)

**Lightweight**, easy to use & customizable modal **< 5k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your modal content with <slot>. 



## Vue Usage

`npm i web-component-vanilla-modal`

```
<script setup>
import VanillaModal from 'web-component-vanilla-modal';


onMounted(() => {
  modalElement = document.getElementById('vanilla-modal');
  const buttonElement = document.querySelector('#open-modal-button');
  buttonElement.addEventListener('click', handleOpenModal);
});

</script>


<template>
<tree-select id="tree-select"/>
</template
```

vite config
```
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('vanilla-modal')
        }
      }
    })
  ],
```

## Contact
Feel free to ping me 💫
<br>
connect@giladshohat.com

[giladshohat.com](https://giladshohat.com)

