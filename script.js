 //show Local Time
 let time = document.getElementById('current-time');
        setInterval(() => {
         let d = new Date();
         time.innerHTML = d.toLocaleTimeString();
        },1000);
   
//show clock
let timebtn = document.getElementById('Show_time').addEventListener('click',function(){
      time.style.display = 'inline';
      time.style.marginLeft = '37%';
      time.style.marginTop = '10%'
   });
   //login tab close svg
   const logintab = document.getElementById('Login');
   const svg4 = document.getElementById('close3').addEventListener('click',function(){
         logintab.style.display = 'none'
   });
   
   //login-open code
   let profile = document.getElementById('profile').addEventListener('click',function(){
         logintab.style.display = 'inline';
   });
   
   //app thems tab
   const body1 = document.getElementById('body');
   
   let color1 = document.getElementById('color1').addEventListener('click',function(){
         body1.style.background = 'linear-gradient(90deg, #e63759 0%, #a681fb 100%)'
   });
   
   let color2 = document.getElementById('color2').addEventListener('click',function(){
         body1.style.background = 'linear-gradient(90deg, #6715e8 0%, #66e5fe 100%)'
   });
   
   let color3 = document.getElementById('color3').addEventListener('click',function(){
         body1.style.background = 'linear-gradient(90deg, #470cfc 0%, #fa54c0 100%)'
   });
   
   //Hide Social Media Tab
   
   let social_media = document.getElementById('socialmediabox');
   let whether = document.getElementById('whether');
   let Hide_Social = document.getElementById('Hide_Social').addEventListener('click',function(){
         social_media.style.display = 'none'
         whether.style.marginTop = '30%'
         whether.style.height = '150px'
   });
   // open & close settings tab
   let settings = document.getElementById('settings');
   let open_settings = document.getElementById('setopen').addEventListener('click',function(){
         settings.style.display = 'inline'
   });
   let close2 = document.getElementById('close').addEventListener('click',function(){
         settings.style.display = 'none'
   });
   
   
   // search engine
   //  get the elements from the DOM
   
   const savedUrl = localStorage.getItem('url');
   const nameSpan = document.querySelector('.name');
   const urlSpan = document.querySelector('.url');
   const icon = document.querySelector('.fa-stack-overflow');
   const link = document.querySelector('#link');
   
   // listen for changes in the content of the name and url spans
   // nameSpan.addEventListener('button', updateLink);
   urlSpan.addEventListener('button', updateLink);
   
   function updateLink() {
   // update the text content of the name span with the root domain
   const domain = new URL('http://' + urlSpan.textContent).hostname.replace('www.', '');
   link.querySelector('.name').textContent = domain;
   
   // update the href of the link
   link.href = 'http://' + urlSpan.textContent;
   
   // update the icon class
   const iconClass = 'fa-brands fa-' + domain.split('.')[0];
   icon.className = iconClass;
   
   
   
   // save the URL to local storage
   localStorage.setItem('url', urlSpan.textContent);
   }
   
   // retrieve the saved URL from local storage when the page loads
   window.addEventListener('load', function() {
   const savedUrl = localStorage.getItem('url');
   if (savedUrl) {
     urlSpan.textContent = savedUrl;
     updateLink();
   }
   });
   
     function googleSearch()
     {
         var text=document.getElementById("search").value;
         var cleanQuery = text.replace(" ","+",text);
         var url='http://www.google.com/search?q='+cleanQuery;
     
         window.location.href=url;
     }
