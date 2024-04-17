export const handleChatHover = () => {
  const chatItems = document.querySelectorAll(".chat-item");

  chatItems.forEach((chatItem) => {
    const moreIcon = chatItem.querySelector(".more-icon");

    chatItem.addEventListener("mouseenter", () => {
      moreIcon.style.display = "block";
    });

    chatItem.addEventListener("mouseleave", () => {
      moreIcon.style.display = "none";
    });
  });
};

export const handleOptionHover = () => {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("onmouseenter", () => {
      const Icon = option.children[0];
      Icon.style.visibility = "hidden";
      console.log("done");
    });
    option.addEventListener("onmouseleave", () => {
      const Icon = option.querySelector(".icon");
      Icon.style.visibility = "visible";
    });
  });
};
