"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[593],{593:function(e,a,t){t.r(a),t.d(a,{default:function(){return z}});var s=t(3396),l=t(7139),o=t(9242);const n=e=>((0,s.dD)("data-v-64755d12"),e=e(),(0,s.Cn)(),e),d={class:"list"},r={key:0},i=(0,s.uE)('<div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div><div class="form-group" data-v-64755d12><label class="form-control skeleton-text skeleton-animate" data-v-64755d12></label><input type="text" class="form-control skeleton skeleton-animate" data-v-64755d12></div>',9),c=[i],m={key:1,class:"col-md-12"},u={class:"form-group"},p=n((()=>(0,s._)("label",{for:"listener_id"},"Слушатели",-1))),v=["value"],f={class:"form-group"},_=n((()=>(0,s._)("label",{for:"payer_id"},"Плательщики",-1))),k=["value"],y={class:"form-group"},b=n((()=>(0,s._)("label",{for:"required_amount"},"Требуемая сумма",-1))),g={class:"form-group"},h=n((()=>(0,s._)("label",{for:"deposited_amount"},"Внесённая сумма",-1))),x={class:"form-group"},w=n((()=>(0,s._)("label",{for:"expiration_date"},"Дата окончания срока ожидания выплаты",-1))),V={class:"form-group mt-3"},W=["disabled"],C={class:"spinner-border spinner-border-sm"};function D(e,a,t,n,i,D){const A=(0,s.up)("Select2"),q=(0,s.up)("Field"),L=(0,s.up)("ErrorMessage"),U=(0,s.up)("Form"),F=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",d,[i.dataLoading?((0,s.wg)(),(0,s.iD)("div",r,c)):((0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(U,{onSubmit:D.addContract,"validation-schema":i.schema},{default:(0,s.w5)((({errors:t})=>[(0,s._)("div",null,[(0,s._)("div",u,[p,(0,s.Wm)(A,{class:(0,l.C_)({"form-control is-invalid":t.listener_id}),modelValue:e.myValue,"onUpdate:modelValue":a[0]||(a[0]=a=>e.myValue=a),options:i.listeners,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,s.Wm)(q,{name:"listener_id",as:"select",modelValue:e.myValue,"onUpdate:modelValue":a[1]||(a[1]=a=>e.myValue=a),hidden:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.listeners,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.id},(0,l.zw)(e.text),9,v)))),128))])),_:1},8,["modelValue"]),(0,s.Wm)(L,{name:"listener_id",class:"error-feedback"})]),(0,s._)("div",f,[_,(0,s.Wm)(A,{class:(0,l.C_)({"form-control is-invalid":t.payer_id}),modelValue:e.myValue2,"onUpdate:modelValue":a[2]||(a[2]=a=>e.myValue2=a),options:i.payers,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,s.Wm)(q,{name:"payer_id",as:"select",modelValue:e.myValue2,"onUpdate:modelValue":a[3]||(a[3]=a=>e.myValue2=a),hidden:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.payers,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.id},(0,l.zw)(e.text),9,k)))),128))])),_:1},8,["modelValue"]),(0,s.Wm)(L,{name:"payer_id",class:"error-feedback"})]),(0,s._)("div",y,[b,(0,s.Wm)(q,{name:"required_amount",type:"text",value:"",class:(0,l.C_)(["form-control",{"is-invalid":t.required_amount}])},null,8,["class"]),(0,s.Wm)(L,{name:"required_amount",class:"error-feedback"})]),(0,s._)("div",g,[h,(0,s.Wm)(q,{name:"deposited_amount",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t.deposited_amount}]),value:""},null,8,["class"]),(0,s.Wm)(L,{name:"deposited_amount",class:"error-feedback"})]),(0,s._)("div",x,[w,(0,s.Wm)(q,{name:"expiration_date",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t.expiration_date}]),value:""},null,8,["class"]),(0,s.Wm)(L,{name:"expiration_date",class:"error-feedback"})])])])),_:1},8,["onSubmit","validation-schema"]),(0,s._)("div",V,[(0,s._)("button",{class:"btn btn-primary btn-block",disabled:i.loading},[(0,s.wy)((0,s._)("span",C,null,512),[[o.F8,i.loading]]),(0,s.Uk)(" Добавить договор ")],8,W),(0,s.Wm)(F,{to:"/contracts",class:"btn btn-secondary ml-2 float-end"},{default:(0,s.w5)((()=>[(0,s.Uk)("Отмена")])),_:1})]),i.message?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,l.C_)(["alert",i.successful?"alert-success":"alert-danger"])},(0,l.zw)(i.message),3)):(0,s.kq)("",!0)]))])}var A=t(5708),q=t(7629),L=t(5124),U=t(4677),F={setup(){const e=(0,U.pm)();return{toast:e}},name:"AddContract",components:{Form:A.l0,Field:A.gN,ErrorMessage:A.Bc},data(){const e=q.Ry().shape({});return{successful:!1,loading:!1,dataLoading:!0,message:"",schema:e,listeners:null,payers:null}},computed:{},mounted(){},methods:{async addContract(e){try{this.loading=!0;const a=await L.Z.addContract(e.listener_id,e.payer_id,e.required_amount,e.deposited_amount,e.expiration_date);a.data,this.loading=!1,this.successful=!0,this.toast.success("Успешно добавили договор!")}catch(a){this.message="Ошибка",this.toast.error("Ошибка добавления договор"),console.error("Error updating contract details:",a)}},async loadListenersData(){try{const e=await L.Z.getListenersAsIdText();this.listeners=Array.isArray(e.data)?e.data:[e.data]}catch(e){console.error("Ошибка загрузки данных:",e)}},async loadPayersData(){try{const e=await L.Z.getPayersAsIdText();this.payers=Array.isArray(e.data)?e.data:[e.data],this.dataLoading=!1}catch(e){console.error("Ошибка загрузки данных:",e)}}},created(){this.loadListenersData(),this.loadPayersData()}},E=t(89);const Z=(0,E.Z)(F,[["render",D],["__scopeId","data-v-64755d12"]]);var z=Z}}]);
//# sourceMappingURL=593.39425e0f.js.map