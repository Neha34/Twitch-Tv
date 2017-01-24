/**
 * Created by Neha.
 */
var following=["freecodecamp","test_channel","ESL_SC2","automateallthethings", "beohoff", "dotamajor", "drunk_blahhhhhh", "habathcx", "joshog", "l3loodreign", "mightymouseufc125", "moltenink", "nightblue3", "noobs2ninjas", "rampageishuman", "robotcaleb", "rp_dev", "saaitv", "storbeck", "terakilobyte", "thomasballinger", "trumpsc", "tsm_dyrus", "valkrin", "yogscast"];
$(document).ready(function(){
    for(var i=0;i<following.length;i++){
        var url= 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '/?callback=?';

        $.getJSON(url).done(function(data3){
            var logo;
            var status;
            var name;

            if(data3.error){
                logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
                name = data3.message;
                status= data3.error;
                $("#followers").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
                    "<img src='" + logo + "'>"
                    +
                    "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" +status + "</div></div>");
            }
            if(data3.stream===null){
                $.getJSON(data3._links.channel,function(data5){
                    status = "OFFLINE";
                    logo= data5.logo;
                    name= data5.display_name;
                    if(logo===null){
                        logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
                    }
                    $("#followers").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
                        "<img src='" + logo + "'>"
                        +
                        "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");

                });

            }

        });
    }
    for(var i=0;i<following.length;i++){
        var onlineURL="https://wind-bow.gomix.me/twitch-api/streams/" + following[i] ;
        $.getJSON(onlineURL, function(data4){
            var logo= data4.stream.channel.logo;
            if(logo===null){
                logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
            }
            var status= data4.stream.channel.status;

            var name = data4.stream.channel.display_name;
            $("#followers").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
                "<img src='" + logo + "'>"
                +
                "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" +status + "</div></div>");

        });
    }

});
