window.addEventListener('load', function(event) {
    const liveURL = "https://fj-lite-node.herokuapp.com/widget";
    const localURL = "http://localhost:4000/widget";
    const spire = document.querySelector("#spireWidget");
    const accessToken = spire.getAttribute("widget");


    let rating = 0;


    const body = document.querySelector("body");
    const button = document.createElement("button");

      const formData = new FormData();
        

    const buttonImage = document.createElement("img");
    const buttonText = document.createElement("span");
    buttonImage.src = "./images/icon-feedback.svg";
    buttonText.textContent = "Leave a Feedback";
    button.classList.add("feedback-button");

    button.append(buttonImage, buttonText);
    const companyName = document.createElement("h3");
    companyName.classList.add("company-name");
    const companyLogoContainer = document.createElement("div");
    companyLogoContainer.classList.add("spire-logo");
    const companyLogo = document.createElement("img");
    companyLogo.src = "./images/spire-logo.svg";
    companyLogoContainer.appendChild(companyLogo);



    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("widget");
    const back = document.createElement("div");
    back.classList.add("back");
    const backIcon = document.createElement("img");
    backIcon.src = "./images/arrow.svg";
    const backSpan = document.createElement("span");
    backSpan.textContent = "Back";
    back.append(backIcon, backSpan);
    const feedblockTitle = document.createElement("h4");
    feedblockTitle.classList.add("rating-title");
    const feedblockSubTitle = document.createElement("p");
    feedblockSubTitle.classList.add("rating-subTitle");


    const ratingBlock = document.createElement("div");
    ratingBlock.classList.add("rating-block");
    const ratingStars = document.createElement("div");
    ratingStars.classList.add("rating-stars");
    const emptyRatingStarOne = document.createElement("img");
    emptyRatingStarOne.src = "./images/star.svg";
    const emptyRatingStarTwo = document.createElement("img");
    emptyRatingStarTwo.src = "./images/star.svg";
    const emptyRatingStarThree = document.createElement("img");
    emptyRatingStarThree.src = "./images/star.svg";
    const emptyRatingStarFour = document.createElement("img");
    emptyRatingStarFour.src = "./images/star.svg";
    const emptyRatingStarFive = document.createElement("img");
    emptyRatingStarFive.src = "./images/star.svg";

    ratingStars.append(emptyRatingStarOne, emptyRatingStarTwo, emptyRatingStarThree, emptyRatingStarThree, emptyRatingStarFour, emptyRatingStarFive);

    emptyRatingStarOne.addEventListener("click", function(event) {
        rating = 1;
        emptyRatingStarOne.src = "./images/star-filled.svg";
        emptyRatingStarTwo.src = "./images/star.svg";
        emptyRatingStarThree.src = "./images/star.svg";
        emptyRatingStarFour.src = "./images/star.svg";
        emptyRatingStarFive.src = "./images/star.svg";
        ratingBlock.style.display = "none";
        form.style.display = "block";
        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "./images/star-filled.svg";
            
            ratingContainer.appendChild(star);
        }
        for (let index = 0; index < 4; index++) {
            const star = document.createElement("img");
            star.src = "./images/star.svg";
            
            ratingContainer.appendChild(star);
        }
    });

    emptyRatingStarTwo.addEventListener("click", function(event) {
        rating = 2;
        emptyRatingStarOne.src = "./images/star-filled.svg";
        emptyRatingStarTwo.src = "./images/star-filled.svg";
        emptyRatingStarThree.src = "./images/star.svg";
        emptyRatingStarFour.src = "./images/star.svg";
        emptyRatingStarFive.src = "./images/star.svg";
        ratingBlock.style.display = "none";
        form.style.display = "block";
        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "./images/star-filled.svg";
            
            ratingContainer.appendChild(star);
        }
        for (let index = 0; index < 3; index++) {
            const star = document.createElement("img");
            star.src = "./images/star.svg";
            
            ratingContainer.appendChild(star);
        }
    });

    emptyRatingStarThree.addEventListener("click", function(event) {
        rating = 3;
        emptyRatingStarOne.src = "./images/star-filled.svg";
        emptyRatingStarTwo.src = "./images/star-filled.svg";
        emptyRatingStarThree.src = "./images/star-filled.svg";
        emptyRatingStarFour.src = "./images/star.svg";
        emptyRatingStarFive.src = "./images/star.svg";
        ratingBlock.style.display = "none";
        form.style.display = "block";
        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "./images/star-filled.svg";
            
            ratingContainer.appendChild(star);
        }
        for (let index = 0; index < 2; index++) {
            const star = document.createElement("img");
            star.src = "./images/star.svg";
            
            ratingContainer.appendChild(star);
        }
    });

    emptyRatingStarFour.addEventListener("click", function(event) {
        rating = 4;
        emptyRatingStarOne.src = "./images/star-filled.svg";
        emptyRatingStarTwo.src = "./images/star-filled.svg";
        emptyRatingStarThree.src = "./images/star-filled.svg";
        emptyRatingStarFour.src = "./images/star-filled.svg";
        emptyRatingStarFive.src = "./images/star.svg";
        ratingBlock.style.display = "none";
        form.style.display = "block";
        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "./images/star-filled.svg";
            
            ratingContainer.appendChild(star);
            console.log(rating);
        }
        for (let index = 0; index < 1; index++) {
            const star = document.createElement("img");
            star.src = "./images/star.svg";
            
            ratingContainer.appendChild(star);
            console.log(rating);
        }
    });

    emptyRatingStarFive.addEventListener("click", function(event) {
        rating = 5;
        emptyRatingStarOne.src = "./images/star-filled.svg";
        emptyRatingStarTwo.src = "./images/star-filled.svg";
        emptyRatingStarThree.src = "./images/star-filled.svg";
        emptyRatingStarFour.src = "./images/star-filled.svg";
        emptyRatingStarFive.src = "./images/star-filled.svg";
        ratingBlock.style.display = "none";
        form.style.display = "block";
        for (let index = 0; index < rating; index++) {
            const star = document.createElement("img");
            star.src = "./images/star-filled.svg";
            
            ratingContainer.appendChild(star);
            console.log(rating);
        }
    });

    ratingBlock.append(back, feedblockTitle, feedblockSubTitle, ratingStars);




    // const ratingContainer = document.createElement("div");
    // ratingContainer.classList.add("form-stars");
    // let emptyStarImage = null;
    // // {[...Array(5)].map((e, index) => (
    // //     <div className="w-9 cursor-pointer star" key={index}>
    // //       <Image src={index + 1 <= rating ? starFilled : star} key={index} onClick={() => selectStar(index)} />
    // //     </div>
    // //   ))}
    // [...Array(5)].forEach(index => {
    //     emptyStarImage = document.createElement("img")
    //     emptyStarImage.src = index + 5 <= false ? "./images/star.svg" : "./images/star-filled.svg";
    // });
    // ratingContainer.appendChild(emptyStarImage);

    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("form-stars");
    const emptyRatingStar = document.createElement("img");
    emptyRatingStar.src = "./images/star.svg";
    

    
    
    
    


    const form = document.createElement("form");
    form.classList.add("form");
    
    const emailContainer = document.createElement("div");
    emailContainer.classList.add("form-input");
    const emailField = document.createElement("input");
    emailField.type = "email";
    emailField.name = "email";
    emailField.placeholder = "example@gmail.com";
    emailField.classList.add("form-input-input");
    emailField.setAttribute("id", "email");
    emailField.setAttribute("required", true);

    const emailLabel = document.createElement("label");
    const emailLabelSpan = document.createElement("span");
    emailLabelSpan.textContent = "What’s your email?";
    const emailLabelSmall = document.createElement("small");
    emailLabel.setAttribute("for", "email");
    emailLabel.classList.add("form-input-label");
    emailLabelSmall.textContent = "* Required";
    emailLabel.append(emailLabelSpan, emailLabelSmall);

    emailContainer.append(emailLabel, emailField);


    const commentContainer = document.createElement("div");
    commentContainer.classList.add("form-textarea");
    const commentLabel = document.createElement("label");
    const commentLabelSpan = document.createElement("span");
    commentLabel.setAttribute("for", "comment");
    commentLabelSpan.textContent = "What’s the issue?";
    const commentLabelSmall = document.createElement("small");
    commentLabel.setAttribute("for", "comment");
    commentLabel.classList.add("form-textarea-label");
    commentLabelSmall.textContent = "* Required";
    commentLabel.append(commentLabelSpan, commentLabelSmall);

    const commentField = document.createElement("textarea");
    commentField.placeholder = "What are you looking to see and what’s the problem it solves.";
    commentField.setAttribute("required", true);
    commentField.setAttribute("id", "comment");
    commentField.setAttribute("cols", "20");
    commentField.setAttribute("rows", "10");
    commentField.name = "comment";
    commentField.classList.add("form-textarea-textarea")

    commentContainer.append(commentLabel, commentField);




    const screenshotContainer = document.createElement("label");
    screenshotContainer.classList.add("image-input");
    const screenshotInput = document.createElement("input");
    screenshotInput.classList.add("custom-file-input");
    screenshotInput.type = "file";
    screenshotInput.multiple = true;
    screenshotInput.name = "screenshot";
    screenshotInput.placeholder = "Take a screenshot";
    screenshotInput.classList.add("custom-file-input");
    screenshotInput.setAttribute("id", "screenshot");
    screenshotInput.setAttribute("required", true);
    const screenshotIcon = document.createElement("img");
    screenshotIcon.src = "./images/iconCamera.svg";
    const screenshotSpan = document.createElement("span");
    screenshotSpan.textContent = "Take a Screenshot";
    screenshotContainer.append(screenshotInput, screenshotIcon, screenshotSpan);


    //submit-button
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("form-button");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    submitButton.classList.add("form-button-button")
    buttonContainer.appendChild(submitButton);


    const container = document.createElement("div");
    container.classList.add("container");
    const feedblocks = document.createElement("div");
    feedblocks.classList.add("feedblocks");
    
    

    button.addEventListener("click", function(event) {
        container.style.display = "flex";
    });
    

    const fetchWidget = async () => {
        try {
          const res = await fetch(`${liveURL}/${accessToken}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json"
            },
          });

          const result = await res.json();
          console.log(result);

          const blocks = result.widget.validatedFeedBlocks;
          const businessName = result.widget.businessName;

          return {
              blocks,
              businessName
          }
          

        //   if(res.data.success === true) {
        //     setBlockLoader(false);
        //   }
        } catch (error) {
            console.log(error);
        //   if(error.response.status === 404) {
        //       console.log(error);
        //   }
        }
          
    }


    fetchWidget().then((res) => {
        console.log(res);
        const blocks = res.blocks;
        const businessName = res.businessName;

        companyName.textContent = businessName;

          blocks.forEach(function(block) {
              let image = null;
              if (block.slug === "ratings") {
                  image = "<img src='./images/icon-emotion.svg' />"
              } else if(block.slug === "issue-reports") {
                image = "<img src='./images/icon-warning.svg' />"
              } else {
                image = "<img src='./images/icon-idea.svg' />"
              }
            feedblocks.innerHTML += `
                <div class="feedblock">
                    <div class="feedblock-img">
                        ${image}
                    </div>
                    <div>
                        <h4 class="feedblock-title">${block.title}</h4>
                        <p class="feedblock-subTitle">${block.subTitle}</p>
                        <span class="slug" style={display: "none"}>${block.slug}</span>
                    </div>
                </div>`;
          });
    });

      

        

          form.append(ratingContainer, emailContainer, commentContainer, screenshotContainer, buttonContainer);
          widgetContainer.append(back, feedblockTitle, feedblockSubTitle, ratingBlock, form);

          back.addEventListener("click", function(event) {
            form.style.display = "none";
            back.style.display = "none";
            ratingBlock.style.display = "none";
            feedblockTitle.textContent = "";
            feedblockSubTitle.textContent = "";
            feedblocks.style.display = "flex";
            rating = 0;
            
          });
          
          feedblocks.addEventListener("click", function(event) {
            
            console.log(event.path[2]);
            console.log(form);
            if (event.path[2].querySelector(".slug").textContent === "ratings") {
                ratingBlock.style.display = "flex";
                feedblocks.style.display = "none";
                back.style.display = "flex";
                feedblockTitle.textContent = event.path[2].querySelector(".feedblock-title").textContent;
                feedblockSubTitle.textContent = event.path[2].querySelector(".feedblock-subTitle").textContent;
                screenshotContainer.style.display = "none";
                ratingContainer.style.display = "flex";
            } else if (event.path[2].querySelector(".slug").textContent === "issue-reports") {
                feedblockTitle.textContent = event.path[2].querySelector(".feedblock-title").textContent;
                feedblockSubTitle.textContent = event.path[2].querySelector(".feedblock-subTitle").textContent
                form.style.display = "block";
                back.style.display = "flex";
                feedblocks.style.display = "none";
                ratingContainer.style.display = "none";
                screenshotContainer.style.display = "flex";
            } else {
                feedblockTitle.textContent = event.path[2].querySelector(".feedblock-title").textContent;
                feedblockSubTitle.textContent = event.path[2].querySelector(".feedblock-subTitle").textContent
                form.style.display = "block";
                back.style.display = "flex";
                feedblocks.style.display = "none";
                screenshotContainer.style.display = "none";
                ratingContainer.style.display = "none";
            }
          });

          container.append(companyName, feedblocks, widgetContainer, companyLogoContainer);

        


        screenshotInput.addEventListener("change", function(event) {
            console.log(event.target.files);
            formData.append("file", event.target.files);
            formData.append("upload_preset", "issue_reports");
            console.log(formData);
        })



        // const selectImage = (event) => {
        //     event.preventDefault();
        //     const logo = event.target.files[0];
        //     setSelectedImage(logo);
        //     console.log(selectedImage);
        //     if (!selectedImage) {
        //         return;
        //     }
        // };
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   formData.append("upload_preset", "issue_reports");
    //   const hello = fetch("https://api.cloudinary.com/v1_1/spire-tech/upload", {
    //     method: "POST",
    //     body: formData
    //   })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //       console.log(data);
    //       console.log(data.secure_url);
    //       return data;
    //     })
    //     .catch((err) => {
    //       console.log(err);
          
    //     });

    body.append(button, container);
});





