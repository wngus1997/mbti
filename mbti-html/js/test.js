const questionList = [
    {
        "title": "나는 취미를 즐길 때", 
        answer : [
            {"A": "다른 사람들과 함께", "type" : "E"}, 
            {"B": "혼자서", "type" : "I"}
        ]
    },
    {
        "title": "취미를 즐길 때", 
        answer : [
            {"A": "다른 사람이 봐도 상관없어", "type" : "E"}, 
            {"B": "아무도 안 봤으면 해", "type" : "I"}
        ]
    },
    {
        "title": "취미는 이 장소가 좋아", 
        answer : [
            {"A": "사람이 많은 곳, 집 밖이 좋을 것 같아", "type" : "E"}, 
            {"B": "혼자있는 공간, 집 안이 좋아", "type" : "I"}
        ]
    },
    {
        "title": "취미를 즐길 때", 
        answer : [
            {"A": "실제 경험하며 즐기는 것이 좋아", "type" : "S"}, 
            {"B": "상상력을 발휘하여 즐기는 것이 좋아", "type" : "N"}
        ]
    },
    {
        "title": "취미와 관련해서 다음 중 어떤 측면이 더 중요하다", 
        answer : [
            {"A": "취미를 즐길 때 경험과 감각적인 측면이 중요해", "type" : "S"}, 
            {"B": "취미를 즐길 때 창의성과 상상력적인 측면이 중요해", "type" : "N"}
        ]
    },
    {
        "title": "내가 즐기는 취미는", 
        answer : [
            {"A": "실제 존재하는 대상을 다루는 것이 좋아", "type" : "S"}, 
            {"B": "비현실적인 대상을 다루는 것이 좋아", "type" : "N"}
        ]
    },
    {
        "title": "나의 취미는", 
        answer : [
            {"A": "기술적인 면이 강조되는 것이 좋아", "type" : "T"}, 
            {"B": "예술적인 면이 강조되는 것이 좋아", "type" : "F"}
        ]
    },
    {
        "title": "취미와 관련해서 어떤 것을 추구하고 싶어?", 
        answer : [
            {"A": "취미와 관련된 스킬을 향상시키는 것이 중요해", "type" : "T"}, 
            {"B": "취미와 관련된 창의적인 측면을 향상시키는 것이 중요해", "type" : "F"}
        ]
    },
    {
        "title": "나는 취미에서", 
        answer : [
            {"A": "분석적이고 논리적인 측면을 중요시해", "type" : "T"}, 
            {"B": "감정적인 측면을 중요시해", "type" : "F"}
        ]
    },
    {
        "title": "내가 즐기는 취미는", 
        answer : [
            {"A": "계획하고 체계적으로 수행하는 것이 좋아", "type" : "J"}, 
            {"B": "즉흥적이고 융통성 있는 것이 좋아", "type" : "P"}
        ]
    },
    {
        "title": "나의 취미를 추구하는 방법은?", 
        answer : [
            {"A": "목표를 설정하고 계획을 세우며 추진하는 것이 좋아", "type" : "J"}, 
            {"B": "순간의 감각에 따라 융통성 있게 추진하는 것이 좋아", "type" : "P"}
        ]
    },
    {
        "title": "취미를 즐길 때", 
        answer : [
            {"A": "일정한 패턴이나 구조를 따르는 것이 좋아", "type" : "J"}, 
            {"B": "자유로운 분위기에서 즉흥적으로 즐기는 것이 좋아", "type" : "P"}
        ]
    }
];

var qNo = 0;
var no = document.getElementById('no');
var title = document.getElementById('title');
var a = document.getElementById('A');
var b = document.getElementById('B');

var typeArr = new Array();
var type_result = new Array(100).fill(0);

// 질문 가져오는 함수
function render(){
    no.innerHTML = Number(qNo) + 1;
    title.innerHTML = questionList[qNo].title;
    a.innerHTML = questionList[qNo].answer[0]["A"];
    b.innerHTML = questionList[qNo].answer[1]["B"];
}

// 다음 페이지로 이동 + mbti 계산
function next(){
    var mbti = "";
    console.log(typeArr);
    for(var i = 0; i < typeArr.length; i++){
        var va = typeArr[i].charCodeAt(0);
        type_result[va]++;
        console.log(typeArr[i].charCodeAt(0));
    }
    type_result['E'.charCodeAt(0)]>=type_result['I'.charCodeAt(0)]?mbti+="E":mbti+="I";
    type_result['S'.charCodeAt(0)]>=type_result['N'.charCodeAt(0)]?mbti+="S":mbti+="N";
    type_result['T'.charCodeAt(0)]>=type_result['F'.charCodeAt(0)]?mbti+="T":mbti+="F";
    type_result['P'.charCodeAt(0)]>=type_result['J'.charCodeAt(0)]?mbti+="P":mbti+="J";

    location.href="result.html?mbti="+mbti;
}

window.onload=function(){

    render();
    
    // A답변 버튼 클릭시
    a.addEventListener('click', function(){
        typeArr[qNo] = questionList[qNo].answer[0]["type"];
        qNo += 1;
        if(qNo >= questionList.length){
            next();
        }else{
            render();
        }
    })
    // B답변 버튼 클릭시
    b.addEventListener('click', function(){
        typeArr[qNo] = questionList[qNo].answer[1]["type"];
        qNo += 1;
        if(qNo >= questionList.length){
            next();
        }else{
            render();
        }
    })

}