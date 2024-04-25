import { CTA } from "../../molecules/CTA";

export default function ArticleCTA({ heading, body, ButtonProps, LinkProps }) {
  return (
    <CTA
      heading={heading}
      body={body}
      ButtonProps={ButtonProps}
      LinkProps={LinkProps}
      containerClass="layout-container my-4"
    />
  );
}
