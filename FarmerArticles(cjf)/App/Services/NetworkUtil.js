import * as URLS  from "../Constants/URLConstants";

/**
 * 网络请求API
 * 
 */

/**
 * @description 突然发现，这种写法更简洁，相对的是上面这种方式哦
 * @author chenqingsong
 * @export
 * @param {Object} bodys 
 * @returns 
 */
// export const requestData = (bodys : Object) => {
//   return fetch(URLS.requestMoreUrl , {
//       method:'POST',
//       headers:{
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body:packageParams(bodys),
//   })
//   .then((response) => response.json())
//   .then((responseData) => {
//     console.log("into onSuccess()" );
//     return responseData;
//   });
// }

/**
 * 将对象转换为用&的连接的参数,当服务器不支持json格式上传的参数时就需要这个方法来封装参数
 * @param {*对象} bodys 
 */
// export const packageParams = (bodys) => {
//   let bodysPropArray = Object.entries(bodys);
//   let bodysString = "";
//   let length = bodysPropArray.length;
//   let i = 0;
//   for(let [k , v] of bodysPropArray){
//     if(i == length - 1){
//       let param1 = k + "=" + v;
//       bodysString = bodysString.concat(param1);
//       break;
//     };
//     let param2 = k + "=" + v + "&";
//     bodysString = bodysString.concat(param2);
//     console.log("bodysString --->" + bodysString);
//     i++;
//   }
//   return bodysString;
// }


/**
 * 查询数据，参数为json类型的对象
 */
export const requestData = (bodys : Object) => {
  return fetch(URLS.BASE_URL , {
      method:'POST',
      body:bodys,
  })
  .then((response) => response.text())
  .then((responseData) => {
    return responseData;
  })
  .catch( (error) => {
    throw '网络访问出错';
  });
}

