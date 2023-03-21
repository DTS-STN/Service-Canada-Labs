"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[9956],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./components/atoms/ErrorLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ErrorLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ErrorLabel(props){return __jsx("div",{className:"error-label border-l-4 border-error-border-red px-3 py-1 bg-error-background-red font-body font-bold mb-5px text-sm lg:text-p ".concat(props.className)},props.message)}ErrorLabel.displayName="ErrorLabel",ErrorLabel.propTypes={message:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},ErrorLabel.__docgenInfo={description:"error label component that is used with form inputs to display error messages",methods:[],displayName:"ErrorLabel",props:{message:{description:"",type:{name:"string"},required:!0},className:{description:"Prop for adding some classes",type:{name:"string"},required:!1}}}},"./components/atoms/MultiTextField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>MultiTextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_ErrorLabel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/ErrorLabel.js"),next_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function MultiTextField(props){var t=(0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.$)("common").t;return __jsx("div",{className:"block leading-tight".concat(props.className?" "+props.className:" mb-12")},__jsx("label",{className:"block leading-tight text-sm lg:text-p font-body mb-5px ".concat(props.boldLabel?"font-bold":""),htmlFor:props.id},props.required?__jsx("b",{className:"text-error-border-red","aria-hidden":"true"},"*"):void 0," ",props.label," "),__jsx("p",{id:props.describedby,className:"text-sm lg:text-g mb-5 leading-30px"},t("doNotInclude")),props.error?__jsx(_ErrorLabel__WEBPACK_IMPORTED_MODULE_1__.h,{message:props.error}):void 0,__jsx("textarea",{className:"text-input font-body w-full min-h-40px shadow-sm text-form-input-gray border-2 py-6px px-12px ".concat(props.error?"border-error-border-red":"border-black"),id:props.id,name:props.name,placeholder:props.placeholder,onChange:function onChange(e){return props.onChange(e.currentTarget.value)},cols:props.cols,rows:props.rows,spellCheck:props.spellCheck,wrap:props.wrap,required:props.required,"data-testid":props.dataTestId,"data-cy":props.dataCy,"aria-describedby":props.describedby},props.value))}MultiTextField.displayName="MultiTextField",MultiTextField.defaultProps={spellCheck:!0,wrap:"soft"},MultiTextField.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,name:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,error:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,required:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,spellCheck:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,boldLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,wrap:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["soft","hard"]),placeholder:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,rows:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,cols:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,minLength:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,maxLength:prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,dataCy:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,describedby:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},MultiTextField.__docgenInfo={description:"multi line text field",methods:[],displayName:"MultiTextField",props:{spellCheck:{defaultValue:{value:"true",computed:!1},description:"whether or not spellchecking is enabled for this field, by default it is",type:{name:"bool"},required:!1},wrap:{defaultValue:{value:'"soft"',computed:!1},description:"whether to soft wrap or hard wrap the field",type:{name:"enum",value:[{value:'"soft"',computed:!1},{value:'"hard"',computed:!1}]},required:!1},className:{description:"additional css for the component",type:{name:"string"},required:!1},id:{description:"the id of the multi text field",type:{name:"string"},required:!0},name:{description:"the name of the multi text field",type:{name:"string"},required:!0},label:{description:"the label for the multi text field",type:{name:"string"},required:!0},value:{description:"the value for the multi text field",type:{name:"string"},required:!1},error:{description:"message to display if there is an error",type:{name:"string"},required:!1},required:{description:"whether or not the field is required",type:{name:"bool"},required:!1},boldLabel:{description:"whether or not the label is bold",type:{name:"bool"},required:!1},placeholder:{description:"the placeholder for the multi text field",type:{name:"string"},required:!1},rows:{description:"how much lines should the multi text field show",type:{name:"number"},required:!1},cols:{description:"how much columns should the multi text field show",type:{name:"number"},required:!1},minLength:{description:"the minimum length of characters for the multi text field",type:{name:"number"},required:!1},maxLength:{description:"the maximum length of characters for the multi text field",type:{name:"number"},required:!1},onChange:{description:"call back for when the value of the multi text field changes",type:{name:"func"},required:!1},dataTestId:{description:"unit test selector",type:{name:"string"},required:!1},dataCy:{description:"cypress selector",type:{name:"string"},required:!1},describedby:{description:"aria-describedby label id",type:{name:"string"},required:!1}}}},"./components/atoms/MultiTextField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoldLabel:()=>BoldLabel,HardWrap:()=>HardWrap,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_BoldLabel$parameters,_BoldLabel$parameters2,_BoldLabel$parameters3,_HardWrap$parameters,_HardWrap$parameters2,_HardWrap$parameters3,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_MultiTextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/MultiTextField.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Atoms/MultiTextField",component:_MultiTextField__WEBPACK_IMPORTED_MODULE_2__._,decorators:[function(Story){return __jsx("div",{className:"w-full flex justify-center"},__jsx("div",{className:"w-96"},__jsx(Story,null)))}]};var Template=function Template(args){return __jsx(_MultiTextField__WEBPACK_IMPORTED_MODULE_2__._,(0,_home_runner_work_Service_Canada_Labs_Service_Canada_Labs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({i:!0},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={id:"multiTextField1",name:"multiTextField1",label:"I am a multi text field",dataTestId:"multitext-one",placeholder:"some placeholder text"};var BoldLabel=Template.bind({});BoldLabel.args={id:"multiTextField1",name:"multiTextField1",label:"I am a multi text field",dataTestId:"multitext-bold",placeholder:"some placeholder text",boldLabel:!0};var HardWrap=Template.bind({});HardWrap.args={id:"multiTextField1",name:"multiTextField1",label:"I am a multi text field",dataTestId:"multitext-hard-wrap",placeholder:"some placeholder text",cols:30,rows:5,wrap:"hard"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <MultiTextField i {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),BoldLabel.parameters=_objectSpread(_objectSpread({},BoldLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BoldLabel$parameters=BoldLabel.parameters)||void 0===_BoldLabel$parameters?void 0:_BoldLabel$parameters.docs),{},{source:_objectSpread({originalSource:"args => <MultiTextField i {...args} />"},null===(_BoldLabel$parameters2=BoldLabel.parameters)||void 0===_BoldLabel$parameters2||null===(_BoldLabel$parameters3=_BoldLabel$parameters2.docs)||void 0===_BoldLabel$parameters3?void 0:_BoldLabel$parameters3.source)})}),HardWrap.parameters=_objectSpread(_objectSpread({},HardWrap.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_HardWrap$parameters=HardWrap.parameters)||void 0===_HardWrap$parameters?void 0:_HardWrap$parameters.docs),{},{source:_objectSpread({originalSource:"args => <MultiTextField i {...args} />"},null===(_HardWrap$parameters2=HardWrap.parameters)||void 0===_HardWrap$parameters2||null===(_HardWrap$parameters3=_HardWrap$parameters2.docs)||void 0===_HardWrap$parameters3?void 0:_HardWrap$parameters3.source)})})},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useTranslation});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),context=__webpack_require__("./node_modules/react-i18next/dist/es/context.js");function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var usePrevious=function usePrevious(value,ignore){var ref=(0,react.useRef)();return(0,react.useEffect)((function(){ref.current=ignore?ref.current:value}),[value,ignore]),ref.current};function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react.useContext)(context.OO)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||(0,context.nI)();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new context.zv),!i18n){warnOnce("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=_objectSpread(_objectSpread(_objectSpread({},(0,context.JP)()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState2=_slicedToArray((0,react.useState)(getT),2),t=_useState2[0],setT=_useState2[1],joinedNS=namespaces.join(),previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||loadNamespaces(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,joinedNS]);var isInitial=(0,react.useRef)(!0);(0,react.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){loadNamespaces(i18n,namespaces,(function(){resolve()}))}))}}}]);