# Web Component Vanilla Modal

![NPM License](https://img.shields.io/npm/l/web-component-vanilla-modal)

**Lightweight**, easy to use & customizable modal **< 5k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your modal content with <slot>. 

![vanilla-modal](https://private-user-images.githubusercontent.com/91323932/282854297-048ff986-11de-4b69-a5b0-3b2664350841.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTk5ODAyMzYsIm5iZiI6MTY5OTk3OTkzNiwicGF0aCI6Ii85MTMyMzkzMi8yODI4NTQyOTctMDQ4ZmY5ODYtMTFkZS00YjY5LWE1YjAtM2IyNjY0MzUwODQxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTE0VDE2Mzg1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM4MTVjYWVhNWZlM2Q3YWVkOGUwZWQ0NmNkYzdmYzU0OGYyOGM1NDBiYWIyZGEwN2FmOTQzNGEzZGIyOGE2ZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cI0pqf6G8wGspqzpBnX085dTKpEVVXRiCdjAC3FHwNY)

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

