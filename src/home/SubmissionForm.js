import { useState } from 'react';
import "./SubmissionForm.css";

const SubmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [droppedFile, setDroppedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.files[0]);
    setDroppedFile(e.dataTransfer.files[0]);
  }

  const handleSubmitAnother = () => {
    setDroppedFile(null);
    setSubmitted(false);
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
      <div className="imageDrop" onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
        {/* show dropped file, if there is one */}
        <span>{!droppedFile ? "Drag and drop image here! (Optional)" : droppedFile?.name}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  const submissionThankYou = (
    <div className="thankYou">
      <p>We've received your submission, thank you!</p>
      {/* re-open form if clicked */}
      <button onClick={handleSubmitAnother}>Submit another area?</button>
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