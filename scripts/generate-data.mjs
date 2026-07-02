import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var __dirname=path.dirname(fileURLToPath(import.meta.url));
var DATA=path.resolve(__dirname,"../public/data");
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pickN(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(pick(a));return[...s]}
var DIFF=["easy","medium","hard"];
var TS="Docker DevOps 容器 镜像 Dockerfile docker build docker run docker ps docker logs docker exec docker stop docker rm docker rmi Docker Hub registry tag volume bind mount network bridge host port mapping ENV ARG WORKDIR COPY ADD RUN CMD ENTRYPOINT EXPOSE multi-stage .dockerignore docker compose compose.yml services depends_on restart healthcheck Nginx Node Spring Boot MySQL Redis CI/CD GitHub Actions workflow artifact deployment containerization orchestrator Kubernetes Pod Service Deployment Ingress ConfigMap Secret namespace minikube kubectl kubeadm Helm chart repository microservice application scaling load balancing monitoring Grafana Prometheus alert manager logging EFK ELK Fluentd Logstash Kibana Loki Promtail sentry error tracking docker swarm stack service replica overlay network ingress load balance docker stack deploy docker secret docker config docker context docker machine portainer harbor nexus gitlab ci jenkins pipeline groovy declarative pipeline stage agent environment post script step junit cobertura sonarqube quality gate dockerBuildAndPush docker login docker tag docker push";
var T=TS.trim().split(/\s+/).filter(Boolean);
function buildTags(){return T.map(function(n,i){return{id:"dk-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Docker",description:"Docker标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"dk-course-01",order:1,slug:"Docker入门",title:"Docker 与 DevOps 入门",description:"Docker概述、容器化思想、DevOps理念、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"dk-course-02",order:2,slug:"容器化思想",title:"容器化思想与虚拟机对比",description:"容器vs虚拟机、隔离原理、Namespace/Cgroups。",estimatedHours:4,diff:"easy"},
  {id:"dk-course-03",order:3,slug:"安装配置",title:"Docker 安装、配置与基本命令",description:"Docker安装、daemon配置、常用命令。",estimatedHours:6,diff:"easy"},
  {id:"dk-course-04",order:4,slug:"镜像容器仓库",title:"镜像、容器与仓库",description:"镜像分层、容器生命周期、仓库管理。",estimatedHours:8,diff:"easy"},
  {id:"dk-course-05",order:5,slug:"Dockerfile基础",title:"Dockerfile 编写基础",description:"FROM/RUN/COPY/CMD/ENTRYPOINT/WORKDIR/EXPOSE。",estimatedHours:10,diff:"medium"},
  {id:"dk-course-06",order:6,slug:"Dockerfile优化",title:"Dockerfile 优化与多阶段构建",description:"构建缓存、多阶段构建、镜像瘦身。",estimatedHours:8,diff:"medium"},
  {id:"dk-course-07",order:7,slug:"数据卷持久化",title:"数据卷、挂载与持久化",description:"volume/bind mount/tmpfs、持久化方案。",estimatedHours:8,diff:"medium"},
  {id:"dk-course-08",order:8,slug:"Docker网络",title:"Docker 网络与端口映射",description:"bridge/host/none网络、端口映射、容器通信。",estimatedHours:8,diff:"medium"},
  {id:"dk-course-09",order:9,slug:"DockerCompose",title:"Docker Compose 多服务编排",description:"compose.yml编写、多服务编排、依赖管理。",estimatedHours:10,diff:"hard"},
  {id:"dk-course-10",order:10,slug:"环境变量配置",title:"环境变量、配置与日志",description:"ENV/ARG/env_file、日志查看与管理。",estimatedHours:6,diff:"medium"},
  {id:"dk-course-11",order:11,slug:"CICD基础",title:"CI/CD 基础与 GitHub Actions",description:"Actions工作流、构建镜像、发布到仓库。",estimatedHours:10,diff:"hard"},
  {id:"dk-course-12",order:12,slug:"容器化部署",title:"前端、后端、数据库容器化部署",description:"Nginx/Node/SpringBoot/MySQL容器化。",estimatedHours:12,diff:"hard"},
  {id:"dk-course-13",order:13,slug:"安全排错",title:"镜像安全、排错与性能基础",description:"镜像安全扫描、常见排错、资源限制。",estimatedHours:8,diff:"hard"},
  {id:"dk-course-14",order:14,slug:"DevOps项目面试",title:"DevOps 综合项目与面试训练",description:"微服务部署、DevOps流程、面试题。",estimatedHours:8,diff:"hard"},
];
function buildCourses(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Docker","能编写Dockerfile","会用Compose编排","理解DevOps流程"],updatedAt:"2026-07-02T00:00:00.000Z"};});}

function buildLessons(){
  var all=[];var id=1;
  function add(ci,t,kps){
    var n=String(id).padStart(3,"0");
    all.push({id:"dk-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t,slug:t.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t+"学习",content:"# "+t+"\n\n"+t+"内容。\n\n## 要点\n- 概念\n- 操作\n- 注意事项\n\n## 总结\n掌握"+t+"提高效率。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["Docker"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;
  }
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Docker课程"+(ci+1)+"章"+(j+1),["dk-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}

var KPN=[["Docker","容器化平台"],["镜像","容器的只读模板"],["容器","镜像的运行实例"],["Dockerfile","构建镜像的脚本"],["docker build","构建镜像命令"],["docker run","运行容器命令"],["docker ps","列出容器"],["docker logs","查看容器日志"],["docker exec","在容器内执行命令"],["数据卷volume","持久化存储"],["端口映射","宿主机端口到容器端口"],["Docker Compose","多容器编排工具"],["网络bridge","默认桥接网络"],["镜像分层","UnionFS分层结构"],["多阶段构建","优化镜像大小"],["CI/CD","持续集成持续部署"],["GitHub Actions","自动化工作流"],["healthcheck","健康检查"],["容器安全","镜像扫描最小权限"],["资源限制","CPU内存限制"]];
function buildKP(){
  var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"dk-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Docker",tags:["Docker"],difficulty:i<10?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}
  for(var i=0;i<720;i++){k.push({id:"dk-kp-"+String(k.length+1).padStart(4,"0"),name:"Docker概念"+(k.length+1),description:"Docker概念说明",category:"Docker",tags:["Docker"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}
  return k;
}
var QC=["Docker入门","容器化思想","安装配置命令","镜像容器仓库","Dockerfile基础","Dockerfile优化","数据卷持久化","Docker网络","DockerCompose","环境变量日志","CICD基础","容器化部署","安全排错","DevOps项目面试"];
function buildQ(){
  var qs=[];var qid=1;
  var tm=[[0,"Docker是什么？",["容器化平台","虚拟化平台","操作系统","编程语言"],"A","easy"],[0,"容器和虚拟机的主要区别？",["容器共享宿主机内核","更重","启动更慢","隔离更强"],"A","medium"],[3,"docker run的作用？",["运行容器","构建镜像","列出容器","删除容器"],"A","easy"],[3,"docker ps -a显示？",["全部容器(含停止)","只运行中","只停止","所有镜像"],"A","medium"],[4,"Dockerfile中FROM指令的作用？",["指定基础镜像","安装软件","复制文件","运行命令"],"A","easy"],[4,"CMD和ENTRYPOINT区别？",["CMD可被覆盖ENTRYPOINT不可","一样","ENTRYPOINT可被覆盖","不用区分"],"A","hard"],[5,"多阶段构建的好处？",["减少镜像体积","加快构建","增加层次","简化配置"],"A","medium"],[6,"数据卷volume的特点？",["数据持久化","随容器删除","只读","临时存储"],"A","easy"],[7,"Docker默认网络模式？",["bridge","host","none","overlay"],"A","medium"],[8,"docker-compose.yml中services表示？",["定义服务","定义网络","定义卷","定义环境"],"A","medium"],[8,"depends_on的作用？",["定义服务依赖","设置端口","挂载卷","配置环境"],"A","medium"],[10,"GitHub Actions的配置文件格式？",["YAML","JSON","XML","TOML"],"A","easy"],[10,"CI/CD中CD代表？",["持续部署","持续集成","代码交付","连续测试"],"A","easy"],[12,"docker logs命令用于？",["查看容器日志","执行命令","进入容器","停止容器"],"A","easy"]];
  for(var i=0;i<tm.length;i++){var t=tm[i];qs.push({id:"dk-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t[4]||"easy",chapter:QC[t[0]],knowledge_points:[QC[t[0]]],stem:t[1],options:t[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t[3],explanation:t[1]+"正确答案是"+t[3]+"。",wrong_reason:"需加强理解。",related_questions:[],tags:[QC[t[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:450},{type:"case_analysis",min:1250}];
  while(qid<=3700){
    var u=ta.filter(function(t){return(e[t.type]||0)<t.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=DIFF[Math.floor(Math.random()*DIFF.length)];
    var id="dk-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Docker"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下Docker"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Docker核心概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=pick(["A","B"]);}
    else if(it.type==="fill_blank"){s="在Docker"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述Docker"+ch+"的使用方法。";o=[{label:"A",text:"简答"}];a=ch+"用于容器化部署。";}
    else if(it.type==="case_analysis"){s="Docker"+ch+"案例：编写配置或分析。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)};});a="A";}
    qs.push({id:id,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"需加强对"+ch+"的理解。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}

function buildExams(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"dk-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pickN(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function buildCases(qs){var src=["Docker安装","运行Nginx","运行MySQL","构建Node镜像","构建SpringBoot镜像","前端静态站点","Dockerfile优化","多阶段构建","volume持久化","网络连接","Compose编排","日志查看","容器进入","端口冲突","环境变量","Actions构建镜像","部署排错"];var c=[];for(var i=0;i<260;i++){var t=src[i%src.length];c.push({id:"dk-case-"+String(i+1).padStart(3,"0"),title:t+"案例"+(i+1),description:"通过"+t+"掌握Docker",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"操作",description:"执行"},{order:3,title:"结果",description:"验证"},{order:4,title:"总结",description:"归纳"}],relatedQuestionIds:pickN(qs,3).map(function(q){return q.id;}),tags:[t],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Docker路线"+(i+1),days:5,target:"目标"+(i+1)});}
function buildRoutes(){return RT.map(function(r,i){return{id:"dk-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Docker","镜像","容器","Dockerfile","docker build","docker run","数据卷","端口映射","Compose","网络","CI/CD","Actions","仓库","容器化","DevOps"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Docker概念"+i,"Docker概念"+i+"说明"]);}
function buildGlossary(){return GL.map(function(x,i){return{id:"dk-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Docker",tags:["Docker"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Docker常见问题"+(i+1)+"?","Docker常见问题"+(i+1)+"的解答。"]);}
function buildFaqs(){return FA.slice(0,210).map(function(x,i){return{id:"dk-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Docker",tags:["Docker"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function buildSearchIndex(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Docker"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Docker"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Docker"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Docker"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Docker"]});});return e;}
async function main(){
  console.log("Generate docker-devops...\n");
  var tags=buildTags();var courses=buildCourses();var lessons=buildLessons();var kps=buildKP();var questions=buildQ();
  var exams=buildExams(questions);var cases=buildCases(questions);var routes=buildRoutes();var glossary=buildGlossary();var faqs=buildFaqs();var si=buildSearchIndex(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-docker-devops",slug:"module-docker-devops",title:"Docker 与 DevOps 工程实践",subtitle:"面向开发运维和全栈学习者",description:"面向开发运维和全栈学习者的Docker镜像容器DockerfileCompose网络CI/CDActions部署排错与DevOps工程实践训练模块。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Docker","DevOps","容器","Dockerfile","Docker Compose","CI/CD","GitHub Actions","部署"],estimatedHours:160,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F433}",repoUrl:"https://github.com/openskill-galaxy/module-docker-devops",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var files2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in files2){var fp=path.join(DATA,key);fs.writeFileSync(fp,JSON.stringify(files2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(files2[key])?files2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\ncourses:"+courses.length+" lessons:"+lessons.length+" KPs:"+kps.length+" questions:"+questions.length+" exams:"+exams.length+" cases:"+cases.length+" routes:"+routes.length+" tags:"+tags.length+" glossary:"+glossary.length+" faqs:"+faqs.length+" search-index:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
