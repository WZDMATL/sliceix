function clickDiscord() {
            let username = document.querySelector("span.h1-email");
            username.innerHTML = "What is your Discord username?";

            let bDiscord = document.querySelector("p");
            bDiscord.innerHTML = `<br />
                <div class="text-center">
                <form>
                    <div class="mb-3">
                        <label for="InputUsername1" class="form-label">Username</label>
                        <input class="text-center" type="text" id="form-control" id="InputUsername1" aria-describedby="usernamelHelp">
                        <div id="usernameHelp" class="form-text">We'll never share your information with anyone else.</div>
                    </div>
                    <div class="mb-3 form-check">
                        <input class="text-center" type="checkbox" id="form-check-input" id="Check1">
                        <label class="form-check-label" for="Check1">Check me out</label>
                    </div>
                    <button type="submit" class="btn">Enter Discord</button>
                </form>
                </div>
                <br />`;
}

let buttonEmail = document.querySelector(".email-button");
buttonEmail.addEventListener("click", clickDiscord);

function relocate_id() {
    location.href = "#h1-text";
}