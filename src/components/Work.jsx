import React from 'react'
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"

function Work() {
    const caseStudies=[
      {
        id:1,
        titile:"plant disease detection",
        description:"Developed a CNN model 87,000 RGB images to extract features from the leaf.Developed a model with the help of Machine learning models like RF(Random Forest) and svm(Support vector Machine).The features extracted from the CNN model are sent to Machine learning models.We are able to get better results for resNet-34 with svm .The results of the model are accuracy:0.9911 specificity:0.9984 F1score:0.9910",
        workImage:work1,
      },
      {
        id:2,
        titile:"Todo app",
        description:"In this web-page we can add our todos and after completion of the task we can strike the task,we can edit the task and also delete the task",
        workImage:work2,
      },
      {
        id:3,
        titile:"v-cube institue web-site",
        description:"Created a web site that contains login page,created a simple side navigation,implemented a new user section that contains a form that takes the new user info and image upload option and preview option,web pages are created dynamically and  also added yup validations to the form ",
        workImage:work3,
      },
    ]
  return (
    <div id='work' className='container mx-auto px-4 py-12'>
      <h3 className='text-yellow-500 font-semibold text-center uppercase mb-2 '>work</h3>
      <h2 className='text-4xl font-bold text-center mb-12'>My Case studies</h2>
      {caseStudies.map((study,index)=>(
        <div key={study.id} className={'flex flex-col lg:flex-row items-center justify-between mb-6 lg:mb-24 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}'}>
          <div className='w-full lg:w-1/3 p-4'>
            <img src={study.workImage} className='w-full h-full object-cover rounded-lg shadow-lg'/>
          </div>
          <div className='w-full lg:w-1/2 p-4'>
            <div className='flex items-center mb-4'>
              <span className='text-3xl font-bold text-yellow-500 mr-2'>{`0${index +1}`}</span>
              <h3 className='text-2xl font-semibold'>{study.titile}</h3>
            </div>
            <p className='text-gray-600 mb-4'>{study.description}</p>
            <button className='border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white'>Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work
