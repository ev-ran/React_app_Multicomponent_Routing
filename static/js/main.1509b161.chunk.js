(this.webpackJsonpreactdemomultiplecomponentsinreactapp=this.webpackJsonpreactdemomultiplecomponentsinreactapp||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),c=(a(37),a(7)),l=a(8),i=a(11),u=a(10),m=a(1),d=a(4);var h=function(e){return r.a.createElement("div",{className:"Navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")," "),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/clock"},"Clock")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contact"},"Contact")," "),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/welcome"},"Welcome")," "),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/welcome/Peter"},"Welcome+Name")," "),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/welcome/Paul"},"Welcome+[name]")," "),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/welcome/Paul/Stout"},"Welcome+[name]+[sname]")," "),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/fetch"},"TestFetch")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/jeopardy"},"Jeopardy"))))};a(43);var f=function(e){return r.a.createElement("div",{className:"welcome"},r.a.createElement("h2",null,"Hello ",e.name," ",e.secondName,"!"))},g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(l.a)(a,[{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Clock"},r.a.createElement("h2",null,"Live, today...  "),r.a.createElement("h4",null,this.state.date.toDateString()," . . .",this.state.date.toLocaleTimeString()))}}]),a}(r.a.Component),E=a(31),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=Object(E.a)({},n.state.formData);t[e.target.name]=e.target.value,n.setState({formData:t})},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitted:!0})},n.resetForm=function(e){n.setState({formData:{firstName:"",lastName:""},submitted:!1})},n.state={formData:{firstName:"",lastName:""},submitted:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.submitted?r.a.createElement("div",{className:"Contact"},r.a.createElement("p",null,"Thank you, ",this.state.formData.firstName,", for submitting the form! "),r.a.createElement("button",{onClick:this.resetForm},"Reset Form")):r.a.createElement("div",{className:"Contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstName"},"FirstName"),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.formData.firstName,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"lastName"},"LastName"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.formData.lastName,onChange:this.handleChange})),r.a.createElement("button",null,"Submit Form")),r.a.createElement("br",null),r.a.createElement("div",null,this.state.formData.firstName," "),r.a.createElement("div",null,this.state.formData.lastName))}}]),a}(r.a.Component);var p=function(e){return r.a.createElement("div",{className:"nothing_404"},r.a.createElement("h2",null,"404: Page not found"))},b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).clickHandler=function(){n.setState((function(e,t){return{currentNumber:e.currentNumber+1}}),n.myTestFetch)},n.state={currentCharacter:{},currentNumber:1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.myTestFetch()}},{key:"myTestFetch",value:function(){var e=this;fetch("https://swapi.dev/api/people/"+this.state.currentNumber).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({currentCharacter:t})})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"TestFetch"},"Name: ",this.state.currentCharacter.name,r.a.createElement("br",null),"Birth_year: ",this.state.currentCharacter.birth_year,r.a.createElement("br",null),"Gender: ",this.state.currentCharacter.gender,r.a.createElement("br",null),"Hair_color: ",this.state.currentCharacter.hair_color,r.a.createElement("button",{onClick:this.clickHandler},"Next Character"))}}]),a}(r.a.Component),_=a(30),w=a.n(_),y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://jservice.io/api/random",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w.a.create();Object(c.a)(this,e),this.url=t,this.client=a}return Object(l.a)(e,[{key:"getQuestion",value:function(){return this.client.get(this.url)}},{key:"getQuestionArray",value:function(){return this.client.get(this.url+"?count=3")}},{key:"getCategoryQuestions",value:function(e){return this.client.get("http://jservice.io/api/clues?category="+e)}},{key:"getCategories",value:function(){return this.client.get("http://jservice.io/api/categories?count=3")}},{key:"getOffsetCategories",value:function(e){return this.client.get("http://jservice.io/api/categories?offset="+e)}}]),e}();a(61),a(27);var N=function(e){var t="",a="",n="",s="",o="",c="",l="";return void 0!==e.stateJeop.dataM&&(l=e.stateJeop.dataM.map((function(e,t){return r.a.createElement("p",{key:t}," ",r.a.createElement("span",{className:"text"},"Category: "),' "',e.category.title,'"')})),e.stateJeop.dataM.map((function(e,t){return r.a.createElement("p",{key:t},e.category.id)}))),e.stateJeop.showAnswer&&(a='The answer is " '+e.stateJeop.data.answer+'"',n=e.stateJeop.result_for_question),void 0!==e.stateJeop.data.category&&(s=e.stateJeop.data.category.title,o=e.stateJeop.data.question,c=e.stateJeop.data.value,t=r.a.createElement("div",null,"[Answer for test: ",e.stateJeop.data.answer,"]",r.a.createElement("p",null," ",a,". ",n," "))),r.a.createElement("div",{className:"Display"},r.a.createElement("div",{className:"categories"},r.a.createElement("button",{className:"category_butt",onClick:e.getCategoryID_0butt},"  ",l[0]," "),r.a.createElement("button",{className:"category_butt",onClick:e.getCategoryID_1butt},"  ",l[1]," "),r.a.createElement("button",{className:"category_butt",onClick:e.getCategoryID_2butt},"  ",l[2]," ")),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"info_container"},r.a.createElement("div",{className:"info_1"},r.a.createElement("p",null," Current Score:  "),r.a.createElement("p",null," Answered Questions: "),r.a.createElement("p",null," Category Title: "),r.a.createElement("p",null,"Point Value: "),r.a.createElement("p",null,"Question: ")),r.a.createElement("div",{className:"info_2"},r.a.createElement("p",null," ",e.stateJeop.score," "),r.a.createElement("p",null," ",e.stateJeop.question_number),r.a.createElement("p",null," ",s),r.a.createElement("p",null," ",c),r.a.createElement("p",null," ",o))),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"info_container"},r.a.createElement("div",{className:"info_4"},r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"user_answer"},r.a.createElement("p",null,"Your answer: "))),r.a.createElement("div",{className:"info_3"},r.a.createElement("input",{type:"text",name:"user_answer",value:e.stateJeop.user_answer,onChange:e.handleUserAnswer}),r.a.createElement("button",{className:"butt",onClick:e.handleSubmitAnswer},"Submit answer"))),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"info_container"},r.a.createElement("div",{className:"info_1"}),r.a.createElement("div",{className:"info_2"},t)),r.a.createElement("button",{className:"butt",onClick:e.getSeveralQuestions},"Change Categories"),r.a.createElement("button",{className:"butt",onClick:e.handleNewGame},"Start New game"))},C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getCategoryID_0butt=function(){if(!0===n.state.game_just_starts||!0===n.state.question_answered){var e=n.state.idd0;n.setState({idd_choosen_cat:e},(function(){n.getArrayOfNewQuestions_ByCategoryId()}))}},n.getCategoryID_1butt=function(){if(!0===n.state.game_just_starts||!0===n.state.question_answered){var e=n.state.idd1;n.setState({idd_choosen_cat:e},(function(){n.getArrayOfNewQuestions_ByCategoryId()}))}},n.getCategoryID_2butt=function(){if(!0===n.state.game_just_starts||!0===n.state.question_answered){var e=n.state.idd2;n.setState({idd_choosen_cat:e},(function(){n.getArrayOfNewQuestions_ByCategoryId()}))}},n.getArrayOfNewQuestions_ByCategoryId=function(){if(!0===n.state.question_answered||!1===n.state.question_answered&&!0===n.state.game_just_starts){var e=n.state.idd_choosen_cat;return n.client.getCategoryQuestions(e).then((function(e){n.setState((function(){return{dataByCat:e.data}}));var t=n.state.dataByCat.length;console.log("number of question in this category:  "+t);var a=Math.floor(Math.random()*t);console.log("number of choosen question:  "+a);var r=e.data.map((function(e,t){return e}));n.setState((function(e,t){return{data:r[a],user_answer:"",answer:"",showAnswer:!1}}))}))}},n.getSeveralQuestions=function(){if(!0===n.state.game_just_starts||!0===n.state.question_answered)return n.client.getQuestionArray().then((function(e){var t=e.data.map((function(e,t){return e.category.id}));n.setState((function(){return{dataM:e.data,idd0:t[0],idd1:t[1],idd2:t[2],data:{},idd_choosen_cat:0,dataByCat:[],user_answer:"",answer:"",showAnswer:!1,result_for_question:""}}))}))},n.handleNewGame=function(){n.getSeveralQuestions(),n.setState({score:0,question_number:0})},n.handleUserAnswer=function(e){var t=e.target.value;n.setState({user_answer:t})},n.handleScore=function(e){console.log("Hi from handleScore!!!"),n.state.user_answer===n.state.data.answer&&console.log("Correct answer!!!"),console.log(n.state.data.category.title)},n.handleSubmitAnswer=function(e){""!==n.state.user_answer&&(n.setState((function(e,t){return{question_number:e.question_number+1,question_answered:!0,showAnswer:!0,game_just_starts:!1}})),n.state.user_answer.trim().toLowerCase()===n.state.data.answer.trim().toLowerCase()?(console.log("your answer is right!!"),n.setState((function(e,t){return{score:e.score+n.state.data.value,result_for_question:"Your answer is right!"}}))):(console.log("your answer is wrong!!!"),n.setState((function(e,t){return{score:e.score-n.state.data.value,result_for_question:"Your answer is wrong..."}}))))},n.client=new y,n.state={data:{},dataM:[],idd0:0,idd1:0,idd2:0,idd_choosen_cat:0,dataByCat:[],score:0,question_number:0,user_answer:"",answer:"",showAnswer:!1,result_for_question:"",question_answered:!1,game_just_starts:!0},n}return Object(l.a)(a,[{key:"getNewQuestion",value:function(){var e=this;return this.client.getQuestion().then((function(t){e.setState({data:t.data[0],user_answer:"",answer:"",showAnswer:!1,result_for_question:""}),console.log()}))}},{key:"componentDidMount",value:function(){this.getSeveralQuestions()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{stateJeop:this.state,handleUserAnswer:this.handleUserAnswer,handleSubmitAnswer:this.handleSubmitAnswer,handleNewGame:this.handleNewGame,getCategoryID_0butt:this.getCategoryID_0butt,getCategoryID_1butt:this.getCategoryID_1butt,getCategoryID_2butt:this.getCategoryID_2butt,getSeveralQuestions:this.getSeveralQuestions,getArrayOfNewQuestions_ByCategoryId:this.getArrayOfNewQuestions_ByCategoryId}))}}]),a}(r.a.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(f,Object.assign({},e,{name:"on root/home Page"}))}}),r.a.createElement(m.a,{exact:!0,path:"/welcome",render:function(e){return r.a.createElement(f,Object.assign({},e,{name:"! Welcome Everybody!"}))}}),r.a.createElement(m.a,{exact:!0,path:"/welcome/:name",render:function(e){return r.a.createElement(f,Object.assign({},e,{name:e.match.params.name}))}}),r.a.createElement(m.a,{path:"/welcome/:name/:secondName",render:function(e){return r.a.createElement(f,Object.assign({},e,{name:e.match.params.name,secondName:e.match.params.secondName}))}}),r.a.createElement(m.a,{path:"/clock",component:g}),r.a.createElement(m.a,{path:"/contact",component:v}),r.a.createElement(m.a,{path:"/fetch",component:b}),r.a.createElement(m.a,{path:"/jeopardy",component:C}),r.a.createElement(m.a,{path:"*",component:p})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d.a,{basename:"/React_app_Multicomponent_Routing"},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.1509b161.chunk.js.map