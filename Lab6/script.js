document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    fetch('https://randomuser.me/api/?results=4')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let people = data.results;
            let output = "";

            people.forEach(function(lists) {
                output += `
                     <div class= "card mt-4 bg-light">
                         <ul class="list-group">
                             <li class="list-group-item"><img src="${lists.picture.large}"></li>
                             <li class="list-group-item">Name: ${lists.name.first}</li>
                             <li class="list-group-item">City: ${lists.location.city}</li>
                             <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                              <li class="list-group-item">Phone: ${lists.phone}</li>
                         </ul>
                     </div>
                </div>  `;
            });
            document.getElementById('output').innerHTML = output;

        });

};