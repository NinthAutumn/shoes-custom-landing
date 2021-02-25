<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
@media screen and (max-width: 750px) {
  html {
    font-size: 7px !important;
  }
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
button,
select {
  text-transform: none;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}
.feature-product {
  position: absolute;
}

:root {
  font-family: 'Shippori Mincho', serif;
  --secondary-color: #b8ab78;
  --primary-color: #041a2b;
  --contact-color: rgb(233, 233, 233);
}
html {
  font-size: 10px;
}
button,
input {
  /* 1 */
  overflow: visible;
}
body {
  background: var(--primary-color);
  color: var(--contact-color);
}
button {
  font-size: 16px;
  color: var(--primary-color);
  background: white;
  border: none;
  margin: 0 1rem;
  padding: 1rem 4rem;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid var(--primary-color);
}
</style>
