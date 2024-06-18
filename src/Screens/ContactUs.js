import React from 'react'
import Layout from './../Layout/Layout';
import Head from '../Components/Head';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';

function ContactUs() {
  const ContactDatas = [
    {
      id: 1,
      title: 'Email Us',
      info: 'Send to Email',
      icon: FiMail,
      contact: 'senna2k20@gmail.com'
    },
    {
      id: 2,
      title: 'Call Us',
      info: 'Phone Number',
      icon: FiPhoneCall,
      contact: '+123 456 789'
    },
    {
      id: 3,
      title: 'Location',
      info: 'Đông Anh - Hà Nội',
      icon: FiMapPin,
      contact: '+123 456 789'
    },
  ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title='Contact Us'/>
        <div className='grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8'>
          {
            ContactDatas.map(item => (
              <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                <span className='flex-colo w-20 rounded-full bg-main text-subMain text-2xl'>
                  <item.icon />
                </span>
                <h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
                <p className='mb-0 text-sm text-text leading-7'>
                  <a href={`mailto:${item.contact}`} className='text-blue-600'>{item.contact}</a>
                </p>
                {item.info}
              </div>
            ))
          }

        </div>
      </div>
    </Layout>
  )
}

export default ContactUs