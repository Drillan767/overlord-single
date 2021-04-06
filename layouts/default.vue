<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          hid: 'og_sitename',
          name: 'og:sitename',
          content: 'Joseph Levarato'
        },
        {
          hid: 'og_url',
          name: 'og:url',
          content: 'https://josephlevarato.me'
        },
        {
          hid: 'og_title',
          name: 'og:title',
          content: 'Joseph Levarato'
        },
        {
          hid: 'twitter_url',
          name: 'twitter:url',
          content: 'https://josephlevarato.me'
        },
        {
          hid: 'twitter_card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter_image',
          name: 'twitter:image',
          content: '/logo.png'
        },
        {
          hid: 'twitter_title',
          name: 'twitter:title',
          content: 'Joseph Levarato'
        },
        ...i18nHead.meta
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://josephlevarato.me'
        },
        ...i18nHead.link
      ]
    }
  }
}
</script>
