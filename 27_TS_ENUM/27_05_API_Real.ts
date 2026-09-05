// 05-09-2026

enum HTTPMethod {
    Geto = "GET",
    posto = "POST",
    puto = "PUT",
    deleto = "DELETE"
}

function sendRequest(method : HTTPMethod, endpoint : string) : void {
    console.log(method + " " + endpoint + " -> 200 OK");
}

sendRequest(HTTPMethod.Geto, "/api/users"); // GET /api/users -> 200 OK
sendRequest(HTTPMethod.posto, "/api/users"); // POST /api/users -> 200 OK
sendRequest(HTTPMethod.deleto, "/api/users/1"); // DELETE /api/users/1 -> 200 OK