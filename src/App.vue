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
            <a :href="social.url" target="_blank" :title="`${social.title} Profile`" rel="noopener" v-html="getSocialIcon(social.title)" />
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
  const socialHandle = 'dvlden'

  export default {
    name: 'App',

    data () {
      return {
        socials: [
          {
            url: `//twitter.com/${socialHandle}`,
            title: 'Twitter'
          },
          {
            url: `//www.linkedin.com/in/${socialHandle}/`,
            title: 'LinkedIn'
          },
          {
            url: `//github.com/${socialHandle}`,
            title: 'GitHub'
          },
          {
            url: `//dribbble.com/${socialHandle}`,
            title: 'Dribbble'
          },
          {
            url: `//stackexchange.com/users/1355202/${socialHandle}`,
            title: 'Stack Overflow'
          },
          {
            url: `//medium.com/@${socialHandle}`,
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

<style lang="scss">
  :root {
    --color-dark: #000;
    --color-light: #fff;
  }

  body {
    --body-background: var(--color-light);
    --body-color: var(--color-dark);

    background-color: var(--body-background);
    color: var(--body-color);
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  a {
    --link-fill: var(--color-dark);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: .2rem;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, .2);
    }

    @media (hover: hover) {
      svg {
        fill: var(--link-fill);
        will-change: opacity;
        transition: opacity .2s ease;

        &:hover {
          opacity: .5;
        }
      }
    }
  }

  .logo svg {
    width: 128px;
    height: 128px;
  }

  main {
    max-width: 580px;
  }

  em {
    opacity: .5;
  }

  .socials {
    padding-left: 0;
    margin-bottom: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;

    li:not(:last-child) {
      margin-right: .5rem;
    }

    a {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }

    svg {
      height: 1rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      --body-background: var(--color-dark);
      --body-color: var(--color-light);
    }

    a svg {
      --link-fill: var(--color-light);
    }
  }
</style>
