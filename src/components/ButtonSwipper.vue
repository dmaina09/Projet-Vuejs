<template>
  <div class="button hero-slider">
    <button class="btn-prev hero-slider_arrows__prevbtn">
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
        <path
          d="M22 16L15 23L22 30M15 23H31"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button class="btn-next hero-slider_arrows__nextbtn">
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
        <path
          d="M14.5 23H31M31 23L24 16M31 23L24 30"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonSwipper",
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  cursor: pointer;

  .btn-prev {
    border: 0;
    background: no-repeat;
  }

  .btn-next {
    border: 0;
    background: no-repeat;
  }
}
</style>