const app = Vue.createApp({
    data() {
        return {
            projectArr: [
                {
                    name: 'EDRIA',
                    image: 'https://i.imgur.com/8YChxHN.png'
                },
                {
                    name: 'Portefolio',
                    image: 'https://i.imgur.com/FuSIor6.png'
                },
                {
                    name: 'Odyssée',
                    image: 'https://i.imgur.com/uuc1uBN.png'
                },
                {
                    name: 'Facade',
                    image: 'https://i.imgur.com/ZkPqlrB.png'
                },
                {
                    name: 'Mesprit',
                    image: 'https://i.imgur.com/Y69sctV.png'
                },
                {
                    name: 'Portrait',
                    image: 'https://i.imgur.com/9cVL4pu.png'
                },
                {
                    name: 'Brouhaha',
                    image: 'https://i.imgur.com/astKfTk.png'
                },
                {
                    name: 'Jeux Vr',
                    image: 'https://i.imgur.com/kq7GqPg.png'
                },
                {
                    name: 'Jeux Capteur',
                    image: 'https://i.imgur.com/YGUzltK.png'
                },
                /*{
                    name: 'Boite Interractive',
                    image: 'https://i.imgur.com/uuc1uBN.png'
                },*/
                {
                    name: 'Make Noise',
                    image: 'https://i.imgur.com/iJZ1jVr.jpg'
                },
                {
                    name: 'Pixar',
                    image: 'https://i.imgur.com/bOyfSNh.png'
                },
                {
                    name: 'Personnage',
                    image: 'https://i.imgur.com/VBTzipu.png'
                },
                {
                    name: 'Phobique',
                    image: 'https://i.imgur.com/Q2M6pZM.png'
                },
                {
                    name: 'Jaunâtre',
                    image: 'https://i.imgur.com/Nu5njWg.jpg'
                },
                {
                    name: 'Cristal',
                    image: 'https://i.imgur.com/jj3W8JC.png'
                },
                {
                    name: 'Mai',
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