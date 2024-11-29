// Nope. This is just the UI
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load Font Awesome
    const fontAwesomeScript = document.createElement("script");
    fontAwesomeScript.src = "https://kit.fontawesome.com/de6be6a572.js";
    fontAwesomeScript.crossOrigin = "anonymous";
    document.head.appendChild(fontAwesomeScript);
  
    // Toggle group details
    const groupToggles = document.querySelectorAll(".group_info_click");
  
    groupToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const parentGroup = toggle.closest(".group");
        const expandedGroup = parentGroup?.nextElementSibling;
        if (expandedGroup && expandedGroup.classList.contains("group_full_box")) {
          expandedGroup.classList.toggle("group__clicked");
        }
      });
    });
  
    // Notification badge toggle
    const notificationBell = document.querySelector(".notification");
    const notificationBadge = document.querySelector(".notification__badge");
  
    if (notificationBell) {
      notificationBell.addEventListener("click", () => {
        if (notificationBadge) {
          notificationBadge.style.display = "none"; // Hide the badge
        }
        alert("No new notifications!"); // Custom alert
      });
    }
  
    // Search bar interaction
    const searchInput = document.querySelector("#search");
    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        console.log(`Search query: ${event.target.value}`);
      });
    }
  
    // Chat reply and delete actions
    const replyButtons = document.querySelectorAll(".reply");
    const removeButtons = document.querySelectorAll(".remove__chat");
  
    replyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Reply functionality is not implemented yet!");
      });
    });
  
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const chat = button.closest(".single__chat");
        if (chat) {
          chat.remove(); // Remove the chat
        }
      });
    });
  
    // Create new group functionality
    const createGroupButton = document.querySelector(".create_new_group");
    if (createGroupButton) {
      createGroupButton.addEventListener("click", () => {
        alert("Create New Group functionality is not implemented yet!");
      });
    }
  });
  