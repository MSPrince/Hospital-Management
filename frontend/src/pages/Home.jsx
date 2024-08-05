import React from 'react'
import Hero from '../component/Hero'
import Biography from '../component/Biography'
import Departments from '../component/Departments'
import MessageForm from '../component/MessageForm'

function Home() {
  return (
    <>
      <Hero
        title={
          "Welcome to A Doctor's Diary Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
}

export default Home
