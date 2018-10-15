<script>
  /* Open the drawer on the menu icon*/
      var menu = document.querySelector('#menu');
      var main = document.querySelector('main');
      var hide = document.querySelector('.nav');

      menu.addEventListener('click', function(e) {
        hide.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        hide.classList.remove('open');
      });
  </script>