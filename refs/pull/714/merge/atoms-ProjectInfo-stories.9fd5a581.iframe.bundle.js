"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[2632],{"./components/atoms/ProjectInfo.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>ProjectInfo_stories});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),focus_trap_react=__webpack_require__("./node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react_default=__webpack_require__.n(focus_trap_react),__jsx=react.createElement;function ProjectInfo(props){(0,useTranslation.$)("common").t;var _useState=(0,react.useState)(!1),showInfo=_useState[0],setShowInfo=_useState[1];return __jsx(react.Fragment,null,__jsx("div",{className:"grid grid-cols-4 gap-x-4 text-[20px]"},__jsx("strong",{className:"col-span-1"},props.termStarted),__jsx("p",{className:"col-span-3"},props.dateStarted?props.dateStarted.substring(0,10):void 0),__jsx("strong",{className:"col-span-1"},props.termEnded),__jsx("p",{className:"col-span-3"},props.dateEnded?props.dateEnded.substring(0,10):void 0),__jsx("strong",{className:"col-span-1"},props.termStage),__jsx("div",{className:"flex col-span-3 items-end"},__jsx("p",{className:"shrink-0 flex"},props.stage,__jsx("button",{onClick:function onClick(){return setShowInfo(!showInfo)},"aria-label":"project stage detail","aria-expanded":showInfo},__jsx(index_es.G,{icon:free_solid_svg_icons.DBf,color:"#269ABC",size:"lg",className:"px-2"})),__jsx("button",{className:"text-xs text-[#284162] underline mr-2 hover:text-custom-blue-link",onClick:function onClick(){return setShowInfo(!showInfo)},"aria-label":"project stage detail","aria-expanded":showInfo},props.information)),showInfo?__jsx(focus_trap_react_default(),{focusTrapOptions:{initialFocus:!1,allowOutsideClick:!0}},__jsx("div",{className:"relative w-full"},__jsx("div",{style:{background:"#E8F2F4",borderColor:"#269ABC"},className:"absolute -top-8 border rounded-md px-4 py-2 my-2"},__jsx(react.Fragment,null,__jsx("p",{tabIndex:0,className:"inline"},__jsx("strong",null,props.term)),__jsx("p",{className:"inline",dangerouslySetInnerHTML:{__html:props.definition}}))))):void 0),__jsx("strong",{className:"col-span-1"},props.termSummary),__jsx("p",{className:"col-span-3"},props.summary)))}ProjectInfo.propTypes={dateStarted:prop_types_default().string,dateEnded:prop_types_default().string,stage:prop_types_default().string,summary:prop_types_default().string,info:prop_types_default().string},ProjectInfo.__docgenInfo={description:"",methods:[],displayName:"ProjectInfo",props:{dateStarted:{description:"",type:{name:"string"},required:!1},dateEnded:{description:"",type:{name:"string"},required:!1},stage:{description:"",type:{name:"string"},required:!1},summary:{description:"",type:{name:"string"},required:!1},info:{description:"",type:{name:"string"},required:!1}}};var ProjectInfo_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ProjectInfo_stories={title:"Components/Atoms/ProjectInfo",component:ProjectInfo};var Template=function Template(args){return ProjectInfo_stories_jsx(ProjectInfo,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={dateStarted:"2021-01-01",dateEnded:"2022-03-31",stage:"Alpha",summary:"Project status"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ProjectInfo {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})}}]);