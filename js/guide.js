var tabTitles = document.querySelectorAll(".tab-title h3"); 
var tabContents = document.querySelectorAll(".tab-content div"); 
tabTitles.forEach((tab, index) => { 
  //call this method when the value stored inside 'tab' is clicked on by the user
  tab.addEventListener("click", () => { 
    //for each item in the array 'tabContents', perform the following function. 

    //Here the class name 'current-tab' is being removed from the curent element that the loop is working on.
    tabContents.forEach((content) => {
      content.classList.remove("current-tab");
    });
    tabTitles.forEach((tab) => {
      tab.classList.remove("current-tab");
    });
    
    //Here the class name 'current-tab' is being added to the current element that the loop is working on. This is because the according to the CSS code, only the contents of the element with the additional class 'current-tab' are to be displayed.
    tabTitles[index].classList.add("current-tab");
    tabContents[index].classList.add("current-tab");
 
  });
});



