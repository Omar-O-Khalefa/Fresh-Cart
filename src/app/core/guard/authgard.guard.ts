import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authgardGuard: CanActivateFn = (route, state) => {
  const _rout =inject (Router)
if(localStorage.getItem("userToken")!==null){
  
  return true
}else{
  _rout.navigate(["/login"])
  return false
}
};
