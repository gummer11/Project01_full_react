import React from "react";
import "./FooterPage.css";

const FooterPage = () => {
  return (
    <div>
      <h1 className="h1h1f">Footer</h1>

      <section className="s1f">
        <footer className="footerf">
          <footer className="footer__major-menuf">
            <div className="footer__major-menu__leftf">
              <ul>
                <h4 className="h4f">Gallery</h4>
                <li>
                  <a href="">Community</a>
                </li>
                <li>
                  <a href="">Trending</a>
                </li>
                <li>
                  <a href="">Picks</a>
                </li>
              </ul>
              <ul>
                <h4 className="h4f">Marketplace</h4>
                <li>
                  <a href="">Trending</a>
                </li>
                <li>
                  <a href="">Best selling</a>
                </li>
                <li>
                  <a href="">Latest</a>
                </li>
              </ul>
              <ul>
                <h4 className="h4f">Magazine</h4>
                <li>
                  <a href="">Art Skills</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Inspiration</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
            </div>
            <div className="main-footer__major-menu__rightf">
              <h4 className="h4f">Newsletter</h4>
              <p>
                Subscribe to our newsletter to get your weekly dose of news,
                updates, tips and special offers
              </p>
              <form action="">
                <div className="wrapperf">
                  <i className="fa-solid fa-envelope"></i>

                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                  />
                </div>
                <button className="btnf btn-blockf" disabled>
                  Subscribe
                </button>
              </form>
            </div>
          </footer>
          <hr className="footer-dividerf" />
          <footer className="footer__minor-menuf">
            <div>
              <ul>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">Dribble</a>
                </li>
                <li>
                  <a href="">Behance</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
              </ul>
            </div>
          </footer>
        </footer>
      </section>
    </div>
  );
};

export default FooterPage;
