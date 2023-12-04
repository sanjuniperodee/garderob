
'use client'

import Map from "../../../Map";
import Select from "react-select";

const PostBoxForm = () => {
  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Название</label>
          <input type="text" name="name" placeholder="Название" />
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Описание</label>
          <input type="text"></input>
        </div>


        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input type="text" name="name" placeholder="" />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Offered Salary</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>$1500</option>
            <option>$2000</option>
            <option>$2500</option>
            <option>$3500</option>
            <option>$4500</option>
            <option>$5000</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Career Level</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Industry</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Qualification</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Application Deadline Date</label>
          <input type="text" name="name" placeholder="06.04.2020" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select">
            <option>Australia</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select className="chosen-single form-select">
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Next</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
