const videos = [
  {
    _id: "1230",
    img: "https://img.youtube.com/vi/Unzc731iCUY/mqdefault.jpg",
    avatarImg:
      "https://yt3.ggpht.com/ytc/AKedOLRbjuOeNMWaFQT0ACDvy78heZw1E124RPwrXFIW=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "How to Speak by Patrick Winston",
    channelName: "MITOpenCourseWare",
    categoryDisplay: "Personal Development",
    category: "personalDevelopment",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1231",
    img: "https://img.youtube.com/vi/0NbBjNiw4tk/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSXw8xzgPAinxvye1bcc9hbR8BOJIZAS7BKEP23Ag=s176-c-k-c0x00ffffff-no-rj",
    title: "The Universe In A Nutshell - Michio Kaku",
    channelName: "BigThink",
    categoryDisplay: "Science",
    category: "science",
    videoSrc: "https://www.youtube.com/embed/0NbBjNiw4tk",
},
{
    _id: "1232",
    img: "https://img.youtube.com/vi/AZX6awZq5Z0/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLTZb7bW1WI5lVLCPPwlvZ8zwwJuiMHudxsxANPaGg=s88-c-k-c0x00ffffff-no-rj",
    title: "Information, Evolution, and Intelligent Design",
    channelName: "The Royal Institution",
    categoryDisplay: "Others",
    category: "others",
    videoSrc: "https://www.youtube.com/embed/AZX6awZq5Z0",
},
{
    _id: "1233",
    img: "https://img.youtube.com/vi/1MNS21b6O_s/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQ0w8vZES6QGOxWU7GtyuKDh7TpTg0-ej60IiWu1Q=s176-c-k-c0x00ffffff-no-rj",
    title: "How to Write Online Workshop",
    channelName: "David Perell",
    categoryDisplay: "Writing",
    category: "writing",
    videoSrc: "https://www.youtube.com/embed/1MNS21b6O_s",
},
{
    _id: "1234",
    img: "https://img.youtube.com/vi/CeaoHzhYv94/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQwKe5u7rbLPKW9I5Gl5tMGVIP3qaiRPNzJkH03=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "Dr Fred Alan Wolf - God and the Quantum",
    channelName: "LP Memorial Lectures",
    categoryDisplay: "Science",
    category: "science",
    videoSrc: "https://www.youtube.com/embed/CeaoHzhYv94",
},
{
    _id: "1235",
    img: "https://img.youtube.com/vi/JJP-rkilz40/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQwKe5u7rbLPKW9I5Gl5tMGVIP3qaiRPNzJkH03=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "The Neuroscience of Language & Thought",
    channelName: "LP Memorial Lectures",
    categoryDisplay: "Writing",
    category: "writing",
    videoSrc: "https://www.youtube.com/embed/JJP-rkilz40",
},
{
    _id: "1236",
    img: "https://img.youtube.com/vi/EHtRbi3tQxc/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLR5k3y4nlIFTOMxNCkWT6gWZqSuVnoYkSZehC2c=s176-c-k-c0x00ffffff-no-rj",
    title: "Basics of Indian Cuisine - Ranveer Brar",
    channelName: "IIHM Hotel School",
    categoryDisplay: "Others",
    category: "others",
    videoSrc: "https://www.youtube.com/embed/EHtRbi3tQxc",
},
{
    _id: "1237",
    img: "https://img.youtube.com/vi/IlU-zDU6aQ0/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSe_kwHka7EA3Ib0M4bg9ZPAnNoO7RUgTQuGOXU=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "Study Less Study Smart",
    channelName: "PierceCollegeDist11",
    categoryDisplay: "Personal Development",
    category: "personalDevelopment",
    videoSrc: "https://www.youtube.com/embed/IlU-zDU6aQ0",
},
{
    _id: "1238",
    img: "https://img.youtube.com/vi/M6grSm7q1A8/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSNOjPl5tL6XnSZrpRph-8SAefSJDq2GN-VMdAT=s176-c-k-c0x00ffffff-no-rj",
    title: "Gary Halbert - Direct Marketing Secrets",
    channelName: "Educational Seminars",
    categoryDisplay: "Marketing",
    category: "marketing",
    videoSrc: "https://www.youtube.com/embed/M6grSm7q1A8",
},
{
    _id: "1239",
    img: "https://img.youtube.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
    title: "ReactJS Crash Course",
    channelName: "Traversy Media",
    categoryDisplay: "Programming",
    category: "programming",
    videoSrc: "https://www.youtube.com/embed/w7ejDZ8SWv8",
},
{
    _id: "1240",
    img: "https://img.youtube.com/vi/aWOFxyQI9D8/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQeKRpvQAaNAj0vMJwzf68iAQ8TLj4jdE9EdccZ0A=s88-c-k-c0x00ffffff-no-rj",
    title: "The Evolution of Cinema (1878 - 2017)",
    channelName: "Alex Day",
    categoryDisplay: "Others",
    category: "others",
    videoSrc: "https://www.youtube.com/embed/aWOFxyQI9D8",
},
{
    _id: "1241",
    img: "https://img.youtube.com/vi/km2Hd_xgo9Q/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQgYI5r3x0efenlOJ6LNCTcHs9TcLYzfoAmTFYnww=s176-c-k-c0x00ffffff-no-rj",
    title: "How to Negotiate Your Job Offer (HBS)",
    channelName: "Deepak Malhotra",
    categoryDisplay: "Personal Development",
    category: "personalDevelopment",
    videoSrc: "https://www.youtube.com/embed/km2Hd_xgo9Q",
},
];

export default videos;
