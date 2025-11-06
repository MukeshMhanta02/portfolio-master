import { Fragment } from "react";
import { SiHackerrank, SiLinkedin } from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Mukesh Mhanta</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Junior Analyst Programmer
                  </h4>
                  <h6 className="blue-label px-2 py-1">
                    May 2022 - Till today
                  </h6>
                  <p className="m-0">Web Synergies India Pvt Ltd · Full-time</p>
                  <p>Hyderabad, Telangana, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Trainee Analyst Programmer
                  </h4>
                  <h6 className="blue-label px-2 py-1">Feb 2022 - May 2022</h6>
                  <p className="m-0">Web Synergies India Pvt Ltd · Full-time</p>
                  <p>Hyderabad, Telangana, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Internship</h4>
                  <h6 className="blue-label px-2 py-1">Aug 2020 - Dec 2021</h6>
                  <p className="m-0">Conexsta Technologies · Internship</p>
                  <p>Solapur, Maharashtra, India</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    M.Sc. Computer Science
                  </h4>
                  <h6 className="blue-label px-2 py-1">2019 - 2021</h6>
                  <p className="m-0">P.A.H. Solapur University</p>
                  <p>CGPA: 8.05</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    B.Sc. Computer Science
                  </h4>
                  <h6 className="blue-label px-2 py-1">2017-2019</h6>
                  <p className="m-0">D.B.F Dayanand Institutions</p>
                  <p>Grade: 69.72 %</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROFILE</h4>
              <h1>
                <a
                  href="https://www.linkedin.com/in/mukesh-mhanta-844b98147/"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <SiLinkedin className="zoom-on-hover" />
                </a>
                <a
                  href="https://www.hackerrank.com/mukeshmhanta4"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <SiHackerrank className="zoom-on-hover" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
