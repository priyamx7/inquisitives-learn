const videos = [
  {
    _id: "1230",
    img: "https://img.youtube.com/vi/Unzc731iCUY/mqdefault.jpg",
    avatarImg:
      "https://yt3.ggpht.com/ytc/AKedOLRbjuOeNMWaFQT0ACDvy78heZw1E124RPwrXFIW=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "How to Speak by Patrick Winston",
    channelName: "MITOpenCourseWare",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1231",
    img: "https://img.youtube.com/vi/IlU-zDU6aQ0/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSe_kwHka7EA3Ib0M4bg9ZPAnNoO7RUgTQuGOXU=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "Study Less Study Smart",
    channelName: "PierceCollegeDist11",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1232",
    img: "https://img.youtube.com/vi/km2Hd_xgo9Q/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQgYI5r3x0efenlOJ6LNCTcHs9TcLYzfoAmTFYnww=s176-c-k-c0x00ffffff-no-rj",
    title: "How to Negotiate Your Job Offer (HBS)",
    channelName: "Deepak Malhotra",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1233",
    img: "https://img.youtube.com/vi/1MNS21b6O_s/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQ0w8vZES6QGOxWU7GtyuKDh7TpTg0-ej60IiWu1Q=s176-c-k-c0x00ffffff-no-rj",
    title: "How to Write Online Workshop",
    channelName: "David Perell",
    category: "Writing",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1234",
    img: "https://img.youtube.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
    title: "ReactJS Crash Course",
    channelName: "Traversy Media",
    category: "Programming",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1235",
    img: "https://img.youtube.com/vi/JJP-rkilz40/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQwKe5u7rbLPKW9I5Gl5tMGVIP3qaiRPNzJkH03=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "The Neuroscience of Language & Thought",
    channelName: "LP Memorial Lectures",
    category: "Writing",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1236",
    img: "https://img.youtube.com/vi/EHtRbi3tQxc/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLR5k3y4nlIFTOMxNCkWT6gWZqSuVnoYkSZehC2c=s176-c-k-c0x00ffffff-no-rj",
    title: "Basics of Indian Cuisine - Ranveer Brar",
    channelName: "IIHM Hotel School",
    category: "Cooking",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1237",
    img: "https://img.youtube.com/vi/0NbBjNiw4tk/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSXw8xzgPAinxvye1bcc9hbR8BOJIZAS7BKEP23Ag=s176-c-k-c0x00ffffff-no-rj",
    title: "The Universe In A Nutshell - Michio Kaku",
    channelName: "BigThink",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1238",
    img: "https://img.youtube.com/vi/M6grSm7q1A8/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLSNOjPl5tL6XnSZrpRph-8SAefSJDq2GN-VMdAT=s176-c-k-c0x00ffffff-no-rj",
    title: "Gary Halbert - Direct Marketing Secrets",
    channelName: "Educational Seminars",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1239",
    img: "https://img.youtube.com/vi/CeaoHzhYv94/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLQwKe5u7rbLPKW9I5Gl5tMGVIP3qaiRPNzJkH03=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "Dr Fred Alan Wolf - God and the Quantum",
    channelName: "LP Memorial Lectures",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1240",
    img: "https://img.youtube.com/vi/MGglyvc8d58/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLTfNjUk9b1J8ttvubf6gLdh_n4cnVSxNk5_giTr=s176-c-k-c0x00ffffff-no-rj",
    title: "The Psychology of Trading & Investing",
    channelName: "FinPort",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
},
{
    _id: "1241",
    img: "https://img.youtube.com/vi/AZX6awZq5Z0/mqdefault.jpg",
    avatarImg:
    "https://yt3.ggpht.com/ytc/AKedOLTZb7bW1WI5lVLCPPwlvZ8zwwJuiMHudxsxANPaGg=s88-c-k-c0x00ffffff-no-rj",
    title: "Information, Evolution, and Intelligent Design",
    channelName: "The Royal Institution",
    category: "Others",
    videoSrc: "https://www.youtube.com/embed/Unzc731iCUY",
  },
];

export default videos;
