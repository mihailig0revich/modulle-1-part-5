const img = [
    {
        src: './img/Bitmap1.png',
        alt: 'Логотип Samsung',
    },
    {
        src: './img/Bitmap2.png',
        alt: 'Логотип Apple',
    },
    {
        src: './img/Bitmap3.png',
        alt: 'Логотип ViewSonic',
    },
    {
        src: './img/Bitmap4.png',
        alt: 'Логотип Bosch',
    },
    {
        src: './img/Bitmap5.png',
        alt: 'Логотип Sony',
    },
    {
        src: './img/Bitmap6.png',
        alt: 'Логотип Acer',
    },
    {
        src: './img/Bitmap7.png',
        alt: 'Логотип hp',
    },
    {
        src: './img/Bitmap8.png',
        alt: 'Логотип Lenovo',
    },
    {
        src: './img/Bitmap6.png',
        alt: 'Логотип Acer',
    },
    {
        src: './img/Bitmap7.png',
        alt: 'Логотип hp',
    },
    {
        src: './img/Bitmap8.png',
        alt: 'Логотип Lenovo',
    },
]

function swiperList(img) {
    const template = document.querySelector('#swiper').content;
    const cardNode = template.querySelector('.swiper-slide');
    const swiper = document.querySelector('.swiper-wrapper');

    for(let i = 0; i < 8; i++) {
        const cardNodeClone = cardNode.cloneNode(true);
        const cardNodeCloneImg = cardNodeClone.querySelector('.brand-card__img');
        cardNodeCloneImg.src = img[i].src;
        cardNodeCloneImg.alt = img[i].alt;
        swiper.appendChild(cardNodeClone);
    }
}
swiperList(img);

function brandList(img) {
    const template = document.querySelector('#brand-card').content;
    const cardNode = template.querySelector('.brands-list__brand-card');
    const swiper = document.querySelector('.brands-list');

    for(let i = 0; i < img.length; i++) {
        const cardNodeClone = cardNode.cloneNode(true);
        const cardNodeCloneImg = cardNodeClone.querySelector('.brand-card__img');
        //brand-card
        if(i === 6 || i === 7) {
            cardNodeClone.classList.add("brand-card__media");
        }
        if(i>7) {
            cardNodeClone.classList.add("brand-card__hidden");
        }
        
        cardNodeCloneImg.src = img[i].src;
        cardNodeCloneImg.alt = img[i].alt;

        swiper.appendChild(cardNodeClone);
    }
}
brandList(img);

document.querySelector('.brands-list-more-btn__more-btn')
.addEventListener('click', function() {
    const moreBtn = document.querySelector('.brands-list-more-btn__more-btn');
    const imgBtn = moreBtn.querySelector('.more-btn__icon');
    const textBtn = moreBtn.querySelector('.more-btn__name');
    const swiper = document.querySelector('.brands-list');
    let cards = swiper.querySelectorAll('.brand-card');

    if (textBtn.textContent == 'Показать все') {
        for (let i = 6; i<cards.length; i++) {
            cards[i].classList.remove('brand-card__hidden');
            cards[i].classList.add('brand-card__visible');

        }
        imgBtn.classList.add('more-btn__icon-rotate');
        textBtn.textContent = 'Скрыть';
        return
    } 
    if (textBtn.textContent == 'Скрыть') {
        for (let i = 6; i<cards.length; i++) {
            if (i>7) {
                cards[i].classList.add('brand-card__hidden');
            }
            cards[i].classList.remove('brand-card__visible');
        }
        imgBtn.classList.remove('more-btn__icon-rotate');
        textBtn.textContent = 'Показать все';
        return
    }
});

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        500: {
            slidesPerView: 2.2,
        }
    }
});