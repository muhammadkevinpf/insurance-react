import React from "react";
import Insurance from "../../layout/Insurance";

import "./style.scss";
import NavDesktop from "../../components/NavDesktop";
function Home() {
  const scrollToBottom = () => {
    let insuranceElem = document.querySelector(".insurance-wrapper");
    insuranceElem.scrollIntoView();
  };

  return (
    <>
      <NavDesktop />
      <div className="wrapper home">
        <div className="content-header">
          <h3>Asuransi terbaik untuk perlindungan keluarga Anda</h3>
          <p>
            Kami memastikan perlindungan kesehatan dan pendidikan keluarga Anda
          </p>

          <button onClick={scrollToBottom}>Pilih Proteksi</button>
        </div>
      </div>
      <Insurance />
    </>
  );
}

export default Home;
