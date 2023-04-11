"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[5713],{"./components/atoms/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ActionButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ActionButton(props){var style="primary"===props.style?"text-multi-neutrals-white bg-multi-blue-blue70 hover:bg-multi-blue-blue60g focus:bg-multi-blue-blue60g":"secondary"===props.style?"text-multi-blue-blue60b bg-multi-neutrals-grey30a hover:bg-multi-neutrals-grey50a focus:bg-multi-neutrals-grey60":"supertask"===props.style?"text-multi-neutrals-white bg-specific-green-green50 hover:bg-specific-green-green70 focus:bg-sepcific-green-green70":"danger"===props.style?"text-multi-neutrals-white bg-specific-red-red50 hover:bg-specific-red-red70 focus:bg-specific-red-red70":"link"===props.style?"text-multi-blue-blue60c hover:text-multi-blue-blue50b focus:text-multi-blue-blue60f":"";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var link=document.getElementById(props.id);link&&link.addEventListener("keydown",(function(event){"Spacebar"!==event.key&&" "!==event.key||(event.preventDefault(),link.click())}))})),props.href?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:props.href,"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"flex flex-row ".concat(style," focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base font-display ").concat(props.custom),onClick:props.onClick,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,role:"button",draggable:"false",lang:props.lang},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.text,props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0):__jsx("button",{"aria-expanded":"".concat(props.ariaExpanded?props.ariaExpanded:void 0),"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"flex flex-row ".concat(style," focus:ring focus:ring-offset-4 ring-multi-blue-blue60f py-2 px-4 rounded-sm w-fit text-base font-display ").concat(props.custom),onClick:props.onClick,type:props.type,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,"data-gc-analytics-submit":props.analyticsTracking?"submit":void 0},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.imageSource&&props.imageAlt?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("img",{src:props.imageSource,alt:props.imageAlt}),__jsx("span",{className:props.imageSpanClass,"data-testid":props.dataTestId},props.imageSpanText)):void 0,__jsx("span",{className:"flex"},props.text,props.expandIcon),props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0)}ActionButton.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,iconEnd:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,lang:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["submit","reset"]),secondary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,tertiary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,custom:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["supertask","primary","secondary","danger","link"]),children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().element,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCyButton:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,analyticsTracking:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,expandIcon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,ariaExpanded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSource:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageAlt:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanText:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},ActionButton.__docgenInfo={description:"Button component",methods:[],displayName:"ActionButton",props:{icon:{description:"This will add an icon inside the button when needed",type:{name:"string"},required:!1},iconEnd:{description:"This is for placing an icon at the end of the component",type:{name:"bool"},required:!1},text:{description:"The text that the button will display",type:{name:"string"},required:!1},href:{description:"Style link as a button when there's a href",type:{name:"string"},required:!1},id:{description:"Identify which button being clicked",type:{name:"string"},required:!0},lang:{description:"Lang attribute for links that do not match the language of the top level document",type:{name:"string"},required:!1},type:{description:"the type of the button",type:{name:"enum",value:[{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},secondary:{description:"Secondary color styling option",type:{name:"bool"},required:!1},tertiary:{description:"Tertiary color styling option",type:{name:"bool"},required:!1},custom:{description:"Custom button styling option",type:{name:"string"},required:!1},onClick:{description:"Callback for a click event on the button",type:{name:"func"},required:!1},style:{description:"User must input one of the follow button styles to apply\nto their button. To apply the link style, the user must\nalso add a value to the href prop",type:{name:"enum",value:[{value:'"supertask"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1},{value:'"link"',computed:!1}]},required:!1},children:{description:"any other elements you want to add to the button",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1},dataCy:{description:"Test id for e2e test",type:{name:"string"},required:!1},dataCyButton:{description:"Test id for e2e test",type:{name:"string"},required:!1},disabled:{description:"Enabled or disabled the button",type:{name:"bool"},required:!1},analyticsTracking:{description:"For tracking reset or submit on forms for analytics",type:{name:"bool"},required:!1},expandIcon:{description:"Expand icon that will show the Feedback as popup",type:{name:"object"},required:!1},ariaExpanded:{description:"Aria expanded state",type:{name:"string"},required:!1},ariaLabel:{description:"Aria label",type:{name:"string"},required:!1},imageSource:{description:"Image source",type:{name:"string"},required:!1},imageAlt:{description:"Image alt",type:{name:"string"},required:!1},imageSpanText:{description:"Image span text",type:{name:"string"},required:!1},imageSpanClass:{description:"Image span classname",type:{name:"string"},required:!1}}}},"./components/molecules/TextButtonField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,default:()=>TextButtonField_stories});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Disabled$parameters,_Disabled$parameters2,_Disabled$parameters3,_Custom$parameters,_Custom$parameters2,_Custom$parameters2$d,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),ActionButton=__webpack_require__("./components/atoms/ActionButton.js"),__jsx=react.createElement;function TextButtonField(props){var secondary;return void 0===props.custom&&(secondary=void 0===props.secondary||props.secondary),__jsx("div",{className:props.className+" mb-4 mx-0"},void 0===props.html?__jsx("div",{className:"textbuttonField"},props.children):__jsx("div",{className:"textbuttonField",dangerouslySetInnerHTML:{__html:props.html}}),props.buttonText?__jsx(ActionButton.K,{id:props.idButton,className:"mt-2 text-xs md:text-base",text:props.buttonText,secondary,disabled:props.disabled,custom:props.custom,href:props.href,dataCyButton:props.dataCyButton}):"")}TextButtonField.displayName="TextButtonField",TextButtonField.propTypes={className:prop_types_default().string,html:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element,prop_types_default().arrayOf(prop_types_default().element)]),idButton:prop_types_default().string,href:prop_types_default().string,buttonText:prop_types_default().string,secondary:prop_types_default().bool,disabled:prop_types_default().bool,custom:prop_types_default().string,dataCyButton:prop_types_default().string},TextButtonField.__docgenInfo={description:"component",methods:[],displayName:"TextButtonField",props:{className:{description:"Option for styling component",type:{name:"string"},required:!1},html:{description:"Option for html",type:{name:"string"},required:!1},children:{description:"Contenty",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1},idButton:{description:"Button id",type:{name:"string"},required:!1},href:{description:"Button link",type:{name:"string"},required:!1},buttonText:{description:"Button text",type:{name:"string"},required:!1},secondary:{description:"Button secondary",type:{name:"bool"},required:!1},disabled:{description:"Button disabled",type:{name:"bool"},required:!1},custom:{description:"Button custom",type:{name:"string"},required:!1},dataCyButton:{description:"Test id for cypress test for the button",type:{name:"string"},required:!1}}};var TextButtonField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TextButtonField_stories={title:"Components/Molecules/TextButtonField",component:TextButtonField};var Template=function Template(args){return TextButtonField_stories_jsx(TextButtonField,args)};Template.displayName="Template";var Primary=Template.bind({}),Secondary=Template.bind({}),Disabled=Template.bind({}),Custom=Template.bind({});Primary.args={title:"Primary",html:"<h1>Title</h1><p>Text</p>",idButton:"Button1",buttonText:"Button",secondary:!1},Secondary.args={title:"Secondary",html:"<h1>Title</h1><p>Text</p>",buttonText:"Button",idButton:"Button2"},Disabled.args={title:"Disabled",html:"<h1>Title</h1><p>Text</p>",buttonText:"Button",idButton:"Button3",disabled:!0},Custom.args={title:"Custom",html:"<h1>Title</h1><p>Text</p>",buttonText:"Button",idButton:"Button4",custom:"bg-red-100"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextButtonField {...args}></TextButtonField>"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextButtonField {...args}></TextButtonField>"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextButtonField {...args}></TextButtonField>"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters3=_Disabled$parameters2.docs)||void 0===_Disabled$parameters3?void 0:_Disabled$parameters3.source)})}),Custom.parameters=_objectSpread(_objectSpread({},Custom.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Custom$parameters=Custom.parameters)||void 0===_Custom$parameters?void 0:_Custom$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TextButtonField {...args}></TextButtonField>"},null===(_Custom$parameters2=Custom.parameters)||void 0===_Custom$parameters2||null===(_Custom$parameters2$d=_Custom$parameters2.docs)||void 0===_Custom$parameters2$d?void 0:_Custom$parameters2$d.source)})})}}]);