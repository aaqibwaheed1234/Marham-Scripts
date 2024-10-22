const {test, expect} = require('@playwright/test')
export
class FindDoctors{  
    constructor(page){
        this.page=page
        this.doct="//span[normalize-space()='Find Doctors']"

        this.allSpec="//a[normalize-space()='All Specialities']"
        this.allDis="//a[normalize-space()='All Diseases']"
        this.allSer="//a[normalize-space()='All Services']"
    }

    async Mygoto(){
        await this.page.goto("https://www.marham.pk/")
    }

    async AllSpecialistFun(){
        await this.page.click(this.doct)
        await this.page.click(this.allSpec)
        await this.page.waitForURL('https://www.marham.pk/doctors')
        await expect(this.page).toHaveURL('https://www.marham.pk/doctors')
    }

    async AllDiseases(){
        await this.page.click(this.doct)
        await this.page.click(this.allDis)
        await this.page.waitForURL('https://www.marham.pk/all-diseases')
        await expect(this.page).toHaveURL('https://www.marham.pk/all-diseases')
    }

    async AllServices(){
        await this.page.click(this.doct)
        await this.page.click(this.allSer)
        await this.page.waitForURL('https://www.marham.pk/all-services')
        await expect(this.page).toHaveURL('https://www.marham.pk/all-services')
    }
}