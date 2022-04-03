const i18n = new VueI18n({
    locale: 'tw',
    messages,
  })

new Vue({ i18n }).$mount('#wrap') //指定語系要套用的區域