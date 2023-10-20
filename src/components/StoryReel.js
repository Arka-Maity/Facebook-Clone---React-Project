import React from 'react'
import "../styles/StoryReel.css"
import Story from './Story'
function StoryReel() {
    return (
        <div className='storyReel'>
       <Story profileSrc="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/e48dd692112e402fbbd29d6947799fac.jpeg"
       image=" https://images.herzindagi.info/image/2023/Jan/delhi-most-unsafe-for-women.jpg"  
       title="Haider Rafi" />

       <Story profileSrc="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/8eea2d66beae4f2e9849e4c4daaf1c20.jpeg"
       image=" https://miro.medium.com/v2/resize:fit:540/0*vUlSsz1sMQ38o5gd.jpg"
       title="Rohini p Chavan " />

       <Story profileSrc="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/9980a61abc0f4a7d8010a76148035148.jpeg"
       image=" https://pbs.twimg.com/profile_images/1700051019525488640/VRqy0bTE_400x400.jpg "
        title="Thilagavaty" />

       <Story profileSrc="https://rukminim2.flixcart.com/image/850/1000/j752nww0/poster/n/r/m/large-doraemon-cartton-character-hd-wallpaper-on-fine-art-paper-original-imaergs4j7cgc4hg.jpeg?q=90 "
       image="https://t4.ftcdn.net/jpg/02/86/51/73/240_F_286517396_X0AWrJ0uujHcxDuw331wGzsGyo0fSOpq.jpg "
       title="Vijay Mohite " />

       <Story profileSrc="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/b7783ce0bdb44920a3e529ca06289ea5.jpeg "
       image="https://oecd-development-matters.org/wp-content/uploads/2022/12/India-G20-Development-matters.jpg "
        title="Amit Mishra" />
    </div>
  )
}

export default StoryReel