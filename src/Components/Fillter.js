import React, { Fragment, useState } from 'react'
import { CategoryData } from './../Data/CategoryData';
import { Listbox, Transition } from '@headlessui/react'
import { CgSelect } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';

const YearData = [
  {title: 'Sort by Year'},
  {title: '1990 - 1995'},
  {title: '1996 - 2000'},
  {title: '2001 - 2005'},
  {title: '2006 - 2010'},
  {title: '2011 - 2015'},
  {title: '2016 - 2020'},
  {title: '2021 - 2025'},
]

const TimeData = [
  {title: 'Sort by Hours'},
  {title: '1 - 5 Hours'},
  {title: '5 - 10 Hours'},
  {title: '10 - 15 Hours'},
  {title: '15 - 20 Hours'},
  {title: '20 - 25 Hours'},
]

const RateingData = [
  {title: 'Sort by Rate'},
  {title: '1 star'},
  {title: '2 star'},
  {title: '3 star'},
  {title: '4 star'},
  {title: '5 star'},
]

function Fillter() {
  const [category, setCategory] = useState({title: 'Category'})
  const [year, setYear] = useState(YearData[0])
  const [time, setTime] = useState(TimeData[0])
  const [rate, setRate] = useState(RateingData[0])

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoryData,
    },
    {
      
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      
      value: time,
      onChange: setTime,
      items: TimeData,
    },
    {
      
      value: rate,
      onChange: setRate,
      items: RateingData,
    },
  ]

  return (
    <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
      {
        Filter.map((item, index) => (
          <Listbox key={index} value={item.value} onChange={item.onChange}>
            <div className='relative'>
              <Listbox.Button className='relative border border-gray-800 bg-main w-full text-white bg-main rounded-md cursor-default py-4 pl-6 pr-10 text-left text-xs'>
                <span className='block truncate'>{item.value.title}</span>
                <span className='absolute inset-y-0 ring-0 flex items-center pointer-events-none pr-2'>
                  <CgSelect className='h-5 w-5' aria-hidden='true'/>     
                </span>
              
              </Listbox.Button>
              <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                <Listbox.Options className='absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                  {
                    item.items.map((item, index) => (
                      <Listbox.Option 
                        key={index} 
                        className={({active}) => 
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-subMain text-white' : 'text-main'}`}
                        value={item}>
                        {
                          ({selected}) => (
                            <>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'} `}>{item.title}</span> 
                              {
                                selected ? (
                                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                    <FaCheck className='h-5 w-5' aria-hidden={true}/>
                                  </span>
                                ) : null
                              }
                            </>
                          )
                        }
                      </Listbox.Option>
                    ))
                  }
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        ))
      }
    </div>
  )
}

export default Fillter