<template>
  <div id="app">
    <form autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false">
      <fieldset>
        <h4>Choose a button</h4>
        <div class="row">
          <div class="col-9 col-sm-6 col-md-4 col-lg-2" v-for="type in types" :key="type.value">
            <div class="form-check">
              <label class="form-check-label position-relative d-block">
                <input type="radio" class="form-check-input" name="type" :value="type.value" v-model="options.type">{{ capitalize(type.value) }}<br>
                <github-button href="#" data-color-scheme="" :data-icon="type.icon" data-size="large" :data-text="capitalize(type.value)" aria-hidden="true"></github-button>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <hr>
      <div class="row" v-if="options.type">
        <div class="col-12 col-sm-6 col-md-5">
          <h4>Button options</h4>
          <div class="row mb-3">
            <div class="input-group">
              <input ref="user" class="form-control" type="text" maxlength="39" placeholder=":user" autofocus="autofocus" :class="{ 'is-invalid': options.user !== '' && !isValidUser }" v-model="options.user">
              <span class="input-group-text">/</span>
              <input ref="repo" class="form-control" type="text" maxlength="100" placeholder=":repo" :disabled="options.type === 'follow' || options.type === 'sponsor'" :class="{ 'is-invalid': options.repo !== '' && !isValidRepo }" v-model="options.repo">
            </div>
          </div>
          <div class="row mb-1">
            <div class="col-auto me-auto">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" v-model="options.colorScheme"> Color scheme
                </label>
              </div>
            </div>
            <div class="col-auto">
              <label class="visually-hidden" for="prefers-color-scheme-no-preference">@media (prefers-color-scheme: no-preference)</label>
              <select id="prefers-color-scheme-no-preference" class="form-select form-select-sm" :disabled="options.colorScheme !== true" v-model="options.prefersColorScheme['no-preference']">
                <option v-for="colorScheme in colorSchemes" :key="colorScheme">{{ colorScheme }}</option>
              </select>
            </div>
          </div>
          <div class="row mb-1">
            <div class="col-auto me-auto">
              <label for="prefers-color-scheme-light" class="form-check-label col-form-label-sm ps-4">@media (prefers-color-scheme: light)</label>
            </div>
            <div class="col-auto">
              <select id="prefers-color-scheme-light" class="form-select form-select-sm" :disabled="options.colorScheme !== true" v-model="options.prefersColorScheme.light">
                <option v-for="colorScheme in colorSchemes" :key="colorScheme">{{ colorScheme }}</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-auto me-auto">
              <label for="prefers-color-scheme-dark" class="form-check-label col-form-label-sm ps-4">@media (prefers-color-scheme: dark)</label>
            </div>
            <div class="col-auto">
              <select id="prefers-color-scheme-dark" class="form-select form-select-sm" :disabled="options.colorScheme !== true" v-model="options.prefersColorScheme.dark">
                <option v-for="colorScheme in colorSchemes" :key="colorScheme">{{ colorScheme }}</option>
              </select>
            </div>
          </div>
          <div class="row mb-1">
            <div class="col">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" v-model="options.largeButton"> Large button
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-1">
            <div class="col">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" :disabled="options.type === 'sponsor' || options.type === 'discuss' || options.type === 'download' || options.type === 'install this package' || options.type === 'use this GitHub Action' || options.type === 'use this template'" v-model="options.showCount"> Show count
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-1">
            <div class="col">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" v-model="options.standardIcon"> Standard icon
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-1">
            <div class="col">
              <label for="syntax">Syntax</label>
              <select id="syntax" class="form-select" v-model="options.syntax">
                <option>html</option>
                <option value="vue">vue-github-button</option>
                <option value="react">react-github-btn</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-7">
          <h4>Preview and code</h4>
          <p>Try out your button, then copy and paste the code below into the HTML for your site.</p>
          <p :style="{ height: options.largeButton ? '28px' : '20px' }">
            <github-button v-bind="getPreviewAttrs()"></github-button>
          </p>
          <div class="mb-1">
            <code-snippet :code="templateHTML"></code-snippet>
          </div>
          <div class="mb-1">
            <code-snippet :code="scriptHTML"></code-snippet>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import GithubButton from 'vue-github-button'
import CodeSnippet from './components/CodeSnippet.vue'

export default {
  name: 'app',
  components: {
    GithubButton,
    CodeSnippet
  },
  data () {
    return {
      types: [
        {
          value: 'follow',
          icon: 'octicon-mark-github'
        },
        {
          value: 'sponsor',
          icon: 'octicon-heart'
        },
        {
          value: 'watch',
          icon: 'octicon-eye'
        },
        {
          value: 'star',
          icon: 'octicon-star'
        },
        {
          value: 'fork',
          icon: 'octicon-repo-forked'
        },
        {
          value: 'issue',
          icon: 'octicon-issue-opened'
        },
        {
          value: 'discuss',
          icon: 'octicon-comment-discussion'
        },
        {
          value: 'download',
          icon: 'octicon-download'
        },
        {
          value: 'install this package',
          icon: 'octicon-package'
        },
        {
          value: 'use this template',
          icon: 'octicon-repo-template'
        },
        {
          value: 'use this GitHub Action',
          icon: 'octicon-play'
        }
      ],
      colorSchemes: [
        'light',
        'light_high_contrast',
        'dark',
        'dark_dimmed',
        'dark_high_contrast'
      ],
      options: {
        user: '',
        repo: '',
        type: null,
        colorScheme: true,
        prefersColorScheme: {
          'no-preference': 'light',
          light: 'light',
          dark: 'dark'
        },
        largeButton: true,
        showCount: false,
        standardIcon: false,
        syntax: ((referrer) => {
          if (/\bvue-github-button\b/i.test(referrer)) {
            return 'vue'
          }
          if (/\breact-github-btn\b/i.test(referrer)) {
            return 'react'
          }
          return 'html'
        })(document.referrer)
      },
      timeoutID: 0
    }
  },
  watch: {
    'options.type' () {
      this.$nextTick(() => {
        if (document.activeElement !== this.$refs.user && document.activeElement !== this.$refs.repo) {
          if ((this.options.type === 'follow' || this.options.type === 'sponsor') || !this.isValidUser || (this.isValidUser && this.isValidRepo)) {
            this.$refs.user.focus()
          } else {
            this.$refs.repo.focus()
          }
        }
      })
    },
    'attrs.href' () {
      if (this.attrs['data-show-count']) {
        clearTimeout(this.timeoutID)
        this.timeoutID = setTimeout(() => {
          this.timeoutID = 0
        }, 300)
      }
    }
  },
  computed: {
    isValidUser () {
      const user = this.options.user
      return user.length > 0 && user.length < 40 && !/[^A-Za-z0-9-]|^-|-$|--/i.test(user)
    },
    isValidRepo () {
      const repo = this.options.repo
      return repo.length > 0 && repo.length < 101 && !/[^\w-.]|\.git$|^\.\.?$/i.test(repo)
    },
    attrs () {
      const options = { ...this.options }

      if (!this.isValidUser || (!this.isValidRepo && options.type !== 'follow' && options.type !== 'sponsor')) {
        options.user = 'buttons'
        options.repo = 'github-buttons'
      }

      return {
        href: (() => {
          const base = 'https://github.com'
          const user = '/' + options.user
          const repo = user + '/' + options.repo
          switch (options.type) {
            case 'follow':
              return base + user
            case 'sponsor':
              return base + '/sponsors/' + options.user
            case 'watch':
              return base + repo + '/subscription'
            case 'star':
              return base + repo
            case 'fork':
              return base + repo + '/fork'
            case 'discuss':
              return base + repo + '/discussions'
            case 'issue':
              return base + repo + '/issues'
            case 'download':
              return base + repo + '/archive/HEAD.zip'
            case 'install this package':
              return base + repo + '/packages'
            case 'use this GitHub Action':
              return base + repo
            case 'use this template':
              return base + repo + '/generate'
            default:
              return base
          }
        })(),
        'data-text': (() => {
          return this.capitalize(options.type) + (options.type === 'follow' ? ' @' + options.user : '')
        })(),
        'data-color-scheme': (() => {
          if (options.colorScheme !== true) {
            return
          }
          return 'no-preference: ' + options.prefersColorScheme['no-preference'] + '; light: ' + options.prefersColorScheme.light + '; dark: ' + options.prefersColorScheme.dark + ';'
        })(),
        'data-icon': (() => {
          if (options.standardIcon) {
            return
          }
          switch (options.type) {
            case 'sponsor':
              return 'octicon-heart'
            case 'watch':
              return 'octicon-eye'
            case 'star':
              return 'octicon-star'
            case 'fork':
              return 'octicon-repo-forked'
            case 'issue':
              return 'octicon-issue-opened'
            case 'discuss':
              return 'octicon-comment-discussion'
            case 'download':
              return 'octicon-download'
            case 'install this package':
              return 'octicon-package'
            case 'use this GitHub Action':
              return 'octicon-play'
            case 'use this template':
              return 'octicon-repo-template'
          }
        })(),
        'data-size': (() => {
          if (options.largeButton) {
            return 'large'
          }
        })(),
        'data-show-count': (() => {
          if (options.showCount) {
            switch (options.type) {
              case 'sponsor':
              case 'discuss':
              case 'download':
              case 'install this package':
              case 'use this GitHub Action':
              case 'use this template':
                return
              default:
                return true
            }
          }
        })(),
        'aria-label': (() => {
          return this.capitalize(options.type) + (options.type === 'follow' || options.type === 'sponsor' ? ' @' + options.user : ' ' + options.user + '/' + options.repo) + ' on GitHub'
        })()
      }
    },
    templateHTML () {
      const a = document.createElement('a')

      if (this.options.syntax === 'html') {
        a.className = 'github-button'
      }

      const attrs = this.attrs
      for (const key in attrs) {
        if (attrs[key] != null) {
          if (key === 'data-text') {
            a.textContent = attrs[key]
          } else {
            a.setAttribute(key, attrs[key])
          }
        }
      }
      return '<!-- Place this tag where you want the button to render. -->\n' + ((html) => {
        switch (this.options.syntax) {
          case 'vue':
            return html.replace(/^<a/, '<github-button').replace(/a>$/, 'github-button>')
          case 'react':
            return html.replace(/^<a/, '<GitHubButton').replace(/a>$/, 'GitHubButton>')
          default:
            return html
        }
      })(a.outerHTML)
    },
    scriptHTML () {
      switch (this.options.syntax) {
        case 'vue':
          return 'import GithubButton from \'vue-github-button\''
        case 'react':
          return 'import GitHubButton from \'react-github-btn\''
        default:
          return '<!-- Place this tag in your head or just before your close body tag. -->\n<script async defer src="https://buttons.github.io/buttons.js"></scr' + 'ipt>'
      }
    }
  },
  methods: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    getPreviewAttrs () {
      return { ...this.attrs, 'data-show-count': this.attrs['data-show-count'] && !this.timeoutID }
    }
  }
}
</script>

<style scoped>
p {
  overflow-x: auto;
  overflow-y: hidden;
}

.form-check-label.d-block::before {
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  content: '';
}
</style>
