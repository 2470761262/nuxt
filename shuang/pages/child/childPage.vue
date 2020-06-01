<style >
.child-com-content{
    margin-left: 20px;
    border: 1px solid red;
    display: inline-block;
    margin-top: 20px;
}
</style>
<template>
    <div>
        <h3>我是child页面{{project}}</h3>
        <div class="child-com-content">
            <!-- <component :is="comName"></component> -->
            <div style="color:red">我是由component渲染的</div>
        </div>
        <br>
        <div class="child-com-content">
            <nuxt-child />
        </div>
         <br>
        <div class="child-com-content">
            <nuxt-child />
        </div>

        <nuxt-link to="/child/childPage/childPage2" >切换到childPage2</nuxt-link>
         <nuxt-link to="/child/childPage/childPage3" >切换到childPage3</nuxt-link>
         <br>
         <div>
            城市: {{info.citynm}}<br/>
            temperature:{{info.temperature}}<br/>
            days: {{info.days}}<br/>
         </div>
        <button @click="gogo">测试router</button>
         <button @click="show">show</button>
    </div>
</template>

<script>
    import childPageIndex from './childPage/index';
    export default {
        asyncData (context) {
            console.log(context,"context");
            return  context.$axios({
                        method: 'get',
                        url: '?app=weather.today&weaid=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json'
            })

            .then(function (response) {
                //asyncData 会将返回的数据合并到data里面
                return { info: response.data.result};

            }).catch(()=>{

            })
        },
        layout: 'layout1',
        components: {
            childPageIndex,
        },
        middleware: 'testMiddle',
        data() {
            return {
                comName:'childPageIndex',
                 project: 'default' 
            }
        },
        methods: {
            show(){
                console.log(this);
                 console.log(this.$store);
            },
            gogo(){
                console.log(this);
                this.$router.push({path:'/'});
            }
        },
    }
</script>
