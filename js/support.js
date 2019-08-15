function popAlert(_txt, _stuff){
	_stuff= _stuff || {};

	_stuff.title= _stuff.title ||'';
	_stuff.closeButton= _stuff.closeButton ||'Закрыть';
	_stuff.confirmButton= _stuff.confirmButton ||'Подтвердить';

	document.getElementById('modalAlertIcon').className= _stuff.icon?
		("glyphicon glyphicon-" +_stuff.icon) :'';
	document.getElementById('modalAlertTitle').innerHTML=
		(_stuff.title+'').split("\n").join("<br>");
	document.getElementById('modalAlertMsg').innerHTML=
		(_txt+'').split("\n").join("<br>");

	document.getElementById('modalAlertCloseText').innerHTML=
		_stuff.closeButton;

	document.getElementById('modalAlertAcceptText').innerHTML=
		_stuff.confirmButton;


	var showConfirm= (typeof _stuff.confirmCB == 'function');
	document.getElementById('modalAlertAccept').style.display=
		showConfirm? '' : 'none';
	document.getElementById('modalAlertAccept').onclick=
		showConfirm? _stuff.confirmCB :null;

	$('#modalAlert').on('shown.bs.modal', (showConfirm && !_stuff.confirmSuppress)?
		function () {
		    $('#modalAlertAccept').focus();
	    }
	    :function () {
		    $('#modalAlertClose').focus();
		}
	);

    $("#modalAlert").modal('show');
}


function relaxURL($_url=''){
	if (!$_url)
		$_url = location.href;

	window.history.replaceState({}, '', $_url);
}
