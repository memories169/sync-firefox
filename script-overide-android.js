

var user_pref = function(pref, val){

  try {
    if(typeof val == "string"){

         Services.prefs.setStringPref(pref, val);    
    }
    else if(typeof val == "number"){

         Services.prefs.setIntPref(pref, val);    
    }
    else if(typeof val == "boolean"){

         Services.prefs.setBoolPref(pref, val);    
    }
  } catch(e){
    console.log("pref:" + pref + " val:" + val + " e:" + e);
  }
}
//paste your user.js file content here

