let searchBox = document.querySelector("#search-box");
      let images = document.querySelectorAll(
        ".container .image-container .image"
      );
      searchBox.oninput = () => {
        images.forEach((hide) => (hide.style.display = "none"));
        let value = searchBox.value;
        images.forEach((filter) => {
          let title = filter.getAttribute("data-title");
          let dataValue = filter.getAttribute("data-value");
          let fullValue = title + " " + dataValue;
          if (value == title) {
            filter.style.display = "block";
          } else if (searchBox.value == "") {
            filter.style.display = "block";
          } else if (searchBox.value == dataValue) {
            filter.style.display = "block";
          }
        });
      };









