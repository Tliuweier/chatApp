




export const setTime = (timestamp)=> {
  const date = new Date(timestamp*1000) ,
    Y = date.getFullYear() ,
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ,
    D = date.getDate() ,
    h = date.getHours(),
    m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes());

  var currentTime = Date.parse(new Date());
  var dateTime = Y+'-'+M+'-'+D+' '+h+':'+m;//后台传递来的时间
  var newdata=new Date;
  var year=newdata.getFullYear();
  var d_day = Date.parse(new Date(dateTime));
  var day = Math.abs(parseInt((d_day - currentTime)/1000/3600/24));//计算日期
  var hour = Math.abs(parseInt((d_day - currentTime)/1000/3600));//计算小时
  var minutes = Math.abs(parseInt((d_day - currentTime)/1000/60));//计算分钟
  var seconds = Math.abs(parseInt((d_day - currentTime)/1000));//计算秒

  if(day >= 2){
    if(year>Y){
      return Y+'年'+M+'月'+D+'日';
    }else{
      return M+'月'+D+'日';
    }

    // ts.text(parseInt(day)+"天前").toString();
  }else if(day > 0 && day < 2){
    return '昨天';
    // ts.text("昨天").toString();
  }else if(hour > 0 && hour < 24){
    return h+':'+m;
    // ts.text(parseInt(hour)+"小时前").toString();
  }else if(minutes > 0 && minutes < 60){
    return minutes+'分钟前';
    // ts.text(parseInt(minutes)+"分钟前").toString();
  }else if(seconds > 0 && seconds < 60){
    return seconds+'秒前';
    // ts.text(parseInt(seconds)+"秒前").toString();
  }
}
