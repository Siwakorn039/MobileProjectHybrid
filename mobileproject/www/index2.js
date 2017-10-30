
   function deletepost(id) {
      alert('Delete This Post ?');
    
      //Delete from back end
      $.ajax({
        url: "http://localhost:3000/User/" + id, // post id
        type: "DELETE" // Use DELETE
      })
      alert('Delete Complete !');
      setTimeout(window.location.href = "index.html");
      //Delete from front end
      $("#post" + id).empty();
    
    }
    
    
    
    
    
    
    $(function(){
      var $Name = $('#name');
      var $photo = $('#photo');
      var $title = $('#title');
      var $cription = $('#cription');
      
      $('#postpin').click(function () {
        var url = "http://localhost:3000/User";
        var object = {
          Name : $Name.val(),
          photo: $photo.val(),
          title: $title.val(),
          cription: $cription.val()
        }
      $.ajax({
        url: url,
        type: "POST",
        data: object,
        success: function (data) {
      console.log('sucess');
        }
      });
    
      });
    
    
    });
    
    
    $(document).ready(function () {
        var $Name = $('#name');
        var $photo = $('#photo');
        var $title = $('#title');
        var $cription = $('#cription');
      
        var url = "http://localhost:3000/User"
        $.ajax({
          url: url,
          method: "GET",
          success: function (data, status, xhr) {
            console.log(data);
            var template = $('#template').html();
            for (var i = 0; i < data.length; i++) {
              var rendered = Mustache.render(template, data[i]);
              $("#User").append(rendered);
            }
          }
        })
      
      
      
      
        //create
        $("#postpin").click(function () {
          
       x
          console.log($("#name").val());
          $.post(url, {
            Name: $("#name").val(),
            photo: $("#photo").val(),
            title: $("#title").val(),
            cripton: $("#cripton").val(),
      
          });
          setTimeout(window.location.href = "index.html");
      
      
        });
        
      });
  
 