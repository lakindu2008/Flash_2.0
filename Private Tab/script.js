//  Private search engine
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

