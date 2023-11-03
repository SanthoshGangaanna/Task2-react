import React, {useState} from 'react';
import './Form2.css';
import { useFormik } from 'formik';



const Form2 = ({ onFormSubmit }) => {

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
    bvendorname: '',
    MSAfile: '',
    MSAsigneddate: '',
    POUpload: '',
    W9Upload: '',
    VoidCheck: '',
    ACHUpload: '',
    ACH: '',
    Visatype: '',
    visacompany: '',
    visafromdate: '',
    visaexpirydate: '',
    Insuranceupload: '',
    COIexpiry: '',
    Contactinfo: '',
    Insurancenearingexpiry: '',
    Countersigned: '',
    Remarks: '',
  };

  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileName2, setSelectedFileName2] = useState('');
  const [selectedFileName3, setSelectedFileName3] = useState('');
  const [selectedFileName4, setSelectedFileName4] = useState('');
  const [selectedFileName5, setSelectedFileName5] = useState('');
  const [selectedFileName6, setSelectedFileName6] = useState('');
  const [selectedFileName7, setSelectedFileName7] = useState('');
  const [selectedFileName8, setSelectedFileName8] = useState('');
  const [selectedFileName9, setSelectedFileName9] = useState('');
  const [selectedFileName10, setSelectedFileName10] = useState('');
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
    formik.setFieldValue("bvendorname", file.name); 
  };

  const handleFileChange3 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName3(file);
    setSelectedFileName3(file ? file.name : '');
    formik.setFieldValue("MSAfile", file.name); 
  };
  
  const handleFileChange4 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName4(file);
    setSelectedFileName4(file ? file.name : '');
    formik.setFieldValue("POUpload", file.name); 
  };

  const handleFileChange5= (event) => {
    const file = event.target.files[0];
    setSelectedFileName5(file);
    setSelectedFileName5(file ? file.name : '');
    formik.setFieldValue("W9Upload", file.name); 
  };
  
  const handleFileChange6 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName6(file);
    setSelectedFileName6(file ? file.name : '');
    formik.setFieldValue("VoidCheck", file.name); 
  };
  
  const handleFileChange7 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName7(file);
    setSelectedFileName7(file ? file.name : '');
    formik.setFieldValue("ACHUpload", file.name); 
  };
  
  const handleFileChange8 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName8(file);
    setSelectedFileName8(file ? file.name : '');
    formik.setFieldValue("Visatype", file.name); 
  };

  const handleFileChange9 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName9(file);
    setSelectedFileName9(file ? file.name : '');
    formik.setFieldValue("Insuranceupload", file.name); 
  };
  
  const handleFileChange10 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName10(file);
    setSelectedFileName10(file ? file.name : '');
    formik.setFieldValue("Contactinfo", file.name); 
  };

  const handleFileChange11 = (event) => {
    const file = event.target.files[0];
    setSelectedFileName11(file);
    setSelectedFileName11(file ? file.name : '');
    formik.setFieldValue("Countersigned", file.name); 
  };
  
  


  const onSubmit = (values) => {
    console.log(values)
    onFormSubmit(values);
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
  formik.values.MSAsigneddate &&
  formik.values.ACH &&
  formik.values.visacompany &&
  formik.values.visafromdate &&
  formik.values.visaexpirydate &&
  formik.values.COIexpiry &&
  formik.values.Insurancenearingexpiry &&
  formik.values.Remarks &&
  selectedFileName &&
  selectedFileName2 &&
  selectedFileName3 &&
  selectedFileName4 &&
  selectedFileName5 &&
  selectedFileName6 &&
  selectedFileName7 &&
  selectedFileName8 &&
  selectedFileName9 &&
  selectedFileName10 &&
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
                    <legend className="subhead">MSA Form Details</legend>
                <div className="Container">
                    <div className="FormGrid">
                        <span className="xspadding">MSA Upload</span><span>:</span>
                        <input type="file" id="MSAfile" name="MSAfile"  accept=".pdf,.docx" onChange={handleFileChange3} />
                        <label htmlFor="MSAfile">{selectedFileName3||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
              <label htmlFor="MSAsigneddate">MSA Signed date</label><span>:</span>
              <div>
                <div className="inputDateField">
                  <input
                    className="dateinput"
                    type="date"
                    name="MSAsigneddate"
                    id="MSAsigneddate"
                    onChange={formik.handleChange}
                    value={formik.values.MSAsigneddate}
                  />
                  <span className="DateSpan" onClick={() => formik.setFieldValue("MSAsigneddate", "")}>x</span>
                </div>
              </div>
            </div>
                    <div className="FormGrid">
                            <span className="xspadding">Exhibit-A/PO upload</span><span>:</span>
                            <input type="file" id="POUpload" name="POUpload" accept=".pdf,.docx" onChange={handleFileChange4}/>
                            <label htmlFor="POUpload" >{selectedFileName4||"Choose file"}</label>
                    </div>
                    </div>
                </fieldset>
        </div>

        <div className="layout">
                <fieldset className="OuterContainer">
                    <legend className="subhead">W-9 Form Details</legend>
                <div className="Container">
                    <div className="FormGrid">
                        <span className="xspadding">W9 Upload</span><span>:</span>
                        <input type="file" id="W9Upload" name="W9Upload" accept=".pdf,.docx" onChange={handleFileChange5}/>
                        <label htmlFor="W9Upload">{selectedFileName5||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
                        <span className="xspadding">Void Check Upload</span><span>:</span>
                        <input type="file" id="VoidCheck" name="VoidCheck" accept=".pdf,.docx" onChange={handleFileChange6}/>
                        <label htmlFor="VoidCheck">{selectedFileName6||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
                            <span className="xspadding">ACH Upload upload</span><span>:</span>
                            <input type="file" id="ACHUpload" name="ACHUpload" accept=".pdf,.docx" onChange={handleFileChange7}/>
                            <label htmlFor="ACHUpload">{selectedFileName7||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
                        <label htmlFor="ACH">All dates filled in ACH? Without blank lines </label> <span>:</span>
                        <select id="ACH" value={formik.values.ACH}  onChange={formik.handleChange}>
                            <option value="select">Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        </div>
                    </div>
                    </fieldset>
        </div>

        <div className="layout">
                <fieldset className="OuterContainer">
                    <legend className="subhead">Visa Type Upload</legend>
                <div className="Container">
                    <div className="FormGrid">
                        <span className="xspadding">Visa Type Document Upload</span><span>:</span>
                        <input type="file" id="Visatype" name="Visatype" accept=".pdf,.docx" onChange={handleFileChange8}/>
                        <label htmlFor="Visatype">{selectedFileName8||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
                        <label htmlFor="visacompany">Visa company/ this has to be cross verfied with above H1b company</label><span>:</span>
                        <input type="text" name="visacompany" id="visacompany" placeholder="Enter visa company name" value={formik.values.visacompany}  onChange={formik.handleChange}/>
                    </div>

                    <div className="FormGrid">
              <label htmlFor="visafromdate">Visa from date</label><span>:</span>
              <div>
                <div className="inputDateField">
                  <input
                    className="dateinput"
                    type="date"
                    name="visafromdate"
                    id="visafromdate"
                    onChange={formik.handleChange}
                    value={formik.values.visafromdate}
                  />
                  <span className="DateSpan" onClick={() => formik.setFieldValue("visafromdate", "")}>x</span>
                </div>
              </div>
            </div>
            <div className="FormGrid">
              <label htmlFor="visaexpirydate">Visa expiry date</label><span>:</span>
              <div>
                <div className="inputDateField">
                  <input
                    className="dateinput"
                    type="date"
                    name="visaexpirydate"
                    id="visaexpirydate"
                    onChange={formik.handleChange}
                    value={formik.values.visaexpirydate}
                  />
                  <span className="DateSpan" onClick={() => formik.setFieldValue("visaexpirydate", "")}>x</span>
                </div>
              </div>
            </div>
                    </div>
                </fieldset>
        </div>





        <div className="layout">
                <fieldset className="OuterContainer">
                    <legend className="subhead">Insurance Type of Certificate Upload</legend>
                <div className="Container">
                    <div className="FormGrid">
                        <span className="xspadding">Certificate of insurance upload</span><span>:</span>
                        <input type="file" id="Insuranceupload" name="Insuranceupload" accept=".pdf,.docx" onChange={handleFileChange9}/>
                        <label htmlFor="Insuranceupload">{selectedFileName9||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
              <label htmlFor="COIexpiry">COI expiry least</label><span>:</span>
              <div>
                <div className="inputDateField">
                  <input
                    className="dateinput"
                    type="date"
                    name="COIexpiry"
                    id="COIexpiry"
                    onChange={formik.handleChange}
                    value={formik.values.COIexpiry}
                  />
                  <span className="DateSpan" onClick={() => formik.setFieldValue("COIexpiry", "")}>x</span>
                </div>
                </div>
                </div>
                    <div className="FormGrid">
                        <span className="xspadding">Contact Info Sheet upload</span><span>:</span>
                        <input type="file" id="Contactinfo" name="Contactinfo" accept=".pdf,.docx" onChange={handleFileChange10}/>
                        <label htmlFor="Contactinfo">{selectedFileName10||"Choose file"}</label>
                    </div>
                    <div className="FormGrid">
                        <label htmlFor="Insurancenearingexpiry">Type of Insurance nearing expiry</label><span>:</span>
                        <textarea id="Insurancenearingexpiry" cols="30" rows="4" value={formik.values.Insurancenearingexpiry}  onChange={formik.handleChange}></textarea>
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
