var MenuItems = document.getElementById("MenuItems");
			MenuItems.style.maxHeight = "0px";

			function menutoggle() {
				if (MenuItems.style.maxHeight == "0px") {
					MenuItems.style.maxHeight = "200px";
				} else {
					MenuItems.style.maxHeight = "0px";
				}
			}




//Search Bar and Button 
function myFunction() {

			// Declare variables

			var input, filter, row, li, a, i, txtValue;

			input = document.getElementById('searchbar');

			filter = input.value.toUpperCase();

			row = document.getElementById("productrow");

			li = row.getElementsByClassName("col-4 pcol");

			// Loop through all list items, and hide those who don't match the search query

			for (i = 0; i < li.length; i++) {

				a = li[i].getElementsByTagName("h3")[0];

				txtValue = a.textContent || a.innerText;

				if (txtValue.toUpperCase().indexOf(filter) > -1) {

					li[i].style.display = "";

				} else {

					li[i].style.display = "none";
				}
			}
		}



//cart counter
  obj.totalCount = function() {

    var totalCount = 0;

    for(var item in cart) {

      totalCount += cart[item].count;

    }

    return totalCount;

  }
  
 