import { Link } from "../atoms/Link";

export function ExploreUpdates({
  heading = "Read our latest project updates",
  updatesData,
  href = "/somelink",
  linkLabel = "More updates",
  locale = "en",
}) {
  return (
    <div className="mt-14 bg-custom-blue-updates-blue">
      <div className="layout-container py-28">
        <h2 className="mt-0">{heading}</h2>
        <ul className="mt-8 flex flex-col">
          <li>List item</li>
        </ul>
        <div className="mt-5 flex justify-end">
          <Link
            id="seeAllUpdatesLink"
            href="/projects"
            lang={locale}
            text="See all updates"
          />
        </div>
      </div>
    </div>
  );
}
