
function finder_kind(rad_tp){
  let radios=document.getElementById("radios" );
  if (radios.checked){
    find_all(rad_tp)
}else{
    find(rad_tp)
}
}

        function find(data){
          let divs = document.getElementsByClassName("tempo");
            for(let i=0;i<divs.length;i++){
                let n=divs[i].innerText;
                if (n.includes(data)==true){
                    x=divs[i].parentElement.parentElement.parentElement;
                    x=x.innerText;
                    alert(x);
                }
            }
            
            let divs_h = document.getElementsByClassName("hora");

            for(let i=0;i<divs_h.length;i++){

                let n=divs_h[i].innerText;
                if (n.includes(data)==true){
                    x=divs_h[i].parentElement;
                    x=x.innerText;
                    alert(x);
                }
            }
        }
       
       function find_all(data){
              let divs = document.getElementsByClassName("rd2");
            for(let i=0;i<divs.length;i++){
                let n=divs[i].innerText.toLowerCase() ;
                if (n.includes(data.toLowerCase() ) ==true){
                    x=divs[i]
                    x=x.innerText;
                    alert(x);
                } 
            }
       } 
        
        let finder_activated=false;
        function show_finder(){
        
        

             if (finder_activated==false){
             finder_activated=true;
        let html =
  `
  		<div id="caixa"> 
	<h1 style="text-align: center;">Pesquisa</h1>
	  <input type="text" id="inp">
	  <button class="button-1" onclick="finder_kind(document.getElementById('inp').value)">
	    Buscar
	    </button>
	    	    <input type="radio" id="radios" name="radios">
	    <h4 style="text-align:center;">DE 13/06/2023 A 23/07/2022</h4>
	  </div>
 
  `;

let finder = document.createElement('div');
finder.innerHTML = html;
document.getElementById('box_finder').appendChild(finder);  
}else{
document.getElementById('box_finder').innerHTML='';
finder_activated=false;
         } 
        
        }