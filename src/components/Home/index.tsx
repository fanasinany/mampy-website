import React from "react";
import "./style.scss";

function Home() {
  return (
    <section id="home">
      <div className="wrapper_home">
        <div className="overlay"></div>
        <div className="home_container">
          <h1 data-aos="fade-up">Mampionona RAKOTOJAONA</h1>
          <span className="sixCaps">Just passionate of good pictures</span>
          <div className="scroll-down">
            Scroll Down
            <div className="mouse_scroll">
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
