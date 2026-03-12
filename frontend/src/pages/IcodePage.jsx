import React from "react";
import "./IcodePage.css";

const IcodePage = () => {
  return (
    <div>
      <h1 className="h100">Icode</h1>

      <section className="s1">
        <main className="fadeInRight" id="main1">
          <div className="maindiv1">
            <h2>Log In</h2>
            <p id="ps1">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
            <input
              className="input1"
              type="text"
              placeholder="Enter you email address"
            />
            <div className="divpassword">
              <div className="passw1">
                <h5 id="h5s1">Forgot password?</h5>
              </div>
              <div className="passw2">
                <button className="buttonnext">
                  Next{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>{" "}
                </button>
              </div>
            </div>
            <hr
              id="hrs1"
              width="100%"
              color="lightgray"
              size="1px"
              align="right"
            />
            <div className="divh6">
              <h6 id="h6s1">Or log in with</h6>
            </div>
            <div className="social">
              <div className="social1">
                <button className="buttonnext">Facebook </button>
              </div>
              <div className="social3"></div>

              <div className="social2">
                <button className="buttonnext">Google </button>
              </div>
            </div>

            <div className="divh6">
              <p id="ps1" className="small">
                Don't have an account yet?
              </p>{" "}
              <p id="ps1" className="small underline">
                {" "}
                Sign up
              </p>
            </div>
          </div>
          <div className="maindiv2">
            <div className="xbutton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="iconx icon-tabler icon-tabler-x"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </div>
          </div>
        </main>
      </section>

      <section className="s2">
        <main id="main2">
          <div className="header">
            <h4 id="h4s2">Domains</h4>
            <h4 id="h4s2">Email & Marketing </h4>
            <h4 id="h4s2">Hosting</h4>
            <h4 id="h4s2">Blog</h4>
            <h4 id="h4s2" className="h4black">
              Sign in
            </h4>
          </div>
          <div className="img2">
            <h2 id="h2s2">Buy your domain today</h2>
            <p id="ps2">
              With 80+ million domains under management, we have more <br />{" "}
              experience than anone. We'll make sure you find the right domain.
            </p>
            <div className="input2">
              <input
                id="inputs2"
                type="field"
                placeholder="Find your perfect domain"
              />
              <button className="buttons2">Search</button>
            </div>
          </div>
          <div className="footer">
            <div className="f1">
              <h3 id="h3s2">.no</h3>
              <h6 id="h6s2">99-kr</h6>
              <h5 id="h5s2">Renewal for DKK 189</h5>
            </div>
            <div className="f1">
              <h3 id="h3s2">.com</h3>
              <h6 id="h6s2">99-kr</h6>
              <h5 id="h5s2">Renewal for DKK 169</h5>
            </div>
            <div className="f1">
              <h3 id="h3s2">.online</h3>
              <h6 id="h6s2">1-kr</h6>
              <h5 id="h5s2">Renewal for DKK 499</h5>
            </div>
            <div className="f1">
              <h3 id="h3s2">.big</h3>
              <h6 id="h6s2">22-kr</h6>
              <h5 id="h5s2">Renewal for DKK 509</h5>
            </div>
            <div className="f1">
              <h3 id="h3s2">.eu</h3>
              <h6 id="h6s2">79-kr</h6>
              <h5 id="h5s2">Renewal for DKK 149</h5>
            </div>
            <div className="f1">
              <h3 id="h3s2">.one</h3>
              <h6 id="h6s2">0-kr</h6>
              <h5 id="h5s2">Renewal for DKK 119</h5>
            </div>
          </div>
        </main>
      </section>

      <section className="s3">
        <main id="main3">
          <div className="window">
            <h3 id="h3s3">Enter your password</h3>
            <div className="profile3">
              <img
                id="imgs3"
                src="https://i.pravatar.cc/150?img=46"
                alt="user-1"
              />
              <div className="prof_det">
                <p id="p3s3" className="job">
                  Business Account
                </p>
                <p id="p3s3" className="name">
                  Sarah Bills
                </p>
              </div>
            </div>
            <p className="pass" id="p3s3">
              Password
            </p>
            <div className="input3">
              <div className="inputtt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-lock"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                </svg>
                <input
                  id="inputs3"
                  type="text"
                  className="text1"
                  placeholder="********"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                <path d="M3 3l18 18" />
              </svg>
            </div>
            <div className="buttons">
              <label className="switch">
                <input id="inputs3" type="checkbox" />
                <span className="slider round"></span>
              </label>

              <p className="stay">Stay signed in</p>
              <input
                id="inputs3"
                className="button"
                type="button"
                value="Continue"
              />
            </div>
            <p className="res_pass">Reset password</p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default IcodePage;
