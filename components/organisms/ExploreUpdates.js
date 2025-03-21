import Link from "next/link";
import { Link as LinkWrapper } from "../atoms/Link";
import Card from "../molecules/Card";
import { getDictionaryTerm } from "../../lib/utils/getDictionaryTerm";

export function ExploreUpdates({
  isOnProjectPage,
  projectName,
  heading,
  updatesData,
  href,
  linkLabel,
  locale,
  dictionary,
}) {
  const updatesCards = updatesData.map((update) => {
    return (
      <li key={update.scId} className="bg-white list-none my-3">
        <Card
          cardHeadingStyling="!mt-0 !pt-0"
          customStyling="flex flex-col justify-between !py-5"
          title={locale === "en" ? update.scTitleEn : update.scTitleFr}
          href={locale === "en" ? update.scPageNameEn : update.scPageNameFr}
          htmlDesc={
            <div className="flex flex-col pt-6 md:pt-0">
              <span className="flex flex-row pt-2 pl-6">
                <p className="text-multi-neutrals-grey100 font-semibold whitespace-nowrap">
                  {locale === "en" ? "Project:" : "Projet :"}
                </p>
                <p className="mt-0 pl-1">
                  {isOnProjectPage
                    ? projectName
                    : locale === "en"
                    ? update.scLabProject.scTitleEn
                    : update.scLabProject.scTitleFr}
                </p>
              </span>
              <span className="flex flex-row pl-6">
                <p className="text-multi-neutrals-grey100 font-semibold">
                  {getDictionaryTerm(dictionary, "POSTED-ON", locale)}
                </p>
                <p className="mt-0 pl-1">{`${update.scDateIssued}`}</p>
              </span>
            </div>
          }
        />
      </li>
    );
  });

  return (
    <div className="mt-14 bg-custom-blue-updates-blue">
      <div className="layout-container py-28">
        <div className="grid grid-cols-12">
          <h2 className="grid col-span-12 xl:col-span-8 mt-0">{heading}</h2>
          <ul className="grid col-span-12 xl:col-span-8">
            {updatesCards.slice(0, 3)}
          </ul>
          <div className="grid col-span-12 xl:col-span-8 mt-4">
            <div className="flex justify-end">
              {updatesCards.length > 3 && (
                <LinkWrapper
                  component={Link}
                  id="seeAllUpdatesLink"
                  href={href}
                  lang={locale}
                  text={linkLabel}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
