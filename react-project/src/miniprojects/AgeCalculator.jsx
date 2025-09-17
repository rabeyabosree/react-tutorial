import React, { useState } from 'react'

function AgeCalculator() {
    const [dob, setDob] = useState("")
    const [result, setResult] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    const calculateAge = ()=>{
        if(!dob) return
        const birthDate = new Date(dob)
        const today = new Date()


        let age = today.getFullYear() - birthDate.getFullYear()
        let month = today.getMonth() - birthDate.getMonth()
        let day = new Date()

        if(month < 0 || (month === 0 && day < 0)){
            age--;
            month = (month + 12) % 12
        }

        if(day < 0){
            const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
            day += daysInLastMonth;
            month--;
        }

        const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
        if(today > nextBirthday){
            nextBirthday.setFullYear(today.getFullYear() + 1)
            const daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24))

            const zodiac = getZodiacSign(birthDate.getDate(), birthDate.getMonth() + 1)

            setResult(`You are ${age} years old, ${month} months and ${day} days old. Your next birthday is in ${daysLeft} days`)

            const getZodiac = (day, month)=>{
                const zodies = ['capricon', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer']

                const lastDay = [19,18, 20,19, 20, 20, 22, 22, 21]
                return day > lastDay[month - 1]? zodies[month] : zodies[month - 1]

                const copyResult = ()=>{
                    
                }
            }
        }

    }
  return (
    <div>AgeCalculator</div>
  )
}

export default AgeCalculator