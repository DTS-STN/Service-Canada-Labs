import Head from "next/head";

export default function PageHead(props) {
  return (
    <Head>
      {/* Primary HTML Meta Tags */}
      <title>
        {props.locale === "en"
          ? `${props.pageData.scTitleEn} - Service Canada Labs`
          : `${props.pageData.scTitleFr} - Laboratoires de Service Canada`}
      </title>
      <meta
        name="description"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta name="author" content="Service Canada" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
      <meta
        name="keywords"
        content={
          props.locale === "en"
            ? props.pageData.scKeywordsEn
            : props.pageData.scKeywordsFr
        }
      />

      {/* DCMI Meta Tags */}
      <meta
        name="dcterms.title"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta
        name="dcterms.language"
        content={props.locale === "en" ? "eng" : "fra"}
        title="ISO639-2/T"
      />
      <meta
        name="dcterms.creator"
        content={
          props.locale === "en"
            ? "Employment and Social Development Canada"
            : "Emploi et Développement social Canada"
        }
      />
      <meta name="dcterms.accessRights" content="2" />
      <meta name="dcterms.service" content="ESDC-EDSC_SCLabs-LaboratoireSC" />
      <meta name="dcterms.issued" title="W3CDTF" content="2023-07-07" />

      <meta name="dcterms.modified" title="W3CDTF" content="2023-07-07" />
      <meta
        name="dcterms.description"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta
        name="dcterms.subject"
        title="gccore"
        content={props.pageData.scSubject}
      />
      <meta name="dcterms.spatial" content="Canada" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={props.locale} />
      <meta
        property="og:url"
        content={
          "https://alpha.service.canada.ca" +
          `${
            props.locale === "en"
              ? props.pageData.scPageNameEn
              : props.pageData.scPageNameFr
          }`
        }
      />
      <meta
        property="og:title"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta
        property="og:description"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta
        property="og:image"
        content={props.pageData.scSocialMediaImageEn?._publishUrl}
      />
      <meta
        property="og:image:alt"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={
          "https://alpha.service.canada.ca" +
          `${
            props.locale === "en"
              ? props.pageData.scPageNameEn
              : props.pageData.scPageNameFr
          }`
        }
      />
      <meta
        property="twitter:title"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta name="twitter:creator" content="Service Canada" />
      <meta
        property="twitter:description"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
      <meta
        property="twitter:image"
        content={props.pageData.scSocialMediaImageEn?._publishUrl}
      />
      <meta
        property="twitter:image:alt"
        content={
          props.locale === "en"
            ? props.pageData.scTitleEn
            : props.pageData.scTitleFr
        }
      />
    </Head>
  );
}
