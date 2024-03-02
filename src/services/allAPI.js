import { serverURL } from "./serverURLnew";
import { commonAPI } from "./commonAPI";

// 1) upload video

export const uploadMessage =async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/message`,reqBody)
}