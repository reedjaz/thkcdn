$(document).ready(function () {
    // Swiper Initialization
    var swiper = new Swiper('.testi-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        mousewheel: {
            forceToAxis: true,
        },
        pagination: {
            el: '.testi-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });

    var portoSwiper = new Swiper('.porto-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
            el: '.porto-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.porto-button-next',
            prevEl: '.porto-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Simulasi submit form
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        // Tampilkan pesan konfirmasi sederhana
        var btn = $(this).find('button[type="submit"]');
        var originalText = btn.text();

        btn.text('Mengirim...');
        btn.css('opacity', '0.7');

        setTimeout(function () {
            alert('Terima kasih! Pesan Anda telah kami terima.');
            $('#contactForm')[0].reset();
            btn.text(originalText);
            btn.css('opacity', '1');
        }, 1000);
    });

    // Header Scroll Effect for Floating Blur
    function updateHeaderScroll() {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('floating');
        } else {
            $('.header').removeClass('floating');
        }
    }
    $(window).on('scroll', updateHeaderScroll);

    // Karena header diload secara async via fetch, kita tunggu elemennya muncul
    var initHeader = setInterval(function () {
        if ($('.header').length) {
            updateHeaderScroll();
            clearInterval(initHeader);
        }
    }, 50);

    // Handle mobile menu toggle (delegated)
    $(document).on('click', '.menu-toggle', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    // Close menu when a navigation item is clicked
    $(document).on('click', '.nav a', function() {
        $('.menu-toggle').removeClass('active');
        $('.nav').removeClass('active');
    });

    // WhatsApp Redirect Script
    $('#waButton').on('click', function (e) {
        e.preventDefault();

        var nama = $('#waNama').val().trim();
        var email = $('#waEmail').val().trim();
        var pesan = $('#waPesan').val().trim();

        if (!nama || !pesan) {
            alert('Mohon isi minimal Nama dan Pesan sebelum menghubungi via WhatsApp.');
            return;
        }

        var waNumber = '6281573940063';
        var textMsg = "Halo Thinkin,\n\nSaya ingin berdiskusi lebih lanjut mengenai layanan Anda. Berikut detail pesan saya:\n\n";
        textMsg += "Nama: " + nama + "\n";
        if (email) {
            textMsg += "Email: " + email + "\n";
        }
        textMsg += "\nPesan:\n" + pesan + "\n\nTerima kasih.";

        var waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(textMsg);
        window.open(waUrl, '_blank');
    });
});
