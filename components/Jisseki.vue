<template>
  <div class="jisseki-card">
    <div class="jisseki-list">
      <div class="jisseki-item jisseki-item--one">
        <img :src="require('~/assets/award-1.png')" alt="" />
      </div>

      <div class="jisseki-item jisseki-item--two">
        <img :src="require('~/assets/award-2.png')" alt="" />
      </div>
      <div class="jisseki-item jisseki-item--three" style="margin-right: 0">
        <img :src="require('~/assets/award-3.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (
      !('IntersectionObserver' in window) ||
      !('IntersectionObserverEntry' in window) ||
      !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
    ) {
      const list = document.querySelectorAll('.jisseki-item')
      list.forEach((item) => {
        item.classList.add('jisseki-in')
      })
    } else {
      this.observeLines()
    }
  },
  methods: {
    observeLines() {
      const observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('jisseki-in')
            observe.unobserve(entry.target)
          }
        })
      })
      const list = document.querySelectorAll('.jisseki-item')
      list.forEach((item) => {
        observe.observe(item)
      })
    },
  },
}
</script>

<style >
.jisseki-card {
  display: flex;
  width: 100%;
  justify-content: center;
}
.jisseki-in {
  visibility: visible !important;
  /* animation-delay: 50ms; */
  animation: jisseki 300ms ease-in-out;
}

@keyframes jisseki {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.jisseki-item {
  visibility: hidden;
}
.jisseki-item--one {
  grid-area: left;
}
.jisseki-item--two {
  grid-area: top;
}
.jisseki-item--three {
  grid-area: right;
}
@media screen and (min-width: 952px) {
  .jisseki-list {
    display: grid;
    grid-template-areas: 'left top right' !important;

    /* display: grid; */
    /* grid-template-areas: 'top top' 'left right'; */
    /* grid-template-rows: 1fr 1fr; */
    /* display: block !important; */
  }
  /* .jisseki-item--two {
    justify-self: center;
  } */

  .jisseki-item {
    margin-right: 5rem;
  }
}
@media screen and (min-width: 570px) {
  .jisseki-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'top top' 'left right';
    /* grid-template-rows: 1fr 1fr; */
    gap: 2rem;
    /* display: block !important; */
  }
  .jisseki-item--two {
    justify-self: center;
  }
  .jisseki-item {
    /* margin-bottom: 5rem; */
  }
}
@media screen and (max-width: 570px) {
  .jisseki-list {
    display: grid;
    grid-template-areas: 'top' 'left' 'right';
    /* display: block !important; */
  }
  .jisseki-item--two {
    /* justify-self: center; */
  }
  .jisseki-item {
    margin-bottom: 5rem;
  }
}
</style>
