const dataSection = document.getElementById('data');
const add = document.getElementById('add');
const del= document.getElementById('delete');
const gen=document.getElementById('genGraph');

var id=1;
add.addEventListener('click',()=>{
    
    id++;
    let element  = document.createElement('div');
    element.innerHTML=`<div class=" ml-3 bg-gradient-to-r from-cyan-500 to-blue-500 ... p-6 rounded-lg text-black border-blue-900 border-spacing-72 border-solid flex flex-wrap mt-7 justify-around w-11/12 h-30" id="${id}">
    <input type="month" name="billingDate" class="dt rounded-md p-1 border-solid border-blue-500 border-spacing-10" id="date${id}">
    <input type="number" placeholder="Billing amount" name="amount" id="bill${id}" class="bill rounded-md p-1 float-right w-40">
</div>`;
     dataSection.appendChild(element);
});
del.addEventListener('click',()=>{
    if(id>0){
     
let element = document.getElementById(`${id}`);
element.remove();

id--;
    }
    else
    alert("No more entries");
})
gen.addEventListener('click',()=>{
  var xDate = new Array();
  var yBill = new Array();
   for(let i=1;i<=id;i++)
   {
    let entryDate=document.getElementById(`date${i}`);
    let entryBill=document.getElementById(`bill${i}`);
    if(xDate.value === '' || yBill.value === '')
    continue;
    yBill.push(entryBill.value);
    xDate.push(entryDate.value);
   }
   console.log(xDate);
   console.log(yBill);

    var linegraph = new Chart("myChart", {
        type: "line",
        data: {
          labels: xDate,
          datasets: [{
            backgroundColor: "rgb(154,205,50)",
            borderColor: "rgba(0,0,0,0.1)",
            data: yBill
          }]
        }   
      });
});