function submitform(){
    var email=document.getElementById("email1").value;
    var password=document.getElementById("password1").value;

    document.getElementById("userform").innerHTML=`<div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group list-group-item">email=${email}</li>
            <li class="list-group list-group-item">password=${password}</li>
        </ul>
        <button type="reset" class="btn btn-primary" onclick="resetform()">Reset</button>
    </div>`;
}
function resetform(){
    document.getElementById("userform").innerHTML=`<form>
    <div class="mb-3">
        <label for="email1" class="from-label">email</label>
        <input type="email"  class="form-control" id="email1"/>
    </div>
    <div class="mb-3">
        <label for="password1" class="from-label">password</label>
        <input type="password"  class="form-control" id="password1"/>
    </div>
    <button type="submit" class="btn btn-primary" onclick="submitform()">Submit</button>
</form>`;
}