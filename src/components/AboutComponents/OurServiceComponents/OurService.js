import React from "react";
import our1 from "./our1.jpg";
import our2 from "./our2.jpg";
import "./OurService.css";

const OurService = () => {
  return (
    <section className="ourservice-container">
      <h2>About us</h2>
      <div className="para-container">
        <div className="para-1 para">
          <img src={our1} alt="pet" className="image" />
          <div className="content1 content">
            <h4>服務理念</h4>
            <p>
              Lang的創立就是為了讓流浪毛孩可以有個家，不用再外過著提心吊膽、有一餐沒一餐的生活
            </p>
          </div>
        </div>
        <div className="para-2 para">
          <div className="content2 content">
            <h4>社會責任</h4>
            <p>
              浪子回家也有跟各地的動物收容所合作，為所里的孩子們盡快找到一個可以給他們溫暖的家
            </p>
          </div>
          <img src={our2} alt="pet" className="image" />
        </div>
      </div>
    </section>
  );
};

export default OurService;
