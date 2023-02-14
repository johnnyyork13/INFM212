const headerTemplate = document.createElement('template');

let headerPath = ".";

let headerLoc = window.location.pathname.split("/");
let headerPathLength = headerLoc.length;

if (headerLoc[headerPathLength-2] !== "MyNextLvlProject") {
    headerPath = "..";
}


headerTemplate.innerHTML = `

<header>
        <a href="${headerPath}/index.html"><img id="logo" alt="MyNextLvl Logo" src="${headerPath}/images/logo.jpg"></a>
        <nav id="mainNav">
            <ul>
                <li class="navButtonContainer">
                    <div class="navButton">About Us <div class="navTriangle"></div></div>
                    <div class="navDrop">
                        <ul>
                            <li><a href="${headerPath}/about/about.html">About MyNextLvl</a></li>
                            <li><a href="${headerPath}/about/news.html">News and Events</a></li>
                            <li><a href="${headerPath}/about/contribute.html">How to Contribute</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navButtonContainer">
                    <div class="navButton">Health Conditions <div class="navTriangle"></div></div>
                    <div class="navDrop">
                        <ul>
                            <li><a href="${headerPath}/conditions/ashtma.html">Asthma</a></li>
                            <li><a href="${headerPath}/conditions/diabetes.html">Diabetes</a></li>
                            <li><a href="${headerPath}/conditions/seizures.html">Seizures</a></li>
                            <li><a href="${headerPath}/conditions/hyperthyroidism.html">Hyperthyroidism</a></li>
                            <li><a href="${headerPath}/conditions/hypothyroidism.html">Hypothyroidism</a></li>
                            <li><a href="${headerPath}/conditions/sicklecell.html">Sickle Cell Anemia</a></li>
                            <li><a href="${headerPath}/conditions/cysticfibrosis.html">Cystic Fibrosis</a></li>
                            <li><a href="${headerPath}/conditions/gastro.html">Gastrointestinal Disorders</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navButtonContainer">
                    <div class="navButton">Resources <div class="navTriangle"></div></div>
                    <div class="navDrop">
                        <ul>
                            <li><a href="${headerPath}/resources/local.html">Local Resources</a></li>
                            <li><a href="${headerPath}/resources/outside.html">Outside Resources</a></li>
                        </ul>
                    </div>
                </li>
                <li class="navButtonContainer">
                    <div class="navButton">Reminders <div class="navTriangle"></div></div>
                    <div class="navDrop">
                        <ul>
                            <li><a href="${headerPath}/reminders/appointment.html">Doctor Appointment</a></li>
                            <li><a href="${headerPath}/reminders/refill.html">Medication Refill</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="login">
            <img id="loginImg" alt="Login Outline" src="${headerPath}/images/login.png">
            <div id="loginBtn"><a href="${headerPath}/login.html">Log In</a></div>
        </div>
        <div id="hamburgerMenu">
            <img id="hamburgerImg" alt="Hamburger Menu" src="${headerPath}/images/hamburger.png">
        </div>
        <div id="mobileMenuContainer">
            <div class="mobileMenu">
                <h3 class="mobileMenuHeader">About Us</h6>
                    <ul>
                        <li><a href="${headerPath}/about/about.html">About MyNextLvl</a></li>
                        <li><a href="${headerPath}/about/news.html">News and Events</a></li>
                        <li><a href="${headerPath}/about/contribute.html">How to Contribute</a></li>
                    </ul>
            </div>
            <div class="mobileMenu">
                <h3 class="mobileMenuHeader">Health Conditions</h3>
                <ul>
                    <li><a href="${headerPath}/conditions/ashtma.html">Asthma</a></li>
                    <li><a href="${headerPath}/conditions/diabetes.html">Diabetes</a></li>
                    <li><a href="${headerPath}/conditions/seizures.html">Seizures</a></li>
                    <li><a href="${headerPath}/conditions/hyperthyroidism.html">Hyperthyroidism</a></li>
                    <li><a href="${headerPath}/conditions/hypothyroidism.html">Hypothyroidism</a></li>
                    <li><a href="${headerPath}/conditions/sicklecell.html">Sickle Cell Anemia</a></li>
                    <li><a href="${headerPath}/conditions/cysticfibrosis.html">Cystic Fibrosis</a></li>
                    <li><a href="${headerPath}/conditions/gastro.html">Gastrointestinal Disorders</a></li>
                </ul>
            </div>
            <div class="mobileMenu">
                <h3 class="mobileMenuHeader">Resources</h3>
                <ul>
                    <li><a href="${headerPath}/resources/local.html">Local Resources</a></li>
                    <li><a href="${headerPath}/resources/outside.html">Outside Resources</a></li>
                </ul>
            </div>
            <div class="mobileMenu">
                <h3 class="mobileMenuHeader">Reminders</h3>
                <ul>
                    <li><a href="${headerPath}/reminders/appointment.html">Doctor Appointment</a></li>
                    <li><a href="${headerPath}/reminders/refill.html">Medication Refill</a></li>
                </ul>
            </div>
            <div class="mobileMenu">
                <h3 class="mobileMenuHeader">Login</h3>
                <ul>
                    <li><a href="${headerPath}/login.html">Login to Account</a></li>
                </ul>
            </div>
        </div>
    </header>
`
document.body.appendChild(headerTemplate.content);