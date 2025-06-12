import { useState } from 'react';
import "./SubmissionForm.css";

const SubmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const submissionForm = (
    <form name="areaSubmission" onSubmit={handleSubmit}>
      <input
          name="email"
          type="email"
          placeholder="Email Address*"
          required
      />
      <input
          name="area"
          type="text"
          placeholder="Area Name*"
          required
      />
      <div className="imageDrop">
        <span>Drag and drop image here! (Optional)</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  const submissionThankYou = (
    <div className="thankYou">
      <p>We've received your submission, thank you!</p>
      {/* re-open form if clicked */}
      <button onClick={() => setSubmitted(false)}>Submit another area?</button>
    </div>
  );
  return (
    <section className="submissionSection">
        <p>Have a favorite area you didn't see here? Let me know and I'll consider adding it!</p>
        {/* Show submission form if not submitted, or show the thank you message if submitted */}
        {!submitted ? submissionForm : submissionThankYou}
    </section>
  )
}

export default SubmissionForm;