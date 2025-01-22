let url = 'https://fullshow.uz/main/videos/gadeniw.mp4';

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
    window.addEventListener('devtoolschange', event => {
        if (event.detail.isOpen) {
            window.location = url;
        }
    });
}
