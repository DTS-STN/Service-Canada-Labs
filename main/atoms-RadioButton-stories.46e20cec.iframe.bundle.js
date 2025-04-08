(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[9985],{"./components/atoms/RadioButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Primary:()=>Primary,RoundedBack:()=>RoundedBack,RoundedFront:()=>RoundedFront,UnControlled:()=>UnControlled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_RadioButton__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./components/atoms/RadioButton.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Atoms/RadioButton",component:_RadioButton__WEBPACK_IMPORTED_MODULE_2__.E},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RadioButton__WEBPACK_IMPORTED_MODULE_2__.E,{...args}),Primary=Template.bind({});Primary.args={id:"radio-button-1",name:"radio_button_1",value:"Some Value",label:"My Radio Button",dataTestId:"primary"};const Checked=Template.bind({});Checked.args={id:"radio-button-checked",name:"radio_button_checked",value:"Some Value",label:"My Radio Button",dataTestId:"checked",checked:!0};const UnControlled=Template.bind({});UnControlled.args={id:"radio-button-uncontrolled",name:"radio_button_uncontrolled",value:"Some Value",label:"My Radio Button",dataTestId:"uncontrolled",uncontrolled:!0};const RoundedFront=Template.bind({});RoundedFront.args={id:"radio-button-rounded-front",name:"radio_button_rounded_front",value:"Some Value",label:"My Radio Button",dataTestId:"roundedFront",roundedFront:!0};const RoundedBack=Template.bind({});RoundedBack.args={id:"radio-button-rounded-back",name:"radio_button_rounded_back",value:"Some Value",label:"My Radio Button",dataTestId:"roundedBack",roundedBack:!0};const __namedExportsOrder=["Primary","Checked","UnControlled","RoundedFront","RoundedBack"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <RadioButton {...args} />",...Primary.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"args => <RadioButton {...args} />",...Checked.parameters?.docs?.source}}},UnControlled.parameters={...UnControlled.parameters,docs:{...UnControlled.parameters?.docs,source:{originalSource:"args => <RadioButton {...args} />",...UnControlled.parameters?.docs?.source}}},RoundedFront.parameters={...RoundedFront.parameters,docs:{...RoundedFront.parameters?.docs,source:{originalSource:"args => <RadioButton {...args} />",...RoundedFront.parameters?.docs?.source}}},RoundedBack.parameters={...RoundedBack.parameters,docs:{...RoundedBack.parameters?.docs,source:{originalSource:"args => <RadioButton {...args} />",...RoundedBack.parameters?.docs?.source}}}},"./components/atoms/RadioButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>RadioButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function RadioButton({checked=!1,...props}){const ifControlledProps=props.uncontrolled?{defaultChecked:checked||!1}:{checked};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"radio",className:"radio-button absolute top-0 left-0 w-full h-full appearance-none cursor-pointer",id:props.id,name:props.name,value:props.value,onChange:e=>{props.onChange(props.value,e)},onKeyUp:e=>{"Enter"===e.key&&(e.preventDefault(),props.uncontrolled&&(e.currentTarget.checked=!0),props.onChange(props.value,e))},"data-testid":props.dataTestId,"data-cy":props.dataCy,required:props.required,...ifControlledProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:`radio-button-label font-body float-left text-xs px-5 py-3 border border-solid border-gray-600 border-opacity-50${props.roundedFront?" rounded-l-lg":""}${props.roundedBack?" rounded-r-lg":""}`,htmlFor:props.id,children:props.label})]})}RadioButton.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,required:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,checked:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,roundedFront:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,roundedBack:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,uncontrolled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},RadioButton.__docgenInfo={description:"Radio input styled as a button",methods:[],displayName:"RadioButton",props:{checked:{defaultValue:{value:"false",computed:!1},description:"whether the radio button is checked or not",type:{name:"bool"},required:!1},id:{description:"the id for the input",type:{name:"string"},required:!0},name:{description:"the name for the input",type:{name:"string"},required:!0},value:{description:"the value for the input",type:{name:"string"},required:!0},label:{description:"the label for the radio button",type:{name:"string"},required:!0},required:{description:"whether or not the field is required",type:{name:"bool"},required:!1},roundedFront:{description:"Should the button be rounded in the front",type:{name:"bool"},required:!1},roundedBack:{description:"Should the button be rounded in the back",type:{name:"bool"},required:!1},uncontrolled:{description:"if the input is controlled by react or not",type:{name:"bool"},required:!1},onChange:{description:"onChange callback",type:{name:"func"},required:!1},dataTestId:{description:"unit test selector",type:{name:"string"},required:!1},dataCy:{description:"cypress test selector",type:{name:"string"},required:!1}}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);