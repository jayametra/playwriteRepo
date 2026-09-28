# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: postRequest.spec.js >> Patch Request
- Location: tests/postRequest.spec.js:16:6

# Error details

```
ReferenceError: body is not defined
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { request } from 'node:http'
  3  | 
  4  | test('Post request to create user',async({request})=>{
  5  |    const resposne= await request.post('https://jsonplaceholder.typicode.com/users',{
  6  |     data:{
  7  |     name:'Jaya',
  8  |     email:'jayaTest@gmail.com'
  9  |    }
  10 |    })
  11 |    expect(resposne.status()).toBe(201)
  12 |    const body=await resposne.json()
  13 |    console.log(body)
  14 | })
  15 | 
  16 | test.only('Patch Request',async({request})=>{
  17 |  const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',{
  18 |     data:{
  19 |         email:'updatedmail@gmail.com'
  20 |     }
  21 |  })
  22 |  expect(response.status()).toBe(200)
  23 |  const bosy=await response.json()
> 24 |  console.log(body)
     |              ^ ReferenceError: body is not defined
  25 | 
  26 | })
```