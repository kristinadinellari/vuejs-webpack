export default{
  data (){
    return {
      title: 'Test Title',
      age: null
    }
  },

  methods: {
    calcAge () {
      const today = new Date();
      return this.age =today;
    }
  },

  created () {
    this.calcAge();
  }
}
