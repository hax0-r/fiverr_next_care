const footer = document.getElementById('footer')
footer.innerHTML = `
        <footer class="bg-[#1f4b44] md:pt-20 pt-10 md:pb-10 pb-5 w-full">
            <div class="max-w-7xl w-full mx-auto flex items-start justify-between gap-10 md:flex-row flex-col p-5">

                <div class="">
                    <a data-aos="zoom-in" href="./index.html" class="flex justify-center lg:justify-start">
                        <img src="./Docs/Assets/images/logo-white.png" class="md:h-28 h-24" alt="logo">
                    </a>
                    <p class="text-[#d4e2de] mt-5" data-aos="fade">NestCare - Ihr Zuhause in guten Händen <br>
                        by Jenny Scope <br>
                        Wisentalstrasse 28, 8180 Bülach, Schweiz <br>
                        Inhaber: Simon Jenny <br>
                        ©2025 NestCare. Alle Rechte vorbehalten.</p>
                </div>
                <div class="md:w-auto w-full">
                    <ul 
                        class="flex justify-center md:justify-start text-[#d4e2de] items-center gap-7">
                        <li data-aos="fade-up"><a href="#Überuns"
                                class="hover:text-[#d4e2dd] tracking-wide text-lg transition-all duration-500">Über
                                uns </a>
                        </li>
                        <li data-aos="fade-up"><a href="#UnsereDienstleistungen"
                                class="hover:text-[#d4e2dd] tracking-wide text-lg transition-all duration-500">Service
                            </a>
                        </li>
                        <li data-aos="fade-up"><a href="#Kontaktieren"
                                class="hover:text-[#d4e2dd] tracking-wide text-lg transition-all duration-500">Kontakt
                            </a>
                        </li>
                    </ul>
                    <div class="flex items-center justify-center md:justify-start gap-4 md:mt-10 mt-7">
                        <a data-aos="fade-up" data-aos-delay="100" href=""><i
                                class="fa-brands fa-instagram text-[#d4e2de] text-2xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands fa-skype text-[#d4e2de] text-2xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="300" href=""><i
                                class="fa-brands fa-google text-[#d4e2de] text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="400" href=""><i
                                class="fa-brands fa-x-twitter text-[#d4e2de] text-2xl"></i></a>
                    </div>
                </div>
            </div>
        </footer>
`