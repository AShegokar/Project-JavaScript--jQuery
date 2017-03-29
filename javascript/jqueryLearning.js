// Q1, 2
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#target").css("background-color", "red");
    });
    $("#btn2").click(function () {
        $("#target").html("<p>Hello World</p>");
    });
});
// Q3
$(document).ready(function () {
    $("#btn3").click(function () {
        $("#main").text("Hello Text has been changed ");
    });
});
// Q4, 5
$(document).ready(function () {
    $("#btn4").dblclick(function () {
        $("#target1").css("background-color","blue");
    });
    $("#btn5").click(function () {
        $("p").hide();
    });
});
// Q6
$(document).ready(function () {
    $("#btn6").click(function () {
        $("#content").hide();
    });
    $("#btn7").click(function () {
        $("#content").show();
    });
});
// Q7
$(document).ready(function () {
    $("#btn8").click(function () {
        alert($(".number").length);
    });
});
// Q8, 9, 10
$(document).ready(function () {
    $("#btn9").click(function () {
        $(".remove").remove();
    });
    $("#btn10").click(function () {
        $("tr:even").css("background-color", "silver");
        $("tr:odd").css("background-color", "orange");
    });
    $("#checkAll").click(function () {
        if (this.checked){
            $(".check").each(function () {
                this.checked = true;
            });
        }else {
            $(".check").each(function () {
                this.checked = false;
            });
        }
    });
});
// Q11
$(document).ready(function () {
    $("#btn11").click(function () {
        var str = "";
        $("#form select").each(function () {
            if ($(this).val() == ""){
              alert("Select this");
            }else {
                str += $(this).val();
            }
            $("#validate").html(str);
        });
    });
});
// Q12
$(document).ready(function () {
    $("#btn12").click(function () {
        $("p:even").css("color","red");
    });
});
// Q13.
$(document).ready(function () {
    $("#btn13").click(function () {
        $("#protek a").each(function () {
            if($(this).attr("href")== "http://www.pro-tekconsulting.com/"){
               alert("Pro-tek consulting is there.");
            }else{
                $("#btn14").attr("disabled", false);
            }
        });
    });
    $("#btn14").click(function () {
        $("#protek span").prepend("<a href= 'http://www.pro-tekconsulting.com/'>Pro-tek Consulting</a>");
    });
});
// Q14.
$(document).ready(function () {
    $("#btn15").click(function () {
        $("input[type]").each(function () {
            if($(this).val() == ""){
                $(this).next().removeClass("removeClass").addClass("addClass");
            }
            else{
                $(this).next().removeClass("addClass").addClass("removeClass");
            }
        });

        $("select").each(function () {
            if ($(this).val()== null){
                $(this).next().addClass("addClass").removeClass("removeClass");
            }else{
                $(this).next().removeClass("addClass").addClass("removeClass");
            }
        });
    });
});
// Q15.
$(document).ready(function () {
    $("#btn16").click(function () {
    $("#formDiv input[type]").each(function () {
        if ($(this).val()== ""){
            $(this).next().addClass("addClass").removeClass("removeClass");
        }else {
            $(this).next().removeClass("addClass").addClass("removeClass");
            $("#viewDiv").append($(this).val()+"<br>");
            $("#btn17").css("display","inline-block");
            $(this).val("");
        }
    });
        $("#formDiv select").each(function () {
            if ($(this).val()== null){
                $(this).next().addClass("addClass").removeClass("removeClass");
            }else{
                $(this).next().removeClass("addClass").addClass("removeClass");
                $("#viewDiv").append($(this).val()+"<br>");
                $("#btn17").css("display","inline-block");
                $(this).val("");
            }
        });
    });
});
// Q16
$(document).ready(function () {
    $("#btn18").click(function () {
        if($("#btn18").html() == "-"){
            $("#btn18").html("+");
            $("#collapse").html("Expand")
        }else{
            $("#btn18").html("-");
            $("#collapse").html("Collapse")
        }
        $("li").slideToggle();
    });
});
// Q17.
$(function () {
    $("#btn19").click(function () {
    var sum = 0;
    $("[id*=f]").each(function () {
        sum = sum + parseInt($(this).html());
        $("[id*=btn19]").html($(this).sum.toString());
    });
    });
});















