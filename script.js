document.addEventListener("DOMContentLoaded", function (event) {

    let images = [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg",
    ]
    let cartThumbnail = '<img src="./images/image-product-1-thumbnail.jpg" height="60px">'
    
    let imageContainer = document.querySelector("#imageContainer")
    let thumbnail1 = document.querySelector("#thumbnail1")
    let thumbnail2 = document.querySelector("#thumbnail2")
    let thumbnail3 = document.querySelector("#thumbnail3")
    let thumbnail4 = document.querySelector("#thumbnail4")
    let nextButton = document.querySelector("#nextButton")
    let previousButton = document.querySelector("#previousButton")
    let minusButton = document.querySelector(".minus")
    let plusButton = document.querySelector(".plus")
    let inputField = document.querySelector("#input-field")
    let numOfItemsAdded = document.querySelector("#numOfItemsAdded")
    let addButton = document.querySelector("#add")
    let cartContainer = document.querySelector("#cartContainer")
    let cartContentDisplayBox = document.querySelector("#cartContentDisplayBox")
    cartContentDisplayBox.classList.add("cartContentDisplayBox")
    let productName = document.querySelector("#productName")
    let price = document.querySelector(".price").textContent
    let thumbnailEnlargeCont = document.querySelector("#thumbnailEnlargeCont")
    let thumbnailEnlargement = document.querySelector("#thumbnailEnlargement")
    let closeIconCont = document.querySelector("#closeIconCont")
    let enlargedImageCont = document.querySelector("#enlargedImageCont")
    let navbarToggle = document.querySelector("#navbarToggle")
    let navbarContainerMain = document.querySelector("#navbarContainerMain")
    let navbarContainer = document.querySelector("#navbarContainer")
    let collapse = document.querySelector("#nav-list").innerHTML
    let collapse2 = document.querySelector("#nav-item")
    

    //TARGET THE NAVBAR EXPANSION
    navbarContainerMain.style.display = "none"
    
    navbarToggle.addEventListener("click", function () {
        navbarContainerMain.style = 'width: 100%; height: 100vh; position: absolute; left: 0;  top: 0;'
        navbarContainerMain.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
        navbarContainer.innerHTML = '<img src="./images/icon-close.svg" id="close">' + collapse
        navbarContainer.style = 'position: absolute; left: 0;  top: 0; background-color: white; height: 100vh; width: 60%;'
    })
    
    

    // TARGET THE CLOSE ICON
    navbarContainer.addEventListener("click", function (event) {
        if (event.target.id === "close") {
            navbarContainer.style.display = (navbarContainer.style.display === 'none') ? 'block' : 'none'; 
            navbarContainerMain.style.display = (navbarContainerMain.style.display === 'none') ? 'block' : 'none'; 
        }
    })

    //CLOSE THE NAVBAR EXPANSION WHEN LOST FOCUS
    navbarContainerMain.addEventListener("click", function (event) {
        if (event.target !== navbarContainer) {
            if (event.target !== collapse2) {
                 navbarContainer.style.display = 'none'
                 navbarContainerMain.style.display = 'none'
            }
        }
    })
    
    //Target background
    enlargedImageCont.style.display = 'none'
    imageContainer.addEventListener("click", function () {
        thumbnailEnlargeCont.style = "position: absolute; top: 0px; width: 100%;  padding: 30%; height: 100%;"
        thumbnailEnlargeCont.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
        enlargedImageCont.style = 'display: block;'
        enlargedImageCont.innerHTML = '<div class="icon-cont d-block d-sm-block"><img src="./images/icon-previous.svg" class="icon" id="dynapreviousButton"><img src="./images/icon-next.svg" class="icon2 " id="dynanextButton"></div>'
        enlargedImageCont.style.backgroundImage = `url('${images[0]}')`
        thumbnailEnlargeCont.innerHTML = ' <div id="closeIconCont"><img src="./images/icon-close.svg" id="closeIcon"></div>' + '<div id="thumbnailCont"><img class= "dynathumbnail" src="./images/image-product-1-thumbnail.jpg" id="dynathumbnail1" height="70px"> <img class="dynathumbnail" src="./images/image-product-2-thumbnail.jpg" id="dynathumbnail2" height="70px"> <img class="dynathumbnail" src="./images/image-product-3-thumbnail.jpg" id="dynathumbnail3" height="70px"><img class="dynathumbnail" src="./images/image-product-4-thumbnail.jpg" id="dynathumbnail4" height="70px"></div>'
    })

    thumbnailEnlargeCont.classList.add('dynathumbnail')
    document.body.appendChild(thumbnailEnlargeCont)

   // REMOVE THE THUMBNAILENLARGECONT WHEN LOST FOCUS
    // thumbnailEnlargeCont.addEventListener("click", function (event) {
    //     if (event.target.id != 'enlargedImageCont' && event.target.classList != 'dynathumbnail') {
    //             thumbnailEnlargeCont.style.display = 'none';
    //             enlargedImageCont.style.display = 'none';
    //             enlargedImageCont.style.display = 'none';
    //     }
    // })

    
    //REMOVE THE THUMBNAILENLARGEMENT
    thumbnailEnlargeCont.addEventListener("click", function (event) {
        if (event.target.id === "closeIcon" || !thumbnailEnlargeCont.contains(event.target)) {
            setTimeout(() => {
               thumbnailEnlargeCont.style.display = 'none';
               enlargedImageCont.style.display = 'none';
               thumbnailEnlargement.style.display = 'none';
            }, 0);
        }
    })

    //TARGET THE DYNAMICALLY ADDED THUMBNAILS
    let currentIndexNew = 0
    function showSlide2(index) {
        enlargedImageCont.style.backgroundImage = `url('${images[index]}')`
    }

    function slide1() {
        currentIndexNew = 0
        showSlide2(currentIndexNew)
    }
    function slide2() {
        currentIndexNew = 1
        showSlide2(currentIndexNew)
    }
    function slide3() {
        currentIndexNew = 2
        showSlide2(currentIndexNew)
    }
    function slide4() {
        currentIndexNew = 3
        showSlide2(currentIndexNew)
    }

    thumbnailEnlargeCont.addEventListener("click", function (event) {
        if (event.target.id === "dynathumbnail1") {
                slide1()
            } else if (event.target.id === "dynathumbnail2") {
               slide2()
            } else if (event.target.id === "dynathumbnail3") {
                slide3()
            } else if (event.target.id === "dynathumbnail4") {
                slide4()
            }
    })

    //TARGET THUMBNAIL1
    thumbnail1.addEventListener("click", function () {
        imageContainer.style.backgroundImage = `url('${images[0]}')`
    })


    //TARGET THUMBNAIL2
    thumbnail2.addEventListener("click", function () {
        imageContainer.style.backgroundImage = `url('${images[1]}')`
    })
    
    //TARGET THUMBNAIL3
    thumbnail3.addEventListener("click", function () {
        imageContainer.style.backgroundImage = `url('${images[2]}')`
    })

    //TARGET THUMBNAIL4
    thumbnail4.addEventListener("click", function () {
        imageContainer.style.backgroundImage = `url('${images[3]}')`
    })


    //TARGET NEXT BUTTON
    let currentIndex = 0
    function showSlide(index) {
        imageContainer.style.backgroundImage = `url('${images[index]}')`
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex)
    }

    nextButton.addEventListener("click", function () {
        nextSlide()
    })


    //TARGET PREVIOUS BUTTON
    function showSlide(index) {
        imageContainer.style.backgroundImage = `url('${images[index]}')`
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex)
    }
    previousButton.addEventListener("click", function () {
        previousSlide()
    })

    //TARGET DYNAMICALLY ADDED NEXT AND PREVIOUS BUTTONS

    function dynashowSlide(index) {
        enlargedImageCont.style.backgroundImage = `url('${images[index]}')`
    }

    //NEXT BUTTON
    function dynanextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        dynashowSlide(currentIndex)
    }

    //PREVIOUS BUTTON
    function dynapreviousSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        dynashowSlide(currentIndex)
    }

    enlargedImageCont.addEventListener("click", function (event) {
        if (event.target.id = 'dynanextbutton') {
            dynanextSlide()
        } else if (event.target.id = 'dynapreviousbutton') {
            dynapreviousSlide()
        }
    })

    //TARGET TH INPUT FIELD
    inputField.value = "1"

    //TARGET THE PLUS BUTTON
    plusButton.addEventListener("click", function () {
        let currentValue = parseInt(inputField.value)
        inputField.value = currentValue + 1
    })

    //TARGET THE MINUS BUTTON
    minusButton.addEventListener("click", function () {
        let currentValue = parseInt(inputField.value)
        if (inputField.value > 1) {
            inputField.value = currentValue - 1
        }
    })

    //TARGET THE ADD TO CART BUTTON
    addButton.addEventListener("click", function () {
        numOfItemsAdded.innerHTML = inputField.value
    })

    cartContainer.addEventListener("click", function () {
            if (numOfItemsAdded.textContent > 0) {
                let newprice = parseInt(price)
                let totalPrice = newprice * inputField.value
                cartContentDisplayBox.innerHTML = '<h4>Cart</h3>' + '<br>' + cartThumbnail  + ' ' + productName.textContent + '<br>' + '$' + price + ' x ' + inputField.value + ' ' + '$' + totalPrice + '<img src="./images/icon-delete.svg" id="bin">' + '<button id="checkoutButton">Checkout</button>'
                cartContentDisplayBox.style = 'padding: 20px; display: block;';
            } else {
                cartContentDisplayBox.innerHTML = '<h4>Cart</h3>' + '<br>' + '<p id="emptyCart">Your cart is empty.</p>'
                cartContentDisplayBox.style = 'padding: 15px; display: block;';
            }
    })

    cartContainer.addEventListener("blur", function () {
        cartContentDisplayBox.innerHTML = ''
    })

    //TARGET DELETE ICON
    cartContentDisplayBox.addEventListener("mousedown", function (event) {
        if (event.target.id === "bin") {
            cartContentDisplayBox.innerHTML = '<h4>Cart</h3>' + '<br>' + '<p id="emptyCart">Your cart is empty.</p>'
        }
    })

    //REMOVE THE CART CONTAINER WHEN LOSES FOCUS
    document.addEventListener("click", function (event) {
        if (event.target !== cartContainer && !cartContainer.contains(event.target)) {
            cartContentDisplayBox.style.display = 'none'  
        }
    })
})