var vm = new Vue({
  el: 'body',
  data: {
    lang: localStorage.getItem("lang") || 'en',
    data: {
      en: {
        about: 'About',
        news: 'News',
        judges: 'Judges',
        contact: 'Contact'
      },
      ge: {
        about: 'ჩვენ შესახებ',
        news: 'სიახლეები',
        judges: 'ჟიური',
        contact: 'კონტაქტი'
      }
    }
  },
  computed: {
    dataLang: function(){
      return this.data[this.lang];
    }
  },
  methods: {
    changeLang: function(){
      this.lang == 'en' ? this.lang = 'ge' : this.lang = 'en';
      var lang = this.lang;
      localStorage.setItem("lang", lang);

    }
  }
});
