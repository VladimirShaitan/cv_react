export default {
    open(src, popId) {
        console.log(src)
        document.querySelector('#popups').classList.add('open');
        document.querySelector(`#popups #${popId}`).classList.add('open');
        document.querySelector('#popups .overlay').classList.add('open');
        document.querySelector(`#popups #${popId} img`).src = src;
        document.querySelector(`#popups a`).href = src;
        pageOffset =  window.pageYOffset;

        window.addEventListener('scroll', this.scrollListener);

    },

    close(popId) {
        console.log(popId)
        setTimeout(function () {
            document.querySelector('#popups').classList.remove('open');
        }, 300);
        document.querySelector('#popups .overlay').classList.remove('open');
        document.querySelector(`#popups #${popId}`).classList.remove('open');
        window.removeEventListener('scroll', this.scrollListener);
    },

    scrollListener(){
        window.scrollTo(0, pageOffset);
    }

};

let pageOffset;