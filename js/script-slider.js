    const carousel = document.querySelector(".carousel-images");
    firstImg = carousel.querySelector("img");
    arrowIcons = document.querySelectorAll(".carousel-container i");

    let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // get max scrollable width
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; // like in forEach
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"; // like in forEach
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            // if clicked icon is left, reduce width value from the carousel scroll left else add to it
            let firstImgWidth = firstImg.clientWidth + 14;
            if(icon.id == "left"){
                carousel.scrollLeft -= firstImgWidth;
            } else {
                carousel.scrollLeft += firstImgWidth;
            }
            setTimeout(() => showHideIcons(), 60); // call function after 60ms

        })
    });

    const autoSlide = () => {
        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;

        if(carousel.scrollLeft > prevScrollLeft){ // user is scrolling to the right
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        // user is scrolling to the left
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
        autoSlide();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);


