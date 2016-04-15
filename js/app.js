const base_url = 'http://192.168.1.88/canes';

Vue.component('slider', {
  template: '#mySlider',
  props: ['slider-content']
});

const vm = new Vue({
  el: 'body',
  data: {
    lang: localStorage.getItem("lang") || 'en',
    data: {
      en: {
        server: null,
        about: 'About',
        news: 'News',
        judges: 'Judges',
        contact: 'Contact',
        send: 'Send',
        firstname: 'Firstname',
        lastname: 'Lastname',
        company: 'Company',
        email: 'E-mail',
        description: 'Description',
        aboutLorem: 'asfasfsafasfasf',
        organizer: {
          levan: 'Levan Lephsveridze',
          akaki: 'Akaki Akhalaia'
        }
      },
      ge: {
        server: null,
        about: 'ჩვენ შესახებ',
        news: 'სიახლეები',
        judges: 'ჟიური',
        send: 'გაგზავნა',
        firstname: 'სახელი',
        lastname: 'გვარი',
        company: 'კომპანია',
        email: 'ელ-ფოსტა',
        description: 'აღწერა',
        contact: 'კონტაქტი',
        aboutLorem: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია. განსაკუთრებული პოპულარობა მას 1960-იან წლებში გამოსულმა Letraset-ის ცნობილმა ტრაფარეტებმა მოუტანა, უფრო მოგვიანებით კი — Aldus PageMaker-ის ტიპის საგამომცემლო პროგრამებმა, რომლებშიც Lorem Ipsum-ის სხვადასხვა ვერსიები იყო ჩაშენებული.',
        organizer: {
          levan: 'ლევან ლეფსვერიძე',
          akaki: 'აკაკი ახალაია'
        }
      }
    }
  },
  ready(){
    this.getData();
  },
  computed: {
    dataLang: function(){
      return this.data[this.lang];
    }
  },
  methods: {
    changeLang(){
      this.lang == 'en' ? this.lang = 'ge' : this.lang = 'en';
      let lang = this.lang;
      localStorage.setItem("lang", lang);

    },
    getData(){
      this.$http({url: base_url+'/api/get/get_data', method: 'GET'}).then((response) => {
        console.log(response);
        this.data.en.server = response.data.en;
        this.data.ge.server = response.data.ge;
      }, (response) => {
        console.error('server side error');
      });
    }
  }
});
