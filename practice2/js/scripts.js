 $("#loginBtn").click(function() {
            $("#loginModal").modal("show")
        });
//to show reserve Modal when btn is clicked
        $("#reserveBtn").click(function(){
            $("#reservationModal").modal("show")
        });
//to dismiss the login Modal when close button is clicked
        $("#loginClose").click(function(){
            $("#loginModal").modal("hide")
        });
//to dismiss the reserve Modal when close button is clicked
        $("#reserveClose").click(function(){
            $("#reservationModal").modal("hide")
        });