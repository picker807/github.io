document.addEventListener("DOMContentLoaded", function () {
  const examplesContainer = document.querySelector(".example-list");

  function generateExamples(examplesData) {
    const projectExamples = examplesData.filter((exampleData) => exampleData.project);
    const nonProjectExamples = examplesData.filter((exampleData) => !exampleData.project);

    const sortedExamplesData = [...projectExamples, ...nonProjectExamples];

    sortedExamplesData.forEach((exampleData) => {
      const exampleItem = createExampleItem(exampleData);
      examplesContainer.appendChild(exampleItem);
    });
  }

  function createExampleItem(exampleData) {
    let exampleItem;

    if (exampleData.link && exampleData.link.length > 0) {
      exampleItem = document.createElement("a");
      exampleItem.href = exampleData.link;
      exampleItem.target = "_blank";
    } else {
      exampleItem = document.createElement("div");
    }

    exampleItem.classList.add("example-item");

    if (exampleData.image) {
      const image = document.createElement("img");
      image.src = exampleData.image;
      exampleItem.appendChild(image);
    } else if (exampleData.video) {
      const video = document.createElement("video");
      video.src = exampleData.video;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      exampleItem.appendChild(video);
    }

    const title = document.createElement("h2");
    title.textContent = exampleData.text;
    exampleItem.appendChild(title);

    const description = document.createElement("p");
    description.textContent = exampleData.description;
    exampleItem.appendChild(description);

    return exampleItem;
  }

  fetch("slides.json")
    .then((response) => response.json())
    .then((data) => {
      generateExamples(data);
    })
    .catch((error) => {
      console.error("Error fetching examples:", error);
    });
});
