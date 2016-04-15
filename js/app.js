var vm = new Vue({
  el: 'body',
  data: {
    lang: localStorage.getItem("lang") || 'en',
    data: {
      en: {
        about: 'About',
        news: 'News',
        judges: 'Judges',
        contact: 'Contact',
        aboutLorem: 'asfasfsafasfasf',
        organizer: {
          levan: 'Levan Lephsveridze',
          akaki: 'Akaki Akhalaia'
        }
      },
      ge: {
        about: 'ჩვენ შესახებ',
        news: 'სიახლეები',
        judges: 'ჟიური',
        contact: 'კონტაქტი',
        aboutLorem: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია. განსაკუთრებული პოპულარობა მას 1960-იან წლებში გამოსულმა Letraset-ის ცნობილმა ტრაფარეტებმა მოუტანა, უფრო მოგვიანებით კი — Aldus PageMaker-ის ტიპის საგამომცემლო პროგრამებმა, რომლებშიც Lorem Ipsum-ის სხვადასხვა ვერსიები იყო ჩაშენებული.',
        organizer: {
          levan: 'ლევან ლეფსვერიძე',
          akaki: 'აკაკი ახალაია'
        }
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
