const image1 = 'https://miro.medium.com/max/3150/1*V5WDgkO-eJBtVZNoAM4rCQ.png'
const image2 = 'https://i.pinimg.com/originals/0b/f8/0a/0bf80a070e45129c5bb9cccc7aee26d8.jpg'

const app = new Vue({
    el: '#app',
    data: {
        title: 'I Love Vue <3',
        image: image1,
        state: 0,
    },
    methods: {
        heart () {
            if (this.state === 0) {
                this.image = image2;
                this.state = 1;
            } else {
                this.image = image1;
                this.state = 0;
            }
        }
    }
})



