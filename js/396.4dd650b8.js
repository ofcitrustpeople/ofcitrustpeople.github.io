"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[396],{4396:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var i=a(3396),o=a(7139),r=a(9242);const d=e=>((0,i.dD)("data-v-2859471c"),e=e(),(0,i.Cn)(),e),s={class:"col-md-12 list"},n={key:0},l={class:"form-group"},c=d((()=>(0,i._)("label",{for:"dir_name"},"Фамилия",-1))),u={class:"form-group"},m=d((()=>(0,i._)("label",{for:"dir_code"},"Имя",-1))),_={class:"form-group mt-3"},p=["disabled"],v={class:"spinner-border spinner-border-sm"},f={key:1},h=(0,i.uE)('<div class="form-group" data-v-2859471c><label class="form-control skeleton-text skeleton-animate" data-v-2859471c></label><input type="text" class="form-control skeleton skeleton-animate" data-v-2859471c></div><div class="form-group" data-v-2859471c><label class="form-control skeleton-text skeleton-animate" data-v-2859471c></label><input type="text" class="form-control skeleton skeleton-animate" data-v-2859471c></div>',2),b=[h];function g(e,t,a,d,h,g){const k=(0,i.up)("Field"),D=(0,i.up)("ErrorMessage"),y=(0,i.up)("router-link"),w=(0,i.up)("Form");return(0,i.wg)(),(0,i.iD)("div",s,[h.direction?((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(w,{onSubmit:g.updateDirection,"validation-schema":h.schema},{default:(0,i.w5)((({errors:e})=>[(0,i._)("div",null,[(0,i._)("div",l,[c,(0,i.Wm)(k,{name:"dir_name",type:"text",value:"",class:(0,o.C_)(["form-control",{"is-invalid":e.dir_name}]),modelValue:h.editedDirection.dir_name,"onUpdate:modelValue":t[0]||(t[0]=e=>h.editedDirection.dir_name=e)},null,8,["class","modelValue"]),(0,i.Wm)(D,{name:"dir_name",class:"error-feedback"})]),(0,i._)("div",u,[m,(0,i.Wm)(k,{name:"dir_code",type:"text",class:(0,o.C_)(["form-control",{"is-invalid":e.dir_code}]),value:"",modelValue:h.editedDirection.dir_code,"onUpdate:modelValue":t[1]||(t[1]=e=>h.editedDirection.dir_code=e)},null,8,["class","modelValue"]),(0,i.Wm)(D,{name:"dir_code",class:"error-feedback"})]),(0,i._)("div",_,[(0,i._)("button",{class:"btn btn-primary btn-block float-start",disabled:h.loading},[(0,i.wy)((0,i._)("span",v,null,512),[[r.F8,h.loading]]),(0,i.Uk)(" Обновить направление ")],8,p),(0,i.Wm)(y,{to:"/directions",class:"btn btn-secondary ml-2 float-end"},{default:(0,i.w5)((()=>[(0,i.Uk)("Отмена")])),_:1})])])])),_:1},8,["onSubmit","validation-schema"])])):((0,i.wg)(),(0,i.iD)("div",f,b)),e.message?((0,i.wg)(),(0,i.iD)("div",{key:2,class:(0,o.C_)(["alert",e.successful?"alert-success":"alert-danger"])},(0,o.zw)(e.message),3)):(0,i.kq)("",!0)])}var k=a(5708),D=a(7629),y=a(5124),w=a(4677),x={setup(){const e=(0,w.pm)();return{toast:e}},components:{Form:k.l0,Field:k.gN,ErrorMessage:k.Bc},data(){const e=D.Ry().shape({});return{schema:e,loading:!1,direction:null,editedDirection:null,groups:null}},methods:{async loadDirectionDetail(){const e=this.$route.params.directionId;try{const t=await y.Z.getDirectionById(e);this.direction=t.data,this.editedDirection={...t.data}}catch(t){console.error("Error:",t)}},async updateDirection(){try{this.loading=!0;const e=await y.Z.updateDirectionById(this.direction.dir_id,this.editedDirection.dir_name,this.editedDirection.dir_code);e.data,this.student={...this.editedStudent},this.loading=!1,this.toast.success("Успешно обновили направление!")}catch(e){console.error("Ошибка:",e)}}},created(){this.loadDirectionDetail()}},C=a(89);const V=(0,C.Z)(x,[["render",g],["__scopeId","data-v-2859471c"]]);var W=V}}]);
//# sourceMappingURL=396.4dd650b8.js.map