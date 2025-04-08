(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[4894],{"./components/fragment_renderer/fragment_components/BasicTextWithImage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_BasicTextWithImage__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./components/fragment_renderer/fragment_components/BasicTextWithImage.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Fragment_Renderer/Fragment_Components/BasicTextWithImage",component:_BasicTextWithImage__WEBPACK_IMPORTED_MODULE_2__.Z},Default=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BasicTextWithImage__WEBPACK_IMPORTED_MODULE_2__.Z,{...args})).bind({});Default.args={src:"https://www.canada.ca/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",alt:"image alt text",width:359,height:260,data:[{nodeType:"paragraph",content:[{nodeType:"text",value:"Every week, our product team meets for Feedback Friday to sort through all the new survey responses. We look at the ratings and comments people shared with us about their experience. "}]}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BasicTextWithImage {...args} />",...Default.parameters?.docs?.source}}}},"./components/fragment_renderer/fragment_components/BasicTextWithImage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>BasicTextWithImage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),_text_node_renderer_TextRender__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/text_node_renderer/TextRender.jsx");function BasicTextWithImage({src,alt,width,height,data,excludeH1}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"layout-container grid grid-cols-12 gap-x-6 my-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:grid col-start-8 col-span-5 row-start-1 row-span-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{src,alt,width,height,sizes:"50vw",quality:100})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-span-12 lg:col-span-7",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_text_node_renderer_TextRender__WEBPACK_IMPORTED_MODULE_2__.Z,{data,excludeH1})})]})}BasicTextWithImage.__docgenInfo={description:"",methods:[],displayName:"BasicTextWithImage"}},"./components/molecules/Heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function Heading(props){const{title,fromLink,fromText,id,className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:`mb-0 pb-2 leading-heading1 ${className}`,id,children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mb-11 border-b-[6px] border-b-multi-red-red50a w-[72px]"}),fromLink&&fromText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"From: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:fromLink,className:"underline text-multi-blue-blue70b font-body lg:text-browserh5 font-bold text-mobileh5 leading-[33px] hover:text-multi-blue-blue50b",children:fromText})]})]})}Heading.propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,fromLink:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,fromText:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{title:{description:"The text / title that will be displayed as heading",type:{name:"string"},required:!0},fromLink:{description:"Link that should be dispayed under the main heading level",type:{name:"string"},required:!1},fromText:{description:"Text that will be displyed as text link",type:{name:"string"},required:!1},className:{description:"css overrides for button",type:{name:"string"},required:!1},id:{description:"To identify the heading element",type:{name:"string"},required:!0},dataTestId:{description:"Test id for unit test",type:{name:"string"},required:!1}}}},"./components/text_node_renderer/TextRender.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>TextRender});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),Heading=__webpack_require__("./components/molecules/Heading.js");function HeaderText(props){switch(props.node.style){case"h1":return(0,jsx_runtime.jsx)(Heading.X,{id:"mainHeading",className:0===props.index?"mt-0":"",title:props.children[0].props.node.value});case"h2":return(0,jsx_runtime.jsx)("h2",{id:props.index,className:0===props.index?"mt-0":"",children:props.children});case"h3":return(0,jsx_runtime.jsx)("h3",{id:props.index,className:0===props.index?"mt-0":"",children:props.children});case"h4":return(0,jsx_runtime.jsx)("h4",{children:props.children});case"h5":return(0,jsx_runtime.jsx)("h5",{children:props.children});default:return(0,jsx_runtime.jsx)("h6",{children:props.children})}}function LineBreak(){return(0,jsx_runtime.jsx)("br",{})}function ListItem(props){return(0,jsx_runtime.jsx)("li",{className:"ml-10 text-mobilebody lg:text-p",children:props.children})}function UnorderedList(props){return(0,jsx_runtime.jsx)("ol",{className:"list-decimal",children:props.children})}function Paragraph(props){return(0,jsx_runtime.jsx)("p",{children:props.children})}function Text(props){var _props_node_format_variants,_props_node_format,_props_node;switch(null===(_props_node=props.node)||void 0===_props_node||null===(_props_node_format=_props_node.format)||void 0===_props_node_format||null===(_props_node_format_variants=_props_node_format.variants)||void 0===_props_node_format_variants?void 0:_props_node_format_variants[0]){case"strong":return(0,jsx_runtime.jsx)("strong",{children:props.node.value});case"emphasis":return(0,jsx_runtime.jsx)("em",{children:props.node.value});default:return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.node.value})}}function Span(props){return(0,jsx_runtime.jsx)("span",{children:props.children})}function UnorderedList_UnorderedList(props){return(0,jsx_runtime.jsx)("ul",{className:"list-disc",children:props.children})}function Link(props){return(0,jsx_runtime.jsx)("a",{href:props.node.data.href,className:"underline underline-offset-[6px] text-custom-blue-projects-link hover:text-custom-blue-projects-link-hover",children:props.node.value})}HeaderText.__docgenInfo={description:"",methods:[],displayName:"HeaderText"},LineBreak.__docgenInfo={description:"",methods:[],displayName:"LineBreak"},ListItem.__docgenInfo={description:"",methods:[],displayName:"ListItem"},UnorderedList.__docgenInfo={description:"",methods:[],displayName:"UnorderedList"},Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"},Text.__docgenInfo={description:"",methods:[],displayName:"Text"},Span.__docgenInfo={description:"",methods:[],displayName:"Span"},UnorderedList_UnorderedList.__docgenInfo={description:"",methods:[],displayName:"UnorderedList"},Link.__docgenInfo={description:"",methods:[],displayName:"Link"};const NODES={header:HeaderText,paragraph:Paragraph,link:Link,text:Text,span:Span,"unordered-list":UnorderedList_UnorderedList,"ordered-list":UnorderedList,"list-item":ListItem,"line-break":LineBreak};function TextRecur(props){var _props_node,_props_node1,_props_node2,_props_node3;const Node=NODES[null===(_props_node=props.node)||void 0===_props_node?void 0:_props_node.nodeType];let content=null===(_props_node1=props.node)||void 0===_props_node1?void 0:_props_node1.content;if(Node&&(!props.excludeH1||"header"!==(null===(_props_node2=props.node)||void 0===_props_node2?void 0:_props_node2.nodeType)||"h1"!==(null===(_props_node3=props.node)||void 0===_props_node3?void 0:_props_node3.style)))return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content&&content.length?(0,jsx_runtime.jsx)(Node,{node:props.node,index:props.index,children:content.map((node=>(0,jsx_runtime.jsx)(TextRecur,{node},(0,v4.Z)())))},(0,v4.Z)()):(0,jsx_runtime.jsx)(Node,{node:props.node},(0,v4.Z)())})}function TextRender(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.data.map(((node,index)=>(0,jsx_runtime.jsx)(TextRecur,{node,index,excludeH1:props.excludeH1},(0,v4.Z)())))})}TextRecur.__docgenInfo={description:"",methods:[],displayName:"TextRecur"},TextRender.__docgenInfo={description:"TextRender Component\nTop-level component that initiates the recursive rendering of text content\nProcesses an array of content nodes from AEM and renders them recursively",methods:[],displayName:"TextRender"}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);