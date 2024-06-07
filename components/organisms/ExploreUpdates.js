import { Link } from "../atoms/Link";
import Card from "../molecules/Card";

export function ExploreUpdates({
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
          htmlDesc
          customStyling="md:h-[190px] pb-6 flex flex-col justify-between"
          title={locale === "en" ? update.scTitleEn : update.scTitleFr}
          href={locale === "en" ? update.scPageNameEn : update.scPageNameFr}
          description={
            <div className="flex flex-col">
              <span className="flex flex-row pl-6">
                <p className="text-multi-neutrals-grey100 font-semibold">
                  {locale === "en" ? "Project:" : "Projet :"}
                </p>
                <p className="mt-0 pl-1">{`${update.scDateModifiedOverwrite}`}</p>
              </span>
              <span className="flex flex-row pl-6">
                <p className="text-multi-neutrals-grey100 font-semibold">
                  {locale === "en"
                    ? dictionary.items[11].scTermEn
                    : dictionary.items[11].scTermFr}
                </p>
                <p className="mt-0 pl-1">{`${update.scDateModifiedOverwrite}`}</p>
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
          <ul className="grid col-span-12 xl:col-span-8">{updatesCards}</ul>
          <div className="grid col-span-12 xl:col-span-8 mt-4">
            <div className="flex justify-end">
              <Link
                id="seeAllUpdatesLink"
                href={href}
                lang={locale}
                text={linkLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
