document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.getElementById("langagueContainer");
    const skillsContainerss = document.getElementById("qsdqsdqsd");
    const skillsContainerssa = document.getElementById("hahahaha");


    const skillsData = [
        { name: "Java", image: "../images/Java.png" },
        { name: "C", image: "../images/c.png" },
        { name: "PHP", image: "../images/php.png" },
        { name: "HTML", image: "../images/html.png" }, 
        { name: "CSS", image: "../images/css.png" },
        { name: "Javascript", image: "../images/js.png" },
    ];
    const skillsDatae = [
        { name: "Vue", image: "../images/vue.png" },
        { name: "Asp.net", image: "../images/dotnet.png" },
        { name: "Laravel", image: "../images/Laravel.png" },
        { name: "React", image: "../images/react.png" },
        { name: "Springboot", image: "../images/springboot.png" },
        { name: "Nodejs", image: "../images/node.png" },
        { name: "Angular", image: "../images/angular.png" },
    ];
    const skillsDataaae = [
        { name: "Mysql", image: "../images/Mysql.png" },
        { name: "Oracle", image: "../images/oracle.png" },
        { name: "MongoDb", image: "../images/mongodb.png" },
        { name: "PostgreSql", image: "../images/post.png" },
        { name: "Sqlserver", image: "../images/sqlserver.png" },

    
    ];

    skillsData.forEach(skill => {
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";

        const img = document.createElement("img");
        img.src = skill.image;
        img.alt = skill.name;

        const p = document.createElement("p");
        p.textContent = skill.name;

        circleDiv.appendChild(img);
        circleDiv.appendChild(p);

        skillsContainer.appendChild(circleDiv);
    });
    skillsDatae.forEach(skill => {
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";

        const img = document.createElement("img");
        img.src = skill.image;
        img.alt = skill.name;

        const p = document.createElement("p");
        p.textContent = skill.name;

        circleDiv.appendChild(img);
        circleDiv.appendChild(p);

        skillsContainerss.appendChild(circleDiv);
    });
    skillsDataaae.forEach(skill => {
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";

        const img = document.createElement("img");
        img.src = skill.image;
        img.alt = skill.name;

        const p = document.createElement("p");
        p.textContent = skill.name;

        circleDiv.appendChild(img);
        circleDiv.appendChild(p);

        skillsContainerssa.appendChild(circleDiv);
    });
});
