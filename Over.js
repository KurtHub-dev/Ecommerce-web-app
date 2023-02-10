
	var table = document.getElementById("table");
	
		function openForm() {
			document.getElementById("eventForm").style.display = "block";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
		}
		function closeForm() {
			document.getElementById("eventForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		function uopenForm() {
			document.getElementById("updateForm").style.display = "block";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
			document.getElementById("ueID").readOnly = true;
			for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                     //rIndex = this.rowIndex;
                     document.getElementById("ueID").value = this.cells[0].innerHTML;
                     document.getElementById("utextName").value = this.cells[1].innerHTML;
                     document.getElementById("udateStart").value = this.cells[2].innerHTML;
                     document.getElementById("updateEnd").value = this.cells[3].innerHTML;
                     document.getElementById("uecID").value = this.cells[4].innerHTML;
                };
            }
		}
		function ucloseForm() {
			document.getElementById("updateForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		//DELETE FORM
		function dopenForm(){
			document.getElementById("deleteForm").style.display = "grid";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
			document.getElementById("deID").readOnly = true;
			for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                     document.getElementById("deID").value = this.cells[0].innerHTML;
                };
            }
		}
		function dcloseForm(){
			document.getElementById("deleteForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		
		/*
		A few requirements for configuring the table:
		1. The table must have id="sortable", i.e. <table id="sortable">
		2. The table needs to have a table header, and the table header must have
		   onclick="sortBy(n)", where n is the column number starting with 0
		   i.e. <th onclick="sortBy(0)">Title of First Column</th>
		*/

		cPrev = -1; // global var saves the previous c, used to
		            // determine if the same column is clicked again

		function sortBy(c) {
		    rows = document.getElementById("table").rows.length; // num of rows
		    columns = document.getElementById("table").rows[0].cells.length; // num of columns
		    arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array

		    for (ro=0; ro<rows; ro++) { // cycle through rows
		        for (co=0; co<columns; co++) { // cycle through columns
		            // assign the value in each row-column to a 2d array by row-column
		            arrTable[ro][co] = document.getElementById("table").rows[ro].cells[co].innerHTML;
		        }
		    }

		    th = arrTable.shift(); // remove the header row from the array, and save it
		    
		    if (c !== cPrev) { // different column is clicked, so sort by the new column
		        arrTable.sort(
		            function (a, b) {
		                if (a[c] === b[c]) {
		                    return 0;
		                } else {
		                    return (a[c] < b[c]) ? -1 : 1;
		                }
		            }
		        );
		    } else {
		        arrTable.reverse();
		    }
		    
		    cPrev = c;

		    arrTable.unshift(th);

		    // 
		    for (ro=0; ro<rows; ro++) {
		        for (co=0; co<columns; co++) {
		            document.getElementById("table").rows[ro].cells[co].innerHTML = arrTable[ro][co];
		        }
		    }
		}

		function searchFunction() {
			var input, filter, table, tr, td, i, txtValue;
			input = document.getElementById("searchbar");
			filter = input.value.toUpperCase();
			table = document.getElementById("table");
			tr = table.getElementsByTagName("tr");
			for (i = 1; i < tr.length; i++) {
			td = tr[i];
			if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
			}
			}
			}
		
		
		
		
		
		
//Coupon
var table = document.getElementById("table");
	//INSERT FORM
		function openForm() {
			document.getElementById("couponForm").style.display = "block";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
		}

		function closeForm() {
			document.getElementById("couponForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		//UPDATE FORM
		function uopenForm() {
			document.getElementById("updateForm").style.display = "block";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
			document.getElementById("ucoID").readOnly = true;
			document.getElementById("ucotextPromoID").readOnly = true;
			for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                     document.getElementById("ucoID").value = this.cells[0].innerHTML;
                     document.getElementById("ucotextName").value = this.cells[1].innerHTML;
                     document.getElementById("ucotextDiscount").value = this.cells[2].innerHTML;
                     document.getElementById("ucotextPromoID").value = this.cells[3].innerHTML;
                };
            }
		}
		function ucloseForm() {
			document.getElementById("updateForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		//DELETE FORM
		function dopenForm(){
			document.getElementById("deleteForm").style.display = "grid";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
			document.getElementById("dcoID").readOnly = true;
			for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                     document.getElementById("dcoID").value = this.cells[0].innerHTML;
                };
            }
		}
		function dcloseForm(){
			document.getElementById("deleteForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}

		
		//Sorting Function bruh

		cPrev = -1; // global var saves the previous c, used to

		function sortBy(c) {
		    rows = document.getElementById("table").rows.length; // num of rows
		    columns = document.getElementById("table").rows[0].cells.length; // num of columns
		    arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array

		    for (ro=0; ro<rows; ro++) { // cycle through rows
		        for (co=0; co<columns; co++) { // cycle through columns
		            // assign the value in each row-column to a 2d array by row-column
		            arrTable[ro][co] = document.getElementById("table").rows[ro].cells[co].innerHTML;
		        }
		    }

		    th = arrTable.shift(); // remove the header row from the array, and save it
		    
		    if (c !== cPrev) { // different column is clicked, so sort by the new column
		        arrTable.sort(
		            function (a, b) {
		                if (a[c] === b[c]) {
		                    return 0;
		                } else {
		                    return (a[c] < b[c]) ? -1 : 1;
		                }
		            }
		        );
		    } else {
		        arrTable.reverse();
		    }		    
		    cPrev = c;
		    arrTable.unshift(th);
		    for (ro=0; ro<rows; ro++) {
		        for (co=0; co<columns; co++) {
		            document.getElementById("table").rows[ro].cells[co].innerHTML = arrTable[ro][co];
		        }
		    }
		}
		
		function searchFunction() {
			var input, filter, table, tr, td, i, txtValue;
			input = document.getElementById("searchbar");
			filter = input.value.toUpperCase();
			table = document.getElementById("table");
			tr = table.getElementsByTagName("tr");
			for (i = 1; i < tr.length; i++) {
			td = tr[i];
			if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
			}
			}
			}
	
	
	//Product
	
	var table = document.getElementById("table");
	
		function openForm() {
			document.getElementById("productForm").style.display = "block";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
		}

		function closeForm() {
			document.getElementById("productForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		function uopenForm() {
			document.getElementById("updateForm").style.display = "block";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
			document.getElementById("upid").readOnly = true;
			document.getElementById("upname").readOnly = true;
			document.getElementById("ucid").readOnly = true;
			
			for(var i = 0; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                     //rIndex = this.rowIndex;
                     document.getElementById("upid").value = this.cells[0].innerHTML;
                     document.getElementById("upname").value = this.cells[1].innerHTML;
                     document.getElementById("upprice").value = this.cells[2].innerHTML;
                     document.getElementById("ucid").value = this.cells[3].innerHTML;
                };
            }
		}

		function ucloseForm() {
			document.getElementById("updateForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		//DELETE FORM
		function dopenForm(){
			document.getElementById("deleteForm").style.display = "grid";
			document.getElementById("navbar").style.filter = "blur(10px)";
			document.getElementById("dashboard").style.filter = "blur(10px)";
			document.getElementById("dpID").readOnly = true;
			for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                     document.getElementById("dpID").value = this.cells[0].innerHTML;
                };
            }
		}
		function dcloseForm(){
			document.getElementById("deleteForm").style.display = "none";
			document.getElementById("navbar").style.filter = "blur(0px)";
			document.getElementById("dashboard").style.filter = "blur(0px)";
		}
		
		/*
		A few requirements for configuring the table:
		1. The table must have id="sortable", i.e. <table id="sortable">
		2. The table needs to have a table header, and the table header must have
		   onclick="sortBy(n)", where n is the column number starting with 0
		   i.e. <th onclick="sortBy(0)">Title of First Column</th>
		*/

		cPrev = -1; // global var saves the previous c, used to
		            // determine if the same column is clicked again

		function sortBy(c) {
		    rows = document.getElementById("table").rows.length; // num of rows
		    columns = document.getElementById("table").rows[0].cells.length; // num of columns
		    arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array

		    for (ro=0; ro<rows; ro++) { // cycle through rows
		        for (co=0; co<columns; co++) { // cycle through columns
		            // assign the value in each row-column to a 2d array by row-column
		            arrTable[ro][co] = document.getElementById("table").rows[ro].cells[co].innerHTML;
		        }
		    }

		    th = arrTable.shift(); // remove the header row from the array, and save it
		    
		    if (c !== cPrev) { // different column is clicked, so sort by the new column
		        arrTable.sort(
		            function (a, b) {
		                if (a[c] === b[c]) {
		                    return 0;
		                } else {
		                    return (a[c] < b[c]) ? -1 : 1;
		                }
		            }
		        );
		    } else {
		        arrTable.reverse();
		    }
		    
		    cPrev = c;

		    arrTable.unshift(th);

		    // 
		    for (ro=0; ro<rows; ro++) {
		        for (co=0; co<columns; co++) {
		            document.getElementById("table").rows[ro].cells[co].innerHTML = arrTable[ro][co];
		        }
		    }
		}

		function searchFunction() {
			var input, filter, table, tr, td, i, txtValue;
			input = document.getElementById("searchbar");
			filter = input.value.toUpperCase();
			table = document.getElementById("table");
			tr = table.getElementsByTagName("tr");
			for (i = 1; i < tr.length; i++) {
			td = tr[i];
			if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
			}
			}
			}
		