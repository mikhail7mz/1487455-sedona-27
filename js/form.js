let form=document.querySelector("form"),formModal=form.querySelector(".form__modal"),formSubmitButton=form.querySelector(".form__submit"),buttonClose=form.querySelector(".form__modal-button"),formOverlay=form.querySelector(".form__modal-overlay");formSubmitButton.addEventListener("click",(e=>{e.preventDefault();let o=formModal.querySelector(".form__modal-title"),r=formModal.querySelector(".form__modal-message"),l=document.querySelectorAll("input"),t={title:"Что-то пошло не так!",message:"Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить",buttonText:"Ок"},m={title:"Ваш отзыв отправлен!",message:"Спасибо за ваше участие, ваш отзыв уже поступил к нам. <br>В ближайшее время мы опубликуем его на сайте.",buttonText:"Закрыть окно"},a=m;for(field of l)if(!field.validity.valid){a=t;break}o.innerHTML=a.title,r.innerHTML=a.message,buttonClose.innerHTML=a.buttonText,a==m&&formModal.classList.add("form__modal--success"),formOverlay.classList.add("form__modal-overlay--opened"),formModal.classList.add("form__modal--opened")}));const modalClose=()=>{formModal.classList.remove("form__modal--opened"),formModal.classList.remove("form__modal--success"),formOverlay.classList.remove("form__modal-overlay--opened")};buttonClose.addEventListener("click",(e=>{modalClose()})),document.body.addEventListener("keydown",(e=>{27==e.keyCode&&modalClose()}),!1),formOverlay.addEventListener("click",(e=>{modalClose()}));