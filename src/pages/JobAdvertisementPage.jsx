import React from "react";

import ShadowBox from "../layouts/ShadowBox";

import "./Pages.css";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import RoundedBox from "../layouts/RoundedBox";

function JobAdvertisementPage() {
  const [cities, setCities] = React.useState([]);
  const [titles, setTitles] = React.useState([]);

  React.useEffect(() => {
    let cityService = new CityService();
    let titleService = new JobTitleService()
    cityService.getAll().then((data) => {
      setCities(data.data.data);
    });
    titleService.getAll().then((data) => {
      setTitles(data.data.data);
    });

  }, []);

  return (
    <div>
      <div className="row  margintop">
        <div className="col-2">
          <ShadowBox>
            <div className="p-10 d-flex flex-column jobads-right">
              <span>Cities</span>
              <div className="custom-select">
                <select className="rounded">
                  {cities.map((data) => (
                    <option value="">{data.cityName}</option>
                  ))}
                </select>
                <span className="custom-arrow" />
              </div>
              <span>Date</span>
              <label class="custom-container-radio">
                All
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
              <label class="custom-container-radio">
                Today
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
              <span>Sector</span>
              <div className="custom-select">
                <select className="rounded">
                  {titles.map((data) => (
                    <option value="">{data.title}</option>
                  ))}
                </select>
                <span className="custom-arrow" />
              </div>
            </div>
          </ShadowBox>
        </div>
        <div className="col">
          <div className="jobads-right">

            <div className="custom-select bg-white-cs">
              <span style={{ marginRight: 10 }}>Ranking</span>
              <select className="rounded miniselect">
                <option value="">Suggested</option>
                <option value="">From new to old</option>
                <option value="">From old to new</option>
              </select>
              <span className="custom-arrow" />
            </div>
          </div>
          <ShadowBox height={130}>
            <div className="p-10">
              <div className="d-flex jobads-right align-items-center justify-content-between">
                <div className="d-flex jobads-right align-items-center">
                  <span >Employer</span>
                  <span className="new">New</span>
                </div>
                <div className="d-flex jobads-right align-items-center">
                  <span >Ankara</span>
                </div>
              </div>
              <div className="jobads-right align-items-center">
                <span className="font-light">Software Developer</span>
              </div>
              <div className="jobads-right mtop-10 d-flex justify-content-between align-items-center">
                <RoundedBox title={"Full time"} />
                <span>One day before</span>
              </div>

            </div>
          </ShadowBox>
        </div>
      </div>
    </div>
  );
}

export default JobAdvertisementPage;