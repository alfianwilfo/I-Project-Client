<script>
export default {
  name: "Carrousel",
};
</script>

<template>
  <div class="carousel w-full">
    <div id="item1" class="carousel-item w-full flex justify-center">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-banner-design-template-43d6dcbf37ca0a7d1450cb20f76b96fb_screen.jpg?ts=1624954813"
        class="w-full"
        style="width: 50em"
      />
    </div>
    <div id="item2" class="carousel-item w-full flex justify-center">
      <img
        src="https://previews.123rf.com/images/leoedition/leoedition1705/leoedition170500290/79335380-mass-media-daily-news-breaking-news-banner-live-television-studio-tv-show.jpg"
        class="w-full"
        style="width: 50em"
      />
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
  </div>
</template>
