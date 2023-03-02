const app = Vue.createApp({
    data() {
        return {
            projectArr: [
                {
                    name: 'edria',
                    image: 'https://i.imgur.com/8YChxHN.png'
                },
                {
                    name: 'portefolio',
                    image: 'https://i.imgur.com/FuSIor6.png'
                },
                {
                    name: 'odyssée',
                    image: 'https://i.imgur.com/uuc1uBN.png'
                },
                {
                    name: 'facade',
                    image: 'https://i.imgur.com/ZkPqlrB.png'
                },
                {
                    name: 'mesprit',
                    image: 'https://i.imgur.com/Y69sctV.png'
                },
                {
                    name: 'portrait',
                    image: 'https://i.imgur.com/9cVL4pu.png'
                },
                {
                    name: 'brouhaha',
                    image: 'https://i.imgur.com/astKfTk.png'
                },
                {
                    name: 'jeux Vr',
                    image: 'https://i.imgur.com/kq7GqPg.png'
                },
                {
                    name: 'jeux capteur',
                    image: 'https://i.imgur.com/YGUzltK.png'
                },
                /*{
                    name: 'Boite Interractive',
                    image: 'https://i.imgur.com/uuc1uBN.png'
                },*/
                {
                    name: 'make Noise',
                    image: 'https://i.imgur.com/iJZ1jVr.jpg'
                },
                {
                    name: 'pixar',
                    image: 'https://i.imgur.com/bOyfSNh.png'
                },
                {
                    name: 'personnage',
                    image: 'https://i.imgur.com/VBTzipu.png'
                },
                {
                    name: 'phobique',
                    image: 'https://i.imgur.com/Q2M6pZM.png'
                },
                {
                    name: 'jaunâtre',
                    image: 'https://i.imgur.com/Nu5njWg.jpg'
                },
                {
                    name: 'cristal',
                    image: 'https://i.imgur.com/jj3W8JC.png'
                },
                {
                    name: 'mai',
                    image: 'https://i.imgur.com/T7re8Fz.png'
                },
            ]
        }
    },
    computed: {
        totalPrice() {
            let sumTotal = 0;

            this.sushisArr.forEach(function (element) {
                let prisSuchi = element.price * element.nbr;
                sumTotal = sumTotal + prisSuchi;
            });

            return sumTotal;
        }
    },
});

app.mount('#app');