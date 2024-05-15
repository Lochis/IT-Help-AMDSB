/* for usage in Google Chrome Console to get all lines in JSON format


function parseHTMLTableElem( tableEl, expectingHeaderRow ) {
	var columns = Array.from( tableEl.querySelectorAll( 'th' ) ).map( it => it.textContent );
	var rows = Array.from( tableEl.querySelectorAll( 'tbody > tr' ) );
	// must check for table that has no th cells, but only if we are told to "expectingHeaderRow"
	if ( columns.length == 0 && expectingHeaderRow ) {
		// get columns for a non-th'd table
		columns = Array.from( tableEl.querySelectorAll( 'tbody > tr' )[ 0 ].children ).map( it => it.textContent )
		// must remove first row as it is the header
		rows.shift();
	}
	const returnJson = {
		'headers': columns,
		'rows': rows.map( row => {
			const cells = Array.from( row.querySelectorAll( 'td' ) )
			return columns.reduce( ( obj, col, idx ) => {
				obj[ col ] = cells[ idx ].innerHTML
				return obj
			}, {} )
		} )
	};
	// if we were expecting a header row with th cells lets see if we got it
	// if we got nothing lets try looking for a regular table row as the header
	if ( !expectingHeaderRow && returnJson.headers.length == 0 && ( returnJson.rows[ 0 ] && Object.keys( returnJson.rows[ 0 ] ).length === 0 ) ) {
		return parseHTMLTableElem( tableEl, true );
	}
	return returnJson;
}

JSON.stringify(parseHTMLTableElem(document.getElementById('applist'), true));*/

$(function () {
	$('[data-toggle="popover"]').popover()
  })

// to parse json data as table rows
fetch('./appData.json')
	.then((response) => response.json())
	.then((data) => createTables(data))
	.then(() => ($('#applist').DataTable( {
            "order": [[ 0, "asc" ]]
        } )));//console.log(data))
	//.then (createTables(data));

function createTables(data){
	
	var statusColor = "";
	let html = `<table id="applist" class="table table-responsive table-striped table-bordered" border="0" cellspacing="0">`;
	// create thead
	html +=`<thead>`;
	html +=`<tr>`;
	for(let i = 0; i< data.headers.length; i++){
		html+=`<th align="left" valign="top"><strong><font size="-1">${data.headers[i]}</font></strong></th>`;
	}
	html+=`</tr>`;
	html+=`</thead>`;

	//create all rows
	html+=`<tbody>`;
	for(let j=0; j < data.rows.length; j++){
		html+=`<tr>`;
		html+=`<td>${data.rows[j].Application}</td>`;
		//check what color, Green = #00FF40  Yellow = #F4FA58  Red =#FF0000
		if(data.rows[j].Status == "Green"){
			statusColor = "#00FF40";
		}else if (data.rows[j].Status == "Yellow"){
			statusColor = "#F4FA58";
		} else if (data.rows[j].Status == "Red"){
			statusColor = "#FF0000";
		}else if (data.rows[j].Status == "Blue"){
			statusColor = "#0390fc";
		}
		html+=`<td bgcolor=${statusColor}>${data.rows[j].Status}</td>`;
		html+=`<td>${data.rows[j]["Description and Cost"]}</td>`;
		html+=`<td>${data.rows[j]["VASP Educator Report"]}</td>`;
		html+=`</tr>`;
	}
	html+=`</tbody>`;
	html+=`</table>`;

	
	document.getElementById('put-table').innerHTML = html;
}