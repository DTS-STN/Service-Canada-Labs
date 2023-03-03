"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[4661],{"./components/atoms/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ActionButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ActionButton(props){var basicStyle="rounded focus:ring-1 focus:ring-black focus:ring-offset-2",defaultStyle="py-2 px-4 active:bg-custom-blue-blue text-white border border-custom-blue-blue bg-custom-blue-dark hover:bg-custom-blue-light",secondaryStyle="py-2 px-4 bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200",tertiaryStyle="py-2 underline hover:text-canada-footer-hover-font-blue text-canada-footer-font",disabledStyle="py-2 px-4 bg-gray-light text-gray-600 border border-gray-md";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var link=document.getElementById(props.id);link&&link.addEventListener("keydown",(function(event){"Spacebar"!==event.key&&" "!==event.key||(event.preventDefault(),link.click())}))})),props.href?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:props.href,"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"".concat(basicStyle,"\n      ").concat(props.secondary||props.tertiary||props.disabled||props.custom?props.className:defaultStyle,"\n      ").concat(props.secondary&&!props.disabled?secondaryStyle:props.className,"\n      ").concat(props.tertiary&&!props.disabled?tertiaryStyle:props.className,"\n      ").concat(props.custom&&!props.tertiary?props.custom:"","\n      ").concat(props.disabled?disabledStyle:props.className),onClick:props.onClick,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,role:"button",draggable:"false",lang:props.lang},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.text,props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0):__jsx("button",{"aria-expanded":"".concat(props.ariaExpanded?props.ariaExpanded:void 0),"aria-label":"".concat(props.ariaLabel?props.ariaLabel:void 0),className:"".concat(basicStyle,"\n      ").concat(props.secondary||props.tertiary||props.disabled||props.custom?props.className:defaultStyle,"\n      ").concat(props.secondary&&!props.disabled?secondaryStyle:props.className,"\n      ").concat(props.tertiary&&!props.disabled?tertiaryStyle:props.className,"\n      ").concat(props.custom&&!props.tertiary?props.custom:"","\n      ").concat(props.disabled?disabledStyle:props.className),onClick:props.onClick,type:props.type,id:props.id,"data-testid":props.dataTestId,"data-cy":props.dataCy||props.id,"data-cy-button":props.dataCyButton,disabled:props.disabled,"data-gc-analytics-submit":props.analyticsTracking?"submit":void 0},props.icon&&!props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0,props.imageSource&&props.imageAlt?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("img",{src:props.imageSource,alt:props.imageAlt}),__jsx("span",{className:props.imageSpanClass,"data-testid":props.dataTestId},props.imageSpanText)):void 0,__jsx("span",{className:"flex"},props.text,props.expandIcon),props.children,props.icon&&props.iconEnd?__jsx("span",{className:props.icon,"data-testid":props.dataTestId}):void 0)}ActionButton.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,iconEnd:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,lang:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["submit","reset"]),secondary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,tertiary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,custom:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().element,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCyButton:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,analyticsTracking:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,expandIcon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,ariaExpanded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSource:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageAlt:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanText:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,imageSpanClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},ActionButton.__docgenInfo={description:"Button component",methods:[],displayName:"ActionButton",props:{icon:{description:"This will add an icon inside the button when needed",type:{name:"string"},required:!1},iconEnd:{description:"This is for placing an icon at the end of the component",type:{name:"bool"},required:!1},text:{description:"The text that the button will display",type:{name:"string"},required:!1},href:{description:"Style link as a button when there's a href",type:{name:"string"},required:!1},id:{description:"Identify which button being clicked",type:{name:"string"},required:!0},lang:{description:"Lang attribute for links that do not match the language of the top level document",type:{name:"string"},required:!1},type:{description:"the type of the button",type:{name:"enum",value:[{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},secondary:{description:"Secondary color styling option",type:{name:"bool"},required:!1},tertiary:{description:"Tertiary color styling option",type:{name:"bool"},required:!1},custom:{description:"Custom button styling option",type:{name:"string"},required:!1},onClick:{description:"Callback for a click event on the button",type:{name:"func"},required:!1},className:{description:"css overrides for button",type:{name:"string"},required:!1},children:{description:"any other elements you want to add to the button",type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1},dataCy:{description:"Test id for e2e test",type:{name:"string"},required:!1},dataCyButton:{description:"Test id for e2e test",type:{name:"string"},required:!1},disabled:{description:"Enabled or disabled the button",type:{name:"bool"},required:!1},analyticsTracking:{description:"For tracking reset or submit on forms for analytics",type:{name:"bool"},required:!1},expandIcon:{description:"Expand icon that will show the Feedback as popup",type:{name:"object"},required:!1},ariaExpanded:{description:"Aria expanded state",type:{name:"string"},required:!1},ariaLabel:{description:"Aria label",type:{name:"string"},required:!1},imageSource:{description:"Image source",type:{name:"string"},required:!1},imageAlt:{description:"Image alt",type:{name:"string"},required:!1},imageSpanText:{description:"Image span text",type:{name:"string"},required:!1},imageSpanClass:{description:"Image span classname",type:{name:"string"},required:!1}}}},"./components/molecules/ErrorBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>ErrorBox_stories});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),ActionButton=__webpack_require__("./components/atoms/ActionButton.js"),__jsx=react.createElement;function ErrorBox(props){return __jsx("div",{id:"error-box",className:"relative border-l-4 border-error-border-red min-h-40px my-10","data-cy":"error-box",role:"alert","aria-atomic":"true"},__jsx("span",{className:"icon-error absolute top-1 -left-2.5 bg-white"}),__jsx("p",{className:"font-bold ml-4 text-p mb-2 lg:text-h4"},props.text),__jsx("ul",{className:"w-full list-disc list-outside leading-loose pl-8 text-sm lg:text-p","data-cy":"error-box-items",id:"error-box-items"},props.errors.map((function(_ref){var id=_ref.id,text=_ref.text;return __jsx("li",{key:"".concat(id,"-").concat(text),className:"mb-2"},__jsx(ActionButton.K,{id:"".concat(id,"-").concat(text),custom:"font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline inline-block text-left",onClick:function onClick(){return props.onClick(id)},dataCy:"error-item-".concat(id),className:""},text))}))))}ErrorBox.displayName="ErrorBox",ErrorBox.defaultProps={errors:[]},ErrorBox.propTypes={text:prop_types_default().string.isRequired,errors:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string.isRequired,text:prop_types_default().string.isRequired})),onClick:prop_types_default().func},ErrorBox.__docgenInfo={description:"error box to be used to summarise error in forms",methods:[],displayName:"ErrorBox",props:{errors:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",description:"the id of the element on the page to scroll too",required:!0},text:{name:"string",description:"the text to display for the error component",required:!0}}}},required:!1},text:{description:"An array of error messages to display. Each object contains the id of the element which\nwhen the text is clicked the browser will scroll too",type:{name:"string"},required:!0},onClick:{description:"onClick callback",type:{name:"func"},required:!1}}};var ErrorBox_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ErrorBox_stories={title:"Components/Molecules/ErrorBox",component:ErrorBox,decorators:[function(Story){return ErrorBox_stories_jsx("div",{className:"w-full flex items-center flex-col"},ErrorBox_stories_jsx("div",{className:"w-96"},ErrorBox_stories_jsx(Story,null)),ErrorBox_stories_jsx("div",{id:"someid",className:"mt-80"},"Some element with an id"))}]};var Template=function Template(args){return ErrorBox_stories_jsx(ErrorBox,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={text:"The form could not be submitted because three errors were found",errors:[{id:"someid",text:"Some Error 1"},{id:"someid",text:"Some Error 2"},{id:"someid",text:"Some Error 3"}]},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ErrorBox {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})}}]);