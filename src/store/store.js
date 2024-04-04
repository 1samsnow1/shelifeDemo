import axios from 'axios'
import { createStore } from 'vuex';
import { setCookie } from '../assets/cooki';

// Create a new store instance.
const store = createStore({
    state(){
        return {
            userToken:null,
            userProfile:null,
            registeryStatus:null,
            verifiedMessage:null,
            blogList:null,
            blogDetail:null,
            addresses:null,
            userExperiment:null,
            productKits:null,
            areas:null,
        }
    },
    getters :{
        getUserToken(state){
            return state.userToken;
        },
        getUserProfile(state){
            return state.userProfile;
        },
        getRegisteryStatus(state){
            return  state.registeryStatus;
        },
        getVerifiedMessage(state){
            return state.verifiedMessage;
        },
        getBlogList(state){
            return state.blogList;
        },
        getBlogDetail(state){
            return state.blogDetail;
        },
        getUserAddress(state){
            return state.addresses;
        },
        getUserExperiment(state){
            return state.userExperiment;
        },
        getProductKitsList(state){
            return state.productKits;
        },
        getAreaList(state){
            return state.areas;
        }
    },
    mutations :{
        setUserStatus(state,status){
            state.registeryStatus=status;
        },
        setVerifiedMobile(state,message){
            state.verifiedMessage=message;
        },
        setUserToken(state,token){
            state.userToken = token;
        },
        setUserProfile(state,data){
            state.userProfile = data;
        },
        setBlogList(state,list){
            state.blogList=list;
        },
        setBlogDetail(state,detail){
            state.blogDetail = detail;
        },
        setUserAddress(state,address){
            state.addresses = address;
        },
        setUserExperiment(state,exp){
            state.userExperiment = exp;
        },
        setProductKitsList(state,list){
            state.productKits = list;
        },
        setAddressAreas(state,list){
            state.areas = list;
        }
    },
    actions :{
        async sendTokenRequest(context,mobile) {
           await axios.post("/user/register-login",mobile).then((res)=>{
                context.commit("setUserStatus",res.data.data.status)
           }).catch((err)=>{
            alert(err.response.data.message)
           })
        },
        async verifySmsCode(context,info) {
            await axios.post("/user/verify",info).then((res)=>{
                context.commit("setVerifiedMobile",res.data.success)
            }).catch((err)=>{
                alert(err.response.data.message);
            })
        },
        async verifyLoginCode({commit},info){
            await axios.post("/user/verify",info).then((res)=>{
                setCookie("token",res.data.data.data.access_token,30);
                commit("setVerifiedMobile",res.data.success);
                commit("setUserToken",res.data.data.data.access_token);
            }).catch((err)=>{
                alert(err.response.data.message);
            })
        },
        async creatUserProfileReq(context,userInfo){
            await axios.post("/user/register",userInfo).then((res)=>{
                setCookie("token",res.data.data.data.access_token);
                context.commit("setUserToken",res.data.data.data.access_token);
            }).catch((err)=>{
                alert(err.response.data.message)
            })
        },
        async getUserProfileInfoFromServer({commit}){
            await axios.get("/user/profile").then((res)=>{
                commit("setUserProfile",res.data.data.user);
            })
        },
        async updateUserProfileFromServer({commit},newInfo){
            await axios.post("/user/profile",newInfo).then((res)=>{
                
            })
        },
        async getBlogListFromServer({commit}){
            await axios.get("/front/posts").then((res)=>{
                commit("setBlogList",res.data.data.posts.data)
            })
        },
        async getBlogDetailFromServer({commit},id){
            await axios.get(`v1/front/posts/new-slug/${id}`).then((res)=>{
                commit("setBlogDetail",res.data.data.post.post)
            })
        },
        async getUserAddressFromServer({commit}){
            await axios.get("/user/addresses").then((res)=>{
                commit("setUserAddress",res.data.data.data)
            }).catch((err)=>{
                alert(err.response.data.message);
            })
        },
        async addUserAddress(context,userAddress){
            await axios.post("/user/addresses",userAddress).then(()=>{
                context.dispatch("getUserAddressFromServer");
            }).catch();
        },
        async getUserExperimentsFromServer({commit}){
            await axios.get("/user/experiments").then((res)=>{
                commit("setUserExperiment",res.data.data.data)
            }).catch();
        },
        async getProductKitsFromServer({commit}){
            await axios.get("/front/products").then((res)=>{
                commit("setProductKitsList",res.data.data.products.data)
            }).catch((err)=>{
                alert(err.response.message);
            })
        },
        async getAddressAreasFromServer({commit}){
            await axios.get("/front/area").then((res)=>{
                commit("setAddressAreas",res.data.data.provinces);
            })
        }
    },

})
  
export default store