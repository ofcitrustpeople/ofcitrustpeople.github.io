"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[44],{6044:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var i=a(3396),o=a(7139),n=a(9242);const r=e=>((0,i.dD)("data-v-07130f2e"),e=e(),(0,i.Cn)(),e),d={class:"col-md-12 list"},s={key:0},l={class:"form-group d-inline-flex align-items-center col-5 mb-2"},c=r((()=>(0,i._)("label",{for:"dir_name"},"Название направления",-1))),m={class:"form-group d-inline-flex align-items-center col-5 mb-2"},u=r((()=>(0,i._)("label",{for:"dir_code"},"Код направления",-1))),f={class:"form-group mt-3"},_=["disabled"],p={class:"spinner-border spinner-border-sm"},v={key:1},b=(0,i.uE)('<div class="form-group" data-v-07130f2e><label class="form-control skeleton-text skeleton-animate" data-v-07130f2e></label><input type="text" class="form-control skeleton skeleton-animate" data-v-07130f2e></div><div class="form-group" data-v-07130f2e><label class="form-control skeleton-text skeleton-animate" data-v-07130f2e></label><input type="text" class="form-control skeleton skeleton-animate" data-v-07130f2e></div>',2),h=[b];function g(e,t,a,r,b,g){const k=(0,i.up)("Field"),D=(0,i.up)("ErrorMessage"),y=(0,i.up)("router-link"),w=(0,i.up)("Form");return(0,i.wg)(),(0,i.iD)("div",d,[b.direction?((0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(w,{onSubmit:g.updateDirection,"validation-schema":b.schema},{default:(0,i.w5)((({errors:e})=>[(0,i._)("div",null,[(0,i._)("div",l,[c,(0,i.Wm)(k,{name:"dir_name",type:"text",value:"",class:(0,o.C_)(["form-control",{"is-invalid":e.dir_name}]),modelValue:b.editedDirection.dir_name,"onUpdate:modelValue":t[0]||(t[0]=e=>b.editedDirection.dir_name=e)},null,8,["class","modelValue"]),(0,i.Wm)(D,{name:"dir_name",class:"error-feedback"})]),(0,i._)("div",m,[u,(0,i.Wm)(k,{name:"dir_code",type:"text",class:(0,o.C_)(["form-control",{"is-invalid":e.dir_code}]),value:"",modelValue:b.editedDirection.dir_code,"onUpdate:modelValue":t[1]||(t[1]=e=>b.editedDirection.dir_code=e)},null,8,["class","modelValue"]),(0,i.Wm)(D,{name:"dir_code",class:"error-feedback"})]),(0,i._)("div",f,[(0,i._)("button",{class:"btn btn-primary btn-block float-end",disabled:b.loading},[(0,i.wy)((0,i._)("span",p,null,512),[[n.F8,b.loading]]),(0,i.Uk)(" Обновить направление ")],8,_),(0,i.Wm)(y,{to:"/directions",class:"btn btn-secondary ml-2 float-start"},{default:(0,i.w5)((()=>[(0,i.Uk)("Отмена")])),_:1})])])])),_:1},8,["onSubmit","validation-schema"])])):((0,i.wg)(),(0,i.iD)("div",v,h)),e.message?((0,i.wg)(),(0,i.iD)("div",{key:2,class:(0,o.C_)(["alert",e.successful?"alert-success":"alert-danger"])},(0,o.zw)(e.message),3)):(0,i.kq)("",!0)])}var k=a(5708),D=a(7629),y=a(5124),w=a(4677),x={setup(){const e=(0,w.pm)();return{toast:e}},components:{Form:k.l0,Field:k.gN,ErrorMessage:k.Bc},data(){const e=D.Ry().shape({});return{schema:e,loading:!1,direction:null,editedDirection:null,groups:null}},methods:{async loadDirectionDetail(){const e=this.$route.params.directionId;try{const t=await y.Z.getDirectionById(e);this.direction=t.data,this.editedDirection={...t.data}}catch(t){console.error("Error:",t)}},async updateDirection(){try{this.loading=!0;const e=await y.Z.updateDirectionById(this.direction.dir_id,this.editedDirection.dir_name,this.editedDirection.dir_code);e.data,this.student={...this.editedStudent},this.loading=!1,this.toast.success("Успешно обновили направление!")}catch(e){console.error("Ошибка:",e)}}},created(){this.loadDirectionDetail()}},C=a(89);const V=(0,C.Z)(x,[["render",g],["__scopeId","data-v-07130f2e"]]);var W=V}}]);
//# sourceMappingURL=44.05939353.js.map