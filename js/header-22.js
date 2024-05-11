if (document.getElementById("header")) {
    document.getElementById("header").innerHTML = `   
    <header class="header-area overlay">
        <div class="">
            <nav class="navbar header-area-22 navbar-expand-md navbar-dark">

                <a href="./index-3.html" class="navbar-brand"><img src="img/main-logo.png" alt="" class=""></a>
                <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                    <span class="menu-icon-bar"></span>
                    <span class="menu-icon-bar"></span>
                    <span class="menu-icon-bar"></span>
                </button>

                <div id="main-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nth-sss"><a href="./index-3.html"
                                class="nav-item nav-link active text-center d-flex align-items-center  justify-content-center">
                                <div class="div-bg mr-1">

                                </div>
                                Home <i class="fa-solid fa-chevron-down ml-1"></i>
                            </a></li>
                        <li class="nth-sss"><a href="./about.html"
                                class="nav-item nav-link d-flex align-items-center  justify-content-center">
                                <div class="div-bg mr-1">

                                </div>
                                About Us
                            </a></li>
                        <li class="dropdown nth-sss"><a href="./services.html"
                                class="nav-item nav-link d-flex align-items-center  justify-content-center">
                                <div class="div-bg mr-1">

                                </div> Services <i class="fa-solid fa-chevron-down ml-1"></i>
                            </a>

                        </li>
                        <li class="dropdown nth-sss">
                            <a href="#" class="nav-item nav-link d-flex align-items-center justify-content-center">
                                <div class="div-bg mr-1">

                                </div> Pages <i class="fa-solid fa-chevron-down ml-1"></i>
                            </a>

                        </li>

                        <li class="dropdown nth-sss">
                            <a href="#" class="nav-item nav-link d-flex align-items-center justify-content-center">
                                <div class="div-bg mr-1"></div>
                                Blog <i class="fa-solid fa-chevron-down ml-1"></i>
                            </a>


                        </li>
                        <li class="nth-sss"><a href="./contact.html"
                                class="nav-item nav-link d-flex align-items-center  justify-content-center">

                                <div class="div-bg mr-1">

                                </div> Contact Us
                            </a></li>
                    </ul>
                    <div class="info-right-item d-flex aligan-items-center">
                        <div class="info-icon  d-flex aligan-items-center  justify-content-center">
                            <img src="img/call.svg" width="25px" alt="Icon">
                        </div>
                        <div class="info-text pl-3">
                            <span class="sub-title">Call Anytime</span>
                            <a href="tel:12345667800">123-456-67800</a>
                        </div>
                    </div>
                </div>

            </nav>
        </div>

    </header>   `;
}
