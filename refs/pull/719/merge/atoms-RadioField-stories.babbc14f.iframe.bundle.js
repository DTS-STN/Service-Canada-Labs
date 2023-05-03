"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[6033],{"./components/atoms/RadioField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>RadioField});var _home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function RadioField(props){var ifControlledProps=props.uncontrolled?{}:{checked:props.checked};return __jsx("div",{className:"block leading-tight relative pl-40px h-40px clear-left mb-10px".concat(props.className?" "+props.className:"")},__jsx("input",(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_1__.Z)({className:"control-input cursor-pointer appearance-none w-40px h-40px absolute left-0 m-0 z-1 opacity-0",id:props.id,name:props.name,value:props.value,type:"radio",onChange:function onChange(e){return props.onChange(props.uncontrolled?!e.currentTarget.checked:props.checked,props.name,props.value)},"aria-required":props.required,"aria-invalid":props.error?"true":void 0,"data-cy":props.dataCy,"data-testid":props.dataTestId},ifControlledProps)),__jsx("label",{className:"radio-field-label control-label inline-block cursor-pointer pt-4px pb-5px px-15px text-sm lg:text-p leading-tight sm:leading-6 font-normal font-body".concat(props.error?" text-error-border-red":void 0),htmlFor:props.id,onClick:function onClick(){return props.onChange(props.checked,props.name,props.value)}},props.label))}RadioField.displayName="RadioField",RadioField.defaultProps={checked:!1,value:"true"},RadioField.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,checked:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,error:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,required:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,uncontrolled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},RadioField.__docgenInfo={description:"radio field",methods:[],displayName:"RadioField",props:{checked:{defaultValue:{value:"false",computed:!1},description:"whether or not the checkbox is checked",type:{name:"bool"},required:!1},value:{defaultValue:{value:'"true"',computed:!1},description:"the value of the field when the checkbox is checked",type:{name:"string"},required:!1},className:{description:"additional css for the component",type:{name:"string"},required:!1},name:{description:"the name of the checkbox",type:{name:"string"},required:!0},error:{description:"whether or not there is an error",type:{name:"bool"},required:!1},required:{description:"whether or not the field is required",type:{name:"bool"},required:!1},id:{description:"the id of the checkbox",type:{name:"string"},required:!0},label:{description:"the label for the checkbox",type:{name:"string"},required:!0},onChange:{description:"callback to handle change in checked state, takes three arguments, the checked state, the name and the value",type:{name:"func"},required:!1},uncontrolled:{description:"boolean flag to specify that this input should not be controlled by react",type:{name:"bool"},required:!1},dataCy:{description:"testing selector for cypress",type:{name:"string"},required:!1},dataTestId:{description:"testing selector for unit tests",type:{name:"string"},required:!1}}}},"./components/atoms/RadioField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,UnChecked:()=>UnChecked,UnControlled:()=>UnControlled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _UnChecked$parameters,_UnChecked$parameters2,_UnChecked$parameters3,_Checked$parameters,_Checked$parameters2,_Checked$parameters2$,_UnControlled$paramet,_UnControlled$paramet2,_UnControlled$paramet3,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_RadioField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/RadioField.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Atoms/RadioField",component:_RadioField__WEBPACK_IMPORTED_MODULE_2__.g,decorators:[function(Story){return __jsx("div",{className:"w-full flex justify-center"},__jsx("div",{className:"w-96"},__jsx(Story,null)))}]};var Template=function Template(args){return __jsx(_RadioField__WEBPACK_IMPORTED_MODULE_2__.g,args)};Template.displayName="Template";var UnChecked=Template.bind({});UnChecked.args={id:"radio 1",name:"RadioField1",value:"IsChecked",label:"I am a radio button",dataTestId:"unchecked-radio-field"};var Checked=Template.bind({});Checked.args={id:"radio 1",name:"RadioField1",value:"IsChecked",label:"I am a radio button",dataTestId:"checked-radio-field",checked:!0};var UnControlled=Template.bind({});UnControlled.args={id:"radio 1",name:"RadioField1",value:"IsChecked",label:"I am an uncontrolled checkbox",dataTestId:"uncontrolled-checkbox",uncontrolled:!0},UnChecked.parameters=_objectSpread(_objectSpread({},UnChecked.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UnChecked$parameters=UnChecked.parameters)||void 0===_UnChecked$parameters?void 0:_UnChecked$parameters.docs),{},{source:_objectSpread({originalSource:"args => <RadioField {...args} />"},null===(_UnChecked$parameters2=UnChecked.parameters)||void 0===_UnChecked$parameters2||null===(_UnChecked$parameters3=_UnChecked$parameters2.docs)||void 0===_UnChecked$parameters3?void 0:_UnChecked$parameters3.source)})}),Checked.parameters=_objectSpread(_objectSpread({},Checked.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Checked$parameters=Checked.parameters)||void 0===_Checked$parameters?void 0:_Checked$parameters.docs),{},{source:_objectSpread({originalSource:"args => <RadioField {...args} />"},null===(_Checked$parameters2=Checked.parameters)||void 0===_Checked$parameters2||null===(_Checked$parameters2$=_Checked$parameters2.docs)||void 0===_Checked$parameters2$?void 0:_Checked$parameters2$.source)})}),UnControlled.parameters=_objectSpread(_objectSpread({},UnControlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UnControlled$paramet=UnControlled.parameters)||void 0===_UnControlled$paramet?void 0:_UnControlled$paramet.docs),{},{source:_objectSpread({originalSource:"args => <RadioField {...args} />"},null===(_UnControlled$paramet2=UnControlled.parameters)||void 0===_UnControlled$paramet2||null===(_UnControlled$paramet3=_UnControlled$paramet2.docs)||void 0===_UnControlled$paramet3?void 0:_UnControlled$paramet3.source)})})}}]);