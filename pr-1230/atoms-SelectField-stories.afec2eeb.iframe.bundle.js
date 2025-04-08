(self.webpackChunkservice_canada_labs=self.webpackChunkservice_canada_labs||[]).push([[5131],{"./components/atoms/SelectField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectField_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),ErrorLabel=__webpack_require__("./components/atoms/ErrorLabel.js"),esm=__webpack_require__("./node_modules/next-i18next/dist/esm/index.js");function SelectField({value="",...props}){const{t}=(0,esm.$G)("common"),ifControlledProps=props.uncontrolled?{}:{value};return props.ignoreSort||props.options.sort((function(a,b){return new Intl.Collator("fr").compare(a.name.toLowerCase(),b.name.toLowerCase())})),(0,jsx_runtime.jsxs)("div",{className:"block leading-tight"+(props.className?" "+props.className:" mb-10px"),children:[(0,jsx_runtime.jsxs)("label",{className:"select-field-label block leading-tight text-sm lg:text-p font-body mb-5 "+(props.boldLabel?"font-bold":""),htmlFor:props.id+"-choice",children:[props.required?(0,jsx_runtime.jsx)("b",{className:"text-error-border-red","aria-hidden":"true",children:"*"}):void 0," ",props.label," "]}),props.error?(0,jsx_runtime.jsx)(ErrorLabel.h,{message:props.error}):void 0,(0,jsx_runtime.jsxs)("select",{className:"text-input select-field bg-white font-body w-full min-h-40px shadow-sm border-2 py-6px px-12px "+(props.error?"border-error-border-red":"border-black"),id:props.id+"-choice",name:props.name,"aria-required":props.required,"aria-invalid":props.error?"true":void 0,onChange:e=>props.onChange(e.currentTarget.value),...ifControlledProps,"data-testid":props.dataTestId+"-choice","data-cy":props.dataCy+"-choice",children:[(0,jsx_runtime.jsx)("option",{value:"","data-testid":"default","data-cy":"default"},"default"),props.options.map((({id,name,value})=>(0,jsx_runtime.jsx)("option",{value,"data-testid":id,"data-cy":id,children:name},id))),props.other?(0,jsx_runtime.jsx)("option",{value:"other","data-testid":"other","data-cy":"other",children:t("reportAProblemOther")},"other"):""]})]})}SelectField.propTypes={className:prop_types_default().string,id:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,required:prop_types_default().bool,value:prop_types_default().string.isRequired,onChange:prop_types_default().func,error:prop_types_default().string,other:prop_types_default().bool,boldLabel:prop_types_default().bool,uncontrolled:prop_types_default().bool,options:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,value:prop_types_default().string.isRequired})),dataTestId:prop_types_default().string,dataCy:prop_types_default().string,ignoreSort:prop_types_default().bool},SelectField.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{value:{defaultValue:{value:'""',computed:!1},description:"value of the text field",type:{name:"string"},required:!1},className:{description:"additional css for the component",type:{name:"string"},required:!1},id:{description:"the id of the text field",type:{name:"string"},required:!0},name:{description:"the name of the text field",type:{name:"string"},required:!0},label:{description:"the label of the text field",type:{name:"string"},required:!0},required:{description:"whether ot not the field is required",type:{name:"bool"},required:!1},onChange:{description:"call back for when the value of the text field changes",type:{name:"func"},required:!1},error:{description:"message to display if there is an error",type:{name:"string"},required:!1},other:{description:"Other option for dropdown",type:{name:"bool"},required:!1},boldLabel:{description:"if label should be bold",type:{name:"bool"},required:!1},uncontrolled:{description:"boolean flag to specify that this input should be uncontrolled by react",type:{name:"bool"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},name:{name:"string",required:!0},value:{name:"string",required:!0}}}},required:!1},dataTestId:{description:"unit test selector",type:{name:"string"},required:!1},dataCy:{description:"cypress tests selector",type:{name:"string"},required:!1},ignoreSort:{description:"if true, skip sorting the options",type:{name:"bool"},required:!1}}};const SelectField_stories={title:"Components/Atoms/SelectField",component:SelectField,decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:"w-full flex justify-center",children:(0,jsx_runtime.jsx)("div",{className:"w-96",children:(0,jsx_runtime.jsx)(Story,{})})})]},Primary=(args=>(0,jsx_runtime.jsx)(SelectField,{...args})).bind({});Primary.args={id:"select-field-1",name:"selectField1",label:"I am a select field",uncontrolled:!0,dataTestId:"select-field-1",options:[{id:"option1",name:"Option 1",value:"option1"},{id:"option2",name:"Option 2",value:"option2"},{id:"option3",name:"Option 3",value:"option3"},{id:"option4",name:"Option 4",value:"option4"}]};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <SelectField {...args} />",...Primary.parameters?.docs?.source}}}},"./components/atoms/ErrorLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ErrorLabel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function ErrorLabel(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`error-label border-l-4 border-error-border-red px-3 py-1 bg-error-background-red font-body font-bold mb-5px text-sm lg:text-p ${props.className}`,children:props.message})}ErrorLabel.propTypes={message:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},ErrorLabel.__docgenInfo={description:"error label component that is used with form inputs to display error messages",methods:[],displayName:"ErrorLabel",props:{message:{description:"",type:{name:"string"},required:!0},className:{description:"Prop for adding some classes",type:{name:"string"},required:!1}}}},"?6a05":()=>{}}]);