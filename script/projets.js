const app = Vue.createApp({
    data() {
        return {
            projectArr: [
                {
                    name: 'mesprit',
                    image: 'https://i.imgur.com/Y69sctV.png',
                    link: 'mesprit'
                },
                {
                    name: 'odyssée',
                    image: 'https://i.imgur.com/uuc1uBN.png',
                    link: 'odyssée'
                },
                {
                    name: 'facade',
                    image: 'https://i.imgur.com/ZkPqlrB.png',
                    link: 'facade'
                },
                {
                    name: 'edria',
                    image: 'https://i.imgur.com/8YChxHN.png',
                    link: 'edria'
                },
                // {
                //     name: 'portefolio',
                //     image: 'https://i.imgur.com/FuSIor6.png'
                // },



                {
                    name: 'portrait',
                    image: 'https://i.imgur.com/9cVL4pu.png',
                    link: 'portrait'
                },
                {
                    name: 'brouhaha',
                    image: 'https://i.imgur.com/astKfTk.png',
                    link: 'brouhaha'
                },
                {
                    name: 'jeux Vr',
                    image: 'https://i.imgur.com/kq7GqPg.png',
                    link: 'jeux_vr'
                },
                {
                    name: 'jeux capteur',
                    image: 'https://i.imgur.com/YGUzltK.png',
                    link: 'jeux_capteur'
                },
                /*{
                    name: 'Boite Interractive',
                    image: 'https://i.imgur.com/uuc1uBN.png'
                },*/
                {
                    name: 'make Noise',
                    image: 'https://i.imgur.com/iJZ1jVr.jpg',
                    link: 'make_noise'
                },
                {
                    name: 'pixar',
                    image: 'https://i.imgur.com/bOyfSNh.png',
                    link: 'pixar'
                },
                {
                    name: 'personnage',
                    image: 'https://i.imgur.com/VBTzipu.png',
                    link: 'personnage'
                },
                {
                    name: 'phobique',
                    image: 'https://i.imgur.com/Q2M6pZM.png',
                    link: 'phobique'
                },
                {
                    name: 'jaunâtre',
                    image: 'https://i.imgur.com/Nu5njWg.jpg',
                    link: 'jaunatre'
                },
                // {
                //     name: 'cristal',
                //     image: 'https://i.imgur.com/jj3W8JC.png'
                // },
                // {
                //     name: 'mai',
                //     image: 'https://i.imgur.com/T7re8Fz.png'
                // },
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