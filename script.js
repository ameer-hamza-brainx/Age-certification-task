document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let dateFlag = false;
    let monthFlag = false;
    let yearFlag = false;
    // console.log(currentYear);

    let dateValue = document.getElementById("date").value;
    let monthValue = document.getElementById("month").value;
    let yearValue = document.getElementById("year").value;
    let dateError = document.getElementById("dateError");
    let monthError = document.getElementById("monthError");
    let yearError = document.getElementById("yearError");
    
    dateValue === ""?dateError.innerHTML = "Required Field!":dateError.innerHTML = "";
    monthValue === ""?monthError.innerHTML = "Required Field!":monthError.innerHTML = "";
    yearValue === ""?yearError.innerHTML = "Required Field!":yearError.innerHTML = "";
    if(dateValue!=="")
    {
      dateValue > 31 || dateValue < 1?dateError.innerHTML = "Enter value between 1 and 31!":dateError.innerHTML = "";
      dateValue<32 && dateValue>0?dateFlag=true:dateFlag=false;
    }
    if(monthValue!=="")
    {
      monthValue > 12 || monthValue < 1?monthError.innerHTML = "Enter value between 1 and 12!":monthError.innerHTML = "";
      monthValue<13 && dateValue>0?monthFlag=true:monthFlag=false;
    }
    if(yearValue!=="")
    {
      yearValue > 2024?yearError.innerHTML = "Enter value less than current year":yearError.innerHTML = "";
      yearValue<currentYear?yearFlag=true:yearFlag=false;

    }
      // console.log("passed"+currentYear+""+Number(yearValue));
    if(dateFlag && monthFlag && yearFlag)
    {
      if(currentYear-Number(yearValue)>15)
      {
        window.location.href = "https://www.google.com";
      }
      else
      {
        alert("Age restricted");
      }
    }
    
    
  });
});