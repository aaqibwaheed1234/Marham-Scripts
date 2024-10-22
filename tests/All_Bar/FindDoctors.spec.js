const {test} = require('@playwright/test')
const { FindDoctors } = require('../../pages/Find Doctors/AllSpecialist')
const { ConsultOnline } = require('../../pages/Find Doctors/ConsultOnline')
const { Hospitals } = require('../../pages/Find Doctors/Hospitals')
const { Surgeries } = require('../../pages/Find Doctors/Surgries')

test('Find Doctors', async({page})=>{
    const obj=new FindDoctors(page)
    await obj.Mygoto()
    await obj.AllSpecialistFun()
    await obj.AllDiseases()
    await obj.AllServices()
})

test('Consult Online', async({page})=>{
    const obj1=new ConsultOnline(page)
    await page.goto('https://www.marham.pk/')
    await obj1.AllDoctors()
    await obj1.AskDoctor()
    await obj1.HelpMe()
})

test('Hospitals', async({page})=>{
    const obj1=new Hospitals(page)
    await obj1.goTo()
    await obj1.LohoreHospitals()
    await obj1.KarachiHospitals()
})

test('Surgeries', async({page})=>{
    const obj=new Surgeries(page)
    await obj.goTo1()
    await obj.getSurgery()
})