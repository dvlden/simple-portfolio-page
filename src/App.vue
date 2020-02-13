<template>
  <div id="app">
    <a href="/" class="logo" title="Logo - dvL monogram" v-html="require('./assets/logo.svg')" />

    <section>
      <header>
        <h1>Welcome to dvl.sh! 👋</h1>
      </header>

      <main>
        <p>
          Hi, my name is Nenad Novaković, but the artist within me is called dvL.
          I'm full-stack developer & designer, but also more than “just” that...
        </p>

        <p>
          <em>When I get some spare time, I'll make a fancy website for myself.</em>
        </p>
      </main>

      <footer>
        <ul class="socials">
          <li v-for="social in socials" :key="social.title">
            <a :href="social.url" target="_blank" :title="`${social.title} Profile`" v-html="getSocialIcon(social.title)" />
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {
        socials: [
          {
            url: '//twitter.com/dvlden',
            title: 'Twitter'
          },
          {
            url: '//www.linkedin.com/in/dvlden/',
            title: 'LinkedIn'
          },
          {
            url: '//github.com/dvlden',
            title: 'GitHub'
          },
          {
            url: '//dribbble.com/dvlden',
            title: 'Dribbble'
          },
          {
            url: '//stackexchange.com/users/1355202/dvlden',
            title: 'Stack Overflow'
          },
          {
            url: '//medium.com/@dvlden',
            title: 'Medium'
          }
        ]
      }
    },

    methods: {
      getSocialIcon (title) {
        return require(`./assets/${title.toLowerCase().replace(' ', '')}.svg`)
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: .2rem;
  }

  a:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, .2);
  }

  @media (hover: hover) {
    a svg {
      will-change: fill;
      transition: fill .2s ease;
    }

    a svg:hover {
      fill: #666;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .logo {
    width: 128px;
    height: 128px;
  }

  main {
    max-width: 580px;
  }

  em {
    color: #666;
  }

  .socials {
    all: unset;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  .socials > li:not(:last-child) {
    margin-right: .5rem;
  }

  .socials a {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  .socials svg {
    height: 1rem;
  }
</style>
