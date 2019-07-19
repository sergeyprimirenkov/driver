<template>
  <div>
    <div class="header">
      <div class="container container-header">

        <div class="logo">
        <router-link class="about-link" tag="a" to="/" title="На главную">
        <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto">
        </router-link>
      </div>

      <div class="header-items">

      <p class="header-item">
        Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж
      </p>

      <p class="header-item">
        Мы работаем: ежедневно с 10:00 до 21:00
      </p>

      </div>

      <div class="header-info">

      <div class="tel">
        <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
      </div>

      <div class="social">
        <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
          <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
        </a>
      </div>

      <router-link class="link" tag="a" to="/about" title="О нас">О нас</router-link>
        
      </div>

      </div>
    </div>
    <div class="container container-game">
      <vk-breadcrumb>
        <router-link class="home" tag="vk-breadcrumb-item" to="/" title="Вернуться на главную страницу">Главная</router-link>
        <vk-breadcrumb-item>{{ game.title }}</vk-breadcrumb-item>
      </vk-breadcrumb>
      <div class="desc">
        <div class="game-title">
          <h1 class="game-name">{{ game.title }}</h1>
          <button ref="buttonLike" @click="putLike()" :class="{ liked }" class="like" title="Добавить в избранное">
          </button>
        </div>
        <flash-message transitionName="flash" class="flash-message flashpool"></flash-message>

        <p><b class="desc">Жанр:</b> {{ game.genre }}</p>
        <p class="game-description"><b class="desc">Описание:</b> {{ game.description }}</p>

        <carousel :perPage="1" paginationActiveColor="#89253e" paginationColor="#ffffff" loop>
          <slide>
            <img :src="game.image1" class="game-image" width="100%" height="auto">
          </slide>
          <slide>
            <img :src="game.image1" class="game-image" width="100%" height="auto">
          </slide>
          <slide>
            <img :src="game.image1" class="game-image" width="100%" height="auto">
          </slide>
        </carousel>
        <!-- <img :src="game.image" class="game-image" width="100%" height="auto"> -->
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe class="embed-responsive-item game-video" :src="game.video" allowfullscreen width="100%"></iframe>
        </div>
      </div>
    </div>
    <div class="footer">
    <div class="container container-footer">
      <div class="logo">
        <router-link class="about-link" tag="a" to="/about" title="О нас">
        <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto">
        </router-link>
      </div>
      <div class="tel">
        <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
      </div>
      <div class="social">
        <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
          <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
        </a>
      </div>
      <div class="copyright">
        &#9400; Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте
      </div>
    </div>
  </div>
  </div>
</template>

<script>

// import { Carousel, Slide } from 'vue-carousel'

export default {
  data () {
    return {
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL,
      game: ''
    }
  },
  methods: {
    putLike: function () {
      this.liked = !this.liked

      if (this.$refs.buttonLike.classList.contains('liked')) {
        this.flash('Игра удалена из избранного', 'success', {
          timeout: 1500,
          important: true
        })
      } else {
        this.flash('Игра добавлена в избранное', 'success', {
          timeout: 1500,
          important: true
        })
      }
    }
  },
  mounted () {
    // this.game = this.$store.getters.getGameById(this.$route.params.id)
  },
  created: function () {
    this.game = this.$store.state.games.find(game => {
      return game.id == this.$route.params.id 
    })
    // this.game.image = '/' + this.game.image

  //   this.$store.state.articles.find(article => {

  //   return article.id == this.$route.params.id

  // });

    // this.axios.get(this.publicPath + 'games.json').then(response => {
    //   this.game = response.data.games.filter(data => data.id == this.$route.params.id)[0]
    //   this.game.image = '/' + this.game.image
    // })
  },
  computed: {
    liked: {
      get () {
        return this.$store.state.wishlistIds.includes(this.game.id)
      },
      set (val) {
        this.$store.commit(val ? 'addGame' : 'removeGame', this.game.id)
      }
    }
  }
}

</script>
