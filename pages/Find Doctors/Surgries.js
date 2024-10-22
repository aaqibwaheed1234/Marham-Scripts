const {test, expect} = require('@playwright/test')

export
class Surgeries{
    constructor(page){
        this.page=page
        this.surgeries="//a[normalize-space()='Surgeries']"
        this.selected="//a[normalize-space()='Specialized Medicated Facial']"
    }

    async goTo1(){
        await this.page.goto('https://www.marham.pk/')
    }

    async getSurgery(){
        await this.page.click(this.surgeries)
        await this.page.click(this.selected)
        await expect(this.page).toHaveURL('https://www.marham.pk/surgeries/specialized-medicated-facial')
    }
}