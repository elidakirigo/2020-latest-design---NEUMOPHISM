const DOCNames = [{
    title: 'a CLOCK',
    titleLink: 'neuphoric-javascript-clock/'
}, {
    title: 'LOGIN design',
    titleLink: 'login-neumorphic-design/'
}, {
    title: 'APP with Uber',
    titleLink: 'IOS-neumorphic-app'
}, {
    title: 'IOS app design theme',
    titleLink: 'neumo/'
},{
    title: 'notification bar',
    titleLink: 'neumo-notification/'
},{
    title: 'dashboard section',
    titleLink: 'neumo-dashboard/'
},{
    title: 'calculator',
    titleLink: 'neumo-calculator/'
},{
    title: 'icon - bar',
    titleLink: 'neumo-icons/'
}]


$(document).ready(function () {
    $('input').focus()
    setTimeout(() => {
        if ($('.drop-down li').length != 0) {
            $('.drop-down ul').css({
                'display': 'block'
            })
        }
    }, 1000);
});



class InsertToDom {
    constructor(title, link) {
        this.title = title;
        this.link = link;
    }

    createElements(fullLink) {
        let UL = document.querySelector('ul')
        let LI = document.createElement('li');
        let LINKTag = document.createElement('a');
        LINKTag.setAttribute('href', fullLink())
        LINKTag.setAttribute('target', '_blank')
        LINKTag.innerHTML = this.title;
        LI.appendChild(LINKTag);
        UL.appendChild(LI);
    }

    addHTML() {
        let baseURL = 'https://elidakirigo.github.io';
        this.createElements(() => `${baseURL}/${this.link}`)
    }

}

DOCNames.forEach(element => {
    let myArray = new InsertToDom(element.title, element.titleLink).addHTML()
});