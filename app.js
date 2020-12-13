$(document).ready(function () {

    var apiKey = "	9fb7c86d51fe67f4594c16f6e2842caa46286";
    var myDB = "dmea1-6dde";
    var myCollection = "posts";

function retrievePosts() {
    console.log("start of posting");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://"+ myDB +".restdb.io/rest/" + myCollection +"",
        "method": "GET",
        "headers": {
        "content-type": "application/json",
        "x-apikey": apiKey,
        "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (data) {
        console.log("successfully log into db");
        console.log(data);

        var numPosts = data.length;
        console.log("number of posts" + numPosts);
        $("#num-posts").html(numPosts);
        //do a jquery loop of json objects based on their keys(indexes)

        $.each(data, function (key, value) {
            console.log(key + "value");
            console.log("date" + data[key].date);
            console.log("mood" + data[key].mood);
            console.log("weather" + data[key].weather);
            console.log("title" + data[key].title);
            console.log("msg" + data[key].msg);
            console.log("id" + data[key]._id);
            var posts = {
                date: data[key].date,
                mood: data[key].mood,
                weather: data[key].weather,
                title: data[key].title,
                id: data[key]._id
            }

            $("#all-posts").append(
                //`<tr data-row="${contactDocument.id}"><td>${contactDocument.id}</td><td>${contactDocument.name}</td><td>${contactDocument.title}</td><td>${contactDocument.qns}</td>
                //<td><a href="x" class="btn btn-danger delete" id="delete-${contactDocument.id}" data-id="${contactDocument.id}">Delete</a>
                //<button class="btn btn-info edit" id="edit-${contactDocument.id}" data-id="${contactDocument.id}">Edit</button></td></tr>
                //`
                `<ion-item id="each-posts">
                <div class="side-date" style="width=30%; word-wrap=break-word; float=left;" ><h3>${posts.date}</h3></div>
                <div class="side-icons" style="width=30%; float=left; text-align=center;"><h3>${posts.mood} ${posts.weather}</h3></div>
                <div class="side-title" style="width=70%; word-wrap=break-word; float=left;" ><h3>${posts.title}</h3></div>
                <div class="side-msg" style="width=70%; word-wrap=break-word; float=left;" ><h3>${posts.msg}</h3></div>
                 </ion-item>
                 `
            );
        }); //end each loop

    });

} //end
retrievePosts();

})