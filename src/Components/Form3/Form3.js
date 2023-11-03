import React, {useState, useEffect} from 'react';
import './Form3.css';
import { useFormik } from 'formik';

const Form2 = () => {
  const initialValues = {
    CandidateEmail: '',
    CandidateName: '',
    ProjectStartDate: '',
    ClientName: '',
    vendorname: '',
    Country: '',
    H1Bvendor: '',
    I9Form:'',
    I9Expiry: '',
    Countersigned: '',
    Remarks: '',
  };

  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileName2, setSelectedFileName2] = useState('');
  const [selectedFileName11, setSelectedFileName11] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file);
    setSelectedFileName(file ? file.name : '');
    formik.setFieldValue("I9Form", file.name); 
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName2(file);
    setSelectedFileName2(file ? file.name : '');
    formik.setFieldValue("Countersigned", file.name); 
  };
  
  const handleFileChange11 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName11(file);
    setSelectedFileName11(file ? file.name : '');
    formik.setFieldValue("Countersigned", file.name); 
  };
  
  


  const onSubmit = values => {
    console.log(values);
    console.log(statusText)
  };

  const validate = values => {
    const errors = {};

    if (!values.CandidateEmail) {
      errors.CandidateEmail = "Candidate Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.CandidateEmail)) {
      errors.CandidateEmail = "Invalid Email ID";
    } else if (values.CandidateEmail.trim() === '') {
      errors.CandidateEmail = 'Candidate Email is required';
    }

    if (!values.CandidateName) {
      errors.CandidateName = "Candidate name is required";
    }else if (values.CandidateName.trim() === '') {
      errors.CandidateName = 'Candidate name is required';
    }

    if (!values.ProjectStartDate) {
      errors.ProjectStartDate = "Project start date is required";
    }

    if (!values.ClientName) {
      errors.ClientName = "Client name is required";
    }

    if (!values.vendorname) {
      errors.vendorname = "vendor name is required";
    }else if (values.vendorname.trim() === '') {
      errors.vendorname = 'vendor name is required';
    }

    if (!values.Country) {
      errors.Country = "Country is required";
    }

    if (!values.H1Bvendor) {
      errors.H1Bvendor = "Please select an option";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  const isComplete =
  formik.values.CandidateEmail &&
  formik.values.CandidateName &&
  formik.values.ClientName &&
  formik.values.Country &&
  formik.values.ProjectStartDate &&
  formik.values.H1Bvendor &&
  formik.values.vendorname &&
  formik.values.I9Expiry &&
  formik.values.Remarks &&
  selectedFileName &&
  selectedFileName2 &&
  selectedFileName11;

const statusText = isComplete ? "Complete" : "Incomplete";
 
const statusColor = isComplete ? "green" : "red";

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="layout">
        <fieldset className="OuterContainer">
          <legend className="subhead"><sup>*</sup>Candidate Details</legend>
          <div className="Container">
            <div className="FormGrid">
              <label htmlFor="CandidateEmail">Candidate Email ID (Pored in IRMT)</label><span>:</span>
              <div>
                <input
                  type="text"
                  name="CandidateEmail"
                  id="CandidateEmail"
                  placeholder="Enter your IRMT Email address"
                  onChange={formik.handleChange}
                  value={formik.values.CandidateEmail}
                />
                <div className="validationText" id="emailerrorMessage">
                  {formik.errors.CandidateEmail && <div>{formik.errors.CandidateEmail}</div>}
                </div>
              </div>
            </div>

            <div className="FormGrid">
              <label htmlFor="CandidateName">Candidate Name (Pored in IRMT)</label><span>:</span>
              <div>
                <input
                  type="text"
                  name="CandidateName"
                  id="CandidateName"
                  placeholder="Enter your IRMT Name"
                  onChange={formik.handleChange}
                  value={formik.values.CandidateName}
                />
                <div className="validationText" id="nameerror">
                  {formik.errors.CandidateName && <div>{formik.errors.CandidateName}</div>}
                </div>
              </div>
            </div>

            <div className="FormGrid">
              <label htmlFor="ProjectStartDate">Project Start Date</label><span>:</span>
              <div>
                <div className="inputDateField">
                  <input
                    className="dateinput"
                    type="date"
                    name="ProjectStartDate"
                    id="ProjectStartDate"
                    onChange={formik.handleChange}
                    value={formik.values.ProjectStartDate}
                  />
                  <span className="DateSpan" onClick={() => formik.setFieldValue("ProjectStartDate", "")}>x</span>
                </div>
                <div className="validationText" id="dateerrorMessage">
                  {formik.errors.ProjectStartDate && <div>{formik.errors.ProjectStartDate}</div>}
                </div>
              </div>
            </div>

            <div className="FormGrid">
              <label htmlFor="ClientName">Client Name</label><span>:</span>
              <div>
                <select
                  id="ClientName"
                  onChange={formik.handleChange}
                  value={formik.values.ClientName}
                >
                  <option value="">Select an option</option>
                  <option value="VY bog">VY bog</option>
                  <option value="Codenatives">Codenatives</option>
                </select>
                <div className="validationText" id="clientnameerrorMessage">
                  {formik.errors.ClientName && <div>{formik.errors.ClientName}</div>}
                </div>
              </div>
            </div>

            <div className="FormGrid">
              <label htmlFor="vendorname">VY Vendor Name</label><span>:</span>
              <div>
                <div className="inputDateField">
                  <input
                    type="text"
                    name="vendorname"
                    id="vendorname"
                    placeholder="Enter VY vendor name"
                    onChange={formik.handleChange}
                    value={formik.values.vendorname}
                  />
                </div>
                <div className="validationText" id="vendornameerrorMessage">
                  {formik.errors.vendorname && <div>{formik.errors.vendorname}</div>}
                </div>
              </div>
            </div>

            <div className="FormGrid">
              <label htmlFor="Country">Country</label><span>:</span>
              <div>
                <select
                  id="Country"
                  onChange={formik.handleChange}
                  value={formik.values.Country}
                >
                  <option value="">Select an option</option>
                  <option value="India">India</option>
                  <option value="US">US</option>
                </select>
                <div className="validationText" id="countryerrorMessage">
                  {formik.errors.Country && <div>{formik.errors.Country}</div>}
                </div>
              </div>
            </div>

            <div className="FormGrid">
              <label htmlFor="H1Bvendor">Are they an H1B vendor</label> <span>:</span>
              <div>
                <select
                  id="H1Bvendor"
                  onChange={formik.handleChange}
                  value={formik.values.H1Bvendor}
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="validationText" id="h1berr">
                  {formik.errors.H1Bvendor && <div>{formik.errors.H1Bvendor}</div>}
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

    <div className="layout">
            <fieldset className="OuterContainer">
                <legend className="subhead">I-9 Form Details</legend>
                <div className="Container">
                    <div className="FormGrid">
                        <span className="xspadding">I-9 Form Upload</span> <span>:</span>
                        <input type="file" id="I9Form" name="I9Form" accept=".pdf,.docx" onChange={handleFileChange}/>
                        <label htmlFor="I9Form">{selectedFileName||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
                    <label htmlFor="I9Expiry">I-9 Expiry</label><span>:</span>
                    <div>
                     <div className="inputDateField">
                    <input
                    className="dateinput"
                    type="date"
                    name="I9Expiry"
                    id="I9Expiry"
                    onChange={formik.handleChange}
                    value={formik.values.I9Expiry}
                  />
                  <span className="DateSpan" onClick={() => formik.setFieldValue("I9Expiry", "")}>x</span>
                </div>
                </div>
                </div>
                <div className="FormGrid">
                        <span className="xspadding">Exhibit-b-vendor name/h1B filled proper</span><span>:</span>
                        <input type="file" id="bvendorname" name="bvendorname" accept=".pdf,.docx" onChange={handleFileChange2} />
                        <label htmlFor="bvendorname" id="bvendornamelabel">{selectedFileName2||"Choose file"}</label>
                </div>
            </div>
            </fieldset>
    </div>


        <div className="layout">
                <fieldset className="OuterContainer">
                    <legend className="subhead">Countersigned Type Upload</legend>
                <div className="Container">
                        <div className="FormGrid">
                            <span className="xspadding">Counter signed from VY to vendor upload</span><span>:</span>
                            <input type="file" id="Countersigned" name="Countersigned"  accept=".pdf,.docx"onChange={handleFileChange11}/>
                            <label htmlFor="Countersigned" >{selectedFileName11||"Choose file"}</label>
                        </div>
                        <div className="FormGrid">
                            <label>Document Completion</label><span>:</span>
                            <input
                            id="status"
                            type="text"
                            value={statusText}
                            className={statusColor}
                            readOnly
                          />
                    
                        </div>
                        <div className="FormGrid">
                            <label htmlFor="Remarks">Remark/Whats pending/Why correct status</label><span>:</span>
                            <textarea id="Remarks" cols="30" rows="4" value={formik.values.Remarks}  onChange={formik.handleChange}></textarea>
                        </div>
                </div>
            </fieldset> 
        </div>

      <div className="lastsection">
        <div className="caution">*Note: Upload document and PDF file only</div>

        <div className="finaluploadbutton">
          <button className="finalbutton" type="submit">Upload</button>
        </div>
      </div>
    </form>
  );
}

export default Form2;
