"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[839],{7839:function(a,e,l){l.r(e),l.d(e,{default:function(){return I}});var s=l(3396),t=l(7139),r=l(9242);const o=a=>((0,s.dD)("data-v-1caaeaec"),a=a(),(0,s.Cn)(),a),n={class:"list"},c={key:0},i=(0,s.uE)('<div class="form-group" data-v-1caaeaec><label class="form-control skeleton-text skeleton-animate" data-v-1caaeaec></label><input type="text" class="form-control skeleton skeleton-animate" data-v-1caaeaec></div><div class="form-group" data-v-1caaeaec><label class="form-control skeleton-text skeleton-animate" data-v-1caaeaec></label><input type="text" class="form-control skeleton skeleton-animate" data-v-1caaeaec></div><div class="form-group" data-v-1caaeaec><label class="form-control skeleton-text skeleton-animate" data-v-1caaeaec></label><input type="text" class="form-control skeleton skeleton-animate" data-v-1caaeaec></div>',3),d=[i],m={key:1,class:"col-md-12"},u={class:"form-group d-inline-flex align-items-center col-5 mb-2"},p=o((()=>(0,s._)("label",{for:"group_number"},"Номер группы:",-1))),g={class:"form-group d-inline-flex align-items-center col-5 mb-2"},f=o((()=>(0,s._)("label",{for:"group_program_id"},"Программа:",-1))),_=["value"],b={class:"form-group d-inline-flex align-items-center col-5 mb-2"},v=o((()=>(0,s._)("label",{for:"hours"},"Общее количество часов:",-1))),k={class:"form-group d-inline-flex align-items-center col-5 mb-2"},h=o((()=>(0,s._)("label",{for:"start_date"},"Дата начала:",-1))),y={class:"form-group d-inline-flex align-items-center col-5 mb-2"},w=o((()=>(0,s._)("label",{for:"end_date"},"Дата окончания:",-1))),W={class:"form-group d-inline-flex align-items-center col-5 mb-2"},x=o((()=>(0,s._)("label",{for:"StartTime"},"Время начала:",-1))),C={class:"form-group d-inline-flex align-items-center col-5 mb-2"},T=o((()=>(0,s._)("label",{for:"EndTime"},"Время окончания:",-1))),V={class:"form-group d-inline-flex align-items-center col-5 mb-2"},E=o((()=>(0,s._)("label",{for:"pc"},"Общее количество человек:",-1))),D={class:"form-group mt-3"},S=["disabled"],F={class:"spinner-border spinner-border-sm"};function A(a,e,l,o,i,A){const L=(0,s.up)("Field"),U=(0,s.up)("ErrorMessage"),G=(0,s.up)("Select2"),P=(0,s.up)("router-link"),Z=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)("div",n,[i.dataLoading?((0,s.wg)(),(0,s.iD)("div",c,d)):((0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(Z,{onSubmit:A.addGroup,"validation-schema":i.schema},{default:(0,s.w5)((({errors:a})=>[(0,s._)("div",null,[(0,s._)("div",u,[p,(0,s.Wm)(L,{name:"group_number",type:"text",class:(0,t.C_)(["form-control",{"is-invalid":a.group_number}])},null,8,["class"]),(0,s.Wm)(U,{name:"group_number",class:"error-feedback"})]),(0,s._)("div",g,[f,(0,s.Wm)(G,{class:(0,t.C_)(["col-5",{"form-control is-invalid":a.group_program_id}]),modelValue:i.myValue,"onUpdate:modelValue":e[0]||(e[0]=a=>i.myValue=a),options:i.programs,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,s.Wm)(L,{name:"group_program_id",as:"select",modelValue:i.myValue,"onUpdate:modelValue":e[1]||(e[1]=a=>i.myValue=a),hidden:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.programs,(a=>((0,s.wg)(),(0,s.iD)("option",{key:a.id,value:a.id},(0,t.zw)(a.text),9,_)))),128))])),_:1},8,["modelValue"]),(0,s.Wm)(U,{name:"group_program_id",class:"error-feedback"})]),(0,s._)("div",b,[v,(0,s.Wm)(L,{name:"hours",type:"number",class:(0,t.C_)(["form-control",{"is-invalid":a.hours}])},null,8,["class"]),(0,s.Wm)(U,{name:"hours",class:"error-feedback"})]),(0,s._)("div",k,[h,(0,s.Wm)(L,{name:"start_date",type:"date",class:(0,t.C_)(["form-control",{"is-invalid":a.start_date}])},null,8,["class"]),(0,s.Wm)(U,{name:"start_date",class:"error-feedback"})]),(0,s._)("div",y,[w,(0,s.Wm)(L,{name:"end_date",type:"date",class:(0,t.C_)(["form-control",{"is-invalid":a.end_date}])},null,8,["class"]),(0,s.Wm)(U,{name:"end_date",class:"error-feedback"})]),(0,s._)("div",W,[x,(0,s.Wm)(L,{name:"StartTime",type:"time",class:(0,t.C_)(["form-control",{"is-invalid":a.StartTime}])},null,8,["class"]),(0,s.Wm)(U,{name:"StartTime",class:"error-feedback"})]),(0,s._)("div",C,[T,(0,s.Wm)(L,{name:"EndTime",type:"time",class:(0,t.C_)(["form-control",{"is-invalid":a.EndTime}])},null,8,["class"]),(0,s.Wm)(U,{name:"EndTime",class:"error-feedback"})]),(0,s._)("div",V,[E,(0,s.Wm)(L,{name:"pc",type:"number",class:(0,t.C_)(["form-control",{"is-invalid":a.pc}])},null,8,["class"]),(0,s.Wm)(U,{name:"pc",class:"error-feedback"})]),(0,s._)("div",D,[(0,s.Wm)(P,{to:"/lgroups",class:"btn btn-secondary ml-2 float-start"},{default:(0,s.w5)((()=>[(0,s.Uk)("Отмена")])),_:1}),(0,s._)("button",{class:"btn btn-primary btn-block float-end",disabled:i.loading},[(0,s.wy)((0,s._)("span",F,null,512),[[r.F8,i.loading]]),(0,s.Uk)(" Добавить группу ")],8,S)])])])),_:1},8,["onSubmit","validation-schema"]),i.message?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,t.C_)(["alert",i.successful?"alert-success":"alert-danger"])},(0,t.zw)(i.message),3)):(0,s.kq)("",!0)]))])}var L=l(5708),U=l(7629),G=l(5124),P=l(4677),Z={setup(){const a=(0,P.pm)();return{toast:a}},name:"AddGroup",components:{Form:L.l0,Field:L.gN,ErrorMessage:L.Bc},data(){const a=U.Ry().shape({});return{successful:!1,loading:!1,dataLoading:!0,message:"",schema:a,groups:null,profiles:null,directions:null,programs:null,myValue:""}},computed:{},mounted(){},methods:{async addGroup(a){try{this.loading=!0;const e=await G.Z.addLgroup(a.group_number,a.group_program_id,a.hours,a.start_date,a.end_date,a.StartTime,a.EndTime,a.pc);e.data,this.loading=!1,this.successful=!0,this.toast.success("Успешно добавили группу!")}catch(e){this.message="Ошибка",this.toast.error("Ошибка добавления группы"),console.error("Error:",e)}},async loadProgramsData(){try{const a=await G.Z.getProgramsAsIdText();this.programs=Array.isArray(a.data)?a.data:[a.data],this.dataLoading=!1}catch(a){console.error("Error:",a)}}},created(){this.loadProgramsData()}},j=l(89);const z=(0,j.Z)(Z,[["render",A],["__scopeId","data-v-1caaeaec"]]);var I=z}}]);
//# sourceMappingURL=839.2b81150a.js.map