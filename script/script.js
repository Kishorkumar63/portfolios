const Home = document.querySelector("body")
console.log(Home);
const About = document.querySelector("#About")
const Skills = document.querySelector("#Skills")
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    Home.classList.toggle("active");
})


//  Display Service Content
const Services = document.querySelectorAll(".see-more");
const Service_display = document.querySelector(".Service-display")
const UI_UX = document.querySelector(".Service-display div");
const Frontend = document.querySelector(".Frontend ")
const Backend = document.querySelector(".Backend ")
Services.forEach((service, i) => {
    service.addEventListener("click", () => {
        if (i === 0) Service_display.classList.add("active")
        if (i === 1) {
            Service_display.classList.add("active")
            Frontend.classList.add("active")
            UI_UX.classList.add("active")
        }
        if (i === 2) {
            Service_display.classList.add("active")
            Backend.classList.add("active")
            UI_UX.classList.add("active")
            Frontend.classList.add("remove")

        }

    })
})
Service_display.addEventListener("click", () => {
    Service_display.classList.remove("active")
})

//display Certificate

const Certificate_display = document.querySelector(".Certificate-header")
const data_display = document.querySelectorAll(".data")
const Education = document.querySelector(".Education")
const toggle_Certificates = document.querySelectorAll(".toggle")

Certificate_display.addEventListener("click", () => {
    Certificate_display.classList.add("active")
    Education.classList.remove("active")
    data_display.forEach((data) => {
        data.classList.add("active")
        toggle_Certificates.forEach((Certificate_display) => {
            Certificate_display.classList.add("active")
        })
    })
})
Education.addEventListener("click", () => {
    Certificate_display.classList.remove("active")
    Education.classList.add("active")
    data_display.forEach((data) => {
        data.classList.remove("active")
        toggle_Certificates.forEach((Certificate_display) => {
            Certificate_display.classList.remove("active")
        })
    })
})







