"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[8598],{"./components/organisms/ExploreUpdates.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ExploreUpdates_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/next/link.js")),link_default=__webpack_require__.n(next_link),Link=__webpack_require__("./components/atoms/Link.js"),Card=__webpack_require__("./components/molecules/Card.js");const getDictionaryTerm=(dictionary,entryId,locale)=>{const dictionaryEntry=dictionary.find((obj=>obj.scId===entryId));return"en"===locale?dictionaryEntry.scTermEn:dictionaryEntry.scTermFr};function ExploreUpdates({isOnProjectPage,projectName,heading,updatesData,href,linkLabel,locale,dictionary}){const updatesCards=updatesData.map((update=>(0,jsx_runtime.jsx)("li",{className:"bg-white list-none my-3",children:(0,jsx_runtime.jsx)(Card.C,{cardHeadingStyling:"!mt-0 !pt-0",customStyling:"flex flex-col justify-between !py-5",title:"en"===locale?update.scTitleEn:update.scTitleFr,href:"en"===locale?update.scPageNameEn:update.scPageNameFr,htmlDesc:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col pt-6 md:pt-0",children:[(0,jsx_runtime.jsxs)("span",{className:"flex flex-row pt-2 pl-6",children:[(0,jsx_runtime.jsx)("p",{className:"text-multi-neutrals-grey100 font-semibold whitespace-nowrap",children:"en"===locale?"Project:":"Projet :"}),(0,jsx_runtime.jsx)("p",{className:"mt-0 pl-1",children:isOnProjectPage?projectName:"en"===locale?update.scLabProject.scTitleEn:update.scLabProject.scTitleFr})]}),(0,jsx_runtime.jsxs)("span",{className:"flex flex-row pl-6",children:[(0,jsx_runtime.jsx)("p",{className:"text-multi-neutrals-grey100 font-semibold",children:getDictionaryTerm(dictionary,"POSTED-ON",locale)}),(0,jsx_runtime.jsx)("p",{className:"mt-0 pl-1",children:`${update.scDateIssued}`})]})]})})},update.scId)));return(0,jsx_runtime.jsx)("div",{className:"mt-14 bg-custom-blue-updates-blue",children:(0,jsx_runtime.jsx)("div",{className:"layout-container py-28",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-12",children:[(0,jsx_runtime.jsx)("h2",{className:"grid col-span-12 xl:col-span-8 mt-0",children:heading}),(0,jsx_runtime.jsx)("ul",{className:"grid col-span-12 xl:col-span-8",children:updatesCards.slice(0,3)}),(0,jsx_runtime.jsx)("div",{className:"grid col-span-12 xl:col-span-8 mt-4",children:(0,jsx_runtime.jsx)("div",{className:"flex justify-end",children:updatesCards.length>3&&(0,jsx_runtime.jsx)(Link.r,{component:link_default(),id:"seeAllUpdatesLink",href,lang:locale,text:linkLabel})})})]})})})}ExploreUpdates.__docgenInfo={description:"",methods:[],displayName:"ExploreUpdates"};const ExploreUpdates_stories={title:"Components/organisms/ExploreUpdates",component:ExploreUpdates},Default=(args=>(0,jsx_runtime.jsx)(ExploreUpdates,{...args})).bind({});Default.args={locale:"en",heading:"Explore more updates",updatesData:[{_path:"/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/how-feedback-is-shaping-the-estimator",scId:"HOW-FEEDBACK-SHAPING-ESTIMATOR",scPageNameEn:"/en/projects/oas-benefits-estimator/how-feedback-shaping",scPageNameFr:"/fr/projets/estimateur-prestations-sv/faconner-grace-retroaction",scLabProject:{scTermEn:"OAS Benefits Estimator",scTermFr:"Estimateur des prestations de la Sécurité de la vieillesse"},scTitleEn:"How feedback is shaping the estimator",scTitleFr:"Façonner l’estimateur grâce à la rétroaction",scBreadcrumbParentPages:[{scTitleEn:"Service Canada Labs",scTitleFr:"Laboratoires de Service Canada",scPageNameEn:"/en/home",scPageNameFr:"/fr/accueil"},{scTitleEn:"Old Age Security Benefits Estimator",scTitleFr:"Estimateur des prestations de la Sécurité de la vieillesse",scPageNameEn:"/en/projects/oas-benefits-estimator",scPageNameFr:"/fr/projets/estimateur-prestations-sv"}],scSubject:["gc:subjects/gv-government-and-politics/government-services"],scKeywordsEn:"feedback, benefits, estimator",scKeywordsFr:"rétroaction, prestations, estimateur",scContentType:["gc:content-types/promotional-material-featured-articles"],scOwner:["gc:institutions/service-canada"],scDateModifiedOverwrite:"2023-12-12",scSocialMediaImageEn:{_path:"/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",_publishUrl:"https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",width:2670,height:1543},scSocialMediaImageFr:{_path:"/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",_publishUrl:"https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",width:2670,height:1543},scSocialMediaImageAltTextEn:" Different kinds of feedback being gathered",scSocialMediaImageAltTextFr:" Un rassemblement de différents types de rétroaction"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/what-we-learned",scId:"WHAT-WE-LEARNED",scPageNameEn:"/en/projects/oas-benefits-estimator/what-we-learned",scPageNameFr:"/fr/projets/estimateur-prestations-sv/ce-que-nous-avons-appris",scLabProject:{scTermEn:"OAS Benefits Estimator",scTermFr:"Estimateur des prestations de la Sécurité de la vieillesse"},scTitleEn:"What we learned on Service Canada Labs before going live on Canada.ca",scTitleFr:"Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca",scBreadcrumbParentPages:[{scTitleEn:"Service Canada Labs",scTitleFr:"Laboratoires de Service Canada",scPageNameEn:"/en/home",scPageNameFr:"/fr/accueil"},{scTitleEn:"Old Age Security Benefits Estimator",scTitleFr:"Estimateur des prestations de la Sécurité de la vieillesse",scPageNameEn:"/en/projects/oas-benefits-estimator",scPageNameFr:"/fr/projets/estimateur-prestations-sv"}],scContentType:["gc:content-types/promotional-material-featured-articles"],scDateModifiedOverwrite:"2023-07-02",scSocialMediaImageEn:{_path:"/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",_publishUrl:"https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",width:2670,height:1543},scSocialMediaImageFr:{_path:"/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",_publishUrl:"https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",width:2670,height:1543},scSocialMediaImageAltTextEn:"People giving feedback",scSocialMediaImageAltTextFr:"Personnes qui donnent de la rétroaction"}],dictionary:[{_path:"/content/dam/decd-endc/content-fragments/sch/dictionary/opens-in-a-new-tab",scId:"opens-in-a-new-tab",scTermEn:"(Opens in a new tab)",scTermFr:"(S'ouvre dans un nouvel onglet)"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/all",scId:"ALL",scTermEn:"All",scTermFr:"Tous"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/ended",scId:"ENDED",scTermEn:"Ended",scTermFr:"Fin"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by",scId:"FILTER-BY",scTermEn:"Filter by:",scTermFr:"Filtrer par :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by-project",scId:"DICTIONARY-FILTER-BY-PROJECT",scTermEn:"Filter by project",scTermFr:"Filtrer par projet"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by-project-status",scId:"DICTIONARY-FILTER-BY-PROJECT-STATUS",scTermEn:"Filter by project status",scTermFr:"Filtrer par état du projet"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/last-updated",scId:"LAST-UPDATED",scTermEn:"Last updated:",scTermFr:"Dernière mise à jour :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/on-this-page",scId:"ON-THIS-PAGE",scTermEn:"On this page",scTermFr:"Sur cette page"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/optional-information",scId:"OPTIONAL-INFORMATION",scTermEn:"Optional information",scTermFr:"Renseignements optionnels"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/past-projects",scId:"PAST-PROJECTS",scTermEn:"Past projects",scTermFr:"Projets antérieurs"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/paused",scId:"PAUSED",scTermEn:"Paused:",scTermFr:"Interrompu :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/posted-on",scId:"POSTED-ON",scTermEn:"Posted on:",scTermFr:"Publié le :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/project-stage",scId:"PROJECT-STAGE",scTermEn:"Project stage:",scTermFr:"Phase du projet :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/project-updates",scId:"PROJECT-UPDATES",scTermEn:"Project updates",scTermFr:"Mises à jour du projet"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/required-information",scId:"REQUIRED-INFORMATION",scTermEn:"Required information",scTermFr:"Renseignements obligatoires"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/see-all-updates-project",scId:"DICTIONARY-SEE-ALL-UPDATES-PROJECT",scTermEn:"See all updates about this project",scTermFr:"Consulter toutes les mises à jour de ce projet"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/started",scId:"STARTED",scTermEn:"Started:",scTermFr:"Début :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/summary",scId:"SUMMARY",scTermEn:"Summary:",scTermFr:"Résumé :"},{_path:"/content/dam/decd-endc/content-fragments/sclabs/dictionary/upcoming-projects",scId:"UPCOMING-PROJECTS",scTermEn:"Upcoming projects",scTermFr:"Projets à venir"}],href:"#",linkLabel:"See more updates"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ExploreUpdates {...args}></ExploreUpdates>",...Default.parameters?.docs?.source}}}},"./components/atoms/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function Link({target="_self",href="#",...props}){let basicStyle="";switch(props.linkStyle){case"basicStyleWithEmphasis":basicStyle="underline text-multi-blue-blue70b font-body text-mobilebody lg:text-p font-bold text-mobileh5 leading-33px hover:text-multi-blue-blue50b";break;case"titleLink":basicStyle="underline text-multi-blue-blue70b font-header text-mobilebody lg:text-p leading-23px font-bold hover:text-multi-blue-blue50b";break;case"smfooterBlue":basicStyle="text-multi-blue-blue70b font-body leading-20px text-browserh7 hover:underline";break;case"smfooterWhite":basicStyle="text-multi-neutrals-white font-body text-browserh7 leading-20px font-regular hover:text-multi-neutrals-white hover:underline focus:ring-1 focus:ring-white";break;case"smBreadcrumbs":basicStyle="text-multi-blue-blue70b font-body text-mobilebody lg:text-p leading-23px font-regular hover:text-multi-blue-blue50b";break;case"cardActionLink":basicStyle="text-multi-blue-blue70b font-body text-mobilebody lg:text-p underline leading-28px font-regular hover:text-multi-blue-blue50b";break;default:basicStyle="underline underline-offset-4 text-multi-blue-blue70b font-body text-mobilebody lg:text-p leading-33px hover:text-multi-blue-blue50b"}const Component=props.component||"a";return"a"!==Component?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{href,disabled:props.disabled,lang:props.lang,target,"aria-label":props.ariaLabel||props.text,role:"link",className:`${basicStyle}`,children:props.text}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href,className:`${basicStyle}`,id:props.id,disabled:props.disabled,lang:props.lang,target,"aria-label":props.ariaLabel||props.text,locale:props.locale,onClick:props.onClick?props.onClick:void 0,"data-gc-analytics-customclick":props.dataGcAnalyticsCustomClick,children:props.text})}Link.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,abbr:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,target:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,lang:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,analyticsTracking:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,component:prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType},Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{target:{defaultValue:{value:'"_self"',computed:!1},description:"Target attribute to tell the browser where the linked document should be loaded.",type:{name:"string"},required:!1},href:{defaultValue:{value:'"#"',computed:!1},description:"Style link as a Text Link when there's a href",type:{name:"string"},required:!1},text:{description:"The text that Text Link will display",type:{name:"string"},required:!1},abbr:{description:"Abbrivation for text",type:{name:"string"},required:!1},id:{description:"Identify which Text Link being clicked",type:{name:"string"},required:!0},lang:{description:"Lang attribute for links that do not match the language of the top level document",type:{name:"string"},required:!1},className:{description:"css overrides for Link",type:{name:"string"},required:!1},analyticsTracking:{description:"For tracking on click of forms for analytics",type:{name:"bool"},required:!1},ariaLabel:{description:"use ariaLabel to provide more descriptive text for a link (screen reader friendly)",type:{name:"string"},required:!1},component:{description:"Allow user to use configurable component, default is html anchor tag",type:{name:"elementType"},required:!1}}}}}]);