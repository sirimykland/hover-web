import React from "react";
import "./App.css";

function Privacy() {
  return (
    <div>
      <h1>Privacy policy</h1>
      <div className="App-body">
        <p className="Text">
          Mats Tyldum and Siri Mykland built the Hover app as a Free app. This
          service is provided by Mats Tyldum and Siri Mykland at no cost and is
          intended for use as is. This page is used to inform visitors regarding
          our policies with the collection, use, and disclosure of Personal
          Information if anyone decided to use our Service. If you choose to use
          our Service, then you agree to the collection and use of information
          in relation to this policy. The Personal Information that we collect
          is used for providing and improving the Service. will not use or share
          your information with anyone except as described in this Privacy
          Policy. The terms used in this Privacy Policy have the same meanings
          as in our Terms and Conditions, which is accessible at Hover unless
          otherwise defined in this Privacy Policy.
        </p>

        <h2 className="Sub-header">Information Collection and Use</h2>
        <p>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained on your device and is not
          collected by us in any way.
        </p>

        <h3 className="Sub-header">Account, Profile and Activity</h3>
        <p>Activity and use information is collected about you when you choose 
          to upload an activity (including date, time and geofence-location 
          information). We use your contact information so we can respond to 
          your support requests and comments.</p>

        <h3 className="Sub-header">Location Information</h3>
        <p>We collect and process location information when you sign up for and 
          use the Services. We do not track your device location while you are 
          not using Hover, but in order to provide Hovers' core service, it 
          is necessary for us to track your device location while you use Hover. 
          You may at any time adjusting your device settings if you would like 
          to stop the device location tracking.
        </p>

        <h3 className="Sub-header">Content You Share</h3>
        <p>We gather information from the activities and reactions you share on 
          the Service, including when you create or participate in challenges.</p>

        <h2 className="Sub-header">Log Data</h2>
        <p className="Text">
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </p>
        <h2 className="Sub-header">Cookies</h2>
        <p className="Text">
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory. This Service does not use these “cookies” explicitly. However,
          the app may use third party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being
          sent to your device. If you choose to refuse our cookies, you may not
          be able to use some portions of this Service.
        </p>
        <h2 className="Sub-header">Service Providers</h2>
        <p className="Text">
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p className="Text">
          We want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
        <h2 className="Sub-header">Security</h2>
        <p className="Text">
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>
        <h2 className="Sub-header">Links to Other Sites</h2>
        <p className="Text">
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h2 className="Sub-header">Children’s Privacy</h2>
        <p className="Text">
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided me with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact me so that we will be able to do necessary actions.
        </p>
        <h2 className="Sub-header">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. we will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>

        <em>This policy is effective as of 2021-03-10.</em>

        <h2>Contact Us</h2>
        <p className="Text">
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at{" "}
          <a href="mailto:contact.hoverapp@gmail.com" className="App-link">
            contact.hoverapp@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Privacy;
