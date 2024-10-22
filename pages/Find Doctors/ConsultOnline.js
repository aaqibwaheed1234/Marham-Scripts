import { time } from 'console'
import exp from 'constants'

const {test, expect} = require('@playwright/test')

export class ConsultOnline{
    constructor(page){
        this.page=page
        this.CO="//span[normalize-space()='Consult Online']"
        this.allDct="//a[normalize-space()='All Online Doctors']"
        this.askDct="//a[normalize-space()='Ask Doctor - Q/A']"
        this.helpMe="//a[normalize-space()='Help me Marham']"
    }

    async AllDoctors(){
        await this.page.click(this.CO)
        await this.page.click(this.allDct)
        await expect(this.page).toHaveURL('https://www.marham.pk/online-consultation')
    }

    async AskDoctor(){
        await this.page.click(this.CO)
        await this.page.click(this.askDct)
        await expect(this.page).toHaveURL('https://www.marham.pk/forum')
    }

    async HelpMe(){
        await this.page.click(this.CO)
        await this.page.click(this.helpMe)
        await expect(this.page).toHaveURL('https://www.marham.pk/help-me-marham')
    }
}