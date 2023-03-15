"use strict";(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[7821],{"./components/atoms/TableOfContents.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>TableOfContents_stories});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),__jsx=react.createElement;function TableOfContents(props){return __jsx(react.Fragment,null,__jsx("h2",{className:"font-semibold"},props.title),__jsx("nav",null,__jsx("ul",{className:"leading-4 list-disc"},props.headings.map((function(heading){return __jsx("li",{key:heading.id},__jsx("a",{className:"underline text-custom-blue-link underline hover:text-custom-blue-projects-link",href:"#".concat(heading.id)},heading.text))})))))}TableOfContents.propTypes={title:prop_types_default().string,headings:prop_types_default().array},TableOfContents.__docgenInfo={description:"",methods:[],displayName:"TableOfContents",props:{title:{description:"The title for the table of contents",type:{name:"string"},required:!1},headings:{description:"An array of headings",type:{name:"array"},required:!1}}};var TableOfContents_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TableOfContents_stories={title:"Components/Atoms/TableOfContents",component:TableOfContents};var Template=function Template(args){return TableOfContents_stories_jsx(TableOfContents,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={title:"Table of Contents Title",headings:[{id:"heading-one",text:"Heading one"}]},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TableOfContents {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})}}]);