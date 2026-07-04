const mentors = [

{
name:"Rahul Sharma",
domain:"Web Development",
experience:"5 Years",
bio:"Full Stack Developer at Google.",
availability:"Weekends"
},

{
name:"Priya Singh",
domain:"Artificial Intelligence",
experience:"7 Years",
bio:"AI Engineer at Microsoft.",
availability:"Mon-Fri"
},

{
name:"Amit Verma",
domain:"Cyber Security",
experience:"6 Years",
bio:"Security Researcher.",
availability:"Friday"
}

];

const mentorContainer=document.getElementById("mentorContainer");
const mentorSelect=document.getElementById("mentorSelect");

function loadMentors(){

mentorContainer.innerHTML="";

mentorSelect.innerHTML="";

mentors.forEach((mentor)=>{

mentorContainer.innerHTML+=`

<div class="mentor-card">

<h3>${mentor.name}</h3>

<p><b>Domain:</b> ${mentor.domain}</p>

<p><b>Experience:</b> ${mentor.experience}</p>

<p>${mentor.bio}</p>

<p><b>Available:</b> ${mentor.availability}</p>

</div>

`;

mentorSelect.innerHTML+=`
<option value="${mentor.name}">
${mentor.name}
</option>
`;

});

document.getElementById("mentorCount").innerText=mentors.length;

}

loadMentors();

let bookings=JSON.parse(localStorage.getItem("bookings"))||[];

let posts=JSON.parse(localStorage.getItem("posts"))||[];

function updateDashboard(){

document.getElementById("bookingCount").innerText=bookings.length;

document.getElementById("postCount").innerText=posts.length;

const bookingList=document.getElementById("bookingList");

bookingList.innerHTML="";

bookings.forEach((b)=>{

bookingList.innerHTML+=`
<li>
${b.student} booked ${b.mentor} on ${b.date}
</li>
`;

});

const postDiv=document.getElementById("posts");

postDiv.innerHTML="";

posts.forEach((p)=>{

postDiv.innerHTML+=`

<div class="post">

<h4>${p.user}</h4>

<p>${p.message}</p>

</div>

`;

});

}

updateDashboard();

document.getElementById("bookingForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const booking={

student:studentName.value,

mentor:mentorSelect.value,

date:bookingDate.value

};

bookings.push(booking);

localStorage.setItem("bookings",JSON.stringify(bookings));

updateDashboard();

e.target.reset();

});

document.getElementById("forumForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const post={

user:username.value,

message:message.value

};

posts.unshift(post);

localStorage.setItem("posts",JSON.stringify(posts));

updateDashboard();

e.target.reset();

});