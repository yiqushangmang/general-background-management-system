const joi =require('joi');
/* 账号
alphanum为a-z A-Z 0-9
*/
const account=joi.string().alphanum().min(6).max(12).required()
/* 密码 */
const password=joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(6).max(12).required()


exports.login_limit={
    body:{
        account,
        password
    }
}