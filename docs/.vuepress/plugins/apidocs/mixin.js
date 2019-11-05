// mixin.js
export default {
  created () {},
  mounted () {
		setTimeout(()=>{
			let link = document.querySelector("a[href='/jsdoc/index.html']");
			if(link!=null) {
				let a = document.createElement("a");
				a.href = window.location.origin + "/jsdoc/index.html";
				a.text = 'API Docs';
				link.parentElement.appendChild(a);
				link.remove();
			}
		},100);
	}
}
