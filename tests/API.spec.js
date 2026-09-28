import{test,expect} from '@playwright/test'

test('getRequest-fetchUsers',async({request})=>{
const response=await request.get('https://jsonplaceholder.typicode.com/users/2')
expect(response.ok()).toBeTruthy()
const body=await response.json()
console.log(body)
})