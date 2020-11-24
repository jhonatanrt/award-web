<template>
  <footer class="app-footer section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-5 is-4-widescreen">
          <div class="summary">
            <a class="brand" href="/">
              <div class="brand-icon">
                <img
                  alt="Bedtime Stories"
                  role="presentation"
                  src="https://getbedtimestories.com/assets/images/app-icon-df78e144.png?1588602937"
                />
              </div>
              <div class="brand-content">
                <div class="brand-title">Award App</div>
                <div class="brand-subtitle">
                  Reconocimiento y premiación de trabajadores
                </div>
              </div>
            </a>
            <hr class="spacer is-1" />
            <a href="http://www.littlelightsstudio.com" target="_blank">
              © Little Light Studio GmbH</a
            >
            <hr class="spacer is-1" />
            <p>Supported by Dash Company</p>
          </div>
        </div>
        <div class="column is-7 is-6-widescreen is-offset-2-widescreen">
          <div class="columns">
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">Producto</p>
                <ul class="menu-list">
                  <li><a href="/">Home</a></li>
                  <li>
                    <a href="/school">Storytelling School </a>
                  </li>
                  <li><a href="/library">Library</a></li>
                </ul>
              </div>
            </div>
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">Empresa</p>
                <ul class="menu-list">
                  <li>
                    <a href="https://medium.com/bedtime-stories-blog">Blog</a>
                  </li>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/about-us#downloads">Press Kit</a></li>
                  <li><a href="/imprint">Imprint</a></li>
                  <li><a href="/privacy">Privacy</a></li>
                  <li><a href="/terms">Terms</a></li>
                </ul>
              </div>
            </div>
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">Redes Sociales</p>
                <ul class="menu-list">
                  <li>
                    <a
                      href="https://facebook.com/getbedtimestories"
                      target="_blank"
                    >
                      <img
                        role="presentation"
                        src="https://getbedtimestories.com/assets/images/icons/social/facebook-f18752b0.svg?1588602937"
                      />Facebook</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://messenger.com/t/1180441035357755"
                      target="_blank"
                    >
                      <img
                        role="presentation"
                        src="https://getbedtimestories.com/assets/images/icons/social/messenger-d2bb944d.svg?1588602937"
                      />Messenger</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/getbedtimestories"
                      target="_blank"
                    >
                      <img
                        role="presentation"
                        src="https://getbedtimestories.com/assets/images/icons/social/instagram-89cb51bf.svg?1588602937"
                      />Instagram</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/getbedtimestory"
                      target="_blank"
                    >
                      <img
                        role="presentation"
                        src="https://getbedtimestories.com/assets/images/icons/social/twitter-42c2f562.svg?1588602937"
                      />Twitter</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://medium.com/bedtime-stories-blog"
                      target="_blank"
                    >
                      <img
                        role="presentation"
                        src="https://getbedtimestories.com/assets/images/icons/social/medium-2fc70afa.svg?1588602937"
                      />Medium</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.brand {
  display: flex;
  align-items: center;
  line-height: 1;
}
.brand .brand-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #463853;
  transition-duration: 172ms;
  will-change: transform;
}
.brand .brand-subtitle {
  margin-top: 0.25rem;
  font-size: 1.125rem;
  font-weight: normal;
  color: #998da0;
  opacity: 1;
  transition-duration: 172ms;
  will-change: opacity, transform;
}
.brand .brand-icon {
  width: 56px;
  height: 56px;
  margin-right: 1rem;
  transition-duration: 172ms;
  will-change: width, height, margin-right;
}
.menu-list img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 1rem;
}
.menu-label {
  font-size: 1.375rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: #463853;
}
.menu-list {
  margin-left: -0.75rem;
  font-size: 1.125rem;
}
</style>