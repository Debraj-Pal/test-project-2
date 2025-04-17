document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector("button");
    
    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("floatingInput").value.trim();
        const password = document.getElementById("floatingPassword").value.trim();

        // Basic validation
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Dummy credentials (replace with backend validation later)
        const dummyEmail = "user@example.com";
        const dummyPassword = "123456";

        if (email === dummyEmail && password === dummyPassword) {
            alert("Login successful! 🎉");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});


function togglePassword(id, toggleIcon) {
    const passwordInput = document.getElementById(id);
    const icon = toggleIcon.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
}





function initializeStarryBackground() {
    const canvas = document.getElementById("starsCanvas");
    if (!canvas) return; 

    const ctx = canvas.getContext("2d");
    let stars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars(100);
    }

    function createStars(count) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                brightness: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let star of stars) {
            star.brightness += star.speed;
            if (star.brightness > 1 || star.brightness < 0.2) {
                star.speed *= -1;
            }
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            ctx.fill();
        }
        requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    drawStars();
    window.addEventListener("resize", resizeCanvas);
}

document.addEventListener("DOMContentLoaded", initializeStarryBackground);
