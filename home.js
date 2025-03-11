// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    // Apply initial animations for hero section
    const heroElements = document.querySelectorAll(".animate-fade-in")
    heroElements.forEach((el, index) => {
      el.style.setProperty("--i", index)
    })
  
    // Handle scroll animations
    const scrollElements = document.querySelectorAll(".animate-on-scroll")
  
    const elementInView = (el, scrollOffset = 0) => {
      const elementTop = el.getBoundingClientRect().top
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    }
  
    const displayScrollElement = (element) => {
      element.classList.add("visible")
    }
  
    const hideScrollElement = (element) => {
      element.classList.remove("visible")
    }
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el)
        } else {
          hideScrollElement(el)
        }
      })
    }
  
    // Initialize on load
    handleScrollAnimation()
  
    // Add scroll event listener
    window.addEventListener("scroll", () => {
      handleScrollAnimation()
    })
  
    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
        const emailInput = this.querySelector('input[type="email"]')
        if (emailInput.value) {
          alert("Thank you for subscribing to our newsletter!")
          emailInput.value = ""
        }
      })
    }
  })
  
  