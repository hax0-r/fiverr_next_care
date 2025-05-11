const navbar = document.getElementById("navbar")

navbar.innerHTML = `
    <nav class="fixed top-0 left-0 z-40 w-full bg-[#1F4B44]">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-28 h-24">
            <a data-aos="fade-right" href="./index.html" class="flex justify-center lg:justify-start">
                <img src="./Docs/Assets/images/logo.png" class="md:h-24 h-16" alt="logo">
            </a>
            <div class="md:flex items-center gap-10 hidden">
                <ul data-aos="fade-left" class="md:flex hidden text-[#fff] items-center gap-10">
                    <li><a href="./index.html"
                            class="hover:text-[#d4e2dd] tracking-wide text-lg transition-all duration-500">Über uns </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#d4e2dd] tracking-wide text-lg transition-all duration-500">Service
                        </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#d4e2dd] tracking-wide text-lg transition-all duration-500">Kontakt
                        </a>
                    </li>
                    <li><a href="mailto:hello@nestcare.ch"
                            class="hover:text-[#d4e2dd] flex items-center gap-2 tracking-wide text-lg transition-all duration-500"><i
                                class="fa-solid fa-envelope text-[#fff]"></i>hello@nestcare.ch
                        </a>
                    </li>
                    <li><a href="tel:+41783373343"
                            class="hover:text-[#d4e2dd] flex items-center gap-2 tracking-wide text-lg transition-all duration-500"><i
                                class="fa-brands text-xl fa-whatsapp text-[#fff]"></i> +41783373343
                        </a>
                    </li>
                </ul>
            </div>
            <i id="mobileMenuBtn" class="fa-solid text-[#d4e2de] fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-[#d4e2de] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-[#32444B] text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 flex-col gap-7 text-[#32444B]">
                <li><a href="./index.html"
                        class="hover:text-[#d4e2dd] text-nowrap tracking-wide transition-all duration-500">Über uns</a>
                </li>
                <li><a href="#"
                        class="hover:text-[#d4e2dd] text-nowrap tracking-wide transition-all duration-500">Service</a>
                </li>
                <li><a href="#"
                        class="hover:text-[#d4e2dd] text-nowrap tracking-wide transition-all duration-500">Kontakt</a>
                </li>
            </ul>
        </div>
    </div>
<div class="md:h-28 h-24"></div>

`

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});