(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[6006],{"./components/molecules/List.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>List_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types);function List(props){let opacity=40;return(0,jsx_runtime.jsx)("ul",{className:props.className,children:props.items.map(((item,key)=>{let className="bg-opacity-"+opacity+" bg-circle-color text-shadow-about-circles flex-shrink-0 mr-4 mb-2 rounded-full h-36 w-36 flex items-center justify-center text-white font-bold font-display text-h1xxl relative md:left-0 -left-14";return opacity<100&&(opacity+=20),(0,jsx_runtime.jsxs)("li",{className:"flex",children:[(0,jsx_runtime.jsx)("span",{className,role:"presentation",children:key+1}),(0,jsx_runtime.jsx)("p",{className:"text-sm md:text-p my-auto leading-normal font-body",children:item})]},key)}))})}List.propTypes={items:prop_types_default().arrayOf(String).isRequired,className:prop_types_default().string},List.__docgenInfo={description:"List component",methods:[],displayName:"List",props:{items:{description:"List items",type:{name:"arrayOf",value:{name:"custom",raw:"String"}},required:!0},className:{description:"Option for styling component",type:{name:"string"},required:!1}}};const List_stories={title:"Components/Molecules/List",component:List},Primary=(args=>(0,jsx_runtime.jsx)(List,{...args})).bind({});Primary.args={items:["Item 1","Item 2","Item 3","Item 4"]};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <List {...args}></List>",...Primary.parameters?.docs?.source}}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);