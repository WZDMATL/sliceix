function clickDiscord() {
  let username = document.querySelector("span.h1-email");
  username.innerHTML = "What is your Discord username?";

  let bDiscord = document.querySelector("p");
  bDiscord.innerHTML = `<br />
                <div class="text-center">
                <form class="needs-validation">
                    <div class="mb-3">
                        <label for="InputUsername1" class="form-label">Username</label>
                        <input class="text-center" type="text" id="form-control" id="InputUsername1" aria-describedby="usernamelHelp" required>
                        <div id="usernameHelp" class="form-text">We'll never share your information with anyone else.</div>
                    </div>
                    <div class="mb-3 form-check">
                        <input class="text-center" type="checkbox" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">Accept <a class="pp" alt="Privacy Policy" type="button" data-bs-toggle="modal" data-bs-target="#ppModal">Privacy Policy and Terms of Use</a></label>
                    </div>
                    <div>
                    <button type="submit" class="btn">Enter Discord</button>
                    </div>
                </form>
                </div>
                <br />`;
}

let buttonEmail = document.querySelector(".email-button");
buttonEmail.addEventListener("click", clickDiscord);

function relocate_id() {
  location.href = "#h1-text";
}
