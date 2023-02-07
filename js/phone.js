const loadPhones = (search) => {
  const url = ` https://openapi.programming-hero.com/api/phones?search=${search}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};

const displayPhones = (phones) => {
  // console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  phones.forEach((phone) => {
    // console.log(phone);
    const phonesDiv = document.createElement("div");
    phonesDiv.classList.add("col");
    phonesDiv.innerHTML = `
    <div class="card h-100">
    <img src="${phone.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h1>${phone.brand}</h1>
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">
        ${phone.slug}
      </p>
      <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success">Details</button>
    </div>
  </div>
    `;
    phonesContainer.appendChild(phonesDiv);
  });
};

const searchPhones = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadPhones(searchText);
  searchField.value = "";
};

const loadPhoneDetails = (slug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data.data));
};

const displayPhoneDetails = (phone) => {
  console.log(phone);
  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.textContent = "";
  const phonesDiv = document.createElement("div");
  phonesDiv.classList.add("card");
  phonesDiv.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="..." />
  <div class="card-body">
  <h1>${phone.brand}</h1>
  <h5 class="card-title">${phone.name}</h5>
  <p class="card-text">
    ${phone.slug}
  </p>
  <p>${phone.mainFeatures.storage}</p>
  <p>${phone.mainFeatures.displaySize}</p>
  <p>${phone.releaseDate}</p>
  </div>
  `;
  phoneDetails.appendChild(phonesDiv);
};

loadPhones("apple");
