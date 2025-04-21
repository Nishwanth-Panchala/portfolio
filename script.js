// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Image hover effect
document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.querySelector("header img");
    if (profileImg) {
        profileImg.addEventListener("mouseover", () => {
            profileImg.style.transform = "scale(1.1)";
            profileImg.style.transition = "0.3s ease";
        });
        profileImg.addEventListener("mouseout", () => {
            profileImg.style.transform = "scale(1)";
        });
    }

    // Add dark mode button
    const btn = document.createElement("button");
    btn.innerText = "Toggle Dark Mode";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.background = "#333";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.onclick = toggleDarkMode;
    document.body.appendChild(btn);
});
