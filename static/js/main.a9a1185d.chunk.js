(this["webpackJsonpcrud-usuarios-bootstrap-formik-mockapi"]=this["webpackJsonpcrud-usuarios-bootstrap-formik-mockapi"]||[]).push([[0],{197:function(e,n,t){},222:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(9),i=t.n(a),o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,231)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))},l=(t(96),t(17)),s=t(225),d=t(226),j=t(89),h=t(227),u=t(230),b=t(228),m=t(229),O=t(91),x=t(25),p=(t(197),t(51)),f=t.n(p),v=function(e){return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2").replace(/(-\d{4})\d+?$/,"$1")},g=(t(216),t(26)),C=t(88),k=(t(219),t(2)),y=function(){var e=Object(c.useState)(),n=Object(l.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(l.a)(a,2),o=i[0],p=i[1],y="http://60a053e279c19b00174f0b3f.mockapi.io/v1/users",N=function(){B.resetForm(),p(!1)},S=x.a({email:x.b().email("Informe um email v\xe1lido").required("Email \xe9 obrigat\xf3rio"),name:x.b().required("Nome \xe9 obrigat\xf3rio"),phone:x.b().required("Telefone \xe9 obrigat\xf3rio")}),B=Object(O.a)({initialValues:{id:0,name:"",email:"",phone:"",createdAt:""},validationSchema:S,onSubmit:function(e,n){var t=n.setSubmitting,c=0===e.id?y:"".concat(y,"/").concat(e.id),r=0===e.id?"POST":"PUT";f()(c,{method:r,data:e}).then((function(){T(),g.b.success(0===e.id?"Usu\xe1rio cadastrado":"Usu\xe1rio atualizado"),t(!1),N()})).catch((function(e){console.error(e)}))}});Object(c.useEffect)((function(){T()}),[]);var T=function(){fetch(y,{method:"GET"}).then((function(e){return e.json()})).then((function(e){r(e)}))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.a,{children:Object(k.jsx)(d.a,{children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)("h1",{children:"Gerenciamento de Usu\xe1rios"}),Object(k.jsx)("br",{}),Object(k.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"Nome"}),Object(k.jsx)("th",{children:"Email"}),Object(k.jsx)("th",{children:"Telefone"}),Object(k.jsx)("th",{className:"center",children:Object(k.jsx)(u.a,{onClick:function(){return p(!0)},variant:"primary",children:"Novo"})})]})}),Object(k.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.id}),Object(k.jsx)("td",{children:e.name}),Object(k.jsx)("td",{children:e.email}),Object(k.jsx)("td",{children:v(e.phone)}),Object(k.jsxs)("td",{className:"center",children:[Object(k.jsx)(u.a,{variant:"warning",onClick:function(){return function(e){B.setValues(e),p(!0)}(e)},children:"Editar"}),Object(k.jsx)(u.a,{variant:"danger",className:"ml-20",onClick:function(){return n=e.id,void Object(C.confirmAlert)({title:"Remover Usu\xe1rio",message:"Deseja excluir o usu\xe1rio?",buttons:[{label:"N\xe3o"},{label:"Sim",onClick:function(){f.a.delete("".concat(y,"/").concat(n)).then((function(){g.b.success("Usu\xe1rio Removido"),T()})).catch((function(e){g.b.error(e)}))}}]});var n},children:"Remover"})]})]},n)}))})]})]})})}),Object(k.jsxs)(b.a,{show:o,onHide:N,children:[Object(k.jsx)(b.a.Header,{closeButton:!0,children:Object(k.jsx)(b.a.Title,{children:"Dados do Usu\xe1rio"})}),Object(k.jsxs)(b.a.Body,{children:["Preencha as informa\xe7\xf5es abaixo",Object(k.jsx)("br",{}),Object(k.jsxs)(m.a,{children:[Object(k.jsx)("input",{type:"hidden",id:"id",name:"id",value:B.values.id}),Object(k.jsx)("input",{type:"hidden",id:"createdAt",name:"createdAt",value:B.values.createdAt}),Object(k.jsxs)(m.a.Group,{controlId:"name",children:[Object(k.jsx)(m.a.Label,{children:"Nome"}),Object(k.jsx)(m.a.Control,{type:"text",name:"name",onChange:B.handleChange,onBlur:B.handleBlur,value:B.values.name}),B.touched.name&&B.errors.name?Object(k.jsx)("div",{className:"erro",children:B.errors.name}):null]}),Object(k.jsxs)(m.a.Group,{controlId:"email",children:[Object(k.jsx)(m.a.Label,{children:"Email"}),Object(k.jsx)(m.a.Control,{placeholder:"name@example.com",type:"email",name:"email",onChange:B.handleChange,onBlur:B.handleBlur,value:B.values.email}),B.touched.email&&B.errors.email?Object(k.jsx)("div",{className:"erro",children:B.errors.email}):null]}),Object(k.jsxs)(m.a.Group,{controlId:"phone",children:[Object(k.jsx)(m.a.Label,{children:"Telefone"}),Object(k.jsx)(m.a.Control,{type:"text",name:"phone",onChange:B.handleChange,onBlur:B.handleBlur,value:v(B.values.phone)}),B.touched.phone&&B.errors.phone?Object(k.jsx)("div",{className:"erro",children:B.errors.phone}):null]})]})]}),Object(k.jsxs)(b.a.Footer,{children:[Object(k.jsx)(u.a,{variant:"secondary",onClick:N,children:"Cancelar"}),Object(k.jsx)(u.a,{variant:"primary",onClick:B.handleSubmit,children:"Salvar"})]})]}),Object(k.jsx)(g.a,{})]})};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(y,{})}),document.getElementById("root")),o()}},[[222,1,2]]]);
//# sourceMappingURL=main.a9a1185d.chunk.js.map