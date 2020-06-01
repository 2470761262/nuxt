export default function (nuxt)  {
    console.log(nuxt);
    nuxt.$axios.defaults.baseURL = 'http://api.k780.com/'
    nuxt.$axios.defaults.timeout = 5000
   setTimeout(()=>{
      //nuxt.redirect(400,'/');
      // nuxt.app.router.push({path:'/'});
   },1500)
}