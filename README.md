# Web Component Vanilla Modal

![NPM License](https://img.shields.io/npm/l/web-component-vanilla-modal)

**Lightweight**, easy to use & customizable modal **< 10k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your modal content with a Slot element. 

![vanilla-modal](https://github.com/gshohat/web-component-vanilla-modal/assets/91323932/6b29f14e-2790-4ad9-b431-253e8ef54767)

## Vue Usage

`npm i web-component-vanilla-modal`

```
<script setup>
import VanillaModal from 'web-component-vanilla-modal';

let modalElement = null;

onMounted(() => {
  modalElement = document.getElementById('vanilla-modal');
  const buttonElement = document.querySelector('#open-modal-button');
  buttonElement.addEventListener('click', handleOpenModal);
});

function handleOpenModal(event) {
  modalElement.open();
}

</script>


<template>
<vanilla-modal id="vanilla-modal" >
    <div slot="custom-slot">
        Your next modal content
    </div>
</vanilla-modal>
</template>
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

