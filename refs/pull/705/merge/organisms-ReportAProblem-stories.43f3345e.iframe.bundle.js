"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[8509],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./components/atoms/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ActionButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ActionButton(props){var basicStyle="rounded focus:ring-1 focus:ring-black focus:ring-offset-2",defaultStyle="py-2 px-4 active:bg-custom-blue-blue text-white border border-custom-blue-blue bg-custom-blue-dark hover:bg-custom-blue-light",secondaryStyle="py-2 px-4 bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200",tertiaryStyle="py-2 underline hover:text-canada-footer-hover-font-blue text-canada-footer-font",disabledStyle="py-2 px-4 bg-gray-light text-gray-600 border border-gray-md";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var link=document.getElementById(props.id);link&&link.addEventListener("keydown",(function(event){"Spacebar"!==event.key&&" "!==event.key||(event.preventDefault(),link.click())}))})),props.href?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:props.href,"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"".concat(basicStyle,"\n      ").concat(props.secondary||props.tertiary||props.disabled||props.custom?props.className:defaultStyle,"\n      ").concat(props.secondary&&!props.disabled?secondaryStyle:props.className,"\n      ").concat(props.tertiary&&!props.disabled?tertiaryStyle:props.className,"\n      ").concat(props.custom&&!props.tertiary?props.custom:"","\n      ").concat(props.disabled?disabledStyle:props.className),onClick:props.onClick,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,role:"button",draggable:"false",lang:props.lang},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.text,props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0):__jsx("button",{"aria-expanded":"".concat(props.ariaExpanded?props.ariaExpanded:void 0),"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"".concat(basicStyle,"\n      ").concat(props.secondary||props.tertiary||props.disabled||props.custom?props.className:defaultStyle,"\n      ").concat(props.secondary&&!props.disabled?secondaryStyle:props.className,"\n      ").concat(props.tertiary&&!props.disabled?tertiaryStyle:props.className,"\n      ").concat(props.custom&&!props.tertiary?props.custom:"","\n      ").concat(props.disabled?disabledStyle:props.className),onClick:props.onClick,type:props.type,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,"data-gc-analytics-submit":props.analyticsTracking?"submit":void 0},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.imageSource&&props.imageAlt?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("img",{src:props.imageSource,alt:props.imageAlt}),__jsx("span",{className:props.imageSpanClass,"data-testid":props.dataTestId},props.imageSpanText)):void 0,__jsx("span",{className:"flex"},props.text,props.expandIcon),props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0)}ActionButton.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,iconEnd:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,lang:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["submit","reset"]),secondary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,tertiary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,custom:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().element,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCyButton:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,analyticsTracking:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,expandIcon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,ariaExpanded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSource:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageAlt:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanText:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},ActionButton.__docgenInfo={description:"Button component",methods:[],displayName:"ActionButton",props:{icon:{description:"This will add an icon inside the button when needed",type:{name:"string"},required:!1},iconEnd:{description:"This is for placing an icon at the end of the component",type:{name:"bool"},required:!1},text:{description:"The text that the button will display",type:{name:"string"},required:!1},href:{description:"Style link as a button when there's a href",type:{name:"string"},required:!1},id:{description:"Identify which button being clicked",type:{name:"string"},required:!0},lang:{description:"Lang attribute for links that do not match the language of the top level document",type:{name:"string"},required:!1},type:{description:"the type of the button",type:{name:"enum",value:[{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},secondary:{description:"Secondary color styling option",type:{name:"bool"},required:!1},tertiary:{description:"Tertiary color styling option",type:{name:"bool"},required:!1},custom:{description:"Custom button styling option",type:{name:"string"},required:!1},onClick:{description:"Callback for a click event on the button",type:{name:"func"},required:!1},className:{description:"css overrides for button",type:{name:"string"},required:!1},children:{description:"any other elements you want to add to the button",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1},dataCy:{description:"Test id for e2e test",type:{name:"string"},required:!1},dataCyButton:{description:"Test id for e2e test",type:{name:"string"},required:!1},disabled:{description:"Enabled or disabled the button",type:{name:"bool"},required:!1},analyticsTracking:{description:"For tracking reset or submit on forms for analytics",type:{name:"bool"},required:!1},expandIcon:{description:"Expand icon that will show the Feedback as popup",type:{name:"object"},required:!1},ariaExpanded:{description:"Aria expanded state",type:{name:"string"},required:!1},ariaLabel:{description:"Aria label",type:{name:"string"},required:!1},imageSource:{description:"Image source",type:{name:"string"},required:!1},imageAlt:{description:"Image alt",type:{name:"string"},required:!1},imageSpanText:{description:"Image span text",type:{name:"string"},required:!1},imageSpanClass:{description:"Image span classname",type:{name:"string"},required:!1}}}},"./components/molecules/Details.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Details});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Details(props){return __jsx("details",{"data-testid":props.dataTestId,"data-cy":props.dataCy},__jsx("summary",{className:"max-w-450px w-full bg-details-button-gray focus:ring-inset focus:ring-2 focus:ring-black active:bg-details-button-active-gray hover:bg-details-button-hover-gray rounded py-12px px-5px font-body text-sm text-center text-canada-footer-font cursor-pointer border border-outset border-details-button-gray"},props.label),__jsx("div",{className:"max-w-450px w-full min-h-200px bg-gray-light-200 mt-1 p-15px border border-details-border-gray rounded ring-inset ring-1 ring-gray-light-200"},props.children))}Details.displayName="Details",Details.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Details.__docgenInfo={description:"Drop Down Element",methods:[],displayName:"Details",props:{id:{description:"id for the details element",type:{name:"string"},required:!1},label:{description:"the label of the details button",type:{name:"string"},required:!0},children:{description:"the content for the details element",type:{name:"node"},required:!1},dataTestId:{description:"unit test selector",type:{name:"string"},required:!1},dataCy:{description:"cypress selector",type:{name:"string"},required:!1}}}},"./components/organisms/ReportAProblem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ReportAProblem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_i18next__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/OptionalTextField.js"),_molecules_Details__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/Details.js"),_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/ActionButton.js"),_lib_utils_stripFeedback__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./lib/utils/stripFeedback.js"),_atoms_ErrorLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/atoms/ErrorLabel.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ReportAProblem(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),submitted=_useState[0],setSubmitted=_useState[1],_useTranslation=(0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.$)(),t=_useTranslation.t,i18n=_useTranslation.i18n,_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),submittedOnce=_useState2[0],setSubmittedOnce=_useState2[1];return __jsx(_molecules_Details__WEBPACK_IMPORTED_MODULE_3__.P,{label:t("footerReportProblemButtonString",{lng:props.language}),dataCy:"report-a-problem-details",dataTestId:"report-a-problem-details"},__jsx("div",{role:"status"},submitted?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",{className:"text-h3 font-display mb-4 font-bold"},__jsx("b",null,t("reportAProblemThankYouForYourHelp",{lng:props.language}))),__jsx("p",{className:"text-sm font-body"},t("reportAProblemYouWillNotBeContacted",{lng:props.language}))):""),submitted?"":__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",{className:"text-base font-body"},t("reportAProblemTitle")),__jsx("ul",{className:"list-outside list-disc px-6 py-2"},__jsx("li",{className:"text-xs sm:text-sm font-body mb-4 leading-tight sm:leading-6"},__jsx("b",null,t("reportAProblemNoReply",{lng:props.language}))),__jsx("li",{className:"text-xs sm:text-sm font-body my-4 leading-tight sm:leading-6"},__jsx("b",null,t("reportAProblemFeedbackConfidential",{lng:props.language}))," ",__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/signup/privacy",className:"underline text-xs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"},t("reportAProblemPrivacyStatement")))),__jsx("form",{"data-gc-analytics-formname":"ESDC|EDSC:ServiceCanadaLabsReport-Problem","data-gc-analytics-collect":'[{"value":"input,select","emptyField":"N/A"}]',className:"w-full",action:"#",onSubmit:function onSubmitHandler(e){for(var checkBoxSelected=!1,inputElements=document.getElementsByTagName("input"),index=0;index<inputElements.length;index++)"checkbox"==inputElements[index].type&&inputElements[index].checked&&(checkBoxSelected=!0);e.preventDefault();var _step,formData=new FormData(e.target),_iterator=_createForOfIteratorHelper(formData.entries());try{for(_iterator.s();!(_step=_iterator.n()).done;){var pair=_step.value,cleanedFeedback=(0,_lib_utils_stripFeedback__WEBPACK_IMPORTED_MODULE_7__.I)(pair[1]);formData.set(pair[0],cleanedFeedback)}}catch(err){_iterator.e(err)}finally{_iterator.f()}var _step2,urlString=new URLSearchParams(formData).toString(),_iterator2=_createForOfIteratorHelper(0==formData.get("language").toString().localeCompare("fr")?["Informations+incorrectes","Informations+impr%C3%A9cises","Vous+n%E2%80%99avez+pas+trouv%C3%A9+ce+que+vous+cherchiez","La+page+ne+fonctionne+pas+avec+vos+technologies+d%E2%80%99adaptation","Vous+%C3%AAtes+inquiet+pour+votre+vie+priv%C3%A9e","Vous+ne+savez+pas+o%C3%B9+trouver+de+l%E2%80%99aide","Autres"]:["Incorrect+Information","Unclear+Information","You+didn%E2%80%99t+find+what+you+were+looking+for","Page+does+not+work+with+your+adaptive+technologies","You%E2%80%99re+worried+about+your+privacy","You+don%E2%80%99t+know+where+else+to+go+for+help","Other"]);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var value=_step2.value;urlString=urlString.replace(value,"yes")}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}fetch("/api/report-a-problem",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:urlString}).catch((function(e){console.log(e)})),checkBoxSelected&&setSubmitted(!0),setSubmittedOnce(!0)}},__jsx("input",{type:"hidden",id:"language",name:"language",value:i18n.language}),__jsx("fieldset",null,__jsx("legend",{className:"text-base sm:text-p font-body font-normal mb-6"},__jsx("b",{className:"text-error-border-red mr-2","aria-hidden":"true"},"*"),t("reportAProblemCheckAllThatApply",{lng:props.language})),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"incorrectInformationCheckBox",textFieldId:"incorrectInformationTextField",controlName:"incorrect_information",textFieldName:"incorrect_information_details",controlLabel:t("reportAProblemIncorrectInformation",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"incorrectInformation-checkbox",textFieldDataTestId:"incorrectInformation-text",controlDataCy:"incorrectInformation-checkbox",textFieldDataCy:"incorrectInformation-text",describedby:"incorrectInformation",OptionalTextField:!0,checkBoxStyle:"mb-4 inline-block",controlValue:t("reportAProblemIncorrectInformation",{lng:props.language})}),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"unclearInformationCheckBox",textFieldId:"unclearInformationTextField",controlName:"unclear_information",textFieldName:"unclear_information_details",controlLabel:t("reportAProblemUnclearInformation",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"unclearInformation-checkbox",textFieldDataTestId:"unclearInformation-text",controlDataCy:"unclearInformation-checkbox",textFieldDataCy:"unclearInformation-text",describedby:"unclearInformation",checkBoxStyle:"mb-4 inline-block",controlValue:t("reportAProblemUnclearInformation",{lng:props.language})}),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"infoNotFoundCheckBox",textFieldId:"infoNotFoundTextField",controlName:"info_not_found",textFieldName:"info_not_found_details",controlLabel:t("reportAProblemDidNotFindWhatYoureLookingFor",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"infoNotFound-checkbox",textFieldDataTestId:"infoNotFound-text",controlDataCy:"infoNotFound-checkbox",textFieldDataCy:"infoNotFound-text",describedby:"infoNotFound",checkBoxStyle:"lg:mb-8 mb-4 inline-block",controlValue:t("reportAProblemDidNotFindWhatYoureLookingFor",{lng:props.language})}),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"adaptiveTechnologyCheckBox",textFieldId:"adaptiveTechnologyTextField",controlName:"adaptive_technology",textFieldName:"adaptive_technology_details",controlLabel:t("reportAProblemPageDoesNotWorkWithAdaptiveTechnology",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"adaptiveTechnology-checkbox",textFieldDataTestId:"adaptiveTechnology-text",controlDataCy:"adaptiveTechnology-checkbox",textFieldDataCy:"adaptiveTechnology-text",describedby:"adaptiveTechnology",checkBoxStyle:"mb-8 inline-block",controlValue:t("reportAProblemPageDoesNotWorkWithAdaptiveTechnology",{lng:props.language})}),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"privacyIssuesCheckBox",textFieldId:"privacyIssuesTextField",controlName:"privacy_issues",textFieldName:"privacy_issues_details",controlLabel:t("reportAProblemYoureWorriedAboutYourPrivacy",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"privacyIssues-checkbox",textFieldDataTestId:"privacyIssues-text",controlDataCy:"privacyIssues-checkbox",textFieldDataCy:"privacyIssues-text",describedby:"privacyIssues",checkBoxStyle:"mb-4 inline-block",controlValue:t("reportAProblemYoureWorriedAboutYourPrivacy",{lng:props.language})}),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"noWhereElseToGoCheckBox",textFieldId:"noWhereElseToGoTextField",controlName:"no_where_else_to_go",textFieldName:"no_where_else_to_go_details",controlLabel:t("reportAProblemNoWhereElseToGo",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"noWhereElseToGo-checkbox",textFieldDataTestId:"noWhereElseToGo-text",controlDataCy:"noWhereElseToGo-checkbox",textFieldDataCy:"noWhereElseToGo-text",describedby:"noWhereElseToGo",checkBoxStyle:"lg:mb-8 mb-4 inline-block",controlValue:t("reportAProblemNoWhereElseToGo",{lng:props.language})}),__jsx(_molecules_OptionalTextField__WEBPACK_IMPORTED_MODULE_2__.V,{controlId:"otherCheckBox",textFieldId:"otherTextField",controlName:"other",textFieldName:"other_details",controlLabel:t("reportAProblemOther",{lng:props.language}),textFieldLabel:t("reportAProblemProvideMoreDetails",{lng:props.language}),uncontrolled:!0,multiText:!0,textLabelBold:!0,wrap:"hard",maxLength:750,controlDataTestId:"other-checkbox",textFieldDataTestId:"other-text",controlDataCy:"other-checkbox",textFieldDataCy:"other-text",describedby:"other",checkBoxStyle:"mb-4",controlValue:t("reportAProblemOther",{lng:props.language})}),submittedOnce?__jsx(_atoms_ErrorLabel__WEBPACK_IMPORTED_MODULE_5__.h,{message:t("reportAProblemError",{lng:props.language})}):void 0),__jsx(_atoms_ActionButton__WEBPACK_IMPORTED_MODULE_4__.K,{id:"submit",className:"rounded block mt-4",type:"submit",dataCy:"report-a-problem-submit",dataTestId:"report-a-problem-submit",analyticsTracking:!0},t("reportAProblemSubmit",{lng:props.language})))))}ReportAProblem.displayName="ReportAProblem",ReportAProblem.propTypes={language:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string},ReportAProblem.__docgenInfo={description:"Report a problem button to report technical issues on the page.",methods:[],displayName:"ReportAProblem",props:{language:{description:"Translation language",type:{name:"string"},required:!1}}}},"./lib/utils/stripFeedback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function stripFeedback(feedbackToClean){return feedbackToClean=(feedbackToClean=(feedbackToClean=(feedbackToClean=(feedbackToClean=feedbackToClean.replaceAll(/[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d/gim,"### ###")).replaceAll(/(\d{3}\s*\d{3}\s*\d{3}|\d{3}\D*\d{3}\D*\d{3})/gm,"### ### ###")).replaceAll(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/gim,"####@####.####")).replaceAll(/(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/gm,"# ### ### ###")).replaceAll(/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gm,"# ### ### ###")}__webpack_require__.d(__webpack_exports__,{I:()=>stripFeedback})},"./components/organisms/ReportAProblem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ReportAProblem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/ReportAProblem.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Organisms/ReportAProblem",component:_ReportAProblem__WEBPACK_IMPORTED_MODULE_2__.I};var Template=function Template(args){return __jsx(_ReportAProblem__WEBPACK_IMPORTED_MODULE_2__.I,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ReportAProblem {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useTranslation});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./node_modules/react-i18next/dist/es/context.js");function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var usePrevious=function usePrevious(value,ignore){var ref=(0,react.useRef)();return(0,react.useEffect)((function(){ref.current=ignore?ref.current:value}),[value,ignore]),ref.current};function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react.useContext)(context.OO)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||(0,context.nI)();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new context.zv),!i18n){warnOnce("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=_objectSpread(_objectSpread(_objectSpread({},(0,context.JP)()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState2=_slicedToArray((0,react.useState)(getT),2),t=_useState2[0],setT=_useState2[1],joinedNS=namespaces.join(),previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||loadNamespaces(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,joinedNS]);var isInitial=(0,react.useRef)(!0);(0,react.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){loadNamespaces(i18n,namespaces,(function(){resolve()}))}))}}}]);