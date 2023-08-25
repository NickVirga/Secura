import "./SocialsPage.scss";
import facebookLogo from "../../assets/images/devicon_facebook.svg";
import alertsIcon from "../../assets/images/ion_notifications-outline.svg";

function SocialsPage() {
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

        <h2 className="socials__privacy-title">Facebook's Privacy Policy</h2>
        <div className="socials__alerts-container">
          <h2 className="socials__alerts-header">
            Get alerts on policy changes
          </h2>
          <img className="socials__alerts-icon" src={alertsIcon}></img>
        </div>
        <h3 className="socials__collection-header">What data is collected?</h3>
        <div className="socials__collection-container">
          Facebook collects information on user activities, preferences,
          interactions, connections, and communications. This includes browsing
          and search history, IP address, device and connection type, location,
          content preferences, events attending, parking history, and payment
          information. It also collects information about your contacts,
          contacts’ activities, and preferences, including educational history,
          employment history, and interests. Facebook can also track other
          users’ activities in relation to you, such as those who have liked,
          commented, or interacted with content you have posted.
        </div>
        <h3 className="socials__deletion-header">Can this data be deleted?</h3>
        <div className="socials__deletion-explanation">
          Yes! you can delete the data that has been collected by Facebook by
          following these <span className="socials__deletion-steps">quick and easy steps!</span>
        </div>
      </div>
    </>
  );
}

export default SocialsPage;
