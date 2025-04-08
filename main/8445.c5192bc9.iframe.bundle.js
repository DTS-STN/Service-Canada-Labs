(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[8445],{"./components/atoms/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ActionButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function ActionButton(props){const style="primary"===props.style?"text-multi-neutrals-white bg-multi-blue-blue70 hover:bg-multi-blue-blue60g focus:bg-multi-blue-blue60g":"secondary"===props.style?"text-multi-blue-blue60b bg-multi-neutrals-grey30a hover:bg-multi-neutrals-grey50a focus:bg-multi-neutrals-grey60":"tertiary"===props.style?"text-multi-neutrals-black bg-white hover:bg-multi-neutrals-grey50a focus:bg-multi-neutrals-grey60":"supertask"===props.style?"text-multi-neutrals-white bg-specific-green-green50 hover:bg-specific-green-green70 focus:bg-sepcific-green-green70":"danger"===props.style?"text-multi-neutrals-white bg-specific-red-red50 hover:bg-specific-red-red70 focus:bg-specific-red-red70":"link"===props.style?"text-multi-blue-blue60c hover:text-multi-blue-blue50b focus:text-multi-blue-blue60f":"";return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{let link=document.getElementById(props.id);link&&link.addEventListener("keydown",(event=>{"Spacebar"!==event.key&&" "!==event.key||(event.preventDefault(),link.click())}))})),props.href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:props.href,"aria-label":`${props.ariaLabel?props.ariaLabel:void 0}`,className:`flex flex-row ${style} focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded w-fit text-mobilebody lg:text-p font-body ${props.custom}`,onClick:props.onClick,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,role:"button",draggable:"false",lang:props.lang,children:[props.icon&&!props.iconEnd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.text,props.children,props.icon&&props.iconEnd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:`${props.icon} ${props.iconStyle}`,"data-testid":props.dataTestId}):void 0]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{"aria-expanded":`${props.ariaExpanded?props.ariaExpanded:void 0}`,"aria-label":`${props.ariaLabel?props.ariaLabel:void 0}`,className:`flex flex-row ${style} focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded w-fit text-mobilebody lg:text-p font-body ${props.custom}`,onClick:props.onClick,type:props.type,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,"data-gc-analytics-submit":props.analyticsTracking?"submit":void 0,children:[props.icon&&!props.iconEnd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.imageSource&&props.imageAlt?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:props.imageSource,alt:props.imageAlt}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:props.imageSpanClass,"data-testid":props.dataTestId,children:props.imageSpanText})]}):void 0,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"flex",children:[props.text,props.expandIcon]}),props.children,props.icon&&props.iconEnd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:`${props.icon} ${props.iconStyle}`,"data-testid":props.dataTestId}):void 0]})}ActionButton.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,iconEnd:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,iconStyle:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,lang:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["submit","reset"]),secondary:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,tertiary:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,custom:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,style:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["supertask","primary","secondary","danger","link","tertiary"]),children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().element,prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().element)]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,dataCyButton:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,analyticsTracking:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,expandIcon:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,ariaExpanded:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,imageSource:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,imageAlt:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,imageSpanText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,imageSpanClass:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},ActionButton.__docgenInfo={description:"Button component",methods:[],displayName:"ActionButton",props:{icon:{description:"This will add an icon inside the button when needed",type:{name:"string"},required:!1},iconEnd:{description:"This is for placing an icon at the end of the component",type:{name:"bool"},required:!1},iconStyle:{description:"This will add styles to the icon span inside the button when needed",type:{name:"string"},required:!1},text:{description:"The text that the button will display",type:{name:"string"},required:!1},href:{description:"Style link as a button when there's a href",type:{name:"string"},required:!1},id:{description:"Identify which button being clicked",type:{name:"string"},required:!0},lang:{description:"Lang attribute for links that do not match the language of the top level document",type:{name:"string"},required:!1},type:{description:"the type of the button",type:{name:"enum",value:[{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},secondary:{description:"Secondary color styling option",type:{name:"bool"},required:!1},tertiary:{description:"Tertiary color styling option",type:{name:"bool"},required:!1},custom:{description:"Custom button styling option",type:{name:"string"},required:!1},onClick:{description:"Callback for a click event on the button",type:{name:"func"},required:!1},style:{description:"User must input one of the follow button styles to apply\nto their button. To apply the link style, the user must\nalso add a value to the href prop",type:{name:"enum",value:[{value:'"supertask"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1},{value:'"link"',computed:!1},{value:'"tertiary"',computed:!1}]},required:!1},children:{description:"any other elements you want to add to the button",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1},dataCy:{description:"Test id for e2e test",type:{name:"string"},required:!1},dataCyButton:{description:"Test id for e2e test",type:{name:"string"},required:!1},disabled:{description:"Enabled or disabled the button",type:{name:"bool"},required:!1},analyticsTracking:{description:"For tracking reset or submit on forms for analytics",type:{name:"bool"},required:!1},expandIcon:{description:"Expand icon that will show the Feedback as popup",type:{name:"object"},required:!1},ariaExpanded:{description:"Aria expanded state",type:{name:"string"},required:!1},ariaLabel:{description:"Aria label",type:{name:"string"},required:!1},imageSource:{description:"Image source",type:{name:"string"},required:!1},imageAlt:{description:"Image alt",type:{name:"string"},required:!1},imageSpanText:{description:"Image span text",type:{name:"string"},required:!1},imageSpanClass:{description:"Image span classname",type:{name:"string"},required:!1}}}},"./components/atoms/ErrorLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ErrorLabel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function ErrorLabel(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`error-label border-l-4 border-error-border-red px-3 py-1 bg-error-background-red font-body font-bold mb-5px text-sm lg:text-p ${props.className}`,children:props.message})}ErrorLabel.propTypes={message:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},ErrorLabel.__docgenInfo={description:"error label component that is used with form inputs to display error messages",methods:[],displayName:"ErrorLabel",props:{message:{description:"",type:{name:"string"},required:!0},className:{description:"Prop for adding some classes",type:{name:"string"},required:!1}}}},"./components/molecules/FeedbackWidget.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>FeedbackWidget,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),next_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next-i18next/dist/esm/index.js"),_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/atoms/ActionButton.js"),joi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/joi/dist/joi-browser.min.js"),joi__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_4__),_atoms_ErrorLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/atoms/ErrorLabel.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_6__),react_lock_scroll__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-lock-scroll/build/index.js"),react_lock_scroll__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_lock_scroll__WEBPACK_IMPORTED_MODULE_7__),_lib_utils_stripFeedback__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./lib/utils/stripFeedback.js"),process=__webpack_require__("./node_modules/process/browser.js");const FeedbackWidget=({showFeedback,toggleForm,projectName,path})=>{const[submitted,setSubmitted]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[feedbackClose,setFeedbackClose]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),{t}=(0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.$G)("feedbackwidget"),[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t("feedbackWidgetThankYou")),email=process.env.SUBMIT_FEEDBACK_EMAIL,[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2e3);react_lock_scroll__WEBPACK_IMPORTED_MODULE_7___default()(showFeedback),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{showFeedback||(setFeedbackError(""),setFeedback(""))}),[showFeedback]);const formSchema=joi__WEBPACK_IMPORTED_MODULE_4___default().object({feedback:joi__WEBPACK_IMPORTED_MODULE_4___default().string().required().error((errors=>(errors.forEach((error=>{error.code,error.message=t("feedbackRequired")})),errors)))});const[feedback,setFeedback]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[feedbackError,setFeedbackError]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),feedbackObject=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({feedbackToSend:{project:"",pageUrl:"",feedback:""}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:showFeedback?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(focus_trap_react__WEBPACK_IMPORTED_MODULE_6___default(),{focusTrapOptions:{initialFocus:!1,fallbackFocus:"#feedbackClose"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed top-0 left-0 w-screen h-full flex justify-center items-center",style:{background:"rgba(71, 71, 71, 0.8)"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-auto mx-12 md:mx-24 bg-white shadow-lg border-black border-4","data-testid":"feedbackDropdown",children:[submitted?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{role:"status",className:"w-full",children:feedbackClose?"":(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(response===t("feedbackWidgetThankYou")?"bg-custom-green-darker font-bold":"bg-circle-color")+" text-white flex py-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"layout-container flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"flex flex-col text-xs lg:text-sm font-body mt-2 mb-4 w-full",children:[response,response===t("feedbackWidgetSorryFeedback")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_3__.K,{id:"link-mail",ariaLabel:"Service Canada email",dataCy:"link-mail",dataTestId:"link-mail",href:`mailto:${email}`,text:email,custom:"w-max text-xs lg:text-sm underline outline-none focus:outline-white-solid"}):""]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-1/4 flex justify-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_3__.K,{id:"feedbackClose",ariaLabel:"Close the expanded feedback section",dataCy:"closeButton",dataTestId:"closeButton",custom:"font-body text-gray-dark-100 flex -py-1 mt-2.5 lg:mt-0 outline-none focus:outline-white-solid items-center",imageSource:"/close-x.svg",imageAlt:"Close button",imageSpanClass:"text-xs text-white leading-4 lg:text-sm underline ml-1 lg:ml-2 lg:leading-10",imageSpanText:t("feedbackWidgetClose"),onClick:()=>setFeedbackClose(!0),tabindex:"-1"})})]})})}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"layout-container text-gray-dark-100 pb-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pt-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_3__.K,{id:"feedbackClose",ariaLabel:"Close the expanded feedback section",dataCy:"closeButton",dataTestId:"closeButton",custom:"flex float-right font-body text-gray-dark-100 flex mt-2.5 lg:mt-0 outline-none focus:outline-white-solid items-center",imageSource:"/close-x.svg",imageAlt:"Close button",imageSpanClass:"text-xs leading-4 lg:text-sm underline ml-2 lg:leading-10",imageSpanText:t("feedbackWidgetClose"),onClick:()=>{toggleForm(),setCount(2e3)}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-h4 lg:text-h3 lg:text-sm font-display pt-6 mb-4 w-48 sm:w-auto",children:t("feedbackWidgetImproveService")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"list-outside list-disc px-6 pb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"text-xs lg:text-sm pt-2 pb-1 font-body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:t("feedbackWidgetNoReply")})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"text-xs lg:text-sm font-body mb-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:t("feedbackWidgetConfidential")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_3__.K,{ariaLabel:"Privacy page link",id:"link-privacyPage",dataCy:"link-privacyPage",dataTestId:"link-privacyPage",href:t("privacyLink"),text:t("feedbackWidgetPrivacyStatement"),custom:"text-xs lg:text-sm underline ml-2 outline-none focus:outline-white-solid"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{"data-gc-analytics-formname":"ESDC|EDSC:ServiceCanadaLabsFeedback-Form","data-gc-analytics-collect":'[{"value":"input,select","emptyField":"N/A"}]',className:"w-full",action:"#",onSubmit:async e=>{e.preventDefault(),await setFeedbackError("");const formData={feedback};var cleanedFeedback=(0,_lib_utils_stripFeedback__WEBPACK_IMPORTED_MODULE_8__.I)(formData.feedback);feedbackObject.current.feedbackToSend={project:projectName,pageUrl:path,feedback:cleanedFeedback};const{error}=formSchema.validate(formData,{abortEarly:!1,allowUnknown:!0});if(void 0===error){const response=await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(feedbackObject.current.feedbackToSend)});201===response.status||200===response.status?(await setResponse(t("feedbackWidgetThankYou")),setFeedback(""),setCount(2e3)):await setResponse(t("feedbackWidgetSorryFeedback")),setSubmitted(!0),setFeedbackClose(!1),function setFocusAfterSubmit(){document.getElementById("feedbackButton").focus()}()}else setFeedbackError(error.message)},"aria-live":"polite",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:"feedbackTextArea",className:"text-xs lg:text-sm font-body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{className:"text-error-border-red mr-1","aria-hidden":"true",children:"*"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:t("feedbackWidgetDoBetter")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"feedbackInfo",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-xs lg:text-sm my-2",children:t("feedbackWidgetDoNotInclude")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"text-xs lg:text-sm mb-1 mt-4",children:[count,t("feedbackWidgetMaximum2000")]})]}),feedbackError?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_ErrorLabel__WEBPACK_IMPORTED_MODULE_5__.h,{message:feedbackError,className:"text-black mt-4"}):void 0,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{"aria-describedby":"feedbackInfo",id:"feedbackTextArea",name:"feedbackTextArea",maxLength:"2000",rows:"5",className:"text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 border-gray-dark-100 my-2 py-6px px-12px rounded",value:feedback,onChange:e=>setFeedback(e.currentTarget.value),onInput:e=>setCount(2e3-e.currentTarget.value.length),"aria-required":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_3__.K,{id:"feedback-submit",ariaLabel:"Submit feedback",custom:"outline-none focus:outline-black-solid rounded block w-full lg:w-auto lg:px-12 text-xs lg:text-sm py-2 mt-2 font-bold bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light flex justify-center",type:"submit",dataCy:"feedback-submit",dataTestId:"feedback-submit",text:t("feedbackWidgetSubmit"),analyticsTracking:!0})]})]})]})})}):""})};FeedbackWidget.propTypes={feedbackActive:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool};const __WEBPACK_DEFAULT_EXPORT__=FeedbackWidget;FeedbackWidget.__docgenInfo={description:"Displays the PhaseBanner on the page",methods:[],displayName:"FeedbackWidget",props:{feedbackActive:{description:"This is for showing the feedback component",type:{name:"bool"},required:!1}}}},"./lib/utils/stripFeedback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function stripFeedback(feedbackToClean){return feedbackToClean=(feedbackToClean=(feedbackToClean=(feedbackToClean=(feedbackToClean=feedbackToClean.replaceAll(/[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d/gim,"### ###")).replaceAll(/(\d{3}\s*\d{3}\s*\d{3}|\d{3}\D*\d{3}\D*\d{3})/gm,"### ### ###")).replaceAll(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/gim,"####@####.####")).replaceAll(/(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/gm,"# ### ### ###")).replaceAll(/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gm,"# ### ### ###")}__webpack_require__.d(__webpack_exports__,{I:()=>stripFeedback})},"?6a05":()=>{}}]);