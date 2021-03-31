import Banner from "../atoms/Banner";
import { ActionButton } from "../atoms/ActionButton";

export const EntryBanner = () => {
  return (
    <section>
      <Banner
        siteTitle="Service Canada Labs"
        headline="Make government work for you."
      />
      <div className={"flex container lg:mx-auto xl:mx-28"}>
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
    </section>
  );
};
