import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKByMbFPNex6P5Ir9rzOJ37UCq4mg1u8aUfvbt3GGPXDhY5VwqzY1Wv0G&s=10",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2429/PNG/512/amazon_logo_icon_147320.png",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7VI2g6yBu-YGUefmNvtBElGh20vFUmFAiCnC-SKMrWVPlG2_Cit2M9M&s=10",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4AloWM1QQ87KXsWm-3IklQDW0CUbUrvkAbugvnqFaWVJnWN0YIq7ec&s=10",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    name: "IBM",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$36/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://img.magnific.com/free-vector/cloud-with-cyber-wires_78370-6678.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Salesforce",
    datePosted: "1 month ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://brandlogos.net/wp-content/uploads/2014/10/adobe-logo-2017.png",
    name: "Adobe",
    datePosted: "10 weeks ago",
    post: "JavaScript Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Mumbai, India"
  }
];




  return (
   <div className='parent'>
     {jobOpenings.map(function(elem){

      return <Card company={elem.name} brandLogo={elem.brandLogo} post={elem.post} datePosted={elem.datePosted} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2}/>
     })}
   </div>
  )
}

export default App