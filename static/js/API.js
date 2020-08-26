/**
  * @Description: 项目api
  * @author 林永健
  *
  */
const host = "https://onepanda.justyunmeng.com"
// const host = "http://localhost:8080"
const userLogin = `${host}/user/login`    
const queryCourse = `${host}/course/queryCourse`
const feedbackInsert = `${host}/feedback/insert`
const queryGrade = `${host}/grade/queryGrade`
const teacherQueryGrade = `${host}/grade/teacherQueryGrade`
const advertisementImg = `${host}/advertisement/img`
const advertisementVideo = `${host}/advertisement/video`
const queryArticleByCheckStatus = `${host}/article/queryArticleByCheckStatus`
const queryArticleById = `${host}/article/queryArticleById`
const articleInsert = `${host}/article/insert`
const insertArticleContentImg = `${host}/article/insertArticleContentImg`
const commentInsert = `${host}/comment/insert`     
const updateArticleBatch = `${host}/article/updateArticleBatch`
const queryUnCheckArticle = `${host}/article/queryUnCheckArticle`
const queryUserById = `${host}/user/queryById`
const feedbackInsertWithoutImg = `${host}/feedback/insertWithoutImg`
module.exports = { 
	userLogin:userLogin,
	queryCourse:queryCourse,
	feedbackInsert:feedbackInsert, 
	queryGrade:queryGrade,
	teacherQueryGrade:teacherQueryGrade,
	advertisementImg:advertisementImg,
	advertisementVideo:advertisementVideo,
	queryArticleByCheckStatus:queryArticleByCheckStatus,
	queryArticleById:queryArticleById,
	articleInsert:articleInsert,  
	insertArticleContentImg:insertArticleContentImg,
	commentInsert:commentInsert,
	updateArticleBatch,
	queryUnCheckArticle,
	queryUserById,
	feedbackInsertWithoutImg
}
