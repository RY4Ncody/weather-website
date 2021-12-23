
console.log('CLient side javascript is running')


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 =document.querySelector('#message_1')
const message2 =document.querySelector('#message_2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    message1.textContent='Loading...'
    message2.textContent='';
    const location=search.value;
    if(!location){
        message1.textContent='';
        message2.textContent='Please provide valid location'
    }else{
        fetch(`/weather?address=${location}`)
        .then(response=>{
            return response.json()
        }).then(responseData=>{
            if(responseData.error){
                message1.textContent='';
                message2.textContent=responseData.error
            }else{
                message1.textContent=responseData.location;
                message2.textContent=responseData.forecast;
            }
        });
    }
})