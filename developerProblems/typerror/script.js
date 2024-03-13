document.querySelector("#add").addEventListener("click", () => {
  document.querySelector("#cards").innerHTML += ` <div class="card">
<img
  src="https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww"
  alt=""
/>
<h2>Name</h2>
<h3>some@gmail.com</h3>
<h3>male</h3>
</div>`;
});
