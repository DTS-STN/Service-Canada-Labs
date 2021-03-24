import { ActionButton } from "../atoms/ActionButton";

/**
 *  component
 */
export function SearchBar() {
  return (
    <div className="inline-flex">
      <input
        type="search"
        placeholder="Search Canada.ca"
        className="border border-custom-gray-light focus:outline-none"
      />

      <ActionButton custom={"bg-custom-blue-dark"} />
    </div>
  );
}
