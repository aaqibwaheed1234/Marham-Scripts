import { time } from 'console'

const {test, expect} = require('@playwright/test')

export class Hospitals{
    constructor(page){
        this.page=page
        this.hospitals="//span[normalize-space()='Hospitals']"
        this.hosLhr="//a[normalize-space()='Hospitals in Lahore']"
        this.hosKra="//a[normalize-space()='Hospitals in Karachi']"
        this.hosIsl="//a[normalize-space()='Hospitals in Islamabad']"
        this.citywise="//a[normalize-space()='All Hospitals (City wise)']"
    }

    async goTo(){
        await this.page.goto('https://www.marham.pk/')
    }

    async LohoreHospitals(){
        await this.page.click(this.hospitals)
        await this.page.click(this.hosLhr)
    }

    async KarachiHospitals(){
        await this.page.click(this.hospitals)
        await this.page.click(this.hosKra)
    }
}