"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[4529],{"./components/atoms/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ActionButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ActionButton(props){var style="primary"===props.style?"text-multi-neutrals-white bg-multi-blue-blue70 hover:bg-multi-blue-blue60g focus:bg-multi-blue-blue60g":"secondary"===props.style?"text-multi-blue-blue60b bg-multi-neutrals-grey30a hover:bg-multi-neutrals-grey50a focus:bg-multi-neutrals-grey60":"supertask"===props.style?"text-multi-neutrals-white bg-specific-green-green50 hover:bg-specific-green-green70 focus:bg-sepcific-green-green70":"danger"===props.style?"text-multi-neutrals-white bg-specific-red-red50 hover:bg-specific-red-red70 focus:bg-specific-red-red70":"link"===props.style?"text-multi-blue-blue60c hover:text-multi-blue-blue50b focus:text-multi-blue-blue60f":"";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var link=document.getElementById(props.id);link&&link.addEventListener("keydown",(function(event){"Spacebar"!==event.key&&" "!==event.key||(event.preventDefault(),link.click())}))})),props.href?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:props.href,"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"flex flex-row ".concat(style," focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base font-display ").concat(props.custom),onClick:props.onClick,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,role:"button",draggable:"false",lang:props.lang},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.text,props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0):__jsx("button",{"aria-expanded":"".concat(props.ariaExpanded?props.ariaExpanded:void 0),"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"flex flex-row ".concat(style," focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base font-display ").concat(props.custom),onClick:props.onClick,type:props.type,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,"data-gc-analytics-submit":props.analyticsTracking?"submit":void 0},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.imageSource&&props.imageAlt?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("img",{src:props.imageSource,alt:props.imageAlt}),__jsx("span",{className:props.imageSpanClass,"data-testid":props.dataTestId},props.imageSpanText)):void 0,__jsx("span",{className:"flex"},props.text,props.expandIcon),props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0)}ActionButton.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,iconEnd:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,lang:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["submit","reset"]),secondary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,tertiary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,custom:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["supertask","primary","secondary","danger","link"]),children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().element,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCyButton:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,analyticsTracking:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,expandIcon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,ariaExpanded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSource:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageAlt:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanText:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},ActionButton.__docgenInfo={description:"Button component",methods:[],displayName:"ActionButton",props:{icon:{description:"This will add an icon inside the button when needed",type:{name:"string"},required:!1},iconEnd:{description:"This is for placing an icon at the end of the component",type:{name:"bool"},required:!1},text:{description:"The text that the button will display",type:{name:"string"},required:!1},href:{description:"Style link as a button when there's a href",type:{name:"string"},required:!1},id:{description:"Identify which button being clicked",type:{name:"string"},required:!0},lang:{description:"Lang attribute for links that do not match the language of the top level document",type:{name:"string"},required:!1},type:{description:"the type of the button",type:{name:"enum",value:[{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},secondary:{description:"Secondary color styling option",type:{name:"bool"},required:!1},tertiary:{description:"Tertiary color styling option",type:{name:"bool"},required:!1},custom:{description:"Custom button styling option",type:{name:"string"},required:!1},onClick:{description:"Callback for a click event on the button",type:{name:"func"},required:!1},style:{description:"User must input one of the follow button styles to apply\nto their button. To apply the link style, the user must\nalso add a value to the href prop",type:{name:"enum",value:[{value:'"supertask"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1},{value:'"link"',computed:!1}]},required:!1},children:{description:"any other elements you want to add to the button",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1},dataCy:{description:"Test id for e2e test",type:{name:"string"},required:!1},dataCyButton:{description:"Test id for e2e test",type:{name:"string"},required:!1},disabled:{description:"Enabled or disabled the button",type:{name:"bool"},required:!1},analyticsTracking:{description:"For tracking reset or submit on forms for analytics",type:{name:"bool"},required:!1},expandIcon:{description:"Expand icon that will show the Feedback as popup",type:{name:"object"},required:!1},ariaExpanded:{description:"Aria expanded state",type:{name:"string"},required:!1},ariaLabel:{description:"Aria label",type:{name:"string"},required:!1},imageSource:{description:"Image source",type:{name:"string"},required:!1},imageAlt:{description:"Image alt",type:{name:"string"},required:!1},imageSpanText:{description:"Image span text",type:{name:"string"},required:!1},imageSpanClass:{description:"Image span classname",type:{name:"string"},required:!1}}}},"./components/molecules/FeedbackWidget.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>FeedbackWidget,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),next_i18next__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ActionButton.js"),joi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/joi/dist/joi-browser.min.js"),joi__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_3__),_atoms_ErrorLabel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/ErrorLabel.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_5__),react_lock_scroll__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-lock-scroll/build/index.js"),react_lock_scroll__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_lock_scroll__WEBPACK_IMPORTED_MODULE_6__),_lib_utils_stripFeedback__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./lib/utils/stripFeedback.js"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,FeedbackWidget=function FeedbackWidget(_ref){var showFeedback=_ref.showFeedback,toggleForm=_ref.toggleForm,projectName=_ref.projectName,path=_ref.path,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),submitted=_useState[0],setSubmitted=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),feedbackClose=_useState2[0],setFeedbackClose=_useState2[1],t=(0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.$)("common").t,_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t("thankYouFeedback")),response=_useState3[0],setResponse=_useState3[1],email=process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL,_useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2e3),count=_useState4[0],setCount=_useState4[1];react_lock_scroll__WEBPACK_IMPORTED_MODULE_6___default()(showFeedback),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){showFeedback||(setFeedbackError(""),setFeedback(""))}),[showFeedback]);var formSchema=joi__WEBPACK_IMPORTED_MODULE_3___default().object({feedback:joi__WEBPACK_IMPORTED_MODULE_3___default().string().required().error((function(errors){return errors.forEach((function(error){error.code,error.message=t("feedbackRequired")})),errors}))});var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),feedback=_useState5[0],setFeedback=_useState5[1],_useState6=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),feedbackError=_useState6[0],setFeedbackError=_useState6[1],feedbackObject=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({feedbackToSend:{project:"",pageUrl:"",feedback:""}}),onSubmitHandler=function(){var _ref2=(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(e){var formData,cleanedFeedback,_formSchema$validate,error,_response;return _home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return e.preventDefault(),_context.next=3,setFeedbackError("");case 3:if(formData={feedback},cleanedFeedback=(0,_lib_utils_stripFeedback__WEBPACK_IMPORTED_MODULE_9__.I)(formData.feedback),feedbackObject.current.feedbackToSend={project:projectName,pageUrl:path,feedback:cleanedFeedback},_formSchema$validate=formSchema.validate(formData,{abortEarly:!1,allowUnknown:!0}),error=_formSchema$validate.error,!(void 0===error)){_context.next=26;break}return _context.next=11,fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(feedbackObject.current.feedbackToSend)});case 11:if(201!==(_response=_context.sent).status&&200!==_response.status){_context.next=19;break}return _context.next=15,setResponse(t("thankYouFeedback"));case 15:setFeedback(""),setCount(2e3),_context.next=21;break;case 19:return _context.next=21,setResponse(t("sorryFeedback"));case 21:setSubmitted(!0),setFeedbackClose(!1),document.getElementById("feedbackButton").focus(),_context.next=27;break;case 26:setFeedbackError(error.message);case 27:case"end":return _context.stop()}}),_callee)})));return function onSubmitHandler(_x){return _ref2.apply(this,arguments)}}();return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,showFeedback?__jsx(focus_trap_react__WEBPACK_IMPORTED_MODULE_5___default(),{focusTrapOptions:{initialFocus:!1,fallbackFocus:"#feedbackClose"}},__jsx("div",{className:"fixed top-0 left-0 w-screen h-full flex justify-center items-center",style:{background:"rgba(71, 71, 71, 0.8)"}},__jsx("div",{className:"w-auto mx-12 md:mx-24 bg-white shadow-lg border-black border-4","data-testid":"feedbackDropdown"},submitted?__jsx("div",{role:"status",className:"w-full"},feedbackClose?"":__jsx("div",{className:"".concat(response===t("thankYouFeedback")?"bg-custom-green-darker font-bold":"bg-circle-color"," text-white flex py-2")},__jsx("div",{className:"layout-container flex"},__jsx("span",{className:"flex flex-col text-xs lg:text-sm font-body mt-2 mb-4 w-full"},response,response===t("sorryFeedback")?__jsx(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_2__.K,{id:"link-mail",ariaLabel:"Service Canada email",dataCy:"link-mail",dataTestId:"link-mail",href:"mailto:".concat(email),text:email,custom:"w-max text-xs lg:text-sm underline outline-none focus:outline-white-solid"}):""),__jsx("div",{className:"w-1/4 flex justify-end"},__jsx(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_2__.K,{id:"feedbackClose",ariaLabel:"Close the expanded feedback section",dataCy:"closeButton",dataTestId:"closeButton",custom:"font-body text-gray-dark-100 flex -py-1 mt-2.5 lg:mt-0 outline-none focus:outline-white-solid items-center",imageSource:"/close-x.svg",imageAlt:"Close button",imageSpanClass:"text-xs text-white leading-4 lg:text-sm underline ml-1 lg:ml-2 lg:leading-10",imageSpanText:t("close"),onClick:function onClick(){return setFeedbackClose(!0)},tabindex:"-1"}))))):"",__jsx("div",{className:"layout-container text-gray-dark-100 pb-4"},__jsx("div",{className:"pt-4"},__jsx(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_2__.K,{id:"feedbackClose",ariaLabel:"Close the expanded feedback section",dataCy:"closeButton",dataTestId:"closeButton",custom:"flex float-right font-body text-gray-dark-100 flex mt-2.5 lg:mt-0 outline-none focus:outline-white-solid items-center",imageSource:"/close-x.svg",imageAlt:"Close button",imageSpanClass:"text-xs leading-4 lg:text-sm underline ml-2 lg:leading-10",imageSpanText:t("close"),onClick:function onClick(){toggleForm(),setCount(2e3)}})),__jsx("h2",{className:"text-h4 lg:text-h3 lg:text-sm font-display pt-6 mb-4 w-48 sm:w-auto"},t("improveService")),__jsx("ul",{className:"list-outside list-disc px-6 pb-3"},__jsx("li",{className:"text-xs lg:text-sm pt-2 pb-1 font-body"},__jsx("strong",null,t("reportAProblemNoReply"))),__jsx("li",{className:"text-xs lg:text-sm font-body mb-0"},__jsx("strong",null,t("confidential")),__jsx(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_2__.K,{ariaLabel:"Privacy page link",id:"link-privacyPage",dataCy:"link-privacyPage",dataTestId:"link-privacyPage",href:t("privacyLink"),text:t("reportAProblemPrivacyStatement"),custom:"text-xs lg:text-sm underline ml-2 outline-none focus:outline-white-solid"}))),__jsx("form",{"data-gc-analytics-formname":"ESDC|EDSC:ServiceCanadaLabsFeedback-Form","data-gc-analytics-collect":'[{"value":"input,select","emptyField":"N/A"}]',className:"w-full",action:"#",onSubmit:onSubmitHandler,"aria-live":"polite"},__jsx("label",{htmlFor:"feedbackTextArea",className:"text-xs lg:text-sm font-body"},__jsx("b",{className:"text-error-border-red mr-1","aria-hidden":"true"},"*"),__jsx("b",null,t("doBetter"))),__jsx("div",{id:"feedbackInfo"},__jsx("p",{className:"text-xs lg:text-sm my-2"},t("doNotInclude")),__jsx("p",{className:"text-xs lg:text-sm mb-1 mt-4"},count,t("maximum2000"))),feedbackError?__jsx(_atoms_ErrorLabel__WEBPACK_IMPORTED_MODULE_4__.h,{message:feedbackError,className:"text-black mt-4"}):void 0,__jsx("textarea",{"aria-describedby":"feedbackInfo",id:"feedbackTextArea",name:"feedbackTextArea",maxLength:"2000",rows:"5",className:"text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 border-gray-dark-100 my-2 py-6px px-12px rounded",value:feedback,onChange:function onChange(e){return setFeedback(e.currentTarget.value)},onInput:function onInput(e){return setCount(2e3-e.currentTarget.value.length)},"aria-required":"true"}),__jsx(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_2__.K,{id:"feedback-submit",ariaLabel:"Submit feedback",custom:"outline-none focus:outline-black-solid rounded block w-full lg:w-auto lg:px-12 text-xs lg:text-sm py-2 mt-2 font-bold bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light flex justify-center",type:"submit",dataCy:"feedback-submit",dataTestId:"feedback-submit",text:t("reportAProblemSubmit"),analyticsTracking:!0})))))):"")};FeedbackWidget.propTypes={feedbackActive:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool},FeedbackWidget.__docgenInfo={description:"Displays the PhaseBanner on the page",methods:[],displayName:"FeedbackWidget",props:{feedbackActive:{description:"This is for showing the feedback component",type:{name:"bool"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=FeedbackWidget},"./lib/utils/stripFeedback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function stripFeedback(feedbackToClean){return feedbackToClean=(feedbackToClean=(feedbackToClean=(feedbackToClean=(feedbackToClean=feedbackToClean.replaceAll(/[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d/gim,"### ###")).replaceAll(/(\d{3}\s*\d{3}\s*\d{3}|\d{3}\D*\d{3}\D*\d{3})/gm,"### ### ###")).replaceAll(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/gim,"####@####.####")).replaceAll(/(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/gm,"# ### ### ###")).replaceAll(/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gm,"# ### ### ###")}__webpack_require__.d(__webpack_exports__,{I:()=>stripFeedback})}}]);