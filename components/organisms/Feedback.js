import { useState } from "react";
import Image from "next/image";

function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProvidingFeedback, setIsProvidingFeedback] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target)));
    let res = await fetch("/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    console.log(await res.json());
    setIsSubmitted(true);
  }

  return (
    <div className="sm:flex items-center justify-between gap-20 bg-gray-light-200 p-5 max-w-[656px] border rounded">
      {isSubmitted && (
        <div className="flex gap-5">
          <Image
            src="/success_img.svg"
            alt=""
            width={25}
            height={25}
            priority
          ></Image>
          <p>Thank you for your feedback.</p>
        </div>
      )}

      {isProvidingFeedback && !isSubmitted && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <fieldset>
            <legend className="font-bold mb-2">What was wrong?</legend>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="cant-find-info"
                required
              ></input>
              I can't find the information
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="hard-to-understand"
              ></input>
              The information is hard to understand
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="there-was-an-error"
              ></input>
              There was an error or something didn't work
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="other-reason"
              ></input>
              Other reason
            </label>
          </fieldset>
          <label className="flex flex-col gap-2">
            <span className="font-bold">
              Please provide more details (maximum 2000 characters)
            </span>
            <span id="extra-info" className="font-[500] text-xs">
              You will not receive a reply. Don't include personal information
              (telephone, email, SIN, financial, medical, or work details).
            </span>
            <textarea
              name="extra-details"
              aria-describedby="extra-info"
              maxLength={2000}
              className="p-1"
            ></textarea>
          </label>
          <button className="bg-multi-blue-blue70 hover:bg-multi-blue-blue60e text-white rounded py-1 px-2">
            Submit
          </button>
        </form>
      )}

      {!isSubmitted && !isProvidingFeedback && (
        <>
          <p className="font-semibold text-sm">
            Did you find what you're looking for?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setIsSubmitted(true)}
              className="bg-multi-blue-blue70 hover:bg-multi-blue-blue60e text-white rounded py-1 px-2"
            >
              Yes
            </button>
            <button
              onClick={() => setIsProvidingFeedback(true)}
              className="bg-multi-blue-blue70 hover:bg-multi-blue-blue60e text-white rounded py-1 px-2"
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Feedback;
