const sortbtns = document.querySelectorAll(".job-id >*")
const sortItems=document.querySelectorAll("jobs-container > *")
sortbtns.forEach((btn)=>{
    btn.addEventListener('click', () =>{
        sortbtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        const targetData = btn.getAttribute("data-target")
        sortItems.forEach((item)  =>{
            item.classList.add("delete");
            if(item.getAttribute("date-item")===targetData || targetData === "all"){
                item.classList.remove("delete");
            }
  
        });
    });

});