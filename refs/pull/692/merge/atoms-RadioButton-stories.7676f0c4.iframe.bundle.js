"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[9985],{"./components/atoms/RadioButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioButton});var _home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function RadioButton(props){var ifControlledProps=props.uncontrolled?{defaultChecked:props.checked||!1}:{checked:props.checked};return __jsx("div",{className:"flex relative"},__jsx("input",(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_1__.Z)({type:"radio",className:"radio-button absolute top-0 left-0 w-full h-full appearance-none cursor-pointer",id:props.id,name:props.name,value:props.value,onChange:function onChange(e){props.onChange(props.value,e)},onKeyUp:function onKeyUp(e){"Enter"===e.key&&(e.preventDefault(),props.uncontrolled&&(e.currentTarget.checked=!0),props.onChange(props.value,e))},"data-testid":props.dataTestId,"data-cy":props.dataCy,required:props.required},ifControlledProps)),__jsx("label",{className:"radio-button-label font-body float-left text-xs px-5 py-3 border border-solid border-gray-600 border-opacity-50".concat(props.roundedFront?" rounded-l-lg":"").concat(props.roundedBack?" rounded-r-lg":""),htmlFor:props.id},props.label))}RadioButton.displayName="RadioButton",RadioButton.defaultProps={checked:!1},RadioButton.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,name:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,required:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,checked:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,roundedFront:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,roundedBack:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,uncontrolled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},RadioButton.__docgenInfo={description:"Radio input styled as a button",methods:[],displayName:"RadioButton",props:{checked:{defaultValue:{value:"false",computed:!1},description:"whether the radio button is checked or not",type:{name:"bool"},required:!1},id:{description:"the id for the input",type:{name:"string"},required:!0},name:{description:"the name for the input",type:{name:"string"},required:!0},value:{description:"the value for the input",type:{name:"string"},required:!0},label:{description:"the label for the radio button",type:{name:"string"},required:!0},required:{description:"whether or not the field is required",type:{name:"bool"},required:!1},roundedFront:{description:"Should the button be rounded in the front",type:{name:"bool"},required:!1},roundedBack:{description:"Should the button be rounded in the back",type:{name:"bool"},required:!1},uncontrolled:{description:"if the input is controlled by react or not",type:{name:"bool"},required:!1},onChange:{description:"onChange callback",type:{name:"func"},required:!1},dataTestId:{description:"unit test selector",type:{name:"string"},required:!1},dataCy:{description:"cypress test selector",type:{name:"string"},required:!1}}}},"./components/atoms/RadioButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Primary:()=>Primary,RoundedBack:()=>RoundedBack,RoundedFront:()=>RoundedFront,UnControlled:()=>UnControlled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Checked$parameters,_Checked$parameters2,_Checked$parameters2$,_UnControlled$paramet,_UnControlled$paramet2,_UnControlled$paramet3,_RoundedFront$paramet,_RoundedFront$paramet2,_RoundedFront$paramet3,_RoundedBack$paramete,_RoundedBack$paramete2,_RoundedBack$paramete3,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_RadioButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/RadioButton.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Atoms/RadioButton",component:_RadioButton__WEBPACK_IMPORTED_MODULE_2__.E};var Template=function Template(args){return __jsx(_RadioButton__WEBPACK_IMPORTED_MODULE_2__.E,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={id:"radio-button-1",name:"radio_button_1",value:"Some Value",label:"My Radio Button",dataTestId:"primary"};var Checked=Template.bind({});Checked.args={id:"radio-button-checked",name:"radio_button_checked",value:"Some Value",label:"My Radio Button",dataTestId:"checked",checked:!0};var UnControlled=Template.bind({});UnControlled.args={id:"radio-button-uncontrolled",name:"radio_button_uncontrolled",value:"Some Value",label:"My Radio Button",dataTestId:"uncontrolled",uncontrolled:!0};var RoundedFront=Template.bind({});RoundedFront.args={id:"radio-button-rounded-front",name:"radio_button_rounded_front",value:"Some Value",label:"My Radio Button",dataTestId:"roundedFront",roundedFront:!0};var RoundedBack=Template.bind({});RoundedBack.args={id:"radio-button-rounded-back",name:"radio_button_rounded_back",value:"Some Value",label:"My Radio Button",dataTestId:"roundedBack",roundedBack:!0},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <RadioButton {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Checked.parameters=_objectSpread(_objectSpread({},Checked.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Checked$parameters=Checked.parameters)||void 0===_Checked$parameters?void 0:_Checked$parameters.docs),{},{source:_objectSpread({originalSource:"args => <RadioButton {...args} />"},null===(_Checked$parameters2=Checked.parameters)||void 0===_Checked$parameters2||null===(_Checked$parameters2$=_Checked$parameters2.docs)||void 0===_Checked$parameters2$?void 0:_Checked$parameters2$.source)})}),UnControlled.parameters=_objectSpread(_objectSpread({},UnControlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UnControlled$paramet=UnControlled.parameters)||void 0===_UnControlled$paramet?void 0:_UnControlled$paramet.docs),{},{source:_objectSpread({originalSource:"args => <RadioButton {...args} />"},null===(_UnControlled$paramet2=UnControlled.parameters)||void 0===_UnControlled$paramet2||null===(_UnControlled$paramet3=_UnControlled$paramet2.docs)||void 0===_UnControlled$paramet3?void 0:_UnControlled$paramet3.source)})}),RoundedFront.parameters=_objectSpread(_objectSpread({},RoundedFront.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RoundedFront$paramet=RoundedFront.parameters)||void 0===_RoundedFront$paramet?void 0:_RoundedFront$paramet.docs),{},{source:_objectSpread({originalSource:"args => <RadioButton {...args} />"},null===(_RoundedFront$paramet2=RoundedFront.parameters)||void 0===_RoundedFront$paramet2||null===(_RoundedFront$paramet3=_RoundedFront$paramet2.docs)||void 0===_RoundedFront$paramet3?void 0:_RoundedFront$paramet3.source)})}),RoundedBack.parameters=_objectSpread(_objectSpread({},RoundedBack.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RoundedBack$paramete=RoundedBack.parameters)||void 0===_RoundedBack$paramete?void 0:_RoundedBack$paramete.docs),{},{source:_objectSpread({originalSource:"args => <RadioButton {...args} />"},null===(_RoundedBack$paramete2=RoundedBack.parameters)||void 0===_RoundedBack$paramete2||null===(_RoundedBack$paramete3=_RoundedBack$paramete2.docs)||void 0===_RoundedBack$paramete3?void 0:_RoundedBack$paramete3.source)})})}}]);