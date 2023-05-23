import React from 'react'
import RowLeft from '../components/rows/RowLeft'
import RowRight from '../components/rows/RowRight'
import Divider from '../components/divider/Divider'

export default function AboutSection() {
  return (
    <>
    <RowLeft sectionHeading="About Me" sectionText="I am a passionate instructional designer who thrives on creating engaging and effective learning experiences. With a keen eye for detail, I analyze learning needs, design instructional materials, and evaluate outcomes to ensure optimal learning outcomes. Guided by my love for instructional design, I am dedicated to empowering learners by designing learner-centered instruction that inspires and equips them with the knowledge and skills they need to succeed." />
    <Divider />
    <RowRight sectionHeading="About Instructional Design" sectionText="Instructional design is the art of crafting impactful learning experiences through a systematic approach. It combines the science of learning with creative design principles to create engaging and effective instruction. I love instructional design because it allows me to blend my passion for education with my creative skills, enabling me to shape the way people learn and acquire new knowledge. It is immensely fulfilling to witness the transformative power of well-designed instruction as it empowers learners, sparks their curiosity, and helps them reach their full potential." />
    </>
  )
}
