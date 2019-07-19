<template>
  <div id="app">
    <router-view class="app"/>
  </div>
</template>

<style>
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #210832;
}

body::after {
  content:
    url("/search.svg")
    url("/close.svg")
    url("/star.svg")
    url("/star_fill.svg")
    url("/vk.svg");
  display: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.app {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  min-height: 100vh;
}

/*[v-cloak] > * {
  display: none;
}
.loading::before {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  background-image: url("data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==");
}*/

.header {
  display: block;
  padding: 15px;
  padding-right: 40px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  color: white;
  background: #3a6186;
  background: -webkit-linear-gradient(to right, #89253e, #3a6186);
  background: -webkit-gradient(linear, left top, right top, from(#89253e), to(#3a6186));
  background: -webkit-linear-gradient(left, #89253e, #3a6186);
  background: -o-linear-gradient(left, #89253e, #3a6186);
  background: linear-gradient(to right, #89253e, #3a6186);
}

.site-name {
  display: block;
  max-width: 400px;
  text-decoration: none;
  color: white;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

p {
  line-height: 1.3;
}

.container-input {
  position: relative;
}

.container-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.toggle-search {
  width: 24px;
  height: 24px;
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
  background-image: url("/search.svg");
  -webkit-background-size: 30px 30px;
          background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
}

.toggle-search:focus {
  outline: none;
}

.toggle-search.switched {
  background-image: url("/close.svg");
  -webkit-background-size: 30px 30px;
          background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
}

.search-input {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #fff;
  background: rgba(0, 0, 0, 0.8);
}

.search-input.opened {
  display: block;
}

.search-game {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  padding-right: 50px;
  padding-left: 15px;
  padding-bottom: 10px;
  width: 100%;
  font-size: 20px;
  color: white;
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  height: 50px;
  /* left: 0;
  top: 0; */
}

::-webkit-input-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

:-moz-placeholder {
  color: #fff;
}

:-ms-input-placeholder {
  color: #fff;
}

input:focus {
  outline: none;
}

.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-pack: left;
  -webkit-justify-content: left;
      -ms-flex-pack: left;
          justify-content: left;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
/*  min-height: 100vh;*/
  padding: 15px;
  padding-top: 20px;
}

.item {
  width: 100%;
  margin-bottom: 10px;
}

.card {
  position: relative;
  width: 100%;
  height: 250px;
  cursor: pointer;
  color: white;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-border-radius: 10px;
          border-radius: 10px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.card:hover {
  -webkit-box-shadow: 0 0 10px black;
          box-shadow: 0 0 10px black;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.card-image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -webkit-border-radius: 5px;
          border-radius: 5px;
}

.card-genre {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  -webkit-border-radius: 5px;
          border-radius: 5px;
  background: #210832;
/*  opacity: 0.8;*/
  background: rgba(0, 0, 0, .7) !important;
}

b.desc {
  font-size: 18px;
}

.card-desc {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 100px;
  background: rgba(0, 0, 0, 0.7) !important;
  -webkit-border-bottom-left-radius: 5px;
          border-bottom-left-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
          border-bottom-right-radius: 5px;
}

h3.game-title {
  padding: 0 10px;
  margin: 15px 0;
}

p.game-desc {
  padding: 0 10px;
  margin: 10px 0;
}

h3.game-title,
p.game-desc {
  padding-left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

::-webkit-input-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

:-moz-placeholder {
  color: #fff;
}

:-ms-input-placeholder {
  color: #fff;
}

input:focus {
  outline: none;
}

.tabs {
  font-size: 16px;
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  border: 1px solid #89253e;
}

.container--tabs {
  padding-left: 0;
}

.tabs-item {
  display: block;
  width: 25%;
  text-align: center;
}

.tabs-item a {
  color: #fff;
  display: block;
  padding: 1em 0;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  opacity: 0.8;
}

.tabs-item.active a {
  border-bottom: 3px solid #89253e;
  opacity: 1;
  -webkit-animation: tabs-ripple 0.2s linear forwards;
          animation: tabs-ripple 0.2s linear forwards;
}

.footer {
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
  padding: 15px !important;
  margin-top: auto;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background: #3a6186;
  background: -webkit-linear-gradient(left, #89253e, #3a6186);
  background: -o-linear-gradient(left, #89253e, #3a6186);
  background: -webkit-gradient(linear, left top, right top, from(#89253e), to(#3a6186));
  background: linear-gradient(to right, #89253e, #3a6186);
}

.logo,
.tel {
  margin-right: 30px;
}

.tel a {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-size: 14px;
  color: white;
  border: 1px solid rgba(255, 255, 255, .3);
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.tel a:hover {
  border: 1px solid rgba(255, 255, 255, .6);
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}

.about-header {
  margin-top: 10px;
}

.about-link {
  cursor: pointer;
}

.copyright {
  -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
          flex-basis: 100%;
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #ccc;
}

.uk-tabs {
  padding-left: 0 !important;
  margin-left: 0 !important;
  border: 1px solid #89253e !important;
}

.uk-tab::before {
  border: none !important;
}

.uk-tab {
  margin-left: 0 !important;
  border: 1px solid #89253e !important;
}

.uk-tab > * > a {
  padding: 1em 0 !important;
  font-size: 16px !important;
  font-weight: bold !important;
  color: #fff !important;
  opacity: 0.5 !important;
}

.uk-tab > .uk-active > a {
  color: #fff !important;
  opacity: 1 !important;
  border-color: #89253e !important;
  border-width: 3px !important;
}

.uk-tab > * > a:hover,
.uk-tab > * > a:focus {
  color: #89253e !important;
}

.uk-tab > .uk-active > a:hover,
.uk-tab > .uk-active > a:focus {
  color: #fff !important;
  cursor: inherit !important;
}

.uk-tab > * {
  padding: 0 !important;
}

h1,
.uk-h1,
h2,
.uk-h2,
h3,
.uk-h3,
h4,
.uk-h4,
h5,
.uk-h5,
h6,
.uk-h6 {
  font-family: inherit !important;
  font-weight: 700 !important;
  color: #fff !important;
}

h3,
.uk-h3 {
  padding-left: 10px !important;
  padding-right: 10px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  font-size: 18px !important;
}

a:hover,
.uk-link:hover {
  color: inherit !important;
  text-decoration: none !important;
}

.container-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.container-game,
.container-about {
  padding-left: 15px;
  padding-right: 15px;
}

.container.container-about {
  margin-bottom: 20px;
}

.uk-breadcrumb {
  margin-top: 10px;
}

.uk-breadcrumb > * > * {
  color: #fff !important;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
  cursor: pointer;
}

.uk-breadcrumb > * > :hover,
.uk-breadcrumb > * > :focus {
  color: #89253e !important;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.uk-breadcrumb > :last-child > * {
  color: #666 !important;
  cursor: default;
}

.uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before {
  margin: 0 10px !important;
}

.desc {
  margin-bottom: 20px;
}

.game-video {
  min-height: 300px;
}

.game-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
  /*justify-content: space-between;*/
}

.game-name {
  margin-right: 20px;
  margin-bottom: 0;
  font-size: 20px;
}

.like {
  width: 20px;
  height: 20px;
  border: none;
  background: url("/star.svg");
  -webkit-background-size: 20px 20px;
          background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.like:focus {
  outline: none;
}

.like:focus {
  outline: none;
}

.liked {
  background: url("/star_fill.svg");
}

.flashpool {
  -webkit-perspective: 0px;
          perspective: 0px;
}

.flashpool .flash__message {
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}

.flash__message {
  margin: 0;
  margin-top: 10px;
  display: inline-block;
}

.flash__message.success {
  padding: 10px;
}

.flash-enter, .flash-leave-to {
  opacity: 0;
  -webkit-transform: rotateX(-30deg) scale(.88) translateY(-30px);
          transform: rotateX(-30deg) scale(.88) translateY(-30px);
}

.flash-leave-active {
  position: absolute;
}

.VueCarousel {
  margin-bottom: 30px;
}

.VueCarousel-slide {
  -webkit-flex-basis: 100% !important;
      -ms-flex-preferred-size: 100% !important;
          flex-basis: 100% !important;
}

.VueCarousel-dot:focus {
  outline: none !important;
}

.VueCarousel-dot-container {
  margin: 0 !important;
  margin-top: -10px !important;
}

.VueCarousel-dot {
  -webkit-border-radius: 0 !important;
          border-radius: 0 !important;
  width: 40px !important;
  height: 2px !important;
}

.VueCarousel-navigation-button {
  font-size: 30px !important;
  color: rgba(137, 37, 62, .7) !important;
}

.VueCarousel-navigation-button:focus {
  outline: none !important;
}

.VueCarousel-navigation-prev {
  left: 30px !important;
  padding: 0 !important;
}

.VueCarousel-navigation-next {
  right: 30px !important;
  padding: 0 !important;
}

@media (min-width: 501px) {
  .container-game,
  .container-about {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.select-container {
  padding: 0 15px;
}

.label-genre {
  margin-right: 10px;
}

.uk-select {
  color: #000;
  border: 1px solid #89253e;
}

.uk-select:hover {
  border-color: #6b1a2e;
  cursor: pointer;
}

.uk-select:not([multiple]):not([size]) {
  width: auto;
  height: auto;
  padding: 5px 30px 5px 10px;
}

.header {
  padding-right: 15px;
  margin-bottom: 3px;
  text-align: center;
}

.container-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px !important;
  margin: 0 auto;
}

.container-header .logo {
  margin: 0;
}

.header-item {
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
}

.header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 300px;
}

.header-info > * {
  display: block;
}

.header-info .tel {
  margin: 0;
}

.link {
  color: #fff;
  transition: all .5s;
}

.link:hover {
  color: #89253e !important;
  transition: all .5s;
}

.search {
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 20px;
  background: #3a6186;
  background: -webkit-linear-gradient(left, #89253e, #3a6186);
  background: -o-linear-gradient(left, #89253e, #3a6186);
  background: -webkit-gradient(linear, left top, right top, from(#89253e), to(#3a6186));
  background: linear-gradient(to right, #89253e, #3a6186);
}

.toggle-search {
  right: 20px;
  top: 13px;
}

.uk-table th {
  font-size: 16px;
  font-weight: bold;
}

.uk-table-striped > tr:nth-of-type(odd), .uk-table-striped tbody tr:nth-of-type(odd) {
  background: rgba(255,255,255,0.1);
}

@-webkit-keyframes tabs-ripple {
  0% {
    background: transparent;
  }
  50% {
    background: rgba(255, 255, 255, 0.05);
  }
  100% {
    background: transparent;
  }
}

@keyframes tabs-ripple {
  0% {
    background: transparent;
  }
  50% {
    background: rgba(255, 255, 255, 0.05);
  }
  100% {
    background: transparent;
  }
}

@media (min-width: 501px) {
  .container {
    padding-left: 20px;
  }

  .container--tabs {
    padding-left: 0;
  }

  .item {
    width: -webkit-calc(50% - 10px);
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  .game-name {
    font-size: 24px;
  }

  .select-container {
    padding: 0;
  }

/*  .container-header {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0;
  }

  .container-header .logo {
    flex-basis: 100%;
  }

  .container-header .logo img {
    width: 250px;
    height: auto;
  }

  .header-item {
    flex-basis: 100%;
  }

  .header-info {
    flex-basis: 100%;
  }*/
}

@media (min-width: 600px) {
  .container-header {
    max-width: 500px !important;
    padding: 0;
  }

  .container-header .logo img {
    width: 250px;
    height: auto;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .game-video {
    min-height: 500px;
  }

  .game-name {
    font-size: 28px;
  }

  .container-header {
    flex-direction: row;
    justify-content: space-between;
    max-width: 960px !important;
  }

  .header-items {
    width: 300px;
  }

  .header-info {
    justify-content: space-around;
  }

  .header-info .tel {
    flex-basis: 100%;
    margin-bottom: 5px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 20px;
  }

  .container--tabs {
    padding-left: 0;
  }

  .search-game {
/*    padding-left: 0;*/
  }

  .item {
    width: -webkit-calc(33.3333% - 10px);
    width: calc(33.3333% - 10px);
    margin-right: 10px;
  }

  .features {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }

  .feature-item {
    width: 30%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }

  .game-platform {
    -webkit-align-self: center;
        -ms-flex-item-align: center;
                -ms-grid-row-align: center;
            align-self: center;
  }

  .container-header {
    padding: 0;
  }

  .header-items {
    width: 400px;
  }

  .header-info .tel {
    flex-basis: auto;
    margin-bottom: 0;
  }
}

@media (min-width: 1025px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .item {
    width: -webkit-calc(25% - 10px);
    width: calc(25% - 10px);
    margin-right: 10px;
  }
}

@media (min-width: 768px) {
  .container-footer {
    max-width: 960px;
    margin: 0 auto;
  }
}

@media (max-width: 500px) {

  .container-footer {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
  }

  .logo,
  .tel {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (min-width: 1024px) {
  .container-footer {
    padding-left: 20px;
  }
}
</style>
