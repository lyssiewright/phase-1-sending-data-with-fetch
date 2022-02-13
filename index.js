// function submitdata(name, email){
//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//     },
//         body: JSON.stringify(name, email),
//     })
//     .then(response => response.json())
//     .then(object =>  {
//       console.log(object);
//     })
//     return fetch();}

//     submitdata('bill', 'bill@gmail.com'); 



      // method: "POST" is missing from the object below
       const formData = {
         name: "Byron",
         email: "bill@gmail.com",
       };
      function submitData(formData){
      fetch("http://localhost:3000/users", {
         method: 'POST',
         headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         },
         body: JSON.stringify(formData),
         })
         .then(function (response) {
           return response.json();
         })
         .then(function (object) {
          console.log(object);
        })
        .catch(function (error) {
          alert("Bad things!");
          console.log(error.message);
        });
     }

        

        submitData(formData)