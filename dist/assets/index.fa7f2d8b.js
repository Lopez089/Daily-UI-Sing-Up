const c=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};c();document.querySelector("#app").innerHTML=`
  <div class='container center fullview'>
    <div class='card gid shadow'>
      
      <form>
        <h1>Sing Up</h1>
        <div class='card__container-input'>
          <i class='bx bx-user bx-flip-horizontal' ></i>
          <input type='text' placeholder='Name' class='shadow'/>
        </div>
        <div class='card__container-input'>
          <i class='bx bx-mail-send' ></i>
          <input type='email' placeholder='E-mail' class='shadow'/>
        </div>
        <div class='card__container-input'>
          <i class='bx bx-lock' ></i>
          <input type='password' placeholder='Password' class='shadow'/> 
          <i class='bx bx-hide card__show-password'></i>
        </div>
       
        <div>
          <input type='checkbox' />
          <label class='card__conditions'> I read and agree to 
            <a href='#'> 
              Terms & Conditions
            </a>
          </label>
        </div>
          <button class='shadow'>CREATE ACCOUNT </button>
        <div class='card__sign-in grid'> 
          <p>Already have a account?
            <a href='#'> Sign in </a>
          </p>
        <div>  
      </form>
    
    </div>
  </div>
`;const t=document.querySelector(".card__show-password"),a=document.querySelector('input[type = "password"]');t.addEventListener("click",()=>{t.classList.contains("bx-hide")?(console.log("hide"),t.classList.replace("bx-hide","bx-show"),a.setAttribute("type","text")):(console.log("show"),t.classList.replace("bx-show","bx-hide"),a.setAttribute("type","password"))});
