"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[5131],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./components/atoms/ErrorLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ErrorLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ErrorLabel(props){return __jsx("div",{className:"error-label border-l-4 border-error-border-red px-3 py-1 bg-error-background-red font-body font-bold mb-5px text-sm lg:text-p ".concat(props.className)},props.message)}ErrorLabel.displayName="ErrorLabel",ErrorLabel.propTypes={message:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},ErrorLabel.__docgenInfo={description:"error label component that is used with form inputs to display error messages",methods:[],displayName:"ErrorLabel",props:{message:{description:"",type:{name:"string"},required:!0},className:{description:"Prop for adding some classes",type:{name:"string"},required:!1}}}},"./components/atoms/SelectField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>SelectField_stories});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),ErrorLabel=__webpack_require__("./components/atoms/ErrorLabel.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),__jsx=react.createElement;function SelectField(props){var t=(0,useTranslation.$)("common").t,ifControlledProps=props.uncontrolled?{}:{value:props.value};return props.ignoreSort||props.options.sort((function(a,b){return new Intl.Collator("fr").compare(a.name.toLowerCase(),b.name.toLowerCase())})),__jsx("div",{className:"block leading-tight".concat(props.className?" "+props.className:" mb-10px")},__jsx("label",{className:"select-field-label block leading-tight text-sm lg:text-p font-body mb-5 ".concat(props.boldLabel?"font-bold":""),htmlFor:props.id+"-choice"},props.required?__jsx("b",{className:"text-error-border-red","aria-hidden":"true"},"*"):void 0," ",props.label," "),props.error?__jsx(ErrorLabel.h,{message:props.error}):void 0,__jsx("select",(0,esm_extends.Z)({className:"text-input select-field bg-white font-body w-full min-h-40px shadow-sm border-2 py-6px px-12px ".concat(props.error?"border-error-border-red":"border-black"),id:props.id+"-choice",name:props.name,"aria-required":props.required,"aria-invalid":props.error?"true":void 0,onChange:function onChange(e){return props.onChange(e.currentTarget.value)}},ifControlledProps,{"data-testid":props.dataTestId+"-choice","data-cy":props.dataCy+"-choice"}),__jsx("option",{key:"default",value:"","data-testid":"default","data-cy":"default"}),props.options.map((function(_ref){var id=_ref.id,name=_ref.name,value=_ref.value;return __jsx("option",{key:id,value,"data-testid":id,"data-cy":id},name)})),props.other?__jsx("option",{key:"other",value:"other","data-testid":"other","data-cy":"other"},t("reportAProblemOther")):""))}SelectField.displayName="SelectField",SelectField.defaultProps={value:""},SelectField.propTypes={className:prop_types_default().string,id:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,required:prop_types_default().bool,value:prop_types_default().string.isRequired,onChange:prop_types_default().func,error:prop_types_default().string,other:prop_types_default().bool,boldLabel:prop_types_default().bool,uncontrolled:prop_types_default().bool,options:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,value:prop_types_default().string.isRequired})),dataTestId:prop_types_default().string,dataCy:prop_types_default().string,ignoreSort:prop_types_default().bool},SelectField.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{value:{defaultValue:{value:'""',computed:!1},description:"value of the text field",type:{name:"string"},required:!1},className:{description:"additional css for the component",type:{name:"string"},required:!1},id:{description:"the id of the text field",type:{name:"string"},required:!0},name:{description:"the name of the text field",type:{name:"string"},required:!0},label:{description:"the label of the text field",type:{name:"string"},required:!0},required:{description:"whether ot not the field is required",type:{name:"bool"},required:!1},onChange:{description:"call back for when the value of the text field changes",type:{name:"func"},required:!1},error:{description:"message to display if there is an error",type:{name:"string"},required:!1},other:{description:"Other option for dropdown",type:{name:"bool"},required:!1},boldLabel:{description:"if label should be bold",type:{name:"bool"},required:!1},uncontrolled:{description:"boolean flag to specify that this input should be uncontrolled by react",type:{name:"bool"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},name:{name:"string",required:!0},value:{name:"string",required:!0}}}},required:!1},dataTestId:{description:"unit test selector",type:{name:"string"},required:!1},dataCy:{description:"cypress tests selector",type:{name:"string"},required:!1},ignoreSort:{description:"if true, skip sorting the options",type:{name:"bool"},required:!1}}};var SelectField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const SelectField_stories={title:"Components/Atoms/SelectField",component:SelectField,decorators:[function(Story){return SelectField_stories_jsx("div",{className:"w-full flex justify-center"},SelectField_stories_jsx("div",{className:"w-96"},SelectField_stories_jsx(Story,null)))}]};var Template=function Template(args){return SelectField_stories_jsx(SelectField,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={id:"select-field-1",name:"selectField1",label:"I am a select field",uncontrolled:!0,dataTestId:"select-field-1",options:[{id:"option1",name:"Option 1",value:"option1"},{id:"option2",name:"Option 2",value:"option2"},{id:"option3",name:"Option 3",value:"option3"},{id:"option4",name:"Option 4",value:"option4"}]},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <SelectField {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useTranslation});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./node_modules/react-i18next/dist/es/context.js");function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var usePrevious=function usePrevious(value,ignore){var ref=(0,react.useRef)();return(0,react.useEffect)((function(){ref.current=ignore?ref.current:value}),[value,ignore]),ref.current};function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react.useContext)(context.OO)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||(0,context.nI)();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new context.zv),!i18n){warnOnce("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=_objectSpread(_objectSpread(_objectSpread({},(0,context.JP)()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState2=_slicedToArray((0,react.useState)(getT),2),t=_useState2[0],setT=_useState2[1],joinedNS=namespaces.join(),previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||loadNamespaces(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,joinedNS]);var isInitial=(0,react.useRef)(!0);(0,react.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){loadNamespaces(i18n,namespaces,(function(){resolve()}))}))}}}]);