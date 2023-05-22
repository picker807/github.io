// Function to fetch slide data from JSON file
async function fetchSlideData() {
    try {
      const response = await fetch('slides.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching slide data:', error);
      return [];
    }
  }
  
  // Function to generate dynamic HTML for slideshow and slide list
  async function generateSlideshow() {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slideList = document.querySelector('.slide-list');
  
    // Fetch slide data from JSON file
    const slideData = await fetchSlideData();
  
    // Generate HTML for slideshow
    let slidesHTML = '';
    let slideListHTML = '';
  
    slideData.forEach((slide, index) => {
      slidesHTML += `
        <a href="${slide.link}" target="_blank" class="slide ${index === 0 ? 'active' : ''}">
          <img src="${slide.image}" alt="Slide Image">
          <div class="slide-content">
            <h2>${slide.text}</h2>
            <p>${slide.description}</p>
            <a href="${slide.link}" target="_blank" class="slide-link">Learn More</a>
          </div>
        </a>
      `;
  
      slideListHTML += `
        <li class="slide-item">
          <a href="${slide.link}" target="_blank">${slide.text}</a>
        </li>
      `;
    });
  
    // Update HTML in slideshow container and slide list
    slidesWrapper.innerHTML = slidesHTML;
    slideList.innerHTML = slideListHTML;
  }
  
  // Function to initialize the slideshow
  function initSlideshow() {
    // Generate the slideshow
    generateSlideshow();
  }
  
  // Call the initialization function
  initSlideshow();
    
