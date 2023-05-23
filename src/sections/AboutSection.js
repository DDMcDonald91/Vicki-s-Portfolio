import React from 'react'
import RowLeft from '../components/rows/RowLeft'
import RowRight from '../components/rows/RowRight'
import Divider from '../components/divider/Divider'

export default function AboutSection() {
  return (
    <>
    <RowLeft sectionHeading="About Me" sectionText="I am a passionate instructional designer who thrives on creating engaging and effective learning experiences. With a keen eye for detail, I analyze learning needs, design instructional materials, and evaluate outcomes to ensure optimal learning outcomes." />
    <Divider />
    <RowRight sectionHeading="About Instructional Design" sectionText="Instructional design is the art of crafting impactful learning experiences through a systematic approach. It combines the science of learning with creative design principles to create engaging and effective instruction." />
    </>
  )
}
