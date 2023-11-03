import React from 'react'
import "./Candidate.css"

export default function Candidate(props) {
  const detail = props.formData;
  return (
    <div>
      <div>
    <h1>Displaying Form Data</h1>
    </div>
    <div className='dataList'>
    {detail&&detail.map(
      (data,index)=>{
        return(
          <div key={index}>
              <span className='CandidateInfo'>Candidate Details</span>
                <p>Candidate Name: {data.CandidateName}</p>
                <p>Project Start Date: {data.ProjectStartDate}</p>
                <p>Client Name: {data.ClientName}</p>
                <p>Vendor Name: {data.vendorname}</p>
                <p>Vendor Name: {data.vendorname}</p>
                <p>Country: {data.Country}</p>
                <p>H1B Vendor: {data.H1Bvendor}</p>
              <span className='CandidateInfo'>I-9 Form Details</span>
                <p>I9 Form: {data.I9Form}</p>
                <p>I9 Expiry: {data.I9Expiry}</p>
                <p>Business Vendor Name: {data.bvendorname}</p>
              <span className='CandidateInfo'>MSA Form Details</span>
                <p>MSA File: {data.MSAfile}</p>
                <p>MSA Signed Date: {data.MSAsigneddate}</p>
                <p>PO Upload: {data.POUpload}</p>
              <span className='CandidateInfo'>W-9 Form Details</span>
                <p>W9 Upload: {data.W9Upload}</p>
                <p>Void Check: {data.VoidCheck}</p>
                <p>ACH Upload: {data.ACHUpload}</p>
                <p>ACH: {data.ACH}</p>
              <span className='CandidateInfo'>Visa Type Upload</span>  
                <p>Visa Type: {data.Visatype}</p>
                <p>Visa Company: {data.visacompany}</p>
                <p>Visa From Date: {data.visafromdate}</p>
                <p>Visa Expiry Date: {data.visaexpirydate}</p>
              <span className='CandidateInfo'>Insurance Type of Certificate Upload</span>
                <p>Insurance Upload: {data.Insuranceupload}</p>
                <p>COI Expiry: {data.COIexpiry}</p>
                <p>Contact Info: {data.Contactinfo}</p>
                <p>Insurance Nearing Expiry: {data.Insurancenearingexpiry}</p>
              <span className='CandidateInfo'>Countersigned Type Upload</span>
                <p>Countersigned: {data.Countersigned}</p>
                <p>Remarks: {data.Remarks}</p>
          </div>
        )
      }
    )}
    </div>
  </div>
  )
}
