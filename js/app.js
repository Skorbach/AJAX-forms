$('#instagram-form').submit(function(event){
	event.preventDefault();

	var frm = $('#instagram-form')
	var username = frm.find('input[name="q"]')


	var error = false;
	console.log('Form Submitted');
	if(username.val() == ''){
		username.css('border-color','red')
		error = true;

	//return false;
	} 
	
	if (!error) {
		//do my ajax here
		$.ajax({
			url:frm.attr('action'),
			type:frm.attr('method'),
			data:frm.serialize(),
			dataType:'jsonp',
			success:function(data){
				$('#instagram-users').html('');
				for(var i=0;i<10;i++){
					var i_username = data.data[i].username;
					var i_profile_picture = data.data[i].profile_picture;
					var i_full_name = data.data[i].full_name;
					$('#instagram-users').append('<li><a href="https://instagram.com/' + i_username + '">' + i_full_name + '</a></li>');
				}
			},
			error:function(data){
				console.log(data);	
			}
		});
	}
})

$('#username').keyup(function(){
	$('#instagram-form').trigger('submit');
});