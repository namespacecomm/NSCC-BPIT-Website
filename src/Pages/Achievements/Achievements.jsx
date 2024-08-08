import React from 'react';
import AnimatedCard from '../../components/AnimatedCard/AnimatedCard';
import { achievements } from "../../constants/constants";

const Achievements = () => {
  return (
    <div className="bg-blue-1000 text-white min-h-screen p-8">
      
      <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl mt-16 items-center text-center">
        OUR ACHIEVERS
      </h2>

      <p className="max-w-2xl px-3 mx-auto my-10 text-center flex justify-center items-center text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
  At nameSpace, we take pride in the remarkable accomplishments of our members, who consistently push the boundaries of innovation and excellence. This section celebrates the dedication, hard work, and success of those who have made significant contributions both within our society and beyond. From pioneering projects to winning prestigious awards, our achievers exemplify the true spirit of nameSpace. Explore the milestones and achievements that define our journey and inspire future generations.
</p>

      
      <div className="flex flex-wrap justify-center">
        {achievements.map((event, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 p-4 flex justify-center"  
          >
            <div
              className={`w-full max-w-2xl ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              <AnimatedCard
                img={event.img}
                title={event.name}
                date={event.batch}
                description={event.achievements}
                imageAlignment={index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
