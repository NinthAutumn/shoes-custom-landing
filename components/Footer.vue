<template>
  <footer class="footer">
    <img
      height="200"
      :src="require('~/assets/logo.png')"
      alt
    />
    <div class="footer-info">
      <p></p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style >
@media screen and (min-width: 750px) {
  .footer {
    height: 20rem;
    background: rgb(4, 33, 56);
    background: linear-gradient(
      90deg,
      rgb(4, 28, 48) 22%,
      rgba(2, 12, 20, 1) 100%
    );
    display: flex;
    justify-content: space-between;
  }
  .address-divider {
  }
  .footer img {
    width: 20rem;
  }

  .footer-info {
    align-self: center;
    padding: 2.5rem;
  }
  .footer-address {
    text-align: right;
    font-size: 1.7rem;
  }

  .footer-info p {
    font-size: 1.6rem;
    text-align: right;
  }
  .footer img {
    height: 20rem;
    width: 20rem;
  }
}

@media screen and (max-width: 750px) {
  .footer-info p {
    font-size: 1.6rem;
    text-align: right;
  }
  .footer img {
    height: 20rem;
    width: 20rem;
  }
  .footer {
    height: 20rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(4, 33, 56);
    background: linear-gradient(
      90deg,
      rgb(4, 28, 48) 22%,
      rgba(2, 12, 20, 1) 100%
    );
  }
  .footer-address {
    text-align: center;
    word-break: keep-all;
    padding: 1rem;
  }

  .address-divider {
    display: none;
  }
  .footer-info {
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    background: rgb(4, 33, 56);
    background: linear-gradient(
      90deg,
      rgb(4, 28, 48) 22%,
      rgba(2, 12, 20, 1) 100%
    );
    justify-content: center;
    font-size: 2rem;
  }
  .footer-info p {
    margin-right: 1rem;
  }
}
</style>
