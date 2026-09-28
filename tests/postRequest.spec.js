import{test,expect} from '@playwright/test'
import { request } from 'node:http'

test('Post request to create user',async({request})=>{
   const resposne= await request.post('https://jsonplaceholder.typicode.com/users',{
    data:{
    name:'Jaya',
    email:'jayaTest@gmail.com'
   }
   })
   expect(resposne.status()).toBe(201)
   const body=await resposne.json()
   console.log(body)
})

test('Patch Request',async({request})=>{
 const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',{
    data:{
        email:'updatedmail@gmail.com'
    }
 })
 expect(response.status()).toBe(200)
 const body=await response.json()
 console.log(body)

})

test('Put request', async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/2',{
        data:{
            id: 1,
    name: 'Leanne Graham1',
    username: 'Bret2',
    email: 'Sincere@april.biz2',
    address: {
      street: 'Kulas Light2',
      suite: 'Apt. 556-2',
      city: 'Gwenborough2',
      zipcode: '92998-3874-2',
      geo: {
        "lat": '-37.3159-2',
        "lng": '81.1496-2'
      }
    },
    phone: '1-770-736-8031 x564422',
    website: 'hildegard.org2',
    company: {
      name: 'Romaguera-Crona2',
      catchPhrase: 'Multi-layered client-server neural-net2',
      bs: 'harness real-time e-markets2'
        }}
    })
     expect(response.status()).toBe(200)
    const body=await response.json()
 console.log(body)
})

test.only('Delete Request - Delete user', async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/users/2')
    expect(response.status()).toBe(200) /// or 204 for delete
})