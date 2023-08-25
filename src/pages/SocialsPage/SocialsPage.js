import "./SocialsPage.scss";
import facebookLogo from "../../assets/images/devicon_facebook.svg";
import alertsIcon from "../../assets/images/ion_notifications-outline.svg";
import alertsIconOn from "../../assets/images/alert-on.svg";
import { useState, useEffect } from "react";
import axios from 'axios'

function SocialsPage() {
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // const openPrivacyPopup = () => {
  //   setShowPrivacyPopup(true);
  //   document.body.classList.add('blur');
  // };

  const closePrivacyPopup = () => {
    setShowPrivacyPopup(false);
    document.body.classList.remove('blur');
  };

  // const openDeletePopup = () => {
  //   setShowDeletePopup(true);
  //   document.body.classList.add('blur');
  // };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    document.body.classList.remove('blur');
  };
  const [privacyPolicy, setPrivacyPolicy] = useState("Asking an expert...")
  const [dataCollection, setDataCollection] = useState("Asking an expert...")
  const [deletionSteps, setDeletionSteps] = useState("Asking an expert...")
  const [policyChange, setPolicyChange] = useState(false)

  const reqBodyPrompts = {
    privacyPrompt: "Explain Facebook's data privacy policy to me in 100 words or less?",
    dataCollection: "Explain what data Facebook collects from me in 100 words or less?",
    deletionSteps: "Explain what steps I need to take to delete my data from Facebook in 100 words or less? Please list each step in decimal format.",
    policyChangePrompt: "Has there been any changes to Facebook's data privacy policy in that last 24 hours?"
  }

const openPrivacyPopup = () => {
  setShowPrivacyPopup(true);
    document.body.classList.add('blur');
    const privacyReqBody = {
      prompt: reqBodyPrompts.privacyPrompt
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/ask`, privacyReqBody)
      .then((response) => {
        console.log(response.data);
        setPrivacyPolicy(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
}

  useEffect(() => {
    const collectionReqBody = {
      prompt: reqBodyPrompts.dataCollection
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/ask`, collectionReqBody)
      .then((response) => {
        console.log(response.data);
        setDataCollection(response.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const changeReqBody = {
      prompt: reqBodyPrompts.policyChangePrompt
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/ask`, changeReqBody)
      .then((response) => {
        console.log(response.data);
        if (response.data.message.includes("Yes")) {
          setPolicyChange(true)}
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openDeletePopup = () => {
    setShowDeletePopup(true);
    document.body.classList.add('blur');
    const deletionReqBody = {
      prompt: reqBodyPrompts.deletionSteps
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/ask`, deletionReqBody)
      .then((response) => {
        console.log(response.data.message);
        setDeletionSteps(response.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
    }

  
  return (
    <>
      <div className="socials__container">
        <header className="socials__header">
          <img className="socials__header-logo" src={facebookLogo}></img>
          <div className="socials__header-right">
            <h1 className="socials__header-title">Facebook</h1>
            <div className="socials__usage-container">
              <h2 className="socials__usage-title">Your usage</h2>
              <div className="socials__usage-bar"></div>
              <div className="socials__usage-fill"></div>
              <h2 className="socials__usage-value">47%</h2>
            </div>
          </div>
        </header>

        <h2 className="socials__privacy-title" onClick={openPrivacyPopup}>Facebook's Privacy Policy</h2>
        {showPrivacyPopup  && (
                <div className='overlay' onClick={openPrivacyPopup}>
                    <div className='popup' onClick={(e) => e.stopPropagation()}>
                        <p>{privacyPolicy}</p>
                        <button className='close-popup-btn' onClick={closePrivacyPopup}>OK</button>
                    </div>
                </div>
                )}
        <div className="socials__alerts-container">
          <h2 className="socials__alerts-header">
            Get alerts on policy changes
          </h2>
          <img className="socials__alerts-icon" src={policyChange ? alertsIconOn : alertsIcon}></img>
        </div>
        <h3 className="socials__collection-header">What data is collected?</h3>
        <div className="socials__collection-container">
          {dataCollection}
        </div>
        <h3 className="socials__deletion-header" >Can this data be deleted?</h3>
        <div className="socials__deletion-explanation">
          Yes! you can delete the data that has been collected by Facebook by
          following these <span className="socials__deletion-steps" onClick={openDeletePopup}>quick and easy steps!</span>
          {showDeletePopup  && (
          <div className='overlay' onClick={openDeletePopup}>
            <div className='popup' onClick={(e) => e.stopPropagation()}>
              <ul>
            {deletionSteps.split(/[2-9]. /).map(step => {
                if (deletionSteps === "Asking an expert...") return <p>Asking an expert..</p>
               if (step.includes("1. ")) {
                return  <li>{step.replace("1. ", "")}</li>
              } 
                return  <li>{step}</li>
            })}
            </ul>
              {/* <ul>
                <li>Log in to your Facebook account</li>
                <li>Go to the Settings page (located in the drop-down menu at the top right of the screen)</li>
                <li>Click on Your Facebook Information in the left menu</li>
                <li>Click on Delete Your Account and Information</li>
                <li>Click the "Start My Archive" button at the bottom of the page</li>
                <li>Enter your password and click Submit</li>
                <li>Select which information you'd like to delete from your profile and click Delete Account</li>
                <li>Click the box next to the Deletion Confirmation, then click Delete Account again</li>
                <li>Your account and data will now be deleted.</li>
              </ul> */}
              <button className='close-popup-btn' onClick={closeDeletePopup}>OK</button>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default SocialsPage;
