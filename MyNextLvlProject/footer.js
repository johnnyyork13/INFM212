const footerTemplate = document.createElement('template');

let footerPath = ".";

let footerLoc = window.location.pathname.split("/");
let footerFileLength = footerLoc.length;

if (footerLoc[footerFileLength-2] !== "MyNextLvlProject") {
    footerPath = "..";
}


footerTemplate.innerHTML = `

<footer>
        <ul>
            <li class="footerLink"><a href="${footerPath}/faq.html">FAQ</a></li>
            <li class="footerLink"><a href="${footerPath}/contact.html">Contact Us</a></li>
        </ul>
</footer>

`
document.body.appendChild(footerTemplate.content);