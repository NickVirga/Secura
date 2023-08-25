import "./SocialsPage.scss";
import facebookLogo from "../../assets/images/devicon_facebook.svg";
import alertsIcon from "../../assets/images/ion_notifications-outline.svg";
import { useState, useEffect } from "react";
import axios from 'axios'

function SocialsPage() {
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const openPrivacyPopup = () => {
    setShowPrivacyPopup(true);
    document.body.classList.add('blur');
  };

  const closePrivacyPopup = () => {
    setShowPrivacyPopup(false);
    document.body.classList.remove('blur');
  };

  const openDeletePopup = () => {
    setShowDeletePopup(true);
    document.body.classList.add('blur');
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    document.body.classList.remove('blur');
  };
  const [privacyPolicy, setPrivacyPolicy] = useState("")
  const [dataCollection, setDataCollection] = useState("")
  const [deletionSteps, setDeletionSteps] = useState("")

  const reqBodyPrompts = {
    privacyPrompt: "Explain Facebook's data privacy policy to me in 100 words or less?",
    dataCollection: "Explain what data Facebook collects from me in 100 words or less?",
    deletionSteps: "Explain what steps I need to take to delete my data from Facebook in 100 words or less?"
  }

const privacyClickHandler = () => {
    const privacyReqBody = {
      prompt: reqBodyPrompts.privacyPrompt
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/ask`, privacyReqBody)
      .then((response) => {
        console.log(response.data);
        setPrivacyPolicy(response.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
}

  
  // useEffect(() => {
  //   const collectionReqBody = {
  //     prompt: reqBodyPrompts.dataCollection
  //   }
  //   axios
  //     .post(`${process.env.REACT_APP_BASE_URL}/ask`, collectionReqBody)
  //     .then((response) => {
  //       console.log(response.data);
  //       setDataCollection(response.data.message)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const stepsClickHandler = () => {
    const deletionReqBody = {
      prompt: reqBodyPrompts.deletionSteps
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/ask`, deletionReqBody)
      .then((response) => {
        console.log(response.data);
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
                        <p>Facebook's privacy policy grants users control over their personal data. Users can choose how and with whom to share their information.
                        Facebook also has many safety and security features to protect user data, such as encryption and login notifications. 
                        The company also employs data-processing and storage safeguards to protect user data from accidentally or illegally accessed by third parties.
                        Additionally, Facebook offers tools to control advertising practices, manage who can view posts, and access data shared with applications.</p>
                        <button className='close-popup-btn' onClick={closePrivacyPopup}>OK</button>
                    </div>
                </div>
                )}
        <div className="socials__alerts-container">
          <h2 className="socials__alerts-header">
            Get alerts on policy changes
          </h2>
          <img className="socials__alerts-icon" src={alertsIcon}></img>
        </div>
        <h3 className="socials__collection-header">What data is collected?</h3>
        <div className="socials__collection-container">
          {/* Facebook collects information on user activities, preferences,
          interactions, connections, and communications. This includes browsing
          and search history, IP address, device and connection type, location,
          content preferences, events attending, parking history, and payment
          information. It also collects information about your contacts,
          contacts’ activities, and preferences, including educational history,
          employment history, and interests. Facebook can also track other
          users’ activities in relation to you, such as those who have liked,
          commented, or interacted with content you have posted. */}
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
                <li>Log in to your Facebook account</li>
                <li>Go to the Settings page (located in the drop-down menu at the top right of the screen)</li>
                <li>Click on Your Facebook Information in the left menu</li>
                <li>Click on Delete Your Account and Information</li>
                <li>Click the "Start My Archive" button at the bottom of the page</li>
                <li>Enter your password and click Submit</li>
                <li>Select which information you'd like to delete from your profile and click Delete Account</li>
                <li>Click the box next to the Deletion Confirmation, then click Delete Account again</li>
                <li>Your account and data will now be deleted.</li>
              </ul>
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
