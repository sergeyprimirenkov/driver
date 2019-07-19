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

    <div class="container container-about">

      <vk-breadcrumb>
        <router-link class="home" tag="vk-breadcrumb-item" to="/" title="Вернуться на главную страницу">Главная</router-link>
        <vk-breadcrumb-item>О нас</vk-breadcrumb-item>
      </vk-breadcrumb>

      <h1 class="about-header">О нас</h1>

      <p>
        DriV3R - это то место, где Вы пересекаете грань реальности, оказываетесь совершенно в новых мирах и становитесь их частью, а не только наблюдателями. <br>
        У нас Вы сможете опробовать самые последние технологии, которые используются для погружения в виртуальную реальность.
      </p>

      <div class="features">

        <div class="feature-item">
          <h2 class="game-platform">HTC</h2>
          <img :src="this.publicPath + 'htc_vive.png'" alt="" width="100%" height="auto">
          <p>
            VIVE изначально был задуман как система, позволяющая получить опыт полного погружения в виртуальную среду с возможностью перемещения в пространстве.
          </p>
        </div>

        <div class="feature-item">
          <h2 class="game-platform">PSVR</h2>
          <img :src="this.publicPath + 'ps_vr.png'" alt="" width="100%" height="auto">
          <p>
          К особенностям представленного шлема необходимо отнести наличие системы 3D-обработки звука, социального экрана, кинематографического режима работы.
        </p>
        </div>

        <div class="feature-item">
          <h2 class="game-platform">PS4</h2>
          <img :src="this.publicPath + 'ps_4.png'" alt="" width="100%" height="auto">
          <p>
          Вселенная игрового киберпространства открыта перед вами! Приставка Sony PlayStation 4 даст вам лучший игровой опыт с передовой графикой нового поколения.
        </p>
        </div>

      </div>

      <h2>Прайс</h2>

      <vk-table :data="data" striped>
        <vk-table-column title="HTC" cell="htc"></vk-table-column>
        <vk-table-column title="PSVR" cell="psvr"></vk-table-column>
        <vk-table-column title="PS4" cell="ps4"></vk-table-column>
      </vk-table>

      <h2>Как проехать</h2>

      <p>Мы находимся по адресу: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж</p>
      <iframe src="https://yandex.ru/map-widget/v1/-/CCrrEBOI" width="100%" height="300" frameborder="0" allowfullscreen="true"></iframe>
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

export default {
  name: 'about',
  data () {
    return {
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL,
      data: [
        { htc: '10 мин - 150р', psvr: '10 мин - 150р', ps4: '15 мин - 100р' },
        { htc: '20 мин - 250р', psvr: '20 мин - 250р', ps4: '30 мин - 150р' },
        { htc: '30 мин - 350р', psvr: '30 мин - 350р', ps4: '60 мин - 250р' },
        { htc: '60 мин - 500р', psvr: '60 мин - 500р', ps4: '120 мин - 450р' },
        { htc: '120 мин - 900р', psvr: '120 мин - 900р' },
        { psvr: '1 заезд - 100р'}
      ]
    }
  }
}
</script>
