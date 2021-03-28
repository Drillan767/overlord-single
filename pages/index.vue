<template>
  <div class="hero">
    <div>
      <div class="grid">
        <header>
          <Logo />
          <h1 class="title">
            Joseph Levarato
          </h1>
          <p>
            {{ $t('subtitle') }}
          </p>
          <p>
            {{ $t('info') }}
          </p>
        </header>
      </div>

      <div class="form">
        <div v-if="errors.length > 0" class="notification is-danger">
          <ul>
            <li v-for="(error, i) in errors" :key="i">
              {{ error }}
            </li>
          </ul>
        </div>

        <div v-if="success" class="notification is-success">
          {{ $t('email.success') }}
        </div>
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <b-field>
                <b-input v-model="contact.name" :placeholder="$t('email.name')" />
              </b-field>
            </div>
            <div class="tile is-parent">
              <b-field>
                <b-input v-model="contact.email" :placeholder="$t('email.email')" />
              </b-field>
            </div>
          </div>
          <div class="tile is-parent is-fullwidth">
            <b-field>
              <b-input v-model="contact.subject" :placeholder="$t('email.subject')" />
            </b-field>
          </div>
          <div class="tile is-parent">
            <b-field>
              <b-input v-model="contact.message" type="textarea" :placeholder="$t('email.message_placeholder')" />
            </b-field>
          </div>

          <div class="newsletter">
            <label>
              <input v-model="contact.hp" type="checkbox" value="1">
            </label>
          </div>

          <div class="tile is-parent is-flex is-justify-content-end">
            <b-button type="is-primary" :class="{'is-loading': loading}" @click="sendMail">
              {{ $t('email.send') }}
            </b-button>
          </div>
        </div>
      </div>

      <div class="logos">
        <a href="https://github.com/Drillan767" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/josephlevarato/" target="_blank">
          <LinkedIn />
        </a>
        <a href="https://gitlab.com/JaegerNaut" target="_blank">
          <Gitlab />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Github from '~/components/Github'
import LinkedIn from '~/components/Linkedin'
import Gitlab from '~/components/Gitlab'

export default {
  components: {
    Logo,
    Github,
    LinkedIn,
    Gitlab
  },

  asyncData ({ $config: { mailUsername } }) {},

  data: () => ({
    loading: false,
    success: false,
    errors: [],
    contact: {
      name: '',
      subject: '',
      email: '',
      message: '',
      hp: false
    }
  }),

  mounted () {
    this.$gsap
      .fromTo('.logo', {
        opacity: 0,
        y: window.innerHeight / 2,
        yPercent: -50
      },
      {
        opacity: 1,
        y: window.innerHeight / 2,
        yPercent: -50,
        duration: 1,
        ease: 'power4.out',
        onComplete: () => this.moveUpLogo()
      })
  },

  methods: {
    sendMail () {
      this.validate()
      if (this.errors.length === 0) {
        this.loading = true
        this.$mail.send({
          envelope: {
            from: this.contact.email,
            to: this.$config.mailUsername
          },
          subject: this.contact.subject,
          text: this.contact.message
        })
          .then(() => {
            this.loading = false
            this.success = true
            this.contact = {
              name: '',
              subject: '',
              email: '',
              message: '',
              hp: false
            }
          })
      }
    },

    validate () {
      this.errors = []
      const fields = ['name', 'subject', 'message']
      fields.forEach((field) => {
        if (this.contact[field] === '') {
          this.errors.push(this.$t('email.required', { field: this.$t(`email.${field}`) }))
        }

        if (this.contact[field] !== '' && this.contact[field].length <= 5) {
          this.errors.push(this.$t('email.short', { field: this.$t(`email.${field}`) }))
        }
      })

      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/

      if (!regex.test(this.contact.email)) {
        this.errors.push(this.$t('email.invalid'))
      }

      if (this.contact.hp) {
        this.errors.push('O No.')
      }
    },

    moveUpLogo () {
      this.$gsap.to('.logo', {
        y: 0,
        yPercent: 0,
        duration: 1,
        ease: 'power4.out',
        onComplete: () => this.displayName()
      })
    },

    displayName () {
      this.$gsap.fromTo('h1', {
        scale: 1.2,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        onComplete: () => this.displayText()
      })
    },

    displayText () {
      this.$gsap.fromTo('p', {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.5,
        onComplete: () => this.displayForm()
      })
    },

    displayForm () {
      this.$gsap.fromTo('.form', {
        opacity: 0,
        y: -25
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => this.displayLogos()
      })
    },

    displayLogos () {
      this.$gsap.fromTo('.linkedin', {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        duration: 0.5,
        y: 0
      })

      this.$gsap.fromTo('.github', {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        duration: 0.5,
        x: 0
      })

      this.$gsap.fromTo('.gitlab', {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        duration: 0.5,
        x: 0
      })
    }
  }
}
</script>
