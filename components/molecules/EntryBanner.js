import Banner from "../atoms/Banner";
import { ActionButton } from "../atoms/ActionButton";

export const EntryBanner = () => {
  return (
    <section>
      <Banner
        siteTitle="Service Canada Labs"
        headline="Make government work for you."
      />
      <div className="bg-gray-light-200 py-6">
        <div className={"flex container xxs:mx-auto lg:px-6 xxl:mx-auto"}>
          <ActionButton
            text={"Become a tester"}
            secondary
            className={"mr-4"}
            dataCyButton={"become-tester-button"}
          />
          <ActionButton
            text={"Start testing"}
            dataCyButton={"start-testing-button"}
          />
        </div>
      </div>
    </section>
  );
};
