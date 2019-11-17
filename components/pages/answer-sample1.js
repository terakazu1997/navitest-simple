//受講結果確認画面
const answerSample1 = {
    template: (function() {/*
        <main>
            <div id = "inContent">
            <div v-if="questionObjects">
                <section class="answer-head">
                    <h3>テストお疲れ様でした！結果確認！！</h3>
                    <div class="result-message">
                        <p class="large">xxxxxxxxさん、{{questionCnt}}問中{{okCnt}}問正解です。</p>
                        <div v-if="questionCnt===okCnt"> 
                            <p class="small">おめでとうございます。資格を取得することができました。</p>
                            <p class="small">この資格は2xxx年xx月xx日まで有効です</p>
                        </div>
                        <div v-else>
                            <p class="small">全問正解すれば、資格を取得できます。</p>
                        </div>
                    </div>
                </section>
                <div class="answer-main" v-for="(questionObject,index) in questionObjects" :key="questionObject.questionId">
                    <ul class="answer-layout">
                        <li class="answer number">Q{{index + 1}}</li>
                        <li class="answer question"><span>{{questionObject.question}}</span></li>
                        <li class="answer result br-right">
                            <span v-if="okList[index]" style="color: red">正解</span>
                            <span v-else style="color: blue">不正解</span>
                        </li>
                    </ul>
                    <ul class="answer-layout">
                        <li class="answer choise ">正解の解答</li>
                        <li class="answer choise br-right">あなたの解答</li>
                    </ul>
                    <ul class = "answer-layout answer-item  clear-fix">
                        <li class="answer choise">
                            <ul>
                                <li v-for="answer in questionObject.answer" :key="answer"> <span>{{questionObject.choises[answer]}}</span></li>
                            </ul>
                        </li>
                        <li class="answer choise br-right">
                            <ul>
                                <li  v-for="usersAnswer in questionObject.usersAnswer" :key="usersAnswer"><span>{{questionObject.choises[usersAnswer]}}</span></li>
                            </ul>       
                        </li>
                        <li class="answer answer-sentence br-bottom br-right">
                            <h3>解説</h3>
                            <p>{{questionObject.answerSentence}}</p>
                        </li>
                    </ul>
                </div>
                <button id="send-answer" @click="restartClick">もう一度チャレンジ！！</button>
            </div>
            <div v-else>
                <section class="answer-head">
                    <h3>ErrorPage</h3>
                    <p>直接受講結果確認画面に遷移できません。必ず受講をしてください</p>
                </section>
                <button id="send-answer" @click="restartClick" style="margin-top:30px;">受講開始</button>
            </div>
            </div>
        </main>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    data: function () {
        return {
            questionObjects: this.$route.params.questionObjects,//受講画面から受け取った問題オブジェクト
            questionCnt: questionObjects.length,//問題数
            okCnt: this.$route.params.okCnt,　//受講画面から受け取った正解数
            okList: this.$route.params.okList //`受講画面がから受け取った正解不正解のリスト
        }
    },
    methods: {
        //受講画面に遷移する
        restartClick : function () {
            window.scrollTo(0,0)
            this.$router.push({name: 'questionSample1'})
        }
    }
}