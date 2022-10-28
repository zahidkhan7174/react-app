import React from 'react'
import { blog01, blog02, blog03 } from './imports';
import blog4 from './fuel...jpg';
import blog6 from './blog6.jpg';
import Article from '../../components/article/Article';
import './blog.css'

const Blog1 = () =>(
    <><div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 7, 2022" text="How to adust your speed in accordance with different conditions? Here is your Answer." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 7, 2022" text="Here is how a Road Trip to a Scenic and Quiet Environment helps your Mental health" />
        <Article imgUrl={blog03} date="Sep 7, 2022" text="Combating traffic in Today's day and age... Avoidable or Inevitable?" />
       
      </div>
    </div>
    </div>
    <div className="gpt3__blog-container_groupB">
    <Article imgUrl={blog4} date="Sep 7, 2022" text="With the current fuel prices in mind, here are a number of tips on how you can improve your fuel average." />
    <Article imgUrl={blog03} date="Sep 7, 2022" text="The ever-increasing number of car purchases hints towards the further downfall of traffic controlling body..." />
   
  </div>
  <div className="gpt3__blog-container_group1">
    <Article imgUrl={blog6} date="Sep 7, 2022" text="The volatile Vehicle prices of Pakistan, will the Dollar rate's stability help control the surge of these Prices?" />
  </div>
    </>
)

export default Blog1