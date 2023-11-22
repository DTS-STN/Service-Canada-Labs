import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProvidingFeedback, setIsProvidingFeedback] = useState(false);

  const router = useRouter();
  const { t } = useTranslation("common");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("/api/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      });
    } finally {
      setIsSubmitted(true);
    }
  }

  return (
    <div className="sm:flex items-center justify-between gap-20 bg-gray-light-200 p-5 max-w-[568px] border rounded">
      {isSubmitted && (
        <div className="flex gap-5 items-center">
          <Image
            src="/success_img.svg"
            alt=""
            width={25}
            height={25}
            style={{ width: 25, height: 25 }}
            priority
          ></Image>
          <p>{t("feedback.thank-you")}</p>
        </div>
      )}

      {isProvidingFeedback && !isSubmitted && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="page" value={router.asPath} />
          <fieldset>
            <legend className="font-bold mb-2">
              {t("feedback.what-was-wrong")}
            </legend>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="cant-find-info"
                required
              ></input>
              {t("feedback.cant-find-info")}
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="hard-to-understand"
              ></input>
              {t("feedback.hard-to-understand")}
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="there-was-an-error"
              ></input>
              {t("feedback.there-was-an-error")}
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="what-was-wrong"
                value="other-reason"
              ></input>

              {t("feedback.other-reason")}
            </label>
          </fieldset>
          <label className="flex flex-col gap-2">
            <span className="font-bold">
              {t("feedback.provide-more-details")}
            </span>
            <span id="extra-info" className="font-[500] text-xs">
              {t("feedback.no-protected-info")}
            </span>
            <span id="maximum-characters" className="font-[300] text-xs">
              {t("feedback.maximum-characters")}
            </span>
            <textarea
              name="extra-details"
              aria-describedby="extra-info maximum-characters"
              maxLength={300}
              className="p-1"
            ></textarea>
          </label>
          <button className="bg-multi-blue-blue70 hover:bg-multi-blue-blue60e text-white rounded py-1 px-2">
            {t("feedback.submit")}
          </button>
        </form>
      )}

      {!isSubmitted && !isProvidingFeedback && (
        <>
          <p className="font-semibold text-sm">{t("feedback.did-you-find")}</p>
          <div className="flex gap-2">
            <button
              onClick={() => setIsSubmitted(true)}
              className="bg-multi-blue-blue70 hover:bg-multi-blue-blue60e text-white rounded py-1 px-2"
            >
              {t("feedback.yes")}
            </button>
            <button
              onClick={() => setIsProvidingFeedback(true)}
              className="bg-multi-blue-blue70 hover:bg-multi-blue-blue60e text-white rounded py-1 px-2"
            >
              {t("feedback.no")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Feedback;
